<template>
  <div class="home">
    <banner />
    <subscribe-form />
  </div>
</template>


<script>
import banner from '../components/Home/banner.vue';
import subscribeForm from '../components/Home/subscribe.vue';
export default {
  name: 'Home',
  components: { banner, subscribeForm },
};
</script>
