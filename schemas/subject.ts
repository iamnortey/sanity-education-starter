import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'subject',
  title: 'Subject',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'string',
      description: 'Short code for the subject (e.g., MATH, ENG, SCI)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order for sorting subjects',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'code',
    },
  },
})
