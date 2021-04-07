<template>
  <div class="product-bio">
    <div class="left-block">
      <img :src="img" alt="Some img" />
      <div class="product-desc">
        <p class="product-title">{{ product.product_name }}</p>
        <p class="product-single-price">{{ product.price }}₽ за единицу</p>
        <div class="product-quantity">
          <button
            class="btn-quantity"
            ref="btnMinus"
            @click="changeQuantity(-1, product)"
          >
            <i
              class="fas fa-minus-circle"
              v-bind:class="{ grey: !colorBlack, black: colorBlack }"
              v-on:click="changeColor(-1)"
            ></i>
          </button>
          <p class="product-quantity-text">{{ product.quantity }}</p>
          <button class="btn-quantity" @click="changeQuantity(1, product)">
            <i class="fas fa-plus-circle" v-on:click="changeColor(1)"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="right-block">
      <p class="product-price">{{ product.quantity * product.price }}₽</p>
      <button class="del-btn" @click="deleteP(product)">&times;</button>
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
      this.changeColor(a);
    },
    deleteP(product) {
      this.$store.dispatch('upCurProd', product);
      this.deleteD();
    },
    changeColor(a) {
      if (this.curProd.quantity <= 2 && a < 0) {
        this.$store.dispatch('upColor', false);
      } else if (a > 0) {
        this.$store.dispatch('upColor', true);
      }
      console.log('changeColor', this.colorBlack);
      // console.log('vm.$refs.minus', this.$refs.btnMinus.style.color);
      // this.$refs.btnMinus.style.color = 'black';
    },
  },
};
</script>
<style scoped>
.black {
  color: black;
}
.grey {
  color: grey;
}
</style>