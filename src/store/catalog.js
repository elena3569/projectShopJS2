import axios from 'axios';

export default {
  state: {
    products: [],
    filtered: [],
  },
  getters: {
    products(state) {
      return state.products;
    },
    filtered(state) {
      return state.filtered;
    },
  },
  mutations: {
    SET_PRODUCTS_LIST(state, data) {
      state.products = data;
    },
  },
  actions: {
    async getProductsList({ commit, rootState }) {
      const { data: products } = await axios.get('http://localhost:3000/api/catalog');
      commit('SET_PRODUCTS_LIST', products);
      if (rootState.searchQuery !== '') {
        const regexp = new RegExp(rootState.searchQuery, 'i');
        const filtered = products.filter((el) => regexp.test(el.product_name));
        commit('SET_PRODUCTS_LIST', filtered);
      }
    },
  },
};
