import { Article, ArticleCategory } from "../types/blog";

// Predefined categories with consistent styling
export const BLOG_CATEGORIES: Record<string, ArticleCategory> = {
  STUDY_TIPS: {
    name: "Study Tips",
    slug: "study-tips",
    color: "green",
  },
  COMMUNITY: {
    name: "Community",
    slug: "community",
    color: "red",
  },
  PSYCHOLOGY: {
    name: "Psychology",
    slug: "psychology",
    color: "purple",
  },
  TECHNOLOGY: {
    name: "Technology",
    slug: "technology",
    color: "blue",
  },
  TIPS: {
    name: "Tips",
    slug: "tips",
    color: "orange",
  },
};

// Mock blog articles with realistic content
export const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    title: "The Science Behind Effective Online Learning",
    excerpt:
      "Discover the psychological principles that make online education more engaging and effective for students of all ages.",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "/avatars/sarah-chen.jpg",
    },
    publishedDate: "2024-12-15",
    readTime: 8,
    category: BLOG_CATEGORIES.PSYCHOLOGY,
    featuredImage: {
      url: "/blog/effective-learning.jpg",
      alt: "Student studying online with focused concentration",
    },
    slug: "science-behind-effective-online-learning",
    tags: ["learning", "psychology", "education", "research"],
  },
  {
    id: "2",
    title: "10 Study Techniques That Actually Work",
    excerpt:
      "Evidence-based study methods that can improve your retention and understanding, backed by cognitive science research.",
    author: {
      name: "Marcus Rodriguez",
      avatar: "/avatars/marcus-rodriguez.jpg",
    },
    publishedDate: "2024-12-12",
    readTime: 6,
    category: BLOG_CATEGORIES.STUDY_TIPS,
    featuredImage: {
      url: "/blog/study-techniques.jpg",
      alt: "Various study materials and techniques laid out on a desk",
    },
    slug: "10-study-techniques-that-work",
    tags: ["study", "techniques", "productivity", "learning"],
  },
  {
    id: "3",
    title: "Building Learning Communities That Thrive",
    excerpt:
      "How to create and nurture online learning communities that foster collaboration, support, and meaningful connections.",
    author: {
      name: "Emily Watson",
      avatar: "/avatars/emily-watson.jpg",
    },
    publishedDate: "2024-12-10",
    readTime: 7,
    category: BLOG_CATEGORIES.COMMUNITY,
    featuredImage: {
      url: "/blog/learning-communities.jpg",
      alt: "Group of diverse students collaborating online",
    },
    slug: "building-learning-communities-that-thrive",
    tags: ["community", "collaboration", "engagement", "social learning"],
  },
  {
    id: "4",
    title: "The Future of EdTech: AI and Personalized Learning",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing education through personalized learning experiences and adaptive content.",
    author: {
      name: "Alex Kim",
      avatar: "/avatars/alex-kim.jpg",
    },
    publishedDate: "2024-12-08",
    readTime: 9,
    category: BLOG_CATEGORIES.TECHNOLOGY,
    featuredImage: {
      url: "/blog/ai-personalized-learning.jpg",
      alt: "Futuristic interface showing AI-powered learning analytics",
    },
    slug: "future-of-edtech-ai-personalized-learning",
    tags: ["AI", "technology", "personalization", "future", "edtech"],
  },
  {
    id: "5",
    title: "Overcoming Online Learning Fatigue",
    excerpt:
      "Practical strategies to combat screen fatigue and maintain engagement during extended online learning sessions.",
    author: {
      name: "Dr. Michael Thompson",
      avatar: "/avatars/michael-thompson.jpg",
    },
    publishedDate: "2024-12-05",
    readTime: 5,
    category: BLOG_CATEGORIES.TIPS,
    featuredImage: {
      url: "/blog/learning-fatigue.jpg",
      alt: "Person taking a break from computer screen, stretching",
    },
    slug: "overcoming-online-learning-fatigue",
    tags: ["wellness", "productivity", "health", "balance"],
  },
  {
    id: "6",
    title: "The Psychology of Motivation in Digital Learning",
    excerpt:
      "Understanding what drives learners to succeed in online environments and how to maintain long-term motivation.",
    author: {
      name: "Dr. Lisa Park",
      avatar: "/avatars/lisa-park.jpg",
    },
    publishedDate: "2024-12-03",
    readTime: 10,
    category: BLOG_CATEGORIES.PSYCHOLOGY,
    featuredImage: {
      url: "/blog/motivation-psychology.jpg",
      alt: "Conceptual image of brain with motivation pathways highlighted",
    },
    slug: "psychology-of-motivation-digital-learning",
    tags: ["motivation", "psychology", "engagement", "behavior"],
  },
  {
    id: "7",
    title: "Creating Effective Study Schedules for Online Courses",
    excerpt:
      "Step-by-step guide to designing study schedules that work with your lifestyle and maximize learning outcomes.",
    author: {
      name: "Jennifer Adams",
      avatar: "/avatars/jennifer-adams.jpg",
    },
    publishedDate: "2024-11-30",
    readTime: 6,
    category: BLOG_CATEGORIES.STUDY_TIPS,
    featuredImage: {
      url: "/blog/study-schedules.jpg",
      alt: "Well-organized calendar and planner with study blocks",
    },
    slug: "creating-effective-study-schedules",
    tags: ["planning", "organization", "time management", "productivity"],
  },
  {
    id: "8",
    title: "How Technology is Transforming Skill Assessment",
    excerpt:
      "Innovative approaches to evaluating and validating skills in the digital age, from AI proctoring to project-based assessments.",
    author: {
      name: "Robert Chang",
      avatar: "/avatars/robert-chang.jpg",
    },
    publishedDate: "2024-11-28",
    readTime: 8,
    category: BLOG_CATEGORIES.TECHNOLOGY,
    featuredImage: {
      url: "/blog/skill-assessment.jpg",
      alt: "Digital assessment interface with various evaluation metrics",
    },
    slug: "technology-transforming-skill-assessment",
    tags: ["assessment", "evaluation", "skills", "innovation"],
  },
  {
    id: "9",
    title: "Building Peer Support Networks in Online Learning",
    excerpt:
      "Strategies for connecting with fellow learners and creating meaningful study partnerships in virtual environments.",
    author: {
      name: "Maria Gonzalez",
      avatar: "/avatars/maria-gonzalez.jpg",
    },
    publishedDate: "2024-11-25",
    readTime: 7,
    category: BLOG_CATEGORIES.COMMUNITY,
    featuredImage: {
      url: "/blog/peer-support.jpg",
      alt: "Virtual meeting with students supporting each other",
    },
    slug: "building-peer-support-networks",
    tags: ["peer learning", "support", "networking", "collaboration"],
  },
];

