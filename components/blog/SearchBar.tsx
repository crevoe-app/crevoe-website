"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onClear?: () => void;
  placeholder?: string;
  resultsCount?: number;
  suggestions?: string[];
}

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  onClear,
  placeholder = "Search",
  resultsCount,
  suggestions = [],
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    } else if (e.key === "Escape") {
      handleClear();
    }
  };

  const handleClear = () => {
    onChange("");
    if (onClear) {
      onClear();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    onSubmit();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.form
        onSubmit={handleSubmit}
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div
          className={`relative flex items-center bg-white rounded-lg shadow-lg border-2 transition-all duration-200 ${isFocused ? "border-blue-500 shadow-xl" : "border-gray-200"
            }`}
        >
          <div className="flex items-center pl-4">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="flex-1 px-4 py-4 text-lg border-none outline-none placeholder-gray-400"
            aria-label="Search articles"
          />

          {/* Clear button */}
          {value.trim() && (
            <button
              type="button"
              onClick={handleClear}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Clear search"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}

          <button
            type="submit"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Submit search"
          >
            Search
          </button>
        </div>
      </motion.form>

      {/* Results counter and status */}
      {typeof resultsCount === "number" && value.trim() && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 text-center"
        >
          <p className="text-gray-600">
            {resultsCount === 0 ? (
              <span className="text-gray-500">
                No articles found for &ldquo;{value.trim()}&rdquo;
              </span>
            ) : (
              <>
                {resultsCount} article{resultsCount !== 1 ? "s" : ""} found
                {value.trim() && (
                  <span className="text-gray-500"> for &ldquo;{value.trim()}&rdquo;</span>
                )}
              </>
            )}
          </p>
        </motion.div>
      )}

      {/* Search suggestions when no results */}
      {typeof resultsCount === "number" && resultsCount === 0 && value.trim() && suggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-4 text-center"
        >
          <p className="text-sm text-gray-500 mb-2">Try searching for:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}