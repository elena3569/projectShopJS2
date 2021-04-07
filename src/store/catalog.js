import axios from 'axios';

export default {
  state: {
    products: [],
    filtered: [],
    searchQuery: '',
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
    SET_SEARCH_QUERY(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    SET_PRODUCTS_LIST(state, data) {
      state.products = data;
    },
  },
  actions: {
    setSearchQuery({ commit }, searchQuery) {
      commit('SET_SEARCH_QUERY', searchQuery);
    },
    async getProductsList({ commit, state }) {
      const { data: products } = await axios.get('http://localhost:3000/api/catalog');
      commit('SET_PRODUCTS_LIST', products);
      if (state.searchQuery !== '') {
        const regexp = new RegExp(state.searchQuery, 'i');
        const filtered = products.filter((el) => regexp.test(el.product_name));
        commit('SET_PRODUCTS_LIST', filtered);
      }
    },
  },
};
