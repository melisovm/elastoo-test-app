<template>
  <dx-chart id="chart" :data-source="data">
    <dx-common-series-settings :argument-field="details.argumentField" />

    <dx-series
      v-for="series in details.series"
      :key="series"
      :value-field="series"
      :name="series"
    />

    <dx-margin :bottom="20" :right="20" :left="20" />

    <dx-argument-axis
      :value-margins-enabled="false"
      discrete-axis-division-mode="crossLabels"
    >
      <dx-grid :visible="true" />
    </dx-argument-axis>

    <dx-legend
      vertical-alignment="bottom"
      horizontal-alignment="center"
      item-text-position="bottom"
    />
    <dx-export :enabled="enableExport" />

    <dx-tooltip :enabled="true" />
  </dx-chart>
</template>

<script>
import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxCommonSeriesSettings,
  DxExport,
  DxGrid,
  DxMargin,
  DxLegend,
  DxTooltip,
} from 'devextreme-vue/chart';

export default {
  components: {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxExport,
    DxGrid,
    DxMargin,
    DxLegend,
    DxTooltip,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },

    details: {
      type: Object,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    enableExport: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped></style>
