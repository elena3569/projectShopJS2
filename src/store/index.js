import Vue from 'vue';
import Vuex from 'vuex';
import catalog from './catalog';
import cart from './cart';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: '',
    searchQueryInCart: '',
  },
  mutations:{
    SET_SEARCH_QUERY(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    SET_SEARCH_QUERY_IN_CART(state, searchQuery) {
      state.searchQueryInCart = searchQuery;
    },
  },
  actions:{
    setSearchQuery({ commit }, searchQuery) {
      commit('SET_SEARCH_QUERY', searchQuery);
    },
    setSearchQueryCart({ commit }, searchQuery) {
      commit('SET_SEARCH_QUERY_IN_CART', searchQuery);
    },
  },
  modules: {
    catalog,
    cart,
  },
});
