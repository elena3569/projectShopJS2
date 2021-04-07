<template>
  <div>
    <catalog-item v-for="product of filtered" :product="product" :key="product.id_product">
    </catalog-item>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import catalogItem from "../components/catalogItem.vue";

export default {
  name: "searchResult",
  components: {
    catalogItem,
  },
  computed: {
    ...mapGetters(["filtered"]),
  },
  methods: {
    ...mapActions(["getFilteredProducts"]),
  },
  created() {
    this.getFilteredProducts();
  },
};
</script>
