<template>
  <div id="app">
    <my-header></my-header>
    <router-view class="container" />
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './components/header.vue';
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