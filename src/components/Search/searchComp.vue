<template>
  <form action="#" class="search-form">
    <input
      type="text"
      class="search-field"
      v-model="query"
      v-on:keyup="getProductsList()"
      :placeholder="placehold"
    />
    <button class="btn-search" type="submit">
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'searchComponent',
  props: ['placehold', 'namePage'],
  methods: {
    ...mapActions([
      'setSearchQuery',
      'getProductsList',
      'getBasketList',
      'setSearchQueryCart',
    ]),
  },
  computed: {
    ...mapState(['searchQuery', 'searchQueryInCart']),
    query: {
      get() {
        if (this.namePage === 'Cart') {
          return this.searchQueryInCart;
        } else {
          return this.searchQuery;
        }
      },
      set(val) {
        if (this.namePage === 'Cart') {
          return this.setSearchQueryCart(val);
        } else {
          return this.setSearchQuery(val);
        }
      },
    },
  },
};
</script>

<style scoped>
.btn-search {
  background-color: transparent;
  border: none;
  color: #666666;
  font-size: 1.7em;
  position: absolute;
  bottom: 5px;
  right: 0;
}

.search-form {
  position: relative;
  width: 70%;
  height: 40px;
  display: inline-block;
  margin: 0 15% 40px;
}

.search-field:focus {
  outline: none;
}

.search-field {
  box-sizing: border-box;
  width: 100%;
  color: #666666;
  padding: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid #666666;
}
</style>