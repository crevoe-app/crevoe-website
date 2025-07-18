import type { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogPageClient from "@/components/blog/BlogPageClient";

export const metadata: Metadata = {
  title: "Creveo Blog - Insights, Tips, and Stories",
  description: "Insights, tips, and stories from the world of online learning and education technology",
};

export default function BlogPage() {
  return (
    <BlogLayout>
      <BlogPageClient />
    </BlogLayout>
  );
}