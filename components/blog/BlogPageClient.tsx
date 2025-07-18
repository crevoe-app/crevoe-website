"use client";

import { useState, useCallback, useMemo } from "react";
import BlogHero from "./BlogHero";
import NoResultsMessage from "./NoResultsMessage";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "@/lib/data/blog-data";
import { searchArticlesEnhanced, getSearchSuggestions, getSearchCorrections } from "@/lib/utils/search";

export default function BlogPageClient() {
  const [searchQuery, setSearchQuery] = useState("");

  // Get all articles for search
  const allArticles = useMemo(() => getAllArticles(), []);

  // Memoized filtered articles based on search query using enhanced search
  const filteredArticles = useMemo(() => {
    return searchArticlesEnhanced(searchQuery, allArticles);
  }, [searchQuery, allArticles]);

  // Get search suggestions when no results found
  const searchSuggestions = useMemo(() => {
    if (searchQuery.trim() && filteredArticles.length === 0) {
      return getSearchSuggestions(searchQuery, allArticles);
    }
    return [];
  }, [searchQuery, filteredArticles.length, allArticles]);

  // Get search corrections for potential typos
  const searchCorrections = useMemo(() => {
    if (searchQuery.trim() && filteredArticles.length === 0) {
      return getSearchCorrections(searchQuery, allArticles);
    }
    return [];
  }, [searchQuery, filteredArticles.length, allArticles]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);

  const resultsCount = searchQuery.trim() ? filteredArticles.length : undefined;

  return (
    <>
      <BlogHero
        title="Creveo Blog"
        description="Insights, tips, and stories from the world of online learning and education technology"
        onSearch={handleSearch}
        onClear={handleClearSearch}
        searchQuery={searchQuery}
        resultsCount={resultsCount}
        suggestions={searchSuggestions}
      />

      {/* Featured Articles Section - Enhanced with search results */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {searchQuery.trim() ? "Search Results" : "Featured Articles"}
          </h2>

          {searchQuery.trim() && filteredArticles.length === 0 ? (
            // No results state with helpful messaging
            <NoResultsMessage
              searchQuery={searchQuery}
              onSearch={handleSearch}
              onClear={handleClearSearch}
              suggestions={[...searchCorrections, ...searchSuggestions]}
            />
          ) : (
            // Results or default state - Display articles in responsive grid
            <>
              {searchQuery.trim() && (
                <div className="mb-6">
                  <p className="text-gray-600 text-sm">
                    Found {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} matching `&quot;{searchQuery}`&quot;
                  </p>
                  <button
                    onClick={handleClearSearch}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-800 underline"
                  >
                    Clear search to see all articles
                  </button>
                </div>
              )}

              {/* Responsive Article Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    searchQuery={searchQuery}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}