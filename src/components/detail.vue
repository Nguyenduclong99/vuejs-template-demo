<template>
  <a-layout-main>
    <!-- Header start -->
    <a-layout-header class="header">
      <div class="header__logo">
        <a href="#">
          <img src="./../assets/logo (1).jpg" />
        </a>
      </div>
      <div class="header__main">
        <a-dropdown>
          <a @click="(e) => e.preventDefault()">
            Home <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <div class="header__main--1">
        <a-dropdown>
          <a @click="(e) => e.preventDefault()">
            Menu <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">1st menu</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <div class="header__main--1">
        <a-dropdown>
          <a @click="(e) => e.preventDefault()">
            Menu <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">1st menu</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <div class="header__main--1">
        <a-dropdown>
          <a @click="(e) => e.preventDefault()">
            Menu <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">1st menu</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <div class="header__main--1">
        <a-dropdown>
          <a @click="(e) => e.preventDefault()"> About </a>
        </a-dropdown>
      </div>
      <div class="search__item">
        <input type="text" name="search" placeholder="Enter keyword..." />
        <div class="submit__button">
          <button type="submit">Search</button>
        </div>
      </div>
      <div class="cart__info">
        <a-badge count="2" :number-style="{ backgroundColor: '#52c41a' }">
          <a class="cart__a"><fa-icon icon="shopping-cart" /></a>
        </a-badge>
      </div>
    </a-layout-header>
    <!-- Header end -->
    <!-- breadcrumb-links start -->
    <ul class="breadcrumb__links">
      <li>
        <a href="#">Home</a>
      </li>
      <li><i class="fas fa-chevron-right"></i>Single Product</li>
    </ul>
    <!-- breadcrumb-links end -->
    <div class="container">
      <div class="container__col1">
        <div class="img-zoom-container">
          <img id="myimage" src="./../assets/product-11.jpg" />
          <div id="myresult" class="img-zoom-result"></div>
        </div>
        <div class="list__img">
          <img src="./../assets/product-12.jpg" />
          <img src="./../assets/product-13.jpg" />
          <img src="./../assets/product-14.jpg" />
          <img src="./../assets/product-15.jpg" />
        </div>
      </div>
      <div class="container__col2">
        <h2>Originals Kaval Windbr</h2>
        <p class="reference">
          Reference:
          <span>Ecoshop</span>
        </p>
        <div class="product__rate_wrap">
          <div class="rating__product">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <span class="wrap">
            <a class="review">
              <i class="far fa-comment-dots"></i>
              Read reviews (1)
            </a>
          </span>
        </div>
        <div class="pricing__meta">
          <ul>
            <li>€18.90</li>
          </ul>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor
          incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo
          quis nostrud exercitation ullamco
        </p>
        <div class="product__detail">
          <ul>
            <li>- 0.5 mm Dail</li>
            <li>- Inspired vector icons</li>
            <li>- Very modern style</li>
          </ul>
        </div>
        <div class="product__quantity">
          <select class="cart__plus__minus">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>
          <div class="product__addcart">
            <a href="#">+ ADD TO CART</a>
          </div>
        </div>
        <div class="product__social__info">
          <span> Share </span>
          <div class="social__info">
            <ul>
              <li>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-google"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-twitter"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- <div class="product__policy">
          <ul>
            <li>
              <img src="./../assets/policy.png" />
              <span
                >Security Policy (Edit With Customer Reassurance Module)</span
              >
            </li>
            <li>
              <img src="./../assets/policy.png" />
              <span
                >Security Policy (Edit With Customer Reassurance Module)</span
              >
            </li>
            <li>
              <img src="./../assets/policy.png" />
              <span
                >Security Policy (Edit With Customer Reassurance Module)</span
              >
            </li>
          </ul>
        </div> -->
      </div>
    </div>
    <div class="description__review">
        <div class="description__review__topbar">
        </div>
        <div class="description__review__bottom">

        </div>
    </div>
    <!-- You might like -->
        <div class="best__sells">
      <div class="section__title">
        <h2>Best Sellers</h2>
        <p>Add bestselling products to weekly line up</p>
        <div class="section__button">
          <span id="btn-pre"><i class="fas fa-chevron-left"></i></span>
          <span id="btn-nex"><i class="fas fa-chevron-right"></i></span>
        </div>
      </div>
      <div class="best__sells__container">
        <div id="product">
          <img src="./../assets/products/1.jpg" />
          <section class="icon">
            <div class="new__icon">New</div>
          </section>
          <div id="description">
            <a class="inner__link" href="">
              <span>STUDIO DESIGN</span>
            </a>
            <h3>
              <a class="product__link"
                ><router-link to="/detail"
                  >Juicy Couture Juicy Quilted Ter..</router-link
                ></a
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
              <div class="old__price">100.231$</div>
              <div class="current__price">90$</div>
              <div class="discount__price">-10$</div>
            </section>
          </div>
          <section class="add__cart">
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
        <div id="product">
          <img src="./../assets/products/2.jpg" />
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
          <section class="add__cart">
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
        <div id="product">
          <img src="./../assets/products/3.jpg" />
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
              <div class="old__price">100.67$</div>
              <div class="current__price">90$</div>
              <div class="discount__price">-10$</div>
            </section>
          </div>
          <section class="add__cart">
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
        <div id="product">
          <img src="./../assets/products/4.jpg" />
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
              <div class="old__price">100$</div>
              <div class="current__price">90$</div>
              <div class="discount__price">-10$</div>
            </section>
          </div>
          <section class="add__cart">
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
        <div id="product">
          <img src="./../assets/products/5.jpg" />
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
              <div class="old__price">100$</div>
              <div class="current__price">90$</div>
              <div class="discount__price">-10$</div>
            </section>
          </div>
          <section class="add__cart">
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
      </div>
    </div>
    <!-- you might like end -->
  </a-layout-main>
