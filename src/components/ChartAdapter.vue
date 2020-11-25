<template>
  <component
    :is="chartComponent"
    :details="details"
    :data="data"
    :title="title"
    :enable-export="true"
  />
</template>

<script>
import { Line, Pie } from './Charts';

const SUPPORTED_CHARTS = ['line', 'pie'];

const CHART_COMPONENT = {
  line: Line,
  pie: Pie,
};

export default {
  props: {
    type: {
      type: String,
      required: true,
      // If you want to add new chart types - please add them to `SUPPORTED_CHARTS` array
      validator: (value) => SUPPORTED_CHARTS.includes(value),
    },

    details: {
      type: Object,
      required: true,
    },

    data: {
      type: Array,
      required: true,
    },

    title: {
      type: String,
      default: '',
    },
  },

  computed: {
    chartComponent() {
      return CHART_COMPONENT[this.type];
    },
  },
};
</script>

<style lang="scss"></style>
