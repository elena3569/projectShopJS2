<template>
  <div class="search">
    <form action="#" class="search-form">
      <input
        type="text"
        class="search-field"
        v-model="query"
        v-on:keyup="getProductsList()"
        v-on:focus="onFocus = true"
        v-on:blur="onFocus = false"
        placeholder="Поиск по каталогу"
      />
      <button class="btn-search" type="submit">
        <i class="fas fa-search"></i>
      </button>
    </form>
    <div class="search-result" v-show="searchQuery != '' && onFocus">
      <p class="search-placehold" v-show="this.products.length === 0">
        Ничего не найдено
      </p>
      <result-item
        class="result-item"
        v-for="item of products"
        :product="item"
        :key="item.id_product"
        :img="imgCart"
      >
      </result-item>
      <router-link class="link" to="/catalog" v-show="products.length != 0"
        >К результатам &#8594;</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import resultItem from './resultItem.vue';

export default {
  name: 'searchMini',
  data() {
    return {
      onFocus: false,
      imgCart: 'https://placehold.it/200x150',
    };
  },
  components: { resultItem },
  methods: {
    ...mapActions(['setSearchQuery', 'getProductsList']),
  },
  computed: {
    ...mapGetters(['products']),
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

<style scoped >
.search {
  position: relative;
  width: 50%;
}
.btn-search {
  background-color: transparent;
  border: none;
  color: #666666;
  font-size: 1.2em;
  position: absolute;
  bottom: 5px;
  right: 0;
}

.search-form {
  position: relative;
  margin-right: 50px;
  display: inline-block;
  width: 100%;
}

.search-field:focus {
  outline: none;
}

.search-field {
  box-sizing: border-box;
  width: 100%;
  color: #666666;
  padding: 5px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #666666;
}
.search-result {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.62);
  border-radius: 5px;
  box-sizing: border-box;
  left: -5%;
  top: 130%;
  position: absolute;
  background-color: white;
  padding: 20px;
  color: black;
  width: 110%;
  z-index: 2;
}
.search-placehold {
  text-align: center;
  color: #666666;
}
.link {
  display: inline-block;
  margin-top: 10px;
  color: #666666;
}
</style>
