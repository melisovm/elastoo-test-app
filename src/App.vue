<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer />
      <chart-creator-dialog />
    </v-app-bar>
    <v-main>
      <chart-adapter
        v-for="(element, index) in chartElements"
        :key="index"
        :type="element.type"
        :data="element.data"
        :details="element.details"
        :title="element.title"
      />
    </v-main>
  </v-app>
</template>

<script>
import { ChartAdapter } from './components';
import { ChartCreatorDialog } from './components/Modals';
import { mapState } from 'vuex';

export default {
  name: 'App',

  components: {
    ChartAdapter,
    ChartCreatorDialog,
  },

  data: () => ({
    //
  }),

  computed: {
    ...mapState('Charts', {
      chartElements: 'elements',
    }),
  },
};
</script>
