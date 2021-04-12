<template>
  <router-link
    to="{ path: `/catalog/${product.id_product}`, component: product }"
  >
    <div class="product-bio">
      <img :src="img" alt="Some img" class="img" />
      <div class="product-desc">
        <p class="product-title">{{ product.product_name }}</p>
        <p class="product-price">{{ product.price }} &#8381;</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'resultitem',
  props: ['product', 'img'],
};
</script>

<style scoped>
.product-bio {
  display: flex;
  margin-bottom: 10px;
}
.product-desc {
  padding: 5px 20px;
  color: black;
}
.product-title {
  display: block;
}
.product-price {
  display: block;
}
.img {
  width: 50px;
}
</style>