<template>
  <div>
    <!-- Header start -->
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
          <img id="myimage" src="./../../assets/product-11.jpg" />
          <div id="myresult" class="img-zoom-result"></div>
        </div>
        <div class="list__img">
          <img src="./../../assets/product-12.jpg" />
          <img src="./../../assets/product-13.jpg" />
          <img src="./../../assets/product-14.jpg" />
          <img src="./../../assets/product-15.jpg" />
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
        <div class="product__policy">
          <ul>
            <li>
              <img src="./../../assets/policy.png" />
              <span
                >Security Policy (Edit With Customer Reassurance Module)</span
              >
            </li>
            <li>
              <img src="./../../assets/policy-2.png" />
              <span
                >Delivery Policy (Edit With Customer Reassurance Module)</span
              >
            </li>
            <li>
              <img src="./../../assets/policy-3.png" />
              <span>Return Policy (Edit With Customer Reassurance Module)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Review start -->
    <div class="description__review">
      <div class="description__review__topbar">
        <a href="#">DESCRIPTION</a>
        <a href="#">PRODUCT DETAIL</a>
        <a href="#">REVIEW (2)</a>
      </div>
      <div class="description__review__bottom">
        <div class="product__anotherinfo__wrapper">
          <ul>
            <li><span>Weight</span> 400 g</li>
            <li><span>Dimensions</span>10 x 10 x 15 cm</li>
            <li><span>Materials</span> 60% cotton, 40% polyester</li>
            <li>
              <span>Other Info</span> American heirloom jean shorts pug seitan
              letterpress
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Review end  -->

    <!-- You might like -->
    <div class="best__sells">
      <div class="section__title">
        <h2>You Might Also Like</h2>
        <p>Add Related products to weekly line up</p>
        <div class="section__button">
          <span id="btn-pre"><i class="fas fa-chevron-left"></i></span>
          <span id="btn-nex"><i class="fas fa-chevron-right"></i></span>
        </div>
      </div>
      <div class="best__sells__container">
        <div id="product">
          <img src="./../../assets/products/1.jpg" />
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
          <img src="./../../assets/products/3.jpg" />
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
          <img src="./../../assets/products/4.jpg" />
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
          <img src="./../../assets/products/5.jpg" />
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
  </div>
</template>
<script>
export default {
  created() {},
  mounted() {
    this.imageZoom();
  },
  methods: {
    imageZoom(result) {
      var img, lens, cx, cy;
      img = document.getElementById("myimage");
      result = document.getElementById("myresult");
      lens = document.createElement("DIV");
      lens.setAttribute("class", "img__zoom__lens");
      img.parentElement.insertBefore(lens, img);

      cx = result.offsetWidth / lens.offsetWidth;
      cy = result.offsetHeight / lens.offsetHeight;
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
  },
};
</script>
<style scoped src="./style-detail.css">

</style>