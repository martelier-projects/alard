export default {
  label: 'Page header',
  name: 'pageHeader',
  widget: 'object',
  summary: 'Page header | {{fields.title}}',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: true,
    },
    {
      label: 'Text',
      name: 'text',
      widget: 'markdown',
      required: true,
      buttons: ['bold', 'italic', 'link'],
      editor_components: [],
      modes: ['rich_text'],
    },
    {
      label: 'Button label',
      name: 'buttonLabel',
      widget: 'string',
    },
    {
      label: 'Button link',
      name: 'buttonLink',
      widget: 'string',
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      required: true,
    },
    {
      label: 'Image description',
      name: 'imageAlt',
      widget: 'string',
      required: true,
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'page-header',
    },

    {
      label: 'Topics',
      name: 'topics',
      widget: 'list',
      summary: '{{fields.label}}',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: true,
        },
        {
          label: 'Text',
          name: 'text',
          widget: 'text',
          required: true,
        },
      ],
    },
  ],
}
