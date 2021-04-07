<template>
  <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
    <input type="text" class="search-field" v-model="userSearch" />
    <button class="btn-search" type="submit">
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>
<script>
export default {
  name: "filter",
  data() {
    "";
  },
  methods: {
    filter(value) {
      const regexp = new RegExp(value, "i");
      this.filtered = this.products.filter((el) => regexp.test(el.product_name));
    },
  },
};
</script>
