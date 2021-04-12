<template>
  <div class="product-bio">
    <router-link
      :to="{ path: `/catalog/${product.id_product}`, component: product }"
      ><img :src="img" alt="Some img"
    /></router-link>
    <div class="product-desc">
      <router-link
        :to="{ path: `/catalog/${product.id_product}`, component: product }"
        ><p class="product-title">{{ product.product_name }}</p></router-link
      >

      <p class="product-quantity">Количество: {{ product.quantity }}</p>
      <p class="product-single-price">
        Цена: {{ product.price }} &#8381; за ед.
      </p>
    </div>
    <div class="right-block">
      <p class="product-price">
        {{ product.quantity * product.price }} &#8381;
      </p>
      <button class="del-btn" @click.stop="deleteProduct(product)">
        &times;
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'cartitem',
  props: ['product', 'img'],
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

<style scoped>
p {
  color: black;
}
.product-bio {
  display: flex;
}
.product-single-price {
  font-size: 0.75em;
}

.product-price {
  margin-left: 30px;
}

.product-desc {
  max-width: 150px;
}
.product-quantity {
  margin-top: 15px;
  font-size: 0.75em;
}

.right-block {
  text-align: right;
}
.del-btn {
  margin-top: 5px;
  background-color: #403034;
  padding: 5px 15px;
  border: 1px solid transparent;
  color: #fafafa;
  border-radius: 5px;
  transition: all ease-in-out 0.4s;
  cursor: pointer;
}
.del-btn:hover {
  background-color: #fafafa;
  color: #403034;
  border: 1px solid #403034;
}
</style>