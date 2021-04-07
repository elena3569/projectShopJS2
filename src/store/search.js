// import axios from 'axios';

// const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

// export default {
//   state: {
//     filtered: [],
//     searchQuery: '',
//   },
//   getters: {
//     filtered(state) {
//       return state.filtered;
//     },
//   },
//   mutations: {
//     SET_FILTERED_PRODUCTS_LIST(state, data) {
//       state.filtered = data;
//     },
//     [SET_SEARCH_QUERY](state, searchQuery) {
//       state.searchQuery = searchQuery;
//     },
//   },
//   actions: {
//     setSearchQuery({ commit }, searchQuery) {
//       console.log(searchQuery);
//       commit('SET_SEARCH_QUERY', searchQuery);
//     },
//     async getFilteredProducts({ commit, state }) {
//       const { data: products } = await axios.get('http://localhost:3000/api/catalog');
//       const regexp = new RegExp(state.searchQuery, 'i');
//       const { data: filtered } = [products].filter((el) => regexp.test(el.product_name));
//       console.log(filtered);
//       commit('SET_FILTERED_PRODUCTS_LIST', filtered);
//     },
//   },
// };
