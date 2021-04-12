<template>
  <div class="products">
    <p class="catalog-placehold" v-if="products.length === 0">
      Ничего не найдено
    </p>
    <catalog-item
      v-for="product of products"
      :product="product"
      :key="product.id_product"
      :img="imgCatalog"
    >
    </catalog-item>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import catalogItem from './catalogItem.vue';

export default {
  name: 'catalogList',
  components: {
    catalogItem,
  },
  data() {
    return {
      imgCatalog: 'https://placehold.it/200x150',
    };
  },
  computed: {
    ...mapGetters(['products', 'cartList']),
  },
  methods: {
    ...mapActions(['getProductsList', 'getBasketList']),
  },
  created() {
    this.getProductsList();
    this.getBasketList();
  },
};
</script>
<style scoped>
.catalog-placehold {
  display: flex;
  justify-content: center;
  color: #666666;
  font-size: 27px;
  align-items: center;
  height: 50vh;
  grid-column-start: 1;
  grid-column-end: 4;
}
.products {
  column-gap: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-template-rows: 1fr;
  justify-content: space-between;
}
</style>