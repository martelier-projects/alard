export default {
  label: 'Mailchimp sign-up',
  name: 'mail-chimp-sign-up',
  widget: 'object',
  summary: 'Mailchimp sign-up',
  fields: [
    {
      label: 'Title',
      name: 'title',
      default: 'Hier komt de Mailchimp sign-up',
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'mail-chimp-sign-up',
    },
  ],
}
