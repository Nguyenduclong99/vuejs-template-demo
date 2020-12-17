<template>
  <div>
    <cpt-header></cpt-header>
    <!-- Header end -->
    <!-- menu start -->
    
    <div class="nav__content">
      <div class="dropdown">
        <div class="dropbtn">
          <fa-icon icon="bars" /> Loại sản phẩm
          <a-icon style="font-size: 10px" type="down" />
        </div>
        <div class="dropdown-content">
          <a href="#">IPhone</a>
          <a href="#">Samsung</a>
          <a href="#">Oppo</a>
          <a href="#">.....</a>
        </div>
      </div>
      <div class="search__form">
        <input type="text" name="search" placeholder="Enter keyword..." />
        <div class="submit__button">
          <button type="submit">Search</button>
        </div>
      </div>
      <div class="contact__wrap">
        <div class="contact__icon">
          <img src="./../assets/icon_contact.png" />
          <div class="contact__phone">
            <p>Call us:</p>
            <a>(+800)345678</a>
          </div>
        </div>
      </div>
    </div>
    <!-- menu end -->
    <!-- Slide start -->
    <div class="slide__item">
      <div class="dieuhuong">
        <span @click="plusDivs(-1)">
          <i class="fa fa-chevron-circle-left"></i>
        </span>
        <span @click="plusDivs(1)"
          ><i
            id="islide"
            class="fa fa-chevron-circle-right"
            style="cursor: pointer"
          ></i
        ></span>
      </div>
      <div class="chuyen-slide">
        <h2>This shop you need</h2>
        <h1>In here</h1>
        <img class="mySlides" src="./../assets/sample-17.jpg" />
        <img class="mySlides" src="./../assets/sample-18.jpg" />
        <img class="mySlides" src="./../assets/sample-21.jpg" />
        <img class="mySlides" src="./../assets/sample-17.jpg" />
        <img class="mySlides" src="./../assets/sample-18.jpg" />
      </div>
    </div>
    <!-- Silde end -->
    <!-- area home start -->
    <div class="area__home">
      <div class="area__component">
        <img src="./../assets/policy.png" />
        <div class="area__text">
          <h4>Free Shipping</h4>
          <p>On all orders over $75.00</p>
        </div>
      </div>
      <div class="area__component">
        <img src="./../assets/static-icons-2.png" />
        <div class="area__text">
          <h4>Free Returns</h4>
          <p>Returns are free within 9 days</p>
        </div>
      </div>
      <div class="area__component">
        <img src="./../assets/static-icons-3.png" />
        <div class="area__text">
          <h4>100% Payment Secure</h4>
          <p>Your payment are safe with us.</p>
        </div>
      </div>
      <div class="area__component">
        <img src="./../assets/static-icons-4.png" />
        <div class="area__text">
          <h4>Support 24/7</h4>
          <p>Contact us 24 hours a day</p>
        </div>
      </div>
    </div>
    <!-- area home end -->
    <!-- Banner home start -->
    <div class="banner__home">
      <div class="banner__home1">
        <div class="banner__left1">
          <img src="./../assets/24.jpg" />
        </div>
        <div class="banner__left2">
          <img src="./../assets/25.jpg" />
        </div>
      </div>
      <div class="banner__home2">
        <img src="./../assets/23.jpg" />
      </div>
    </div>
    <!-- Banner home end -->
    <div class="clear"></div>
    <!-- Best Seller start -->
    <div class="best__sells">
      <div class="section__title">
        <h2>Best Sellers</h2>
        <p>Add bestselling products to weekly line up</p>
        <!-- <div class="section__button">
          <span id="btn-pre"><i class="fas fa-chevron-left"></i></span>
          <span id="btn-nex"><i class="fas fa-chevron-right"></i></span>
        </div> -->
      </div>
      <div class="best__sells__container">
        <div id="product" v-for="(item, product) in infor" v-bind:key="product">
          <img v-bind:src="item.image" />
          <section class="icon">
            <div class="new__icon">New</div>
          </section>
          <div id="description">
            <a class="inner__link" href="">
              <span>STUDIO DESIGN</span>
            </a>
            <h3>
              <!-- lấy id gửi qua routerLink -->
              <a class="product__link"
                ><router-link :to="`/detail/${item.id}`">{{ item.title }}</router-link></a
              >
                <!-- lấy id và tên gửi qua routerLink -->
                <!-- <a class="product__link"
                ><router-link
                  :to="{
                    name: 'Detail',
                    params: { id: item.id },
                    query: { name: item.title }
                  }"
                  >{{ item.title }}</router-link
                ></a
              > -->
            </h3>
            <div class="rating__product">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <section class="pricing__meta">
              <div class="old__price">{{ item.price }}$</div>
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
        <!-- <div id="product">
          <img src="./../assets/products/2.jpg" />
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
        </div> -->
      </div>
    </div>
    <div class="clear"></div>
    <!-- Best Seller end -->
    <!-- Popular category start -->
    <div class="popular__category">
      <div class="section__title">
        <h2>Popular categories</h2>
        <p>Add bestselling products to weekly line up</p>
        <!-- <div class="section__button">
          <span id="btn-pre"><i class="fas fa-chevron-left"></i></span>
          <span id="btn-nex"><i class="fas fa-chevron-right"></i></span>
        </div> -->
      </div>
      <div class="category__slider">
        <div class="category__component">
          <img src="./../assets/products/thumb-1.jpg" />
          <div class="desc__category">
            <div class="name__category">
              <h3>Adidas</h3>
            </div>
            <span class="number__product">17 Products</span>
            <a href="index.html">
              Shop now
              <i id="shop__button" class="far fa-hand-point-right"></i>
            </a>
          </div>
        </div>
        <div class="category__component">
          <img src="./../assets/products/thumb-2.jpg" />
          <div class="desc__category">
            <div class="name__category">
              <h3>Adidas</h3>
            </div>
            <span class="number__product">17 Products</span>
            <a href="index.html">
              Shop now
              <i id="shop__button" class="far fa-hand-point-right"></i>
            </a>
          </div>
        </div>
        <div class="category__component">
          <img src="./../assets/products/thumb-4.jpg" />
          <div class="desc__category">
            <div class="name__category">
              <h3>Adidas</h3>
            </div>
            <span class="number__product">17 Products</span>
            <a href="index.html">
              Shop now
              <i id="shop__button" class="far fa-hand-point-right"></i>
            </a>
          </div>
        </div>
        <div class="category__component">
          <img src="./../assets/products/thumb-5.jpg" />
          <div class="desc__category">
            <div class="name__category">
              <h3>Adidas</h3>
            </div>
            <span class="number__product">17 Products</span>
            <a href="index.html">
              Shop now
              <i id="shop__button" class="far fa-hand-point-right"></i>
            </a>
          </div>
        </div>
        <div class="category__component">
          <img src="./../assets/products/thumb-6.jpg" />
          <div class="desc__category">
            <div class="name__category">
              <h3>Adidas</h3>
            </div>
            <span class="number__product">17 Products</span>
            <a href="index.html">
              Shop now
              <i id="shop__button" class="far fa-hand-point-right"></i>
            </a>
          </div>
        </div>
        <div class="category__component">
          <img src="./../assets/products/thumb-3.jpg" />
          <div class="desc__category">
            <div class="name__category">
              <h3>Laptop</h3>
            </div>
            <span class="number__product">17 Products</span>
            <a href="index.html">
              Shop now
              <i id="shop__button" class="far fa-hand-point-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="clear"></div>
    <!-- Popular category end -->
    <!-- New arrivals start -->
    <div class="new__arrivals">
      <div class="section__title">
        <h2>New Arrivals</h2>
        <p>Add bestselling products to weekly line up</p>
        <!-- <div class="section__button">
          <span id="btn-pre"><i class="fas fa-chevron-left"></i></span>
          <span id="btn-nex"><i class="fas fa-chevron-right"></i></span>
        </div> -->
      </div>
      <div class="new__product__container">
        <div class="product-new">
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
                ><router-link to="/detail"></router-link
              ></a>
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
        <div class="product-new">
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
        <div class="product-new">
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
        <div class="product-new">
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
        <div class="product-new">
          <img src="./../assets/products/6.jpg" />
          <section class="icon">
            <div class="new__icon">New</div>
          </section>
          <div id="description">
            <a class="inner__link" href="">
              <span>STUDIO DESIGN</span>
            </a>
            <h3>
              <a href="single-product.html" class="product__link"
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
      </div>
      <div class="clear"></div>
      <div class="new__product__container">
        <div class="product-new">
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
        <div class="product-new">
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
        <div class="product-new">
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
        <div class="product-new">
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
        <div class="product-new">
          <img src="./../assets/products/6.jpg" />
          <section class="icon">
            <div class="new__icon">New</div>
          </section>
          <div id="description">
            <a class="inner__link" href="">
              <span>STUDIO DESIGN</span>
            </a>
            <h3>
              <a href="single-product.html" class="product__link"
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
              <div class="old__price">100.67$</div>
              <div class="current__price">90$</div>
              <div class="discount__price">-10$</div>
            </section>
            <div class="clear"></div>
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
    <!-- New arrivals end -->
    <!-- Brand area start -->
    <section class="brand__area">
      <div class="brand__slide"><img src="./../assets/1.jpg" /></div>
      <div class="brand__slide"><img src="./../assets/2.jpg" /></div>
      <div class="brand__slide"><img src="./../assets/3.jpg" /></div>
      <div class="brand__slide"><img src="./../assets/4.jpg" /></div>
      <div class="brand__slide"><img src="./../assets/5.jpg" /></div>
    </section>
    <!-- Brand area end -->
    <!-- Footer start -->
    <cpt-footer></cpt-footer>
    <!-- Footer end -->
  </div>
