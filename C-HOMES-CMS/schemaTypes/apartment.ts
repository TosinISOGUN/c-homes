import { defineField, defineType } from 'sanity'
import { AreaInput } from '../components/AreaInput'

export default defineType({
  name: 'apartment',
  title: 'Apartment',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Apartment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Single Room', value: 'Single Room' },
          { title: 'Self Contain', value: 'Self Contain' },
          { title: 'Room & Parlour', value: 'Room & Parlour' },
          { title: 'Mini Flat', value: 'Mini Flat' },
          { title: 'Flat', value: 'Flat' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'localGovernment',
      title: 'Local Government',
      type: 'string',
      options: {
        list: [
          { title: 'Egbeda', value: 'Egbeda' },
          { title: 'Ibadan North', value: 'Ibadan North' },
          { title: 'Ibadan North-East', value: 'Ibadan North-East' },
          { title: 'Ibadan North-West', value: 'Ibadan North-West' },
          { title: 'Ibadan South-East', value: 'Ibadan South-East' },
          { title: 'Ibadan South-West', value: 'Ibadan South-West' },
          { title: 'Akinyele', value: 'Akinyele' },
          { title: 'Ido', value: 'Ido' },
          { title: 'Lagelu', value: 'Lagelu' },
          { title: 'Oluyole', value: 'Oluyole' },
          { title: 'Ona Ara', value: 'Ona Ara' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'area',
      title: 'Area',
      type: 'string',
      components: {
        input: AreaInput,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (e.g., ₦150,000/yr)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
