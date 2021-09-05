import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Testimonials',
  name: 'testimonials',
  widget: 'object',
  summary: 'Testimonials | {{fields.title}}',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false,
    },
    {
      label: 'Testimonials',
      name: 'testimonials',
      widget: 'list',
      summary: 'Testimonial | {{fields.author}}',
      hint: 'Only the first 3 testimonials are shown.',
      fields: [
        {
          label: 'Text',
          name: 'text',
          widget: 'text',
        },
        {
          label: 'Author',
          name: 'author',
          widget: 'string',
        },
      ],
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'testimonials',
    },
  ],
}