</template>
<script>
import CptFooter from "./cptFooter.vue";
import cptHeader from "./cptHeader.vue";
import axios from "axios";
import VueAxios from "vue-axios";
export default {
  components: { cptHeader, CptFooter },
  data() {
    return {
      slideIndex: 1,
      infor: [],
    };
  },
  mounted() {
    this.autochangeSlide();
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((response) => (this.infor = response.data));
  },
  methods: {
    showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      if (n > x.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = x.length;
      }
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[this.slideIndex - 1].style.display = "block";
    },
    plusDivs(n) {
      this.showDivs((this.slideIndex += n));
    },
    autochangeSlide() {
      setInterval(() => {
        this.plusDivs(1);
      }, 5000);
    },
  },
};
</script>

<style scoped>
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
  margin-top: 5px;
}
.dropdown__cart-content ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.single__shopping-cart {
  padding: 30px 0px;
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
.shopping__total-cart {
  margin: 25px 0;
}
.shopping__total-cart h4 {
  font-weight: 400;
  color: #9b9b9b;
  font-size: 16px;
  text-transform: capitalize;
  line-height: 25px;
}
.shopping__total-cart h4 > span {
  float: right;
  font-weight: 400;
  color: #9b9b9b;
  font-size: 16px;
  text-transform: capitalize;
}
.shopping__btn-checkout {
  text-align: center;
}
.shopping__btn-checkout a {
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
.shopping__btn-checkout a:hover {
  background: #0090f0;
  color: #fff;
  transition: all 0.3s;
}
.show {
  display: block;
}
.body {
  background-color: white;
  font-family: sans-serif;
  line-height: 24px;
  font-size: 14px;
}

.header {
  height: 79px;
  line-height: normal;
  padding: 10px 0 15px 0;
  background: #ffffff;
  width: 100%;
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
.nav__content {
  max-width: 100%;
  background-color: #007bff;
  height: 60px;
  overflow: auto;
  display: flex;
}

.dropdown {
  margin-left: 20px;
  /* position: fixed; */
  /* background: transparent; */
  /* width: 270px;   */
}
.dropbtn {
  background-color: #1c6fce;
  color: white;
  font-weight: bold;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  height: 60px;
  text-align: center;
  min-width: 270px;
  position: relative;
}
.dropdown-content {
  display: none;
  position: block;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: absolute;
  width: 270px;
}

.dropdown-content a {
  color: rgb(0, 0, 0);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  min-width: 250px;
}

.dropdown-content a:hover {
  background-color: #fff6f6;
  color: rgb(8, 8, 8);
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #2d72aa;
}
.search__form {
  overflow: hidden;
  margin-top: 7px;
  margin-left: 350px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 30px 30px 30px 30px;
  width: 550px;
  height: 47px;
  position: relative;
  align-items: center;
}
.search__form input {
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
  box-sizing: border-box;
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
  line-height: 47px;
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
.contact__wrap {
  display: flex;
  width: 20%;
  justify-content: flex-end;
  margin: 8px 0 0 0;
  position: relative;
}
.contact__icon {
  margin: 5px 0px 0 45px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
}
.contact__phone {
  position: absolute;
  width: 200px;
  line-height: 17px;
  color: #fff;
  top: 0;
}
.contact__phone p {
  margin-left: 60px;
}
.contact__phone a {
  margin-left: 60px;
  color: #fff;
}
* {
  box-sizing: border-box;
}
.dot {
  cursor: pointer;
  height: 13px;
  width: 13px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.active,
.dot:hover {
  background-color: #717171;
}
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 3s;
  animation-name: fade;
  animation-duration: 3s;
}
.breadcrumb__links {
  height: 50px;
}
* {
  margin: 0;
  padding: 0;
}

.chuyen-slide h2 {
  width: 400px;
  height: 50px;
  padding: 5px 10px;
  text-align: center;
  box-sizing: border-box;
  color: #000000;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  /*margin-left: -200px;*/
  font-size: 40px;
  font-family: tahoma;
  animation: chuChay 4s forwards;
  animation-delay: 1s;
  opacity: 0;
}
.chuyen-slide h1 {
  width: 400px;
  height: 50px;
  padding: 5px 10px;
  text-align: center;
  box-sizing: border-box;
  color: #7e7e7e;
  position: absolute;
  top: 65%;
  left: 50%;
  margin-top: -25px;
  /*margin-left: -200px;*/
  font-size: 50px;
  font-family: tahoma;
  animation: chuChay 2s forwards;
  animation-delay: 1s;
  opacity: 0;
}
@keyframes chuChay {
  from {
    opacity: 0;
    margin-left: -700px;
  }
  to {
    opacity: 1;
    margin-left: -500px;
  }
}
.bien-mat-ben-trai {
  animation: bien-mat-ben-trai 1s forwards;
}
@keyframes bien-mat-ben-trai {
  form {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}
.di-vao-ben-phai {
  animation: di-vao-ben-phai 1s forwards;
}
@keyframes di-vao-ben-phai {
  form {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
.area__home {
  padding: 0 20px;
  height: 120px;
  width: 97%;
  margin: 0 auto;
  justify-content: center;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid#e6e5e5;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  background-color: white;
}
.area__component {
  height: 120px;
  flex: 1;
  max-width: 25%;
}
.area__component img {
  width: 45px;
  flex: 0 0 45px;
  margin: 0;
  margin-right: 10px;
  margin-top: 40px;
  margin-bottom: 10px;
  display: block;
  float: left;
}
.area__text {
  overflow: hidden;
  flex-grow: 1;
  display: block;
}
.area__text h4 {
  margin-top: 40px;
  color: #253237;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 22px;
  margin-bottom: 0;
}
.area__text p {
  line-height: 20px;
  color: #666;
  font-size: 13px;
  margin: 0;
}
.banner_home {
  width: 96%;
  background-color: white;
}
.banner__home1 {
  margin-top: 30px;
  height: 480px;
  width: 610px;
  float: left;
  margin-left: 10px;
}
.banner__left1 {
  height: 230px;
  width: 610px;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
}
.banner__left1 img {
  transform: scale(1);
  transition: all ease-in-out 500ms;
}
.banner__left2 {
  height: 230px;
  width: 610px;
  margin-top: 10px;
  overflow: hidden;
  position: relative;
}
.banner__left2 img {
  transform: scale(1);
  transition: all ease-in-out 500ms;
}
.banner__home2 {
  margin-top: 30px;
  height: 480px;
  width: 610px;
  float: right;
  margin-right: 10px;
  overflow: hidden;
  position: relative;
}
.banner__home2 img {
  transform: scale(1);
  transition: all ease-in-out 500ms;
}
.banner__left1:hover img {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
.banner__left2:hover img {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
.banner__home2:hover img {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
.best__sells {
  width: 100%;
  height: auto;
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
  position: relative;
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
  height: 406px;
  margin-left: 15px;
}
.best__sells #product img {
  position: relative;
  overflow: hidden;
  width: 220px;
  height: 220px;
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
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
  -webkit-line-clamp: 2;
  height: 44px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
#description a {
  text-decoration: none;
  transition: 0.3s;
  font-size: 2;
  color: #000;
}
#description a:hover {
  color: #0090f0;
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
  position: absolute;
  z-index: 100000;
  top: 5%;
}
.best__sells #product:hover {
  border-color: #007bff;
}
.add__cart {
  box-sizing: border-box;
  display: flex;
  height: 50px;
  margin-left: 8px;
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
.popular__category {
  width: 100%;
  height: auto;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
}
.category__slider {
  height: auto;
  width: 100%;
  background-color: rgb(255, 255, 255);
  align-items: center;
  overflow: auto;
}
.category__component {
  box-sizing: border-box;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
  width: 390px;
  height: 150px;
  flex: auto;
  float: left;
  position: relative;
  overflow: hidden;
}
.category__component img {
  transform: scale(1);
  transition: all ease-in-out 500ms;
}
.category__component:hover img {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
.desc__category {
  position: absolute;
  left: 40px;
  top: 20%;
}
.name__category {
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 12px;
  line-height: 1;
}
.number__product {
  color: #888;
  font-size: 14px;
  text-transform: capitalize;
  margin-bottom: 12px;
  line-height: 1;
  display: block;
}
.desc__category a {
  color: #253237;
  font-size: 14px;
  text-transform: capitalize;
  line-height: 1;
  display: inline-block;
  -webkit-transition: all 0.8s ease-out;
  -moz-transition: all 0.8s ease-out;
  -ms-transition: all 0.8s ease-out;
  -o-transition: all 0.8s ease-out;
  transition: all 0.8s ease-out;
}
#shop__button {
  background-color: #68b5e9;
  border-radius: 50%;
  height: 15px;
  width: 15px;
}
.desc__category a:hover {
  color: #007bff;
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
}
.new__product {
  width: 100%;
  height: auto;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
}
.new__product__container {
  display: flex;
}
.product-new {
  position: relative;
  background: white;
  z-index: 1;
  border: 1px solid #cccccc;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 30px;
  width: 222.666px;
  margin-right: 15px;
  height: 406px;
  margin-left: 15px;
}
.product-new img {
  position: relative;
  overflow: hidden;
}
.product-new #description {
  padding: 20px 15px 16px 15px;
  background: #fff;
  overflow: hidden;
}
.product-new:hover {
  border-color: #007bff;
}
.product__link:hover {
  color: #007bff;
}
.brand__area {
  width: 97%;
  margin: 0 auto;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid#e6e5e5;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
}
.brand__slide {
  align-items: center;
}
.brand__slide img {
  display: block;
  width: 156px;
  height: 56px;
  border-top: 10px;
  margin-left: 80px;
}
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
  color: #007bff;
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
* {
  margin: 0;
  padding: 0;
}
.slide__item {
  width: 100%;
  height: auto;
  /* margin: 0 auto; */
  overflow: hidden;
  /* margin-top: 50px; */

  position: relative;
}
.chuyen-slide {
  width: 9999px;
  transition: all 0.5s;
}
.chuyen-slide img {
  width: 1300px;
  height: 500px;
  float: left;
}
.dieuhuong {
  position: absolute;
  color: rgb(185, 185, 185);
  font-size: 40px;
  top: 48%;
  padding-left: 20px;
}
#islide {
  position: relative;
  left: 1130px;
}
</style>
