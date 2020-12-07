<template>
<div>     
    <a-layout-header class="header" id="navbar">
      <div class="header__logo">
        <a href="#">
          <img src="./../assets/logo (1).jpg" />
        </a>
      </div>
      <div class="menu">
        <nav>
          <ul>
            <li>
              <a href="#">Home<i class="fas fa-chevron-down"></i></a>
              <ul>
                <li>
                  <a href="#">Home1.1<i class="fas fa-chevron-right"></i></a>
                  <ul>
                    <li><a href="/home">Home2.1</a></li>
                    <li><a href="/home">Home2.2</a></li>
                    <li><a href="#">Home2.3</a></li>
                    <li><a href="#">Home2.4</a></li>
                  </ul>
                </li>
                <li>
                  <a>Home1.2<i class="fas fa-chevron-right"></i></a>
                </li>
                <li>
                  <a href="#">Home1.3<i class="fas fa-chevron-right"></i></a>
                </li>
                <li>
                  <a href="#">Home1.4<i class="fas fa-chevron-right"></i></a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/list-item">List</a>
            </li>
            <li>
              <a href="/cart">Cart<i class="fas fa-chevron-down"></i></a>
            </li>
            <li>
              <a href="/about">About<i class="fas fa-chevron-down"></i></a>
            </li>
            <li>
              <a href="/login">Login/Register</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="cart__info" style="width: 300px">
        <a-badge  id="span" count="1" :number-style="{ backgroundColor: '#52c41a' }">
          <a class="cart__a"><fa-icon icon="random" /></a>
        </a-badge>
        <a-badge  id="span" count="1" :number-style="{ backgroundColor: '#52c41a' }">
          <a class="cart__a"><fa-icon icon="heart" /></a>
        </a-badge>
        <div class="dropdown__cart">
          <a-badge  id="span" count="2" :number-style="{ backgroundColor: '#52c41a' }">
            <a class="cart__a" @click="myFunction()">
              <fa-icon icon="shopping-cart" />
            </a>
            <div id="myDropdown" class="dropdown__cart-content">
              <button @click="offMyFunction()">x</button>
              <ul>
                <li class="single__shopping-cart">
                  <div class="product__img-cart">
                    <a href="/detail">
                      <img src="./../assets/p1.jpg" />
                    </a>
                    <span class="product__quantity-cart">2x</span>
                  </div>
                  <div class="product__title-cart">
                    <h4><a href="#">Juicy Couture...</a></h4>
                    <span>9.999$</span>
                    <div class="product__delete-cart">
                      <a href="#"><i class="fas fa-times-circle"></i></a>
                    </div>
                  </div>
                </li>
                <li class="single__shopping-cart">
                  <div class="product__img-cart">
                    <a href="/detail">
                      <img src="./../assets/p1.jpg" />
                    </a>
                    <span class="product__quantity-cart">2x</span>
                  </div>
                  <div class="product__title-cart">
                    <h4><a href="#">Juicy Couture...</a></h4>
                    <span>9.999$</span>
                    <div class="product__delete-cart">
                      <a href="#"><i class="fas fa-times-circle"></i></a>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="shopping__total-cart">
                <h4>Subtotal:<span>$20.00</span></h4>
                <h4>Shipping:<span>$7.00</span></h4>
                <h4>VAT:<span>$5.00</span></h4>
                <h4 style="color: #253237; font-weight:500;">Total:<span style="color: #253237; font-weight:500;">$32.00</span></h4>
              </div>
              <div class="shopping__btn-checkout">
                <a href="/checkout">Checkout</a>
              </div>
            </div>
          </a-badge>
        </div>
      </div>
    </a-layout-header>
    <div class="up__page" id="myBtn" @click="topFunction">
    <i id="icon" class="fas fa-arrow-up"></i>
  </div>
  </div>