// Utility functions for article management and filtering

/**
 * Get all articles sorted by publication date (newest first)
 */
export function getAllArticles(): Article[] {
  return [...MOCK_ARTICLES].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

/**
 * Get articles by category
 */
export function getArticlesByCategory(categorySlug: string): Article[] {
  return MOCK_ARTICLES.filter(
    (article) => article.category.slug === categorySlug
  );
}

/**
 * Get article by slug
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return MOCK_ARTICLES.find((article) => article.slug === slug);
}

/**
 * Search articles by query (title, author, category, tags)
 */
export function searchArticles(query: string): Article[] {
  if (!query.trim()) {
    return getAllArticles();
  }

  const searchTerm = query.toLowerCase().trim();

  return MOCK_ARTICLES.filter((article) => {
    // Search in title
    if (article.title.toLowerCase().includes(searchTerm)) {
      return true;
    }

    // Search in author name
    if (article.author.name.toLowerCase().includes(searchTerm)) {
      return true;
    }

    // Search in category name
    if (article.category.name.toLowerCase().includes(searchTerm)) {
      return true;
    }

    // Search in tags
    if (article.tags?.some((tag) => tag.toLowerCase().includes(searchTerm))) {
      return true;
    }

    return false;
  }).sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

/**
 * Get featured articles (first 6 articles)
 */
export function getFeaturedArticles(): Article[] {
  return getAllArticles().slice(0, 6);
}

/**
 * Get articles by author
 */
export function getArticlesByAuthor(authorName: string): Article[] {
  return MOCK_ARTICLES.filter((article) =>
    article.author.name.toLowerCase().includes(authorName.toLowerCase())
  );
}

/**
 * Get unique categories from all articles
 */
export function getAllCategories(): ArticleCategory[] {
  return Object.values(BLOG_CATEGORIES);
}

/**
 * Get unique authors from all articles
 */
export function getAllAuthors(): string[] {
  const authors = MOCK_ARTICLES.map((article) => article.author.name);
  return [...new Set(authors)].sort();
}

/**
 * Format publication date for display
 */
export function formatPublicationDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Format read time for display
 */
export function formatReadTime(minutes: number): string {
  return `${minutes} min read`;
}
