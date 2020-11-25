<template>
  <v-dialog v-model="openDialog" :width="width" :fullscreen="fullscreen">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text dark v-bind="attrs" v-on="on">Создать карту</v-btn>
    </template>
    <v-card>
      <v-form
        ref="chartCreateForm"
        v-model="form.isValid"
        @submit.prevent="createChart"
      >
        <v-card-title class="headline grey lighten-2">
          Создание карты
        </v-card-title>

        <v-card-text class="mt-10">
          <v-select
            v-model="form.fields.type"
            outlined
            label="Тип графика"
            :rules="[(v) => !!v || 'Item is required']"
            :items="chartTypes"
          />

          <v-select
            v-model="form.fields.source"
            outlined
            label="Источник данных"
            :rules="[(v) => !!v || 'Item is required']"
            :item-disabled="isItemDisabled"
            :items="chartDataSource"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />

          <v-btn color="error" text @click="openDialog = false">Закрыть</v-btn>

          <v-btn
            text
            color="primary"
            type="submit"
            :loading="form.loading"
            :disabled="!form.isValid"
          >
            Создать
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';

const CHART_TYPES = [
  {
    text: 'Линейный',
    value: 'line',
  },
  {
    text: 'Пирог',
    value: 'pie',
  },
];

const CHART_DATA_SOURCE = [
  {
    text: 'Данные для линейного',
    type: 'line',
    value: 'https://run.mocky.io/v3/92a0a266-0321-4ff5-9993-b394d03ceee2',
  },
  {
    text: 'Данные для пирога',
    type: 'pie',
    value: 'https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047',
  },
];

// hard coded there, it will be changed when project need to be extended
const DETAILS_GENERATOR = {
  line: {
    argumentField: 'Дата',
    series: ['Процент'],
  },

  pie: {
    argumentField: 'Группа',
    valueField: 'Доля',
  },
};

export default {
  props: {
    width: {
      type: String,
      default: '500',
    },

    fullscreen: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      openDialog: false,
      form: {
        loading: false,

        isValid: false,

        fields: {
          type: '',
          source: '',
        },
      },

      chartTypes: CHART_TYPES,
      chartDataSource: CHART_DATA_SOURCE,
    };
  },

  methods: {
    ...mapActions('Charts', {
      getChartData: 'getData',
      setChart: 'set',
    }),

    async createChart() {
      this.form.loading = true;

      const { source, type, title } = this.form.fields;
      const data = await this.getChartData(source);

      const chart = {
        data,
        type,
        title,
        details: DETAILS_GENERATOR[type],
      };

      this.setChart(chart);

      this.form.loading = false;
      this.openDialog = false;
      this.$refs.chartCreateForm.reset();
    },

    isItemDisabled({ type }) {
      return type !== this.form.fields.type;
    },
  },
};
</script>

<style scoped></style>
