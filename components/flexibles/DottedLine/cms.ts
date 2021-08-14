export default {
  label: 'Dotted line',
  name: 'dotted-line',
  widget: 'object',
  summary: 'Dotted line | {{fields.color}}',
  fields: [
    {
      label: 'Color',
      name: 'color',
      widget: 'select',
      options: [
        {
          label: 'Yellow',
          value: '#fff48e',
        },
        {
          label: 'Orange',
          value: '#f18634',
        },
        {
          label: 'Red',
          value: '#e95053',
        },
        {
          label: 'Brown',
          value: '#552011',
        },
        {
          label: 'Dark blue',
          value: '#273582',
        },
        {
          label: 'Light blue',
          value: '#8bd0e4',
        },
        {
          label: 'Dark green',
          value: '#007f8e',
        },
        {
          label: 'Light green',
          value: '#abc986',
        },

        {
          label: 'Purple',
          value: '#9866a3',
        },
      ],
      default: '#007f8e',
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'dotted-line',
    },
  ],
}
