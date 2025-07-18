"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article, CategoryColor } from "@/lib/types/blog";
import { HighlightedText } from "@/lib/utils/search";
import { formatPublicationDate, formatReadTime } from "@/lib/data/blog-data";

interface ArticleCardProps {
  article: Article;
  searchQuery?: string;
}

// Category color mapping for badges
const categoryColorClasses: Record<CategoryColor, string> = {
  green: "bg-green-100 text-green-800 border-green-200",
  red: "bg-red-100 text-red-800 border-red-200",
  purple: "bg-purple-100 text-purple-800 border-purple-200",
  blue: "bg-primary-100 text-primary-800 border-primary-200",
  orange: "bg-orange-100 text-orange-800 border-orange-200",
};

export default function ArticleCard({ article, searchQuery = "" }: ArticleCardProps) {
  const {
    title,
    excerpt,
    author,
    publishedDate,
    readTime,
    category,
    featuredImage,
    slug,
  } = article;

  const categoryColorClass = categoryColorClasses[category.color];

  return (
    <Link href={`/blog/${slug}`} passHref>
      <article className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 ease-in-out block">
        {/* Featured Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={featuredImage.url}
            alt={featuredImage.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${categoryColorClass}`}
            >
              {category.name}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Article Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
            <HighlightedText text={title} query={searchQuery} />
          </h3>

          {/* Article Excerpt */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            <HighlightedText text={excerpt} query={searchQuery} />
          </p>

          {/* Author and Metadata */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {/* Author Avatar */}
              {author.avatar ? (
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={author.avatar}
                    alt={`${author.name} avatar`}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 text-xs font-medium">
                    {author.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}

              {/* Author Name */}
              <span className="text-sm font-medium text-gray-700">
                <HighlightedText text={author.name} query={searchQuery} />
              </span>
            </div>

            {/* Read Time */}
            <span className="text-xs text-gray-500 font-medium">
              {formatReadTime(readTime)}
            </span>
          </div>

          {/* Publication Date and Read Article Button */}
          <div className="flex items-center justify-between">
            <time className="text-xs text-gray-500" dateTime={publishedDate}>
              {formatPublicationDate(publishedDate)}
            </time>

            {/* Read Article Button */}
            <div className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors duration-200 group/button">
              Read Article
              <svg
                className="ml-1 w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}