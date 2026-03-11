import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      publishedAt: z.coerce.date(),
      category: z.enum(["journey", "autre"]),
      tags: z.array(z.string()).default([]),
      coverImage: image().optional(),
      featured: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      type: z.string().optional(),
      coverImage: image().optional(),
      url: z.string().url().optional(),
      githubUrl: z.string().url().optional(),
      publishedAt: z.coerce.date(),
    }),
});

export const collections = { blog, projects };
