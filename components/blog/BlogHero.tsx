"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

interface BlogHeroProps {
  title: string;
  description: string;
  onSearch: (query: string) => void;
  onClear?: () => void;
  searchQuery: string;
  resultsCount?: number;
  suggestions?: string[];
}

export default function BlogHero({
  title,
  description,
  onSearch,
  onClear,
  searchQuery,
  resultsCount,
  suggestions,
}: BlogHeroProps) {
  const [localQuery, setLocalQuery] = useState(searchQuery);

  // Debounced search implementation
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (localQuery !== searchQuery) {
        onSearch(localQuery);
      }
    }, 300); // 300ms debounce delay

    return () => clearTimeout(timeoutId);
  }, [localQuery, onSearch, searchQuery]);

  // Sync local query with prop changes
  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  const handleSearchChange = useCallback((value: string) => {
    setLocalQuery(value);
  }, []);

  const handleSearchSubmit = useCallback(() => {
    onSearch(localQuery);
  }, [localQuery, onSearch]);

  const handleSearchClear = useCallback(() => {
    setLocalQuery("");
    if (onClear) {
      onClear();
    }
  }, [onClear]);

  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
        >
          {description}
        </motion.p>

        {/* Search Bar */}
        <SearchBar
          value={localQuery}
          onChange={handleSearchChange}
          onSubmit={handleSearchSubmit}
          onClear={handleSearchClear}
          placeholder="Search articles, authors, or topics..."
          resultsCount={resultsCount}
          suggestions={suggestions}
        />
      </div>
    </section>
  );
}