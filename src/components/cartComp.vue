<template>
  <div class="cart">
    <button class="btn-cart" type="button" @click="showCart = !showCart">
      Корзина
    </button>
    <div class="cart-block" v-show="showCart">
      <p v-if="cartList.length === 0">Корзина пуста</p>
      <cart-item
        class="cart-item"
        v-for="item of cartList"
        :product="item"
        :key="item.id_product"
        :img="imgCart"
      >
      </cart-item>
      <p class="totalSum">Итого: {{ totalSum }}</p>
      <router-link to="/cart" tag="button" @click="showCart = false"
        >Перейти в корзину</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import cartItem from './cartItem.vue';

export default {
  name: 'cartComp',
  data() {
    return {
      imgCart: 'https://placehold.it/50x100',
      showCart: false,
    };
  },
  components: {
    cartItem,
  },
  computed: {
    ...mapGetters(['cartList', 'totalSum']),
  },
  methods: {
    ...mapActions(['putD', 'getBasketList']),
  },
  created() {
    this.getBasketList();
  },
  updated() {
    this.getBasketList();
  },
};
</script>

