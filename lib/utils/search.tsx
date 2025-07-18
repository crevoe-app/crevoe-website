import React from "react";
import { Article } from "../types/blog";

/**
 * Highlights matching text in a string with HTML mark tags
 */
export function highlightText(text: string, query: string): string {
  if (!query.trim()) return text;

  const searchTerm = query.trim();
  const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, "gi");

  return text.replace(
    regex,
    '<mark class="bg-yellow-200 px-1 rounded">$1</mark>'
  );
}

/**
 * React component version of text highlighting
 */
export function HighlightedText({
  text,
  query,
  className = "",
}: {
  text: string;
  query: string;
  className?: string;
}) {
  if (!query.trim()) {
    return <span className={className}>{text}</span>;
  }

  const searchTerm = query.trim();
  const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, "gi");
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        const isMatch = part.toLowerCase() === searchTerm.toLowerCase();
        return isMatch ? (
          <mark key={index} className="bg-yellow-200 px-1 rounded font-medium">
            {part}
          </mark>
        ) : (
          part
        );
      })}
    </span>
  );
}

/**
 * Escapes special regex characters in search query
 */
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Enhanced search function with better matching and scoring
 */
export function searchArticlesEnhanced(
  query: string,
  articles: Article[]
): Article[] {
  if (!query.trim()) {
    return articles.sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime()
    );
  }

  const searchTerm = query.toLowerCase().trim();
  const searchWords = searchTerm.split(/\s+/).filter((word) => word.length > 0);

  // Score articles based on relevance
  const scoredArticles = articles.map((article) => {
    let score = 0;
    const titleLower = article.title.toLowerCase();
    const authorLower = article.author.name.toLowerCase();
    const categoryLower = article.category.name.toLowerCase();
    const excerptLower = article.excerpt.toLowerCase();
    const tagsLower = article.tags?.map((tag) => tag.toLowerCase()) || [];

    searchWords.forEach((word) => {
      // Title matches get highest score
      if (titleLower.includes(word)) {
        score += titleLower.startsWith(word) ? 10 : 5;
      }

      // Author matches
      if (authorLower.includes(word)) {
        score += authorLower.startsWith(word) ? 8 : 4;
      }

      // Category matches
      if (categoryLower.includes(word)) {
        score += categoryLower === word ? 6 : 3;
      }

      // Tag matches
      tagsLower.forEach((tag) => {
        if (tag.includes(word)) {
          score += tag === word ? 4 : 2;
        }
      });

      // Excerpt matches (lower priority)
      if (excerptLower.includes(word)) {
        score += 1;
      }
    });

    return { article, score };
  });

  // Filter articles with score > 0 and sort by score, then by date
  return scoredArticles
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      if (a.score !== b.score) {
        return b.score - a.score; // Higher score first
      }
      // Same score, sort by date
      return (
        new Date(b.article.publishedDate).getTime() -
        new Date(a.article.publishedDate).getTime()
      );
    })
    .map(({ article }) => article);
}

/**
 * Get search suggestions when no results are found
 */
export function getSearchSuggestions(
  query: string,
  articles: Article[]
): string[] {
  const suggestions: string[] = [];

  // Get popular categories
  const categories = [...new Set(articles.map((a) => a.category.name))];
  suggestions.push(...categories.slice(0, 3));

  // Get popular authors
  const authors = [...new Set(articles.map((a) => a.author.name))];
  suggestions.push(...authors.slice(0, 2));

  // Get popular tags
  const allTags = articles.flatMap((a) => a.tags || []);
  const tagCounts = allTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const popularTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([tag]) => tag);

  suggestions.push(...popularTags);

  return [...new Set(suggestions)].slice(0, 5);
}

/**
 * Check if search query has potential typos and suggest corrections
 */
export function getSearchCorrections(
  query: string,
  articles: Article[]
): string[] {
  const corrections: string[] = [];
  const searchTerm = query.toLowerCase().trim();

  // Simple typo detection for common terms
  const commonTerms = [
    ...articles.map((a) => a.category.name.toLowerCase()),
    ...articles.flatMap((a) => a.tags?.map((tag) => tag.toLowerCase()) || []),
    "learning",
    "education",
    "study",
    "online",
    "tips",
    "psychology",
  ];

  const uniqueTerms = [...new Set(commonTerms)];

  // Find similar terms (simple Levenshtein distance approximation)
  uniqueTerms.forEach((term) => {
    if (term.includes(searchTerm) || searchTerm.includes(term)) {
      if (
        term !== searchTerm &&
        Math.abs(term.length - searchTerm.length) <= 2
      ) {
        corrections.push(term);
      }
    }
  });

  return corrections.slice(0, 3);
}
