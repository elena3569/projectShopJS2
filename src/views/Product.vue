<template>
  <div class="product">
    <h1>{{ product.product_name }}</h1>
    <div class="product-item">
      <img :src="img" class="product-img" alt="Some img" />

      <div class="product-rightBlock">
        <h1>{{ product.price }}₽</h1>
        <button class="btn-buy" @click="addProduct()">
          <i class="fas fa-shopping-basket product-cart"></i> Купить
        </button>
      </div>
    </div>
    <div class="product-desc">
      <h2>Описание</h2>
      <p class="product-desc-text">
        {{ product.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Product',
  data() {
    return {
      img: 'https://placehold.it/200x150',
    };
  },

  computed: {
    ...mapGetters(['products', 'curProd', 'cartList']),
    product() {
      return this.products[
        this.products.findIndex(
          (el) => el.id_product === +this.$route.params.id
        )
      ];
    },
  },
  methods: {
    ...mapActions([
      'upCurProd',
      'postD',
      'putD',
      'getBasketList',
      'getProductsList',
    ]),

    addProduct() {
      this.$store.dispatch('upCurProd', this.product);
      let find = this.cartList.find(
        (el) => el.id_product === this.product.id_product
      );
      if (find) {
        this.putD({ quantity: 1 });
      } else {
        product.quantity = 1;
        this.$store.dispatch('upCurProd', this.product);
        this.postD();
      }
      this.getBasketList();
    },
  },

  created() {
    this.getProductsList();
  },
};
</script>
<style scoped>
.product-item {
  display: flex;
  margin-top: 20px;
}
.product-img {
  width: 44%;
}
.product-rightBlock {
  padding: 0 50px;
}
.product-cart {
  padding-right: 10px;
}
.btn-buy {
  border: 1px solid transparent;
  color: #403034;
  background: #ff6498;
  font-size: 20px;
  border-radius: 5px;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  align-self: center;
  padding: 5px 10px;
  width: 200px;
}
.product-desc {
  padding-top: 60px;
}
.product-desc-text {
  margin-top: 20px;
  width: 80%;
}
</style>