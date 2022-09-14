<template>
  <value-null v-if="displayValue === null" />
  <template v-else>{{ displayValue }}</template>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, onMounted, ref } from 'vue';
import { render } from 'micromustache';

export default defineComponent({
  props: {
    template: {
      default: null,
      type: String,
    },
    url: {
      default: null,
      type: String,
    },
    value: {
      default: null,
      type: String,
    },
  },
  setup(props) {
    const displayValue = ref<string | null>(null);

    onMounted(async () => {
      if (props.template !== null && props.url !== null) {
        const url = render(props.url, {
          value: props.value,
        });
        try {
          const result = await axios.get(url);
          displayValue.value = render(props.template, result.data);
        } catch (err: any) {
          // eslint-disable-next-line no-console
          displayValue.value = `${err.response.statusText}: ${props.value}`;
        }
      }
    });

    return { displayValue };
  },
});
</script>
