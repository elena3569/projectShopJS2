<template>
  <div class="product-bio">
    <img :src="img" alt="Some img" />
    <div class="product-desc">
      <p class="product-title">{{ product.product_name }}</p>
      <p class="product-quantity">Количество: {{ product.quantity }}</p>
      <p class="product-single-price">{{ product.price }}₽ за единицу</p>
    </div>
    <div class="right-block">
      <p class="product-price">{{ product.quantity * product.price }}₽</p>
      <button class="del-btn" @click="deleteProduct(product)">&times;</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'cartitem',
  props: ['product', 'img'],
  computed: {
    ...mapGetters(['cartList']),
  },
  methods: {
    ...mapActions(['deleteD', 'upCurProd', 'putD']),
    deleteProduct(product) {
      this.$store.dispatch('upCurProd', product);
      if (product.quantity > 1) {
        this.putD({ quantity: -1 });
      } else if (product.quantity === 1) {
        this.deleteD();
      }
    },
  },
};
</script>