</template>





<style scoped>
.header {
  height: 79px;
  line-height: normal;
  padding: 10px 0 15px 0;
  background: #ffffff;
  display: flex;
  width: 100%;
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
  border: 1px solid black;
  border-radius: 30px 30px 30px 30px;
}
.search__item input {
  height: 47px;
  background: #fff;
  color: #b1b1b1;
  padding: 10px 120px 10px 20px;
  display: inline-block;
  width: 100%;
  font-size: 14px;
  border: none;
  border-radius: 30px;
  outline: none;
}
.submit__button {
  /* box-sizing: border-box; */
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
.submit__button button:hover {
  background-color: #214770;
}
.breadcrumb__links {
  display: flex;
}
.breadcrumb__links li {
  display: inline;
  font-size: 15px;
  padding-right: 10px;
}
.breadcrumb__links li a {
  font-size: 15px;
  padding-left: 20px;
  color: black;
}
.container {
  width: 100%;
  height: 600px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
}
.container__col1 {
  height: 600px;
  width: 50%;
  background-color: white;
  float: left;
}
.container__col2 {
  height: 600px;
  width: 50%;
  background-color: white;
  float: right;
}
* {
  box-sizing: border-box;
}

.img-zoom-container {
  position: relative;
  display: flex;
}

.img-zoom-lens {
  position: absolute;
  border: 1px solid #d4d4d4;
  width: 40px;
  height: 40px;
}

.img-zoom-result {
  float: left;
  position: absolute;
  border: 1px solid #d4d4d4;
  width: 150px;
  height: 150px;
  align-items: center;
}
.list__img {
  height: 100px;
  width: 100%;
  display: inline-block;
}
.list__img img {
  height: 100px;
  width: 106px;
  border: 1px solid#4fb68d;
  margin-left: 10px;
}
.reference {
  font-weight: 700;
  font-size: 14px;
  color: #253237;
}
.reference span {
  font-weight: 400;
}
.product__rate__wrap {
  display: flex;
  margin: 10px 0 0;
}
.rating__product {
  margin-right: 20px;
  margin-bottom: 6px;
}
.rating__product i {
  overflow: hidden;
  font-size: 18px;
  color: #fdd835;
}
.review {
  text-decoration: none;
  color: #253237;
  position: relative;
  margin-right: 8px;
  line-height: 21px;
  padding: 0;
  font-size: 14px;
  margin-bottom: 10px;
}
.pricing__meta {
  height: 64px;
  width: auto;
}
.pricing__meta ul {
  margin: 0;
  padding: 0;
}
.pricing__meta ul li {
  display: inline-block;
  font-weight: 900;
  font-size: 30px;
}
.product__detail {
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid#ebebeb;
}
.product__detail ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.product__quantity {
  display: inline-flex;
  width: 100%;
}
.cart__plus__minus {
  border: 1px solid #e8e8e8;
  display: inline-block;
  height: 48px;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 60px;
}

.product__addcart a {
  position: relative;
  padding: 0 55px;
  line-height: 48px;
  height: 48px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 30px;
  box-shadow: none;
  text-transform: uppercase;
  background: #4fb68d;
  display: block;
  color: #fff;

  margin-left: 10px;
}
.product__addcart a:hover {
  background: #253237;
  color: #fff;
}
.product__social__info {
  display: flex;
  border-bottom: 1px solid#ebebeb;
  margin-top: 10px;
  padding-bottom: 12px;
}
.product__social__info span {
  display: inline-block;
  margin-right: 10px;
  line-height: 30px;
  font-weight: 700;
  color: #253237;
  font-size: 14px;
}
.social__info {
  margin-top: 2px;
}
.social__info ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.social__info ul li {
  display: inline-block;
}
.social__info ul li a {
  display: inline-block;
  line-height: 30px;
  height: 30px;
  text-align: center;
  color: #b4b4b4;
  margin-right: 0;
  white-space: normal;
  text-indent: 0;
  overflow: hidden;
  padding: 0;
  font-size: 20px;
  width: 30px;
}
/* .product__policy {
  margin: 25px 0 0;
  height: 600px;
  width: 132px;
  display: inline-block;
} */
/* .product__policy ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
}
.product__policy ul li {
  margin-bottom: 20px;
  align-items: center;
}
.product__policy ul li img {
  margin-right: 15px;
  height: 32px;
  width: 38px;
}
.product__policy ul li span {
  box-sizing: border-box;
  display: inline-block;
} */

.description__review{
        box-sizing: border-box;
}
.description__review__topbar{
    border-bottom: none;
    position: relative;
    display: block;
    margin-bottom: 0;
    margin: auto;
    text-align: center;
    margin-top: -6px;
}
.description__review__bottom{
        overflow: hidden;
    font-size: 15px;
    background: #fff;
    line-height: 24px;
    text-align: left;
    padding: 40px 30px 30px 30px;
    border: 1px solid #ebebeb;
}
.best__sells {
  width: 100%;
  height: auto;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
}
.section__title {
  margin-bottom: 20px;
  margin-top: 50px;
  box-sizing: border-box;
  height: 60px;
  width: 90%;
  margin-left: 10px;
  margin-right: 10px;
}
.section__title h2 {
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  color: #253237;
  text-transform: capitalize;
  line-height: 16px;
  font-weight: 600;
  margin: 0 0 15px;
}
.section__title p {
  color: #888;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  position: relative;
  margin-top: 10px;
}
.section__button span {
  color: rgb(8, 1, 1);
  font-size: 60px;
  opacity: 0.6;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  margin-right: 20px;
}
.section__button #btn-pre {
  position: absolute;
  left: 95%;
  z-index: 10;
  font-size: 14px;
  line-height: 32px;
  display: block;
  font-family: "Ionicons";
  font-weight: 600;
  transform: scale(1);
  transition: all ease-in-out 500ms;
}
.section__button #btn-pre:hover {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}
.section__button #btn-nex {
  position: absolute;
  right: 0%;
  z-index: 10;
  font-size: 14px;
  line-height: 32px;
  display: block;
  font-family: "Ionicons";
  font-weight: 600;
  transform: scale(1);
  transition: all ease-in-out 500ms;
}
.section__button #btn-nex:hover {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}
.best__sells__container {
  display: flex;
}
.best__sells #product {
  position: relative;
  background: white;
  z-index: 1;
  border: 1px solid #cccccc;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 30px;
  width: 222.666px;
  margin-right: 15px;
  height: 400px;
  margin-left: 15px;
}
.best__sells #product img {
  position: relative;
  overflow: hidden;
}
.best__sells #product #description {
  padding: 20px 15px 16px 15px;
  background: #fff;
  overflow: hidden;
}
.inner__link {
  font-size: 12px;
  text-transform: uppercase;
  color: #999;
  line-height: 1;
  margin-bottom: 10px;
  display: block;
}
.product__link {
  color: black;
}
.a {
  text-decoration: none;
  transition: 0.3s;
  font-size: 2;
  color: #000;
}
.router-link{
color: #000;
}
/* .h3{
    color: #253237;
  } */
