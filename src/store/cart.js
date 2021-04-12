import axios from 'axios';

export default {
  state: {
    cartList: [],
    curProd: {},
    totalSum: 0,
    amount: 0,
  },
  getters: {
    cartList(state) {
      return state.cartList;
    },
    curProd(state) {
      return state.curProd;
    },
    totalSum(state) {
      return state.totalSum;
    },
    amount(state) {
      return state.amount;
    },
  },
  mutations: {
    SET_CART_LIST(state, data) {
      state.cartList = data;
    },
    SET_CUR_PROD(state, data) {
      state.curProd = data;
    },
    SET_TOTAL_SUM(state, data) {
      state.totalSum = data;
    },
    SET_AMOUNT(state, data) {
      state.amount = data;
    },
  },
  actions: {
    async getBasketList({rootState, commit }) {
      const { data: cartList } = await axios.get('http://localhost:3000/api/cart');
      commit('SET_CART_LIST', cartList.contents);
      if (rootState.searchQueryInCart !== '') {
        const regexp = new RegExp(rootState.searchQueryInCart, 'i');
        const filtered = cartList.contents.filter((el) => regexp.test(el.product_name));
        commit('SET_CART_LIST', filtered);
      }
      commit('SET_TOTAL_SUM', cartList.totalSum);
      commit('SET_AMOUNT', cartList.amount);
    },
    upCurProd({ commit }, product){
      commit('SET_CUR_PROD', product);
    },
    postD({state}) {
      axios.post(`http://localhost:3000/api/cart`, state.curProd);
    },
    deleteD({state}) {
      axios.delete(`http://localhost:3000/api/cart/${state.curProd.id_product}`, state.curProd);
    },
    putD({state}, data){
      axios.put(`http://localhost:3000/api/cart/${state.curProd.id_product}`, data);
    },
  },
};
