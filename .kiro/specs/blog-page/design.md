# Blog Page Design Document

## Overview

The blog page design implements a modern, responsive layout featuring a hero section with integrated search functionality and a featured articles grid. The design follows the existing Creveo design system while introducing blog-specific components that prioritize content discovery and readability.

## Architecture

### Component Hierarchy

```
BlogPage
├── BlogHero
│   ├── SearchBar
│   └── SearchResults
├── FeaturedArticles
│   ├── ArticleCard[]
│   └── NoResultsMessage
├── HowItWorksCTA (existing)
├── LatestArticles
│   └── ArticleCard[]
└── BlogLayout
    ├── Header (existing)
    └── Footer (existing)
```

### Route Structure

- `/blog` - Main blog page with hero and featured articles
- `/blog/[slug]` - Individual article pages (future implementation)
- Navigation integration with existing header component

## Components and Interfaces

### BlogPage Component

**Purpose:** Main page container that orchestrates the blog layout
**Props:** None (server-side data fetching)
**State Management:**

- Search query state
- Filtered articles state
- Loading states

### BlogHero Component

**Purpose:** Hero section with title, subtitle, and search functionality
**Props:**

```typescript
interface BlogHeroProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  resultsCount?: number;
}
```

### SearchBar Component

**Purpose:** Real-time search input with filtering capabilities
**Props:**

```typescript
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  resultsCount?: number;
}
```

### FeaturedArticles Component

**Purpose:** Grid layout container for article cards
**Props:**

```typescript
interface FeaturedArticlesProps {
  articles: Article[];
  isSearchActive: boolean;
  searchQuery: string;
}
```

### ArticleCard Component

**Purpose:** Individual article preview with metadata
**Props:**

```typescript
interface ArticleCardProps {
  article: Article;
  searchQuery?: string; // For highlighting
}
```

### LatestArticles Component

**Purpose:** Display the 3 most recent articles after the how-it-works section
**Props:**

```typescript
interface LatestArticlesProps {
  articles: Article[]; // Limited to 3 most recent articles
}
```

## Data Models

### Article Interface

```typescript
interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedDate: string;
  readTime: number; // in minutes
  category: ArticleCategory;
  featuredImage: {
    url: string;
    alt: string;
  };
  slug: string;
  tags?: string[];
}

interface ArticleCategory {
  name: string;
  slug: string;
  color: CategoryColor;
}

type CategoryColor = "green" | "red" | "purple" | "blue" | "orange";
```

### Search State Management

```typescript
interface SearchState {
  query: string;
  filteredArticles: Article[];
  isSearching: boolean;
  resultsCount: number;
}
```

## Design System Integration

### Color Palette

- **Primary Blue:** `#2563eb` (search button, links)
- **Category Colors:**
  - Study Tips: `#10b981` (green)
  - Community: `#ef4444` (red)
  - Psychology: `#8b5cf6` (purple)
  - Technology: `#3b82f6` (blue)
  - Tips: `#f59e0b` (orange)

### Typography

- **Hero Title:** `text-4xl md:text-5xl font-bold text-gray-900`
- **Hero Subtitle:** `text-lg md:text-xl text-gray-600`
- **Article Titles:** `text-xl font-semibold text-gray-900`
- **Article Excerpts:** `text-gray-600 text-sm leading-relaxed`
- **Metadata:** `text-xs text-gray-500`

### Spacing and Layout

- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Grid:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`
- **Card Padding:** `p-6`
- **Section Spacing:** `py-12 lg:py-16`

## Search Functionality Design

### Real-time Filtering Algorithm

1. **Input Debouncing:** 300ms delay to prevent excessive filtering
2. **Multi-field Search:** Title, author name, category, and tags
3. **Case-insensitive Matching:** Convert all text to lowercase for comparison
4. **Partial Matching:** Use `includes()` for flexible search results

### Search Highlighting

```typescript
const highlightText = (text: string, query: string): JSX.Element => {
  if (!query) return <>{text}</>;

  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={index} className="bg-yellow-200 px-1 rounded">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
};
```

### Search States

- **Empty State:** Show all articles
- **Searching State:** Show filtered results with count
- **No Results:** Display helpful message with search tips
- **Results Found:** Show count and highlighted matches

## Responsive Design Strategy

### Breakpoint Implementation

- **Mobile (< 768px):** Single column, stacked search, larger touch targets
- **Tablet (768px - 1024px):** Two-column grid, horizontal search bar
- **Desktop (> 1024px):** Three-column grid, full-width hero

### Mobile-First Approach

```css
/* Base mobile styles */
.article-grid {
  @apply grid grid-cols-1 gap-4;
}

/* Tablet styles */
@media (min-width: 768px) {
  .article-grid {
    @apply grid-cols-2 gap-6;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .article-grid {
    @apply grid-cols-3 gap-8;
  }
}
```

## Performance Optimizations

### Image Optimization

- Use Next.js `Image` component with `priority` for hero images
- Implement lazy loading for article card images
- Responsive image sizing with `sizes` attribute
- WebP format with fallbacks

### Search Performance

- Debounced search input (300ms)
- Memoized filter function using `useMemo`
- Virtual scrolling for large article lists (future enhancement)

### Code Splitting

- Lazy load individual article pages
- Separate bundle for search functionality
- Dynamic imports for non-critical components

## Error Handling

### Search Error States

- Network failures during article fetching
- Invalid search queries
- Empty search results with helpful suggestions

### Image Loading Errors

- Fallback placeholder images
- Graceful degradation for missing images
- Alt text for accessibility

### Navigation Errors

- 404 handling for invalid article slugs
- Breadcrumb navigation for user orientation
- Back button functionality

## Testing Strategy

### Unit Testing

- Search filtering logic
- Text highlighting functionality
- Article card rendering
- Responsive breakpoint behavior

### Integration Testing

- Search flow from input to results
- Navigation between blog and article pages
- Mobile touch interactions
- Keyboard navigation

### Performance Testing

- Page load times across devices
- Search response times
- Image loading optimization
- Bundle size analysis

## Accessibility Considerations

### Keyboard Navigation

- Tab order through search and article cards
- Enter key support for search submission
- Arrow key navigation for article grid

### Screen Reader Support

- Semantic HTML structure (`main`, `section`, `article`)
- ARIA labels for search functionality
- Alt text for all images
- Proper heading hierarchy

### Visual Accessibility

- High contrast ratios for text
- Focus indicators for interactive elements
- Scalable text and touch targets
- Color-blind friendly category colors

## Future Enhancements

### Phase 2 Features

- Article pagination or infinite scroll
- Advanced filtering (by category, date, author)
- Related articles suggestions
- Social sharing functionality

### Phase 3 Features

- Full-text search with backend integration
- User bookmarking and favorites
- Comment system integration
- Newsletter signup integration
