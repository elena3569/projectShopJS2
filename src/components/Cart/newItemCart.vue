<template>
  <div class="product-bio">
    <router-link :to="{ path: `/catalog/${product.id_product}` }"
      ><img :src="img" class="img" alt="Some img"
    /></router-link>
    <div class="product-desc">
      <div class="product-desk-text">
        <router-link :to="{ path: `/catalog/${product.id_product}` }">
          <p class="product-title">{{ product.product_name }}</p></router-link
        >

        <p class="product-single-price">{{ product.price }}₽ за единицу</p>
      </div>
      <div class="product-quantity">
        <button
          class="btn-quantity"
          @click="changeQuantity(-1, product)"
          v-bind:class="{ disabled: product.quantity === 1 }"
        >
          <i class="fas fa-minus-circle"></i>
        </button>
        <p class="product-quantity-text">{{ product.quantity }}</p>
        <button class="btn-quantity" @click="changeQuantity(1, product)">
          <i class="fas fa-plus-circle" v-on:click="changeColor(1)"></i>
        </button>
      </div>
      <div class="product__del">
        <p class="product-price">{{ product.quantity * product.price }}₽</p>
        <button class="del-btn" @click="deleteP(product)">&times;</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'newItemCart',
  props: ['product', 'img'],
  computed: {
    ...mapGetters({ colorBlack: 'colorBlack', curProd: 'curProd' }),
  },
  methods: {
    ...mapActions(['deleteD', 'putD', 'upCurProd', 'upColor']),
    changeQuantity(a, product) {
      this.$store.dispatch('upCurProd', product);
      if ((product.quantity === 1 && a > 0) || product.quantity > 1) {
        this.putD({ quantity: a });
      }
      this.$store.dispatch('upCurProd', product);
    },
    deleteP(product) {
      this.$store.dispatch('upCurProd', product);
      this.deleteD();
    },
  },
};
</script>
<style scoped>
.product-bio {
  display: flex;
  font-size: 18px;
  box-shadow: 17px 19px 24px rgb(0 0 0 / 13%);
  margin-bottom: 40px;
}
.product-single-price {
  color: #474747;
  font-size: 16px;
}

.product-price {
  margin-left: 30px;
}
.product-title {
  color: black;
}
.product-desc {
  width: 100%;
  padding: 22px 22px 0 22px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.product-quantity {
  position: absolute;
  left: calc(50% - 40px);
  top: calc(50% - 16px);
  display: flex;
  align-items: center;
}

.product-quantity-text {
  display: inline-block;
  padding: 0 15px;
}
.btn-quantity {
  color: black;
  border: none;
  background: none;
  font-size: 28px;
  cursor: pointer;
}
.disabled {
  color: grey;
}
.product__del {
  text-align: right;
}
.del-btn {
  margin: 12px 0;
  background-color: #2f2a2d;
  padding: 5px 15px;
  border: 1px solid transparent;
  color: #fafafa;
  border-radius: 5px;
  transition: all ease-in-out 0.4s;
  cursor: pointer;
}
.del-btn:hover {
  background-color: #fafafa;
  color: #2f2a2d;
  border: 1px solid #2f2a2d;
}
</style>