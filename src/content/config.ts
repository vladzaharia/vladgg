import { defineCollection, z } from 'astro:content';

const jobs = defineCollection({
  type: 'content',
  schema: z.object({
    position: z.string(),
    positionShort: z.string().optional(),
    company: z.object({
      name: z.string(),
      logo: z.string(),
      url: z.string().url(),
    }),
    location: z.string(),
    dateFrom: z.date(),
    dateTo: z.date().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    githubUrl: z.string().url().optional(),
    websiteUrl: z.string().url().optional(),
    images: z.array(z.string()),
  }),
});

export const collections = {
  jobs,
  projects,
};
