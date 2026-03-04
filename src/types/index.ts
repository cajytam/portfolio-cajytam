export interface BaseLayoutProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

export interface NavProps {
  currentPath?: string;
}

export type BlogCategory = "journey" | "autre";

export interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: Date;
  readingTime: number;
  coverImage?: string;
  size?: "lg" | "sm";
}

export interface ArticleLayoutProps {
  title: string;
  publishedAt: Date;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  readingTime: number;
  coverImage?: string;
}

export const categoryLabels: Record<BlogCategory, string> = {
  journey: "Parcours",
  autre: "Autre",
};
