<template>
  <header class="header_area">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/catalog">Catalog</router-link>
    <form action="#" class="search-form">
      <input
        type="text"
        class="search-field"
        v-model="query"
        v-on:keyup="getProductsList()"
      />
      <button class="btn-search" type="submit">
        <i class="fas fa-search"></i>
      </button>
    </form>
    <cart-component />
  </header>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import cartComponent from './cartComp.vue';

export default {
  name: 'myHeader',
  components: { cartComponent },
  methods: {
    ...mapActions(['setSearchQuery', 'getProductsList']),
  },
  computed: {
    ...mapState(['searchQuery']),
    query: {
      get() {
        return this.searchQuery;
      },
      set(val) {
        return this.setSearchQuery(val);
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
