import { defineCollection, z } from 'astro:content';

const jobs = defineCollection({
  type: 'content',
  schema: z.object({
    position: z.string(),
    positionShort: z.string().optional(),
    company: z.object({
      name: z.string(),
      nameShort: z.string().optional(),
      logo: z.string().optional(),
      url: z.string().url().optional(),
    }),
    location: z.string(),
    dateFrom: z.string().transform((str) => new Date(str)),
    dateTo: z.string().optional().transform((str) => str ? new Date(str) : null),
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
