<template>
  <div class="productsInCart">
    <p class="cart-placehold" v-if="cartList.length === 0">Корзина пуста</p>
    <cart-item
      class="cart-item"
      v-for="product of cartList"
      :product="product"
      :key="product.id_product"
      :img="imgCart"
    >
    </cart-item>
    <p v-if="cartList.length != 0" class="totalSum">Итого: {{ totalSum }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import cartItem from './newItemCart.vue';

export default {
  name: 'cartList',
  components: {
    cartItem,
  },
  data() {
    return {
      imgCart: 'https://placehold.it/200x150',
    };
  },
  computed: {
    ...mapGetters(['cartList', 'totalSum']),
  },
  methods: {
    ...mapActions(['getBasketList']),
  },
  created() {
    this.getBasketList();
  },
  beforeupdate() {
    this.getBasketList();
  },
};
</script>
<style scoped>
h1 {
  padding-bottom: 30px;
}
.productsInCart {
  padding-bottom: 80px;
}
.cart-placehold {
  display: flex;
  justify-content: center;
  color: #666666;
  font-size: 27px;
  align-items: center;
  height: 50vh;
  grid-column-start: 1;
  grid-column-end: 4;
}
.totalSum {
  text-align: right;
  padding: 10px;
  font-size: 22px;
}
</style>