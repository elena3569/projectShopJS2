<template>
  <div class="footerHolder">
    <footer class="footer center">
      <div class="footer_left">&copy; Brand All Rights Reserved.</div>
      <div class="footer_right">
        <div class="icons">
          <a href="#" class="icons_item">
            <i class="fab fa-facebook-f"></i>
          </a>

          <a href="#" class="icons_item">
            <i class="fab fa-instagram"></i>
          </a>

          <a href="#" class="icons_item">
            <i class="fab fa-pinterest-p"></i>
          </a>

          <a href="#" class="icons_item">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'myFooter',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.footer {
  background: darkgray;
  height: 100px;
  margin: auto;
}
.footerHolder {
  background: none repeat scroll 0 0 transparent;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
}
</style>