</template>
<style scoped>
/* .header {
  height: 79px;
  line-height: normal;
  padding: 10px 0 15px 0;
  background: #ffffff;
  display: flex;
  width: 100%;
  position: none;
  z-index: 999999999999999;
}
.header__logo {
  margin-top: 10px;
  height: 34px;
  padding: 0 20px;
}
.header__main {
  display: flex;
  align-items: center;
  margin-left: 80px;
}
.header__main--1 {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.header__main a {
  display: block;
  padding: 10px 15px;
  color: #253237;
  font-weight: 700;
  position: relative;
}
.header__main--1 a {
  display: block;
  padding: 10px 15px;
  color: #253237;
  font-weight: 700;
  position: relative;
  height: auto;
}
.header__main a:hover {
  color: #4fb68d;
}
.header__main--1 a:hover {
  color: #4fb68d;
}
.header__account {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  padding-top: 5%;
}
.contact__link {
  float: left;
  position: relative;
  margin-top: 5px;
}
.cart__info {
  margin-top: 10px;
  margin-left: 20px;
}
.cart__a {
  display: inline-block;
  font-size: 26px;
  font-family: "Ionicons";
  vertical-align: middle;
  margin-right: 15px;
  font-weight: 400;
  color: #253237;
}
.toggle-menu {
  display: none;
  font-size: 2rem;
  color: #fff;
  margin: 10px 10px 0 0;
  transition: 0.2s;
}
.search__item {
  overflow: hidden;
  width: 300px;
  height: 47px;
  position: relative;
  border-radius: 30px 30px 30px 30px;
  border: none;
}
.search__item input {
  height: 47px;
  background: #fff;
  color: #b1b1b1;
  padding: 10px 120px 10px 20px;
  display: inline-block;
  width: 100%;
  font-size: 14px;
  border-radius: 30px;
  outline: none;
  border: 1px solid black;
}
.submit__button {

  right: 0;
  z-index: 2;
  outline: none;
  position: absolute;
  top: 0;
}
.submit__button button {
  background: black;
  border: 0;
  box-shadow: none;
  padding: 0 20px;
  height: 47px;
  border-radius: 0 30px 30px 0;
  transition: all 300ms linear;
  width: 90px;
  color: #fff;
  cursor: pointer;
}
.Fixed {
  position: fixed;
  top: 0;
  box-shadow: #253237;
} */

.header {
  height: 79px;
  line-height: normal;
  padding: 10px 0 15px 0;
  background: #ffffff;
  width: 100%;
  z-index: 999999999999999;
  position: none;
  transition: all 1.5s;
}
.header__logo {
  margin-top: 10px;
  height: 34px;
  padding: 0 20px;
}
.menu {
  padding-left: 20px;
  padding-top: 5px;
  width: 800px;
}
nav {
  background-color: white;
}
nav ul li a {
  color: #253237;
  font-weight: 700;
  padding: 0px 15px;
}
nav ul {
  list-style: none;
}
nav ul li {
  position: relative;
}
nav > ul > li {
  display: inline-block;
  line-height: 40px;
}
nav > ul > li > a {
  display: block;
  line-height: 30px;
  padding: 5px 40px;
}
/* icon down */
nav > ul > li > a > svg {
  margin-left: 5px;
  padding-top: 2px;
}
/* dropdown link */
ul > li > ul > li > a {
  font-weight: 100;
}
/* icon right */
ul > li > ul > li > a > svg {
  margin-left: 90px;
}
ul > li > ul > li {
  border-bottom: 0.3px solid #dadada;
}
/* sub menu */
nav ul ul {
  width: 200px;
  position: absolute;
  z-index: 10;
  background-color: white;
  top: 100%;
  left: 0;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 0 3.76px 0.24px rgba(0, 0, 0, 0.15);
}
nav ul ul li:hover {
  transition: 0.3s;
  margin-left: 10px;
}
nav ul ul li a:hover {
  color: #35b453;
}
nav ul li:hover {
  color: #35b453;
}
/* hover show submenu */
nav ul li:hover > ul {
  opacity: 1;
  visibility: visible;
  transition: all 0.8s;
}
/* hien menu cap 2 */
nav ul ul ul {
  top: 0;
  left: 100%;
}

.header__account {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  padding-top: 5%;
}
.contact__link {
  float: left;
  position: relative;
  margin-top: 5px;
}
.cart__info {
  margin-left: 100px;
}
.cart__info #span {
  margin: 15px 10px;
}
.cart__a {
  display: inline-block;
  font-size: 26px;
  font-family: "Ionicons";
  vertical-align: middle;
  font-weight: 400;
  position: relative;
}
.dropdown__cart {
  position: relative;
  display: inline-block;
}
.dropdown__cart-content {
  display: none;
  position: absolute;
  background-color: #fff;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 100;
  width: 350px;
  top: 40px;
  left: auto;
  right: 0;
  height: auto;
  padding: 0 30px 30px 30px;
}
.dropdown__cart-content button {
  background-color: rgb(39, 40, 43);
  color: white;
  height: 20px;
  width: 20px;
  border: 1px solid rgb(39, 40, 43);
  margin-left: 280px;
  margin-top:5px;
}
.dropdown__cart-content ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.single__shopping-cart {
  padding: 15px 0px;
  border-bottom: 1px solid #ebebeb;
  overflow: hidden;
}
.product__img-cart {
  float: left;
  margin: 0 10px 0 0;
  position: relative;
  width: 85px;
}
.product__quantity-cart {
    background-color: #0090f0;
    position: absolute;
    top: 5px;
    left: 5px;
    min-width: 20px;
    line-height: 20px;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    padding: 0;
    text-align: center;
    color: #fff;
    font-size: 12px;
    display: inline-block;
}
.single__shopping-cart a img {
  width: 85px;
  height: 85px;
  border: 1px solid #ebebeb;
}
.product__title-cart {
  overflow: hidden;
  position: relative;
  padding: 0 20px 0 0px;
}
.product__title-cart > span {
  display: block;
  margin: 5px 0 0;
  font-size: 14px;
  font-weight: 400;
  color: #555;
}
.product__title-cart h4 {
  margin: 0;
  font-weight: 500;
  line-height: 1.2;
}
.product__title-cart h4 a {
  display: block;
  text-transform: capitalize;
  font-size: 14px;
  line-height: 20px;
  color: #253237;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product__delete-cart a {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  color: #888;
  font-size: 18px;
}
.shopping__total-cart{
  margin: 25px 0;
}
.shopping__total-cart h4{
    font-weight: 400;
    color: #9b9b9b;
    font-size: 16px;
    text-transform: capitalize;
    line-height: 25px;
}
.shopping__total-cart h4>span{
  float: right;
    font-weight: 400;
    color: #9b9b9b;
    font-size: 16px;
    text-transform: capitalize;
}
.shopping__btn-checkout{
  text-align: center;
}
.shopping__btn-checkout a{
    display: block;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
    border: none;
    color: #272727;
    box-shadow: none;
    padding: 10px 15px;
    line-height: 28px;
    border: none;
    background: #ebebeb;
    border-radius: 30px;
}
.shopping__btn-checkout a:hover{
  background: #0090f0;
  color: #fff;
  transition: all .3s;
}
.show {
  display: block;
}

.up__page {
  width: 50px;
  height: 50px;
  color: #fff;
  position: fixed;
  right: 20px;
  bottom: 60px;
  background-color: #4fb68d;
  border-radius: 30px;
  cursor: pointer;
  z-index: 9999;
  display: none;
  opacity: 0.6;
}
.up__page #icon {
  display: block;
  font-size: 22px;
  margin: 13px 10px 8px 15px;
}
.up__page:hover {
  opacity: 1;
}
</style>
<script>
export default {
  mounted() {
   this.pinHeader();
  },
  methods: {
    pinHeader() {
      // var header =  document.getElementById("navbar");
      var mybutton = document.getElementById("myBtn");
      window.onscroll = function() { myFunction() };
      function myFunction() {
        if (
          document.body.scrollTop > 10 ||
          document.documentElement.scrollTop > 10
        ) {
          document.getElementById("navbar").style.position = "fixed";
          mybutton.style.display = "block";
          document.getElementById("navbar").style.boxShadow = " 3px 3px 3px #8D8B8A";
        } else {
           document.getElementById("navbar").style.position = "initial";
          mybutton.style.display = "none";
           document.getElementById("navbar").style.boxShadow = "none";
        }
      }
    },
    topFunction: function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    },
    offMyFunction() {
      document.getElementById("myDropdown").classList.remove("show");
    },
  },
};
</script>
