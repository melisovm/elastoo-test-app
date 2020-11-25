<template>
  <dx-pie-chart id="pie" :data-source="data">
    <dx-series
      :argument-field="details.argumentField"
      :value-field="details.valueField"
    >
      <dx-label :visible="true">
        <dx-connector :visible="true" :width="1" />
      </dx-label>
    </dx-series>

    <dx-size :width="500" />

    <dx-export :enabled="enableExport" />
  </dx-pie-chart>
</template>

<script>
import DxPieChart, {
  DxSize,
  DxSeries,
  DxLabel,
  DxConnector,
  DxExport,
} from 'devextreme-vue/pie-chart';

export default {
  components: {
    DxConnector,
    DxSeries,
    DxSize,
    DxLabel,
    DxExport,
    DxPieChart,
  },

  props: {
    data: {
      type: Array,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    details: {
      type: Object,
      required: true,
    },

    enableExport: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style></style>
