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
      <li><i class="fas fa-chevron-right"></i>Cart</li>
    </ul>
    <!-- breadcrumb-links end -->
    <h3 class="cart__title">Your cart items</h3>
    <form action="#">
      <div class="table">
        <div class="table__content">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Until Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="product__thumbnail">
                  <a href="#"><img src="./../../assets/product-15.jpg" /></a>
                </td>
                <td class="product__name">
                  <a href="#">Product name</a>
                </td>
                <td class="product__price">
                  <span>$60.00</span>
                </td>
                <td class="product__quantity">
                  <div class="cart__plus__minus">
                    <!-- <div class="cart__mius">-</div>
                    <div class="cart__plus__minus__box"></div>
                    <div class="cart__plus">+</div> -->
                
                  </div>
                </td>
                <td class="product__subtotal">$80.00</td>
                <td class="product__action">
                  <a href="#">
                    <i class="fas fa-pencil-alt"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-times"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="product__thumbnail">
                  <a href="#"><img src="./../../assets/product-16.jpg" /></a>
                </td>
                <td class="product__name">
                  <a href="#">Product name</a>
                </td>
                <td class="product__price">
                  <span>$60.00</span>
                </td>
                <td class="product__quantity">
                  <div class="cart__plus__minus">
                    <!-- <div class="cart__mius">-</div>
                    <div class="cart__plus__minus__box"></div>
                    <div class="cart__plus">+</div> -->
                  </div>
                </td>
                <td class="product__subtotal">$80.00</td>
                <td class="product__action">
                  <a href="#">
                    <i class="fas fa-pencil-alt"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-times"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </form>
    <div class="cart__shiping__update">
      <div class="cont__shoping"><a href="">Continue Shopping</a></div>
      <div class="update__cart"><a href="">Update Shopping Cart</a></div>
      <div class="clear__cart"><a href="">Clear Shopping Cart</a></div>
    </div>
    <div class="cart__main">
      <div class="row">
        <div class="col1">
          <div class="cart__tax">
            <div class="title__warp">
              <h4 class="cart__bottom__title">Estimate Shipping And Tax</h4>
            </div>
            <div class="tax__warpper">
              <p>Enter your destination to get a shipping estimate.</p>
              <div class="tax__select__warpper">
                <div class="tax__select">
                  <label> * Country </label>
                  <select class="sl__country">
                    <option value="1">Viet Nam</option>
                    <option value="2">Bangladesh</option>
                    <option value="3">Albania</option>
                    <option value="4">Åland Islands</option>
                    <option value="5">Afghanistan</option>
                    <option value="6">Belgium</option>
                  </select>
                </div>
                <div class="tax__select">
                  <label> * Region / State </label>
                  <select class="sl__country">
                    <option value="1">Viet Nam</option>
                    <option value="2">Bangladesh</option>
                    <option value="3">Albania</option>
                    <option value="4">Åland Islands</option>
                    <option value="5">Afghanistan</option>
                    <option value="6">Belgium</option>
                  </select>
                </div>
                <div class="tax__seluect__mb25">
                  <label> * Zip/Postal Code </label>
                  <input type="text" />
                </div>
                <button class="cart__button2" type="submit">Get A Quote</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col1">
          <div class="cart__tax">
            <div class="title__warp">
              <h4 class="cart__bottom__title">Use Coupon Code</h4>
            </div>
            <div class="tax__warpper">
              <p style="margin-bottom: 20px">
                Enter your coupon code if you have one.
              </p>
              <div class="tax__seluect__mb25">
                <input type="text" />
              </div>
              <button class="cart__button2" type="submit">APPLY COUNPON</button>
            </div>
          </div>
        </div>
        <div class="col1">
          <div class="grand__total">
            <div class="title__warp">
              <h4 class="cart__bottom__title">Cart Total</h4>
            </div>
            <h5>Total products <span>$260.00</span></h5>
            <div class="total__shipping">
              <h5>Total Shipping</h5>
              <ul>
                <li><input type="checkbox" />Standard <span>$20.000</span></li>
                <li><input type="checkbox" />Express <span>$30.000</span></li>
              </ul>
            </div>
            <h4 class="grand__total__title">
              Grand Total <span>$260.00</span>
            </h4>
            <a href="#">Proceed to Checkout</a>
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
    <!-- Back to top start-->
      <div class="up__page" onclick="page_scroll_top()">
      <i id="icon" class="fas fa-arrow-up"></i>
    </div>
    <!-- Back to top end  -->
  </a-layout>
</template>

<style scoped>
@import "./style-cart.css";
</style>