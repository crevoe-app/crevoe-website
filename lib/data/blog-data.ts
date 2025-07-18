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
    content: `
      <p>The digital age has transformed education, moving beyond traditional classrooms into the vast, accessible realm of online learning. But what makes online learning truly effective? The answer lies in a blend of cognitive psychology, pedagogical strategy, and technological innovation. This article explores the scientific principles that underpin successful online education, offering insights for both learners and educators.</p>

      <h2>The Psychology of Engagement</h2>
      <p>Engagement is the bedrock of learning. In an online setting, where face-to-face interaction is limited, fostering engagement requires a deliberate approach. Cognitive psychology provides a roadmap:</p>
      <ul>
        <li><strong>Active Recall:</strong> Instead of passively consuming content, learners should actively retrieve information from memory. Techniques like quizzes, flashcards, and self-explanation force the brain to work, strengthening neural pathways.</li>
        <li><strong>Spaced Repetition:</strong> This principle involves revisiting information at increasing intervals. It combats the forgetting curve, ensuring that knowledge is retained in long-term memory.</li>
        <li><strong>Interleaving:</strong> Mixing different but related topics during a study session can improve problem-solving skills and long-term retention. It forces the brain to differentiate between concepts and apply them flexibly.</li>
      </ul>

      <h2>Designing for the Digital Brain</h2>
      <p>The online environment presents unique challenges and opportunities. Effective instructional design considers how the human brain processes information in a digital context:</p>
      <ul>
        <li><strong>Multimedia Principle:</strong> Combining words and relevant visuals is more effective than using words alone. Graphics, videos, and interactive diagrams can clarify complex concepts and make learning more memorable.</li>
        <li><strong>Coherence Principle:</strong> Extraneous material, no matter how interesting, can distract from the core learning objectives. A clean, focused design minimizes cognitive load and helps learners concentrate on what matters.</li>
        <li><strong>Personalization Principle:</strong> Using a conversational, informal tone can make online content more engaging. When learners feel a social connection with the material, they are more motivated to learn.</li>
      </ul>

      <h2>The Role of Community and Feedback</h2>
      <p>Learning is a social process. Even in an online setting, a sense of community is vital. Discussion forums, collaborative projects, and peer reviews can foster a supportive environment where learners feel connected and motivated. Timely, constructive feedback is equally important. It provides learners with the guidance they need to improve and reinforces their sense of progress.</p>

      <h2>Conclusion</h2>
      <p>Effective online learning is not simply about digitizing traditional teaching methods. It's about understanding the science of how we learn and designing experiences that are engaging, efficient, and empowering. By embracing these evidence-based principles, we can unlock the full potential of online education and create a future where learning knows no bounds.</p>
    `,
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
    content: `
      <p>In the quest for academic and personal growth, we often hear about the importance of studying, but not all study methods are created equal. This article delves into ten evidence-based study techniques that are proven to enhance memory, comprehension, and critical thinking. By integrating these methods into your routine, you can study smarter, not just harder.</p>

      <h2>1. The Feynman Technique</h2>
      <p>Named after the Nobel Prize-winning physicist Richard Feynman, this technique involves explaining a concept in simple terms as if you were teaching it to someone else. This process quickly reveals gaps in your understanding and forces you to clarify your thoughts.</p>

      <h2>2. Spaced Repetition</h2>
      <p>As mentioned in our article on effective online learning, spaced repetition is a powerful tool for memory retention. By reviewing information at increasing intervals, you signal to your brain that this knowledge is important and should be stored in long-term memory.</p>

      <h2>3. Active Recall</h2>
      <p>Instead of passively rereading your notes, actively test yourself. This could involve flashcards, practice questions, or simply trying to recall information from memory. The effort of retrieval strengthens neural connections.</p>

      <h2>4. Pomodoro Technique</h2>
      <p>This time management method involves breaking your study sessions into focused 25-minute intervals, separated by short breaks. It helps maintain concentration, prevents burnout, and improves productivity.</p>

      <h2>5. SQ3R Method</h2>
      <p>SQ3R stands for Survey, Question, Read, Recite, and Review. It's a comprehensive reading strategy that improves comprehension and retention. By surveying the material first and formulating questions, you create a mental framework that makes the information more meaningful.</p>

      <h2>6. Mind Mapping</h2>
      <p>Mind mapping is a visual way to organize information. By creating a diagram with a central concept and branching ideas, you can see the relationships between different pieces of information and improve your understanding of the big picture.</p>

      <h2>7. Interleaving</h2>
      <p>Instead of blocking your study time by subject, mix them up. Interleaving different but related topics can improve your ability to discriminate between concepts and apply them in different contexts.</p>

      <h2>8. Self-Explanation</h2>
      <p>As you learn, constantly ask yourself questions like "Why is this true?" or "How does this relate to what I already know?" This process of self-explanation promotes a deeper understanding of the material.</p>

      <h2>9. Dual Coding</h2>
      <p>Combine verbal and visual information to enhance learning. For example, create diagrams to accompany your notes or watch videos that illustrate the concepts you're studying. This dual approach provides two ways to remember the information.</p>

      <h2>10. Get Enough Sleep</h2>
      <p>This might not seem like a study technique, but sleep is crucial for memory consolidation. During sleep, your brain processes and stores the information you've learned, so make sure you're getting enough rest.</p>

      <h2>Conclusion</h2>
      <p>By incorporating these ten study techniques into your learning routine, you can make your study sessions more effective and achieve your academic goals with greater confidence. Experiment with different methods to find what works best for you, and remember that consistency is key.</p>
    `,
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
    content: "How to create and nurture online learning communities that foster collaboration, support, and meaningful connections.",
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
    content: "Exploring how artificial intelligence is revolutionizing education through personalized learning experiences and adaptive content.",
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
    content: "Practical strategies to combat screen fatigue and maintain engagement during extended online learning sessions.",
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
    content: "Understanding what drives learners to succeed in online environments and how to maintain long-term motivation.",
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
    content: "Step-by-step guide to designing study schedules that work with your lifestyle and maximize learning outcomes.",
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
    content: "Innovative approaches to evaluating and validating skills in the digital age, from AI proctoring to project-based assessments.",
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
    content: "Strategies for connecting with fellow learners and creating meaningful study partnerships in virtual environments.",
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
 * Get the latest articles, sorted by publication date.
 * @param count The number of articles to return.
 */
export function getLatestArticles(count: number): Article[] {
  return getAllArticles().slice(0, count);
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
