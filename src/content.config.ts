import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      publishedAt: z.string(),
      category: z.enum(["journey", "autre"]),
      tags: z.array(z.string()).default([]),
      coverImage: image().optional(),
    }),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      coverImage: image().optional(),
      url: z.string().url().optional(),
      githubUrl: z.string().url().optional(),
      publishedAt: z.string(),
      featured: z.boolean().default(false),
    }),
});

export const collections = { blog, projects };
