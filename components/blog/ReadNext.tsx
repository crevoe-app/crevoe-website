import { Article } from "@/lib/types/blog";
import ArticleCard from "./ArticleCard";

interface ReadNextProps {
  articles: Article[];
}

const ReadNext: React.FC<ReadNextProps> = ({ articles }) => {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Read Next</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadNext;
