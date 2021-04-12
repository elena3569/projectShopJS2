<template>
  <div class="cart">
    <router-link class="btn-сart" to="/cart"
      ><button class="btn-cart" type="button">
        <p class="products-quantity">{{ amount }}</p>
        <i class="fas fa-shopping-basket"></i></button
    ></router-link>

    <div class="cart-block">
      <p class="cart-placehold" v-if="cartList.length === 0">Корзина пуста</p>
      <cart-item
        class="cart-item"
        v-for="item of cartList"
        :product="item"
        :key="item.id_product"
        :img="imgCart"
      >
      </cart-item>
      <p v-if="cartList.length != 0" class="totalSum">
        Итого: {{ totalSum }} &#8381;
      </p>
      <router-link
        class="btn-toCart"
        to="/cart"
        tag="button"
        @click="showCart = false"
        >Перейти в корзину</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import cartItem from './cartItem.vue';

export default {
  name: 'cartComp',
  data() {
    return {
      imgCart: 'https://placehold.it/50x100',
    };
  },
  components: {
    cartItem,
  },
  computed: {
    ...mapGetters(['cartList', 'totalSum', 'amount']),
  },
  methods: {
    ...mapActions(['putD', 'getBasketList']),
  },
  created() {
    this.getBasketList();
    var vm = this;
    document.addEventListener('click', function () {
      if (vm.showCart) {
        vm.showCart = !vm.showCart;
      }
    });
  },
  updated() {
    this.getBasketList();
  },
};
</script>

<style scoped>
.cart {
  display: flex;
  position: relative;
}
.btn-cart {
  position: relative;
  background: none;
  font-size: 30px;
  color: #666666;
  border: none;
  cursor: pointer;
  align-self: center;
}

.cart-block:before {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: -10px;
  right: 13px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}
.cart-block {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.62);
  border-radius: 5px;
  box-sizing: border-box;
  right: 0;
  top: 130%;
  position: absolute;
  background-color: white;
  padding: 20px;
  color: black;
  width: 300px;
  z-index: 2;
  display: none;
}

.cart:hover .cart-block {
  display: block;
}
.btn-toCart {
  background-color: #ff6498;
  border: 1px solid transparent;
  color: #403034;
  padding: 5px 10px;
  width: 100%;
  font-size: 20px;
  border-radius: 5px;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  align-self: center;
}
.btn-toCart:hover {
  background-color: #ff7598;
  border-color: #403034;
}
.products-quantity {
  border-radius: 50%;
  position: absolute;
  color: white;
  top: -6px;
  right: -8px;
  background: #f55123;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 16px;
  height: 16px;
  min-width: 16px;
  padding: 0 2px;
  text-align: center;
}
.cart-placehold {
  text-align: center;
  padding: 16px;
  color: #666666;
  font-size: 20px;
}
.cart-item {
  display: flex;
  justify-content: space-between;
}

.cart-item:not(:last-child) {
  margin-bottom: 20px;
}
.totalSum {
  text-align: center;
  padding: 10px;
}
</style>