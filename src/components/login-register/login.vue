<template>
  <a-layout class="body">
    <!-- header start -->
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
    <!-- header end -->
    <!-- breadcrumb-links start -->
    <ul class="breadcrumb__links">
      <li>
        <a href="#">Home</a>
      </li>
      <li><i class="fas fa-chevron-right"></i>Login/Register</li>
    </ul>
    <!-- breadcrumb-links end -->
    <!-- container start -->
    <div class="tab__content">
      <div class="cont">
        <div class="form__sign__in">
          <h2>Welcome back,</h2>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <p class="forgot__pass">Forgot password?</p>
          <button type="button" class="submit">Sign In</button>
          <button type="button" class="fb-btn">
            Connect with <span>facebook</span>
          </button>
        </div>
        <div class="sub__cont">
          <div class="img">
            <div class="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div class="img__text m--in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div class="img__btn">
              <span class="m--up">Sign Up</span>
              <span class="m--in">Sign In</span>
            </div>
          </div>
          <div class="form sign-up">
            <h2>Time to feel like home,</h2>
            <label>
              <span>Name</span>
              <input type="text" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
            <button type="button" class="submit">Sign Up</button>
            <button type="button">
              Join with facebook
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- container end -->
    <!-- footer start -->
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
    <!-- footer end -->
        <backto-top></backto-top>
  </a-layout>
</template>
<style scoped src="./style-login.css">
</style>

<script>
export default {
  mounted() {
    this.btnlr();
  },
  methods: {
    btnlr() {
      document
        .querySelector(".img__btn")
        .addEventListener("click", function () {
          document.querySelector(".cont").classList.toggle("s--signup");
        });
    },
  },
};
</script>

