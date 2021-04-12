<template>
  <header class="header center">
    <router-link to="/"
      ><img class="logo" src="../../assets/img/logo.png" alt="logo"
    /></router-link>
    <router-link v-show="show" to="/catalog">Catalog</router-link>
    <search-mini v-show="show" />
    <cart-component />
  </header>
</template>

<script>
import cartComponent from './cartComp.vue';
import searchMini from '../Search/searchCompMini.vue';

export default {
  name: 'myHeader',
  props: ['namePage'],
  computed: {
    show() {
      return this.namePage != 'Catalog';
    },
  },
  components: { cartComponent, searchMini },
};
</script>

<style scoped>
.header {
  display: flex;
  background-color: #ffc2d1;
  justify-content: space-between;
  padding-top: 18px;
  padding-bottom: 18px;
  align-items: center;
  margin-bottom: 50px;
}
.logo {
  width: 50px;
}
a {
  color: #666666;
}
</style>
