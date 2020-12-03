<template>
        <div class="footer">
      <div class="footer__top">
        <div class="footer__tl">
          <div class="footer__logo">
            <img src="./../assets/logo (1).jpg" />
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
                <img src="./../assets/app_store.png" />
              </a>
              <a href="#">
                <img src="./../assets/google_play.png" />
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
          <img src="./../assets/payment.png" />
        </div>
      </div>
    </div>
</template>
<style scoped>
.footer {
  padding-top: 60x;
  color: #666;
  position: relative;
  background: #efefef;
  overflow: hidden;
  height: 515px;
}
.footer__top {
  padding: 60px 0;
  height: 430px;
  background-color: #efefef;
}
.footer__tl {
  height: 370px;
  width: 391px;
  float: left;
  background-color: #efefef;
}
.footer__logo {
  height: 34px;
  margin-left: 10px;
}
.footer__logo img {
  height: 34px;
  width: 124px;
}
.footer__about {
  height: 336px;
  margin-left: 10px;
}
.footer__about #text-info {
  line-height: 24px;
  color: #666 !important;
  font-size: 14px;
  margin: 36px 0;
}
.footer__about #phone-info {
  font-size: 16px;
  margin-bottom: 5px;
  text-transform: uppercase;
  margin-left: 55px;
}
.footer__about #phone-info span {
  font-size: 22px;
  font-weight: 600;
  color: #253237;
  margin: 0;
  display: block;
  margin-top: 5px;
  line-height: 30px;
}
.footer__about #social-icon {
  padding-top: 30px;
}
.footer__about #social-icon ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline;
  align-items: center;
}
.footer__about #social-icon ul li {
  display: inline-block;
}
.footer__about #social-icon ul li a {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  color: #666;
  font-size: 24px;
  padding: 0;
  line-height: 36px;
  border-radius: 100%;
  text-align: center;
  border: none;
  z-index: 1;
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  -o-transition: all 300ms linear;
  transition: all 300ms linear;
  margin-right: 25px;
}

.footer__tr {
  height: 370px;
  width: 872px;
  float: right;
  background-color: #efefef;
  display: flex;
}
.footer__tr #col1 {
  width: 230px;
  padding-left: 20px;
  padding-right: 20px;
}
.footer__tr #col3 {
  width: 460px;
  padding-left: 20px;
  padding-right: 20px;
}
.footer__tr #col1 h3 {
  font-size: 16px;
  text-transform: capitalize;
  padding-bottom: 20px;
  margin-bottom: 25px;
  position: relative;
  color: #253237;
  border-bottom: 1px solid #e3e3e3;
  font-weight: 700;
  line-height: 24px;
}
.footer__tr #col3 h3 {
  font-size: 16px;
  text-transform: capitalize;
  padding-bottom: 20px;
  margin-bottom: 25px;
  position: relative;
  color: #253237;
  border-bottom: 1px solid #e3e3e3;
  font-weight: 700;
  line-height: 24px;
}
.footer__herading {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 60px;
  height: 2px;
  background: #4fb68d;
}
.footer__links {
  box-sizing: border-box;
}
.footer__links ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer__links ul li {
  display: block;
  margin: 0;
  line-height: 1;
  border: 0;
  padding: 0;
  font-weight: 400;
  margin-bottom: 10px;
}
.footer__links ul li a {
  font-size: 14px;
  line-height: 24px;
  padding: 0;
  display: block;
  text-transform: capitalize;
  color: #666;
  margin-bottom: 0;
  display: block;
  position: relative;
}
.footer__links ul li a:hover {
  color: #53c563;
  transition: 0.8s;
  margin-left: 10px;
}
.footer__bottom {
  height: 85px;
  background-color: #efefef;
  padding-bottom: 20px;
  display: flex;
}
.footer__bl {
  height: 34px;
  width: 391px;
  margin-left: 10px;
}
.footer__bl #copy-text {
  font-size: 15px;
  line-height: 15px;
  color: #666666;
}
.footer__br {
  margin-left: 10px;
  float: right;
}
.footer__br img {
  height: 23px;
  width: 286px;
}

.subcribe__text {
  box-sizing: border-box;
}
.subcribe__form {
  overflow: hidden;
  margin-top: 20px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 30px 30px 30px 30px;
  width: 400px;
  height: 47px;
  position: relative;
  outline: none;
}
.subcribe__form input {
  height: 47px;
  background: #fff;
  border: 0;
  color: #b1b1b1;
  padding: 10px 120px 10px 20px;
  display: inline-block;
  width: 100%;
  font-size: 14px;
  border: none;
  border-radius: 30px;
  outline: none;
}
.input__button {
  box-sizing: border-box;
  right: 0;
  z-index: 2;
  outline: none;
  position: absolute;
  top: 0;
}
.input__button button {
  background: #505d63;
  border: 0;
  box-shadow: none;
  padding: 0 20px;
  line-height: 47px;
  height: 47px;
  border-radius: 0 30px 30px 0;
  transition: all 300ms linear;
  width: 90px;
  color: #fff;
  cursor: pointer;
}
.input__button button:hover {
  background: #000000;
}
.img__app {
  margin-top: 40px;
  box-sizing: border-box;
}
.img__app a {
  margin-right: 15px;
}
.img__app a img {
  max-width: 150px;
}
.clear {
  clear: both;
}
</style>
<script>
export default {
    
}
</script>