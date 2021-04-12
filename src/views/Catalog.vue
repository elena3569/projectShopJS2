<template>
  <div class="catalog">
    <h1>Каталог</h1>
    <search-component
      placehold="Поиск по каталогу"
      v-bind:name-page="this.$route.name"
    ></search-component>
    <catalog-list></catalog-list>
  </div>
</template>

<script>
import CatalogList from '../components/Catalog/catalogList.vue';
import searchComponent from '../components/Search/searchComp';

export default {
  name: 'Catalog',
  components: { CatalogList, searchComponent },
};
</script>
