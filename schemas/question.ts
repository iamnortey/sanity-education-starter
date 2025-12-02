import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'question',
  title: 'Question',
  type: 'document',
  fields: [
    defineField({
      name: 'lesson',
      title: 'Lesson',
      type: 'reference',
      to: [{ type: 'lesson' }],
      description: 'Optional reference to a lesson',
    }),
    defineField({
      name: 'stem',
      title: 'Question Text',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Question Type',
      type: 'string',
      options: {
        list: [
          { title: 'Multiple Choice', value: 'mcq' },
          { title: 'Short Answer', value: 'short' },
          { title: 'Long Answer', value: 'long' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Answer options for multiple choice questions',
      hidden: ({ parent }) => parent?.type !== 'mcq',
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'string',
      description: 'Correct answer or answer key',
    }),
    defineField({
      name: 'explanation',
      title: 'Explanation',
      type: 'text',
      rows: 3,
      description: 'Explanation of the correct answer',
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: [
          { title: 'Easy', value: 'easy' },
          { title: 'Medium', value: 'medium' },
          { title: 'Hard', value: 'hard' },
        ],
        layout: 'radio',
      },
    }),
  ],
  preview: {
    select: {
      stem: 'stem',
      type: 'type',
      difficulty: 'difficulty',
    },
    prepare({ stem, type, difficulty }) {
      return {
        title: stem?.substring(0, 60) + (stem?.length > 60 ? '...' : ''),
        subtitle: [type?.toUpperCase(), difficulty].filter(Boolean).join(' • '),
      }
    },
  },
})
