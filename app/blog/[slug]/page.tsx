import { getArticleBySlug } from "@/lib/data/blog-data";
import ArticleDetails from "@/components/blog/ArticleDetails";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetails article={article} />;
}
