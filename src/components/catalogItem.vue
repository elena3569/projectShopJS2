<template>
  <div class="product-item">
    <img :src="img" alt="Some img" />
    <div class="desc">
      <h3>{{ product.product_name }}</h3>
      <p>{{ product.price }}₽</p>
      <button class="buy-btn" @click="addProduct(product)">Купить</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'catalogItem',
  props: ['product', 'img'],

  computed: {
    ...mapGetters(['cartList', 'curProd']),
  },
  methods: {
    ...mapActions(['upCurProd', 'postD', 'putD', 'getBasketList']),

    addProduct(product) {
      this.$store.dispatch('upCurProd', product);
      let find = this.cartList.find(
        (el) => el.id_product === this.curProd.id_product
      );
      if (find) {
        this.putD({ quantity: 1 });
      } else {
        product.quantity = 1;
        this.$store.dispatch('upCurProd', product);
        this.postD();
      }
      this.getBasketList();
    },
  },
};
</script>
