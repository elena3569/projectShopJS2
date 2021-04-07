<template>
  <div class="home">
    <catalog-list></catalog-list>
  </div>
</template>

<script>
import CatalogList from "../components/catalogList.vue";

export default {
  name: "Catalog",
  components: { CatalogList },
  // data() {},
};
</script>
