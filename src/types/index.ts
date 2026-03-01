/**
 * Types partagés pour le portfolio
 */

/**
 * Props pour BaseLayout
 */
export interface BaseLayoutProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

/**
 * Props pour Nav
 */
export interface NavProps {
  currentPath?: string;
}

/**
 * Catégories de blog disponibles
 */
export type BlogCategory =
  | "architecture"
  | "react"
  | "typescript"
  | "go"
  | "performance"
  | "design-system"
  | "devops"
  | "journey"
  | "autre";

/**
 * Props pour BlogCard
 */
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

/**
 * Props pour ArticleLayout
 */
export interface ArticleLayoutProps {
  title: string;
  publishedAt: Date;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  readingTime: number;
  coverImage?: string;
}

/**
 * Labels des catégories pour l'affichage
 */
export const categoryLabels: Record<BlogCategory, string> = {
  architecture: "Architecture",
  react: "React",
  typescript: "TypeScript",
  go: "Go",
  performance: "Performance",
  "design-system": "Design System",
  devops: "DevOps",
  journey: "Parcours",
  autre: "Autre",
};
