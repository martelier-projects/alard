export default {
  label: 'Text media',
  name: 'text-media',
  widget: 'object',
  summary: 'Text media | {{fields.title}}',
  fields: [
    {
      label: 'Visual order',
      name: 'order',
      widget: 'select',
      options: ['text-image', 'image-text'],
      default: ['image-text'],
      required: true,
    },
    {
      label: 'Image to the edge',
      name: 'imageToTheEdge',
      widget: 'boolean',
      default: false,
      required: false,
      hint: "When selecting this option, the image is cropped. This means the full height of the image isn't shown.",
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false,
    },
    {
      label: 'Text',
      name: 'text',
      widget: 'markdown',
      required: true,
      buttons: ['heading-three', 'bold', 'italic', 'link'],
      editor_components: [],
      modes: ['rich_text'],
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
      label: 'Button label',
      name: 'buttonLabel',
      widget: 'string',
      required: false,
    },
    {
      label: 'Button link',
      name: 'buttonLink',
      widget: 'string',
      required: false,
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'text-media',
    },
  ],
}
