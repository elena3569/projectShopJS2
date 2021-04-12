<template>
  <section class="banner">
    <div class="container">
      <div class="banner__img">
        <img class="img-fluid" src="../../assets/img/home/banner.png" alt="" />
      </div>
      <div class="banner__content">
        <h1 class="banner__header">Browse Our Premium Product</h1>
        <p class="banner__text">
          Us which over of signs divide dominion deep fill bring they're meat
          beho upon own earth without morning over third. Their male dry. They
          are great appear whose land fly grass.
        </p>
        <router-link class="banner__btn" to="/catalog" tag="button"
          >В каталог</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'banner',
};
</script>

<style scoped>
.container {
  background: url('../../assets/img/home/banner-bcg3.jpg');
  background-size: 100%;
  /* padding: 50px 50px 0 50px; */
  display: flex;
}
.banner__content {
  padding: 50px;
  width: 90%;
}
.banner__header {
  width: 60%;
}
.banner__text {
  width: 60%;
}
.banner__btn {
  margin-top: 40px;
  padding: 5px 10px;
  background-color: #ff6498;
  border: 1px solid transparent;
  color: #403034;
  padding: 5px 10px;
  font-size: 20px;
  border-radius: 30px;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  align-self: center;
}
.banner__btn:hover {
  background-color: #ff7598;
  border-color: #403034;
}
</style>