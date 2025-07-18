"use client";

import { motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface NoResultsMessageProps {
  searchQuery: string;
  onSearch: (query: string) => void;
  onClear: () => void;
  suggestions?: string[];
}

export default function NoResultsMessage({
  searchQuery,
  onSearch,
  onClear,
  suggestions = [],
}: NoResultsMessageProps) {
  const popularTopics = ["Study Tips", "Psychology", "Technology", "Community", "Learning"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12"
    >
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-gray-400" />
        </div>

        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No articles found
        </h3>

        <p className="text-gray-600 mb-6">
          We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo;. Try adjusting your search terms or browse our popular topics.
        </p>

        {/* Search suggestions if available */}
        {suggestions.length > 0 && (
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-3">Did you mean:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => onSearch(suggestion)}
                  className="px-3 py-1 text-sm bg-yellow-50 text-yellow-800 rounded-full hover:bg-yellow-100 transition-colors duration-200 border border-yellow-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Popular topics */}
        <div className="space-y-3">
          <p className="text-sm text-gray-500">Popular topics:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => onSearch(topic)}
                className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors duration-200"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Clear search button */}
        <div className="mt-6">
          <button
            onClick={onClear}
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Clear search to see all articles
          </button>
        </div>
      </div>
    </motion.div>
  );
}