"use client";

import { Article } from "@/lib/types/blog";
import { format } from 'date-fns';
import Image from 'next/image';

import ShareButtons from "./ShareButtons";

interface ArticleDetailsProps {
  article: Article;
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ article }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
      <div className="flex items-center mb-8">
        <div className="relative w-12 h-12 rounded-full mr-4 overflow-hidden">
          <Image src={article.author.avatar!} alt={article.author.name} layout="fill" objectFit="cover" />
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-800">{article.author.name}</p>
          <p className="text-gray-600">{format(new Date(article.publishedDate), 'MMMM d, yyyy')} &middot; {article.readTime} min read</p>
        </div>
      </div>
      <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
      <div className="mt-8">
        <ShareButtons title={article.title} />
      </div>
    </div>
  );
};

export default ArticleDetails;