.rating__product {
  margin-bottom: 6px;
  color: #ecc823;
}
.rating__product i {
  overflow: hidden;
  font-size: 18px;
  color: #f1c80f;
}
.pricing__meta {
  box-sizing: border-box;
  display: flex;
}

.old__price {
  color: #9b9b9b;
  font-weight: 400;
  text-decoration: line-through;
  margin-right: 2px;
  font-size: 14px;
  align-items: center;
  margin-left: 10px;
}
.discount__price {
  display: inline-block;
  vertical-align: top;
  color: #fff;
  background: #cf292b;
  padding: 0 4px;
  border-radius: 5px;
  text-align: center;
  line-height: 20px;
  height: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  z-index: 4;
  margin-left: 2px;
  align-items: center;
  margin-left: 10px;
}
.current__price {
  color: #cf2929;
  align-items: center;
  margin-left: 10px;
}
.new__icon {
  color: #fcfcfc;
  margin-left: 6px;
}
.icon {
  background-color: #0090f0;
  height: 20px;
  width: 40px;
  border-radius: 10%;
  margin-left: 10px;
  display: flex;
  position: absolute;
  z-index: 1;
  top: 5%;
}
.best__sells #product:hover {
  border-color: #007bff;
}
.add__cart {
  box-sizing: border-box;
  display: flex;
  height: 50px;
}
.cart__button {
  display: inline-block;
  vertical-align: top;
  color: #fff;
  background: #ffffff;
  padding: 0 4px;
  border-radius: 5px;
  text-align: center;
  line-height: 20px;
  height: 30px;
  width: 60px;
  font-size: 12px;
  font-weight: 700;
  text-transform: capitalize;
  margin-left: 5px;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgb(142, 235, 196);
}
#cart__button__icon {
  align-items: center;
  margin-top: 5px;
  font-size: 20px;
}
.cart__button:hover {
  background-color: rgb(2, 2, 2);
}
</style>





<script>
export default {
  data: function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize =
      img.width * cx + "px " + img.height * cy + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - lens.offsetWidth / 2;
      y = pos.y - lens.offsetHeight / 2;
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) {
        x = img.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > img.height - lens.offsetHeight) {
        y = img.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
    }
    function getCursorPos(e) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  },
};
</script>