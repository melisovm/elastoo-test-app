import { chartService } from '@/service';

const state = {
  elements: [],
};

const getters = {};

const actions = {
  set({ commit }, chartData) {
    commit('SET', chartData);
  },

  async getData(_, source) {
    return await chartService.getChartData(source);
  },
};

const mutations = {
  SET(state, chartData) {
    state.elements.unshift(chartData);
  },
};

export default {
  namespaced: true,

  state,
  getters,
  actions,
  mutations,
};
