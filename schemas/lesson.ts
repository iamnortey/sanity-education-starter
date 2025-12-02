import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'lesson',
  title: 'Lesson',
  type: 'document',
  fields: [
    defineField({
      name: 'topic',
      title: 'Topic',
      type: 'reference',
      to: [{ type: 'topic' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      description: 'Educational level (e.g., "Grade 10", "SHS 2", "Year 11")',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Main lesson content',
    }),
    defineField({
      name: 'estimatedDurationMinutes',
      title: 'Estimated Duration (minutes)',
      type: 'number',
      description: 'Expected time to complete this lesson',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      topic: 'topic.title',
      level: 'level',
    },
    prepare({ title, topic, level }) {
      return {
        title,
        subtitle: [topic, level].filter(Boolean).join(' • '),
      }
    },
  },
})
