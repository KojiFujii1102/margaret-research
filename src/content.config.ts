import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(['article', 'tried', 'experiment', 'idea']),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
