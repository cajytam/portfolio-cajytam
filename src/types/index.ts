import type { CollectionEntry } from "astro:content";
import type { ImageMetadata } from "astro";

export interface BaseLayoutProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

export type BlogCategory = CollectionEntry<"blog">["data"]["category"];

export const categoryLabels: Record<BlogCategory, string> = {
  journey: "Parcours",
  autre: "Autre",
};

export interface ArticleLayoutProps {
  title: string;
  publishedAt: Date;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  coverImage?: string | ImageMetadata;
}
