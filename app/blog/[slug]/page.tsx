import { getArticleBySlug, getRelatedArticles } from "@/lib/data/blog-data";
import ArticleDetails from "@/components/blog/ArticleDetails";
import ReadNext from "@/components/blog/ReadNext";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: any;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(params.slug, 3);

  return (
    <>
      <ArticleDetails article={article} />
      <ReadNext articles={relatedArticles} />
    </>
  );
}
