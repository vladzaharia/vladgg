import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    jobs: collection({
      label: 'Jobs',
      slugField: 'slug',
      path: 'src/content/jobs/*',
      format: { contentField: 'content' },
      schema: {
        position: fields.text({ label: 'Position', validation: { isRequired: true } }),
        positionShort: fields.text({ label: 'Short Position', validation: { isRequired: false } }),
        slug: fields.text({ label: 'URL Slug', validation: { isRequired: true } }),
        company: fields.object({
          name: fields.text({ label: 'Company Name', validation: { isRequired: true } }),
          nameShort: fields.text({ label: 'Short Company Name', validation: { isRequired: false } }),
          logo: fields.text({ label: 'Company Logo URL', validation: { isRequired: false } }),
          url: fields.url({ label: 'Company URL', validation: { isRequired: false } }),
        }),
        location: fields.text({ label: 'Location', validation: { isRequired: true } }),
        dateFrom: fields.date({ label: 'Start Date', validation: { isRequired: true } }),
        dateTo: fields.date({ label: 'End Date', validation: { isRequired: false } }),
        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'slug',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Title', validation: { isRequired: true } }),
        slug: fields.text({ label: 'URL Slug', validation: { isRequired: true } }),
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
        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),
  },
});
