import axios from 'axios';

export default {
  state: {
    cartList: [],
    curProd: {},
    totalSum: 0,
    colorBlack: false,
  },
  getters: {
    cartList(state) {
      return state.cartList;
    },
    curProd(state) {
      return state.curProd;
    },
    colorBlack(state) {
      return state.colorBlack;
    },
    totalSum(state) {
      return state.totalSum;
    },
  },
  mutations: {
    SET_CART_LIST(state, data) {
      state.cartList = data;
    },
    SET_CUR_PROD(state, data) {
      state.curProd = data;
    },
    SET_COLOR(state, data) {
      state.colorBlack = data;
    },
    SET_TOTAL_SUM(state, data) {
      state.totalSum = data;
    },
  },
  actions: {
    async getBasketList({ commit }) {
      const { data: cartList } = await axios.get('http://localhost:3000/api/cart');
      commit('SET_CART_LIST', cartList.contents);
      commit('SET_TOTAL_SUM', cartList.totalSum);
    },
    upCurProd({ commit }, product){
      commit('SET_CUR_PROD', product);
    },
    upColor({commit}, color){
      commit('SET_COLOR', color);
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
