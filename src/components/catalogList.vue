<template>
  <div class="products">
    <p v-if="products.length === 0">Ничего не найдено</p>
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
    ...mapGetters(['products']),
  },
  methods: {
    ...mapActions(['getProductsList', 'getBasketList']),
  },
  created() {
    this.getProductsList();

    this.getBasketList();
  },
  mounted() {
    console.log('catalogList', this.cartList);
  },
};
</script>
