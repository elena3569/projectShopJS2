<template>
  <div class="product-item">
    <router-link
      :to="{ path: `/catalog/${product.id_product}`, component: product }"
      ><img :src="img" class="img" alt="Some img"
    /></router-link>
    <a class="product__add" href="#">
      <button class="btn-buy" @click="addProduct(product)">
        <i class="fas fa-shopping-basket product-cart"></i> Купить
      </button>
    </a>
    <div class="product-desc">
      <router-link :to="{ path: `/catalog/${product.id_product}` }">
        <h3>{{ product.product_name }}</h3></router-link
      >
      <p>{{ product.price }}₽</p>
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
<style scoped>
h3 {
  color: black;
}
.product-item {
  display: flex;
  flex-direction: column;
  width: 200px;
  border-radius: 5px;
  overflow: hidden;
  margin: 20px 0;
  position: relative;
}
.product-item:hover .img {
  filter: brightness(50%);
}
.product-item:hover .product__add {
  display: flex;
  transition-duration: 0.6s;
}
.product__add {
  position: absolute;
  top: 60px;
  left: 40px;
  width: 120px;
  height: 30px;
  border: 1px solid white;
  align-items: center;
  justify-content: center;
  display: none;
  color: white;
  fill: white;
}
.product__add:hover {
  box-shadow: 0 0 5px white;
}
.product-desc {
  border: 1px solid #c0c0c040;
  padding: 15px;
}
.product-cart {
  padding-right: 10px;
}
.btn-buy {
  color: white;
  border: none;
  background: none;
}
</style>