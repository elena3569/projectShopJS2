<template>
  <div class="cart">
    <h1>Корзина</h1>
    <search-component
      placehold="Поиск по корзине"
      v-bind:name-page="this.$route.name"
    ></search-component>
    <cart-list></cart-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import searchComponent from '../components/Search/searchComp';
import cartList from '../components/Cart/cartList.vue';

export default {
  name: 'Cart',
  components: {
    cartList,
    searchComponent,
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
<style scoped>
</style>