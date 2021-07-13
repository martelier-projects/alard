export default {
  label: 'MailChimp Sign-up',
  name: 'mailChimpSignUp',
  widget: 'object',
  summary: 'MailChimp Sign-up | {{fields.title}}',
  fields: [
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
      label: 'Email sign-up input label',
      name: 'emailSignUpInputLabel',
      widget: 'string',
      required: true,
    },
    {
      label: 'Email sign-up submit label',
      name: 'emailSignUpSignUpLabel',
      widget: 'string',
      required: true,
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'mail-chimp-sign-up',
    },
  ],
}
