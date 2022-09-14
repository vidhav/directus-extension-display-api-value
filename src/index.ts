import { defineDisplay } from '@directus/extensions-sdk';
import DisplayComponent from './display.vue';

export default defineDisplay({
  id: 'display-api-value',
  name: 'API Value',
  icon: 'join_left',
  description: 'Display data from API based on value.',
  component: DisplayComponent,
  types: ['string', 'text'],
  options: [
    {
      field: 'template',
      name: '$t:template',
      type: 'string',
      meta: {
        interface: 'input',
        options: {
          placeholder: 'My name is {{ name }}!',
          font: 'monospace',
        },
        width: 'full',
      },
    },
    {
      field: 'url',
      name: '$t:url',
      type: 'string',
      meta: {
        interface: 'input',
        options: {
          placeholder: 'https://example.com/{{value}}/',
          font: 'monospace',
        },
        width: 'full',
      },
    },
  ],
});
