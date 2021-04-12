<template>
  <footer class="footer center">
    <div class="footer_left">{{ year }} &copy; Brand All Rights Reserved.</div>
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
</template>

<script>
export default {
  name: 'myFooter',
  date() {
    return {
      year: '',
    };
  },
  created() {
    const date = new Date();
    this.year = date.getFullYear();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  background: #403034;
  margin-top: 40px;
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer_left {
  font-size: 16px;
  line-height: 19px;
  color: #fafafa;
}
.icons {
  display: flex;
  justify-content: space-between;
}
.icons_item:not(:last-child) {
  margin-right: 8px;
}
.icons_item {
  display: block;
  background-color: #fff;
  color: black;
  text-align: center;
  padding: 6px 12px;
}

.icons_item:hover {
  background-color: #ff6498;
  color: white;
}
</style>
