<template>
  <a-layout class="body">
    <a-layout-header class="header">
      <div class="header__logo">
        <a href="#">
          <img src="./../../assets/logo (1).jpg" />
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
    <!-- breadcrumb-links start -->
    <ul class="breadcrumb__links">
      <li>
        <a href="#">Home</a>
      </li>
      <li><i class="fas fa-chevron-right"></i>Check out</li>
    </ul>
    <!-- breadcrumb-links end -->
    <div class="row">
      <div class="col__co1">
        <div class="bill__info">
          <h3>Billing Details</h3>
          <div class="row1">
            <div class="col__lg6">
              <div class="bill__info-mb20">
                <label>First Name</label>
                <input type="text" />
              </div>
            </div>
            <div class="col__lg6">
              <div class="bill__info-mb20">
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>
            <div class="col__lg12">
              <div class="bill__info-mb20">
                <label>Company Name</label>
                <input type="text" />
              </div>
            </div>
            <div class="col__lg12">
              <div class="bill__info-mb20">
                <label>Country Name</label>
                <select class="select__option">
                  <option>Viet Nam</option>
                  <option>Laos</option>
                  <option>Campuchia</option>
                  <option>Russia</option>
                  <option>USA</option>
                  <option>Indonesia</option>
                </select>
              </div>
            </div>
            <div class="col__lg12">
              <div class="bill__info-mb20">
                <label>Street Adress</label>
                <input
                  class="bill__adress"
                  type="text"
                  placeholder="House number and street name"
                />
                <input type="text" placeholder="Apartment, suite, unit etc." />
              </div>
            </div>
            <div class="col__lg12">
              <div class="bill__info-mb20">
                <label>Town/ City</label>
                <input type="text" />
              </div>
            </div>
            <div class="col__lg6">
              <div class="bill__info-mb20">
                <label>State / County</label>
                <input type="text" />
              </div>
            </div>
            <div class="col__lg6">
              <div class="bill__info-mb20">
                <label>Postcode / ZIP</label>
                <input type="text" />
              </div>
            </div>
            <div class="col__lg6">
              <div class="bill__info-mb20">
                <label>Phone</label>
                <input type="text" />
              </div>
            </div>
            <div class="col__lg6">
              <div class="bill__info-mb20">
                <label>Email Address</label>
                <input type="text" />
              </div>
            </div>
            <div class="col__lg12">
              <h4>Additional information</h4>
              <div class="additional__info">
                <label>Order notes</label>
                <textarea
                  placeholder="Notes about your order, e.g. special notes for delivery. "
                  name="message"
                >
                </textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col__co2">
        <div class="your__order">
          <h3>Your order</h3>
          <div class="your__order-wrap">
            <div class="your__order-product-infor">
              <div class="your__order-top">
                <ul>
                  <li>Product</li>
                  <li>Total</li>
                </ul>
              </div>
              <div class="your__order-middle">
                <ul>
                  <li>
                    <span>Product Name X 1</span>
                    <span>$329 </span>
                  </li>
                  <li>
                    <span>Product Name X 2</span>
                    <span>$329 </span>
                  </li>
                </ul>
              </div>
              <div class="your__order-bottom">
                <ul>
                  <li class="your__order-shipping">Shipping</li>
                  <li>Free ship</li>
                </ul>
              </div>
              <div class="your__order-total">
                <ul>
                  <li class="order__total">Total</li>
                  <li>$329</li>
                </ul>
              </div>
              <div class="panel__heading">
                <button class="collapsible">
                  <h4>Direct bank transfer</h4>
                </button>
                <div class="content">
                  <p>
                    Please send a check to Store Name, Store Street, Store Town,
                    Store State / County, Store Postcode.
                  </p>
                </div>
                <button class="collapsible"><h4>Check payments</h4></button>
                <div class="content">
                  <p>
                    Please send a check to Store Name, Store Street, Store Town,
                    Store State / County, Store Postcode.
                  </p>
                </div>
                <button class="collapsible"><h4>Cash on delivery</h4></button>
                <div class="content">
                  <p>
                    Please send a check to Store Name, Store Street, Store Town,
                    Store State / County, Store Postcode.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="place__order">
            <a class="btn__hover" href="#">Place order</a>
          </div>
        </div>
      </div>
    </div>
    <!-- footer start  -->
    <div class="footer">
      <div class="footer__top">
        <div class="footer__tl">
          <div class="footer__logo">
            <img src="./../../assets/logo (1).jpg" />
          </div>
          <div class="footer__about">
            <div id="text-info">
              <p>
                We are a team of designers and developers that create high
                quality HTML template
              </p>
            </div>
            <div id="phone-info">
              <p>NEED HELP ?</p>
              <span>
                (+800) 345 678
                <br />
                (+800) 123 456
              </span>
            </div>
            <div id="social-icon">
              <ul>
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-google"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer__tr">
          <div id="col1">
            <h3>
              Information
              <div class="footer__herading"></div>
            </h3>
            <div class="footer__links">
              <ul>
                <li>
                  <a href="#">Delivery</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Secure Payment</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
                <li>
                  <a href="#">Stores</a>
                </li>
              </ul>
            </div>
          </div>
          <div id="col1">
            <h3>
              Custom Links
              <div class="footer__herading"></div>
            </h3>
            <div class="footer__links">
              <ul>
                <li>
                  <a href="#">Legal Notice</a>
                </li>
                <li>
                  <a href="#">Prices Drop</a>
                </li>
                <li>
                  <a href="#">New Products</a>
                </li>
                <li>
                  <a href="#">Best Sales</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">My Account</a>
                </li>
              </ul>
            </div>
          </div>
          <div id="col3">
            <h3>
              Newsletter
              <div class="footer__herading"></div>
            </h3>
            <div class="subcribe__text">
              <p>
                You may unsubscribe at any moment. For that purpose, please find
                our contact info in the legal notice.
              </p>
            </div>
            <div class="subcribe__form">
              <input type="email" placeholder="Enter your email..." />
              <div class="input__button">
                <button type="submit">Sign up</button>
              </div>
            </div>
            <div class="img__app">
              <a href="#">
                <img src="./../../assets/app_store.png" />
              </a>
              <a href="#">
                <img src="./../../assets/google_play.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__bl">
          <p id="copy-text">Copyright © . All Rights Reserved</p>
        </div>
        <div class="footer__br">
          <img src="./../../assets/payment.png" />
        </div>
      </div>
    </div>
    <!-- Footer end -->
    <backto-top></backto-top>
  </a-layout>
</template>
<style scoped src="./style-checkout.css">
</style>
<script>
import backtoTop from '../backtoTop.vue';
export default {
  components: { backtoTop },
  mounted() {
    this.collapsible();
  },
  methods: {
    collapsible() {
      var coll = document.getElementsByClassName("collapsible");
      var i;
      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
      }
    },
  },
};
</script>