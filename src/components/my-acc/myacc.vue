<template>
  <div>
    <cpt-header></cpt-header>
    <!-- breadcrumb-links start -->
    <ul class="breadcrumb__links">
      <li>
        <a href="#">Home</a>
      </li>
      <li><i class="fas fa-chevron-right"></i>My Account</li>
    </ul>
    <!-- breadcrumb-links end -->
    <div class="myacc__container">
      <!-- <div class="row">
    <div class="col">
        <div class="myacc__wrapper">
            <div class="myacc__single">
                <h3 class="collapsible">
                    <span>1.</span>
                </h3>
            </div>
        </div>
    </div>
</div> -->
      <!-- <h1>My Information</h1>
      <h2>Username: {{ username }}</h2>
      <h3>Age: {{ age }}</h3>
      <div>
        <input v-model="usernameInput" />
        <button @click="changeUsername">Change Usernme</button>
      </div>
    </div> -->
           <div id="product">
          <img src="./../../assets/products/2.jpg" />
          <section class="icon">
            <div class="new__icon">New</div>
          </section>
          <div id="description">
            <a class="inner__link" href="">
              <span>STUDIO DESIGN</span>
            </a>
            <h3>
              <a href="single-product.html" class="product__link"
                >Juicy Couture Juicy Quilted Ter..</a
              >
            </h3>
            <div class="rating__product">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <section class="pricing__meta">
              <div class="old__price">100.23$</div>
              <div class="current__price">90$</div>
              <div class="discount__price">-10$</div>
            </section>
          </div>
          <section class="add__to__link">
            <div class="cart__button">
              <a href="cart.com"
                ><i id="cart__button__icon" class="fas fa-shopping-cart"></i
              ></a>
            </div>
            <div class="cart__button">
              <a href="cart.com"
                ><i id="cart__button__icon" class="fas fa-random"></i
              ></a>
            </div>
            <div class="cart__button">
              <a href="cart.com"
                ><i id="cart__button__icon" class="far fa-heart"></i
              ></a>
            </div>
          </section>
        </div>


        
    <div v-for="item in info" v-bind:key="item">
        <h1>ProductName:{{item.title}} </h1>
    </div>
    <cpt-footer></cpt-footer>
  </div>
  </div>
</template>
<style scoped src="./style-myacc.css">
</style>
<script>
import CptFooter from "../cptFooter.vue";
import cptHeader from "../cptHeader.vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
export default {
  components: { cptHeader, CptFooter },
  data() {
    return {
      usernameInput: "",
      info: null,
    };
  },
  mounted(){
axios
      .get('https://fakestoreapi.com/products')
      .then(response => (this.info = response.data))
  },
  name: "Infomation",
  computed: {
    username() {
      return this.$store.state.username;
    },
    age() {
      return this.$store.state.age;
    },
  },
  methods: {
    changeUsername() {
      this.$store.dispatch("handleChangeUsername", this.usernameInput);
    },
  },
};
</script>