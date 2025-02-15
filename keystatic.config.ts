import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    jobs: collection({
      label: 'Jobs',
      slugField: 'slug',
      path: 'content/jobs/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.text({ label: 'Slug' }),
        company: fields.object({
          name: fields.text({ label: 'Company Name' }),
          logo: fields.text({ label: 'Company Logo URL' }),
          url: fields.url({ label: 'Company URL' }),
        }),
        location: fields.text({ label: 'Location' }),
        dateFrom: fields.date({ label: 'Start Date' }),
        dateTo: fields.date({ label: 'End Date', validation: { isRequired: false } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'slug',
      path: 'content/projects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.text({ label: 'Slug' }),
        githubUrl: fields.url({ 
          label: 'GitHub URL', 
          validation: { isRequired: false } 
        }),
        websiteUrl: fields.url({ 
          label: 'Website URL', 
          validation: { isRequired: false } 
        }),
        images: fields.array(
          fields.text({ 
            label: 'Image URL',
          }),
          { label: 'Project Images' }
        ),
        tags: fields.array(
          fields.object({
            name: fields.text({ label: 'Tag Name' }),
            color: fields.text({ label: 'Color' }),
            icon: fields.text({ 
              label: 'Icon Class',
              validation: { isRequired: false }
            }),
          }),
          { label: 'Tags' }
        ),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
  },
});
