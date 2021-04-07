<template>
  <div class="productsInCart">
    <p v-if="cartList.length === 0">Корзина пуста</p>
    <cart-item
      class="cart-item"
      v-for="product of cartList"
      :product="product"
      :key="product.id_product"
      :img="imgCart"
    >
    </cart-item>
    <p class="totalSum">Итого: {{ totalSum }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import cartItem from '../components/newItemCart.vue';

export default {
  name: 'Cart',
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
