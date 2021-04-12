<template>
  <section class="subscribe-position">
    <div class="container">
      <div class="subscribe center">
        <h3 class="subscribe__title">Get Update From Anywhere</h3>
        <p class="subscribe__text">
          Bearing Void gathering light light his eavening unto dont afraid
        </p>

        <form action="#" class="subscribe-form">
          <input
            class="form-input"
            type="email"
            name="EMAIL"
            placeholder="Enter your email"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'Your Email Address '"
          />
          <button class="subscribe__btn" type="submit">Subscribe Now</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'subscribeForm',
};
</script>

<style scoped>
.subscribe {
  padding: 45px 10px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px -5px 20px 0px rgb(56 74 235 / 10%);
  margin: 30px 15% 0;
  width: 70%;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.subscribe__title {
  font-size: 25px;
  padding-bottom: 20px;
}
.subscribe__text {
  color: #666666;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 40px;
}
.form-input {
  height: 40px;
  padding: 0 10px;
  font-size: 16px;
  line-height: 1.5;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 30px 0 0 30px;
}
.form-input:focus {
  outline: none;
}
.subscribe__btn {
  height: 40px;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #ff6498;
  border: 1px solid transparent;
  color: #403034;
  padding: 5px 10px;
  font-size: 15px;
  border-radius: 0 30px 30px 0;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  align-self: center;
}
.subscribe__btn:hover {
  background-color: #ff7598;
  border-color: #403034;
}
</style>