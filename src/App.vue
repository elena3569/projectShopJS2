<template>
  <div id="app" class="wrapper">
    <div class="top">
      <my-header v-bind:name-page="this.$route.name"></my-header>
      <div class="center"><router-view /></div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './components/Header/header.vue';
import myFooter from './components/footer.vue';

export default {
  name: 'app',
  components: {
    myHeader,
    myFooter,
  },
};
</script>

<style src="./assets/css/style.css"></style>
<style src="./assets/css/normalize.css"></style>
<style scoped>
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.top {
  flex-grow: 1;
}
</style>