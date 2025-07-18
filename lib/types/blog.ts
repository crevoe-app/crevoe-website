export interface ArticleCategory {
  name: string;
  slug: string;
  color: CategoryColor;
}

export type CategoryColor = "green" | "red" | "purple" | "blue" | "orange";

export interface Author {
  name: string;
  avatar?: string;
}

export interface FeaturedImage {
  url: string;
  alt: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: Author;
  publishedDate: string;
  readTime: number; // in minutes
  category: ArticleCategory;
  featuredImage: FeaturedImage;
  slug: string;
  tags?: string[];
  content: string;
}

export interface SearchState {
  query: string;
  filteredArticles: Article[];
  isSearching: boolean;
  resultsCount: number;
}
