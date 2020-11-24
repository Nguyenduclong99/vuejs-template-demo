
<template>
  <a-layout class="body">
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />

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
      <div class="cart__info" style="width: 300px">
        <a-badge count="1" :number-style="{ backgroundColor: '#52c41a' }">
          <a class="cart__a"><fa-icon icon="random" /></a>
        </a-badge>
        <a-badge count="1" :number-style="{ backgroundColor: '#52c41a' }">
          <a class="cart__a"><fa-icon icon="heart" /></a>
        </a-badge>
        <a-badge count="2" :number-style="{ backgroundColor: '#52c41a' }">
          <a class="cart__a"><fa-icon icon="shopping-cart" /></a>
        </a-badge>
      </div>
    </a-layout-header>
    <a-layout-menu class="nav__content">
      <div class="dropdown">
        <div class="dropbtn"><fa-icon icon="bars" /> Loại sản phẩm</div>
        <div class="dropdown-content">
          <a href="htdfhg">IPhone</a>
          <a href="httpjhk">Samsung</a>
          <a href="https:/hhjkk">Oppo</a>
          <a href="https://hhjk">.....</a>
        </div>
      </div>
      <div class="search-container">
        <form>
          <input type="text" placeholder="Tìm kiếm.." name="search" />
          <button type="submit"><fa-icon icon="search" /></button>
        </form>
      </div>
    </a-layout-menu>

    <div class="slide__home">
      <div class="slide__all">
        <div class="slide active">
          <img src="./../assets/sample-17.jpg" alt="" />
        </div>
        <div class="slide"><img src="./../assets/sample-18.jpg" alt="" /></div>
      </div>
      <div class="slide__button">
        <span id="btn-prev"><i class="fas fa-chevron-left"></i></span>
        <span id="btn-next"><i class="fas fa-chevron-right"></i></span>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
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
    <!-- Best Seller start -->
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
    <!-- Best Seller end -->
    <!-- Popular category start -->
    <div class="popular__category">
      <div class="section__title">
        <h2>Popular categories</h2>
        <p>Add bestselling products to weekly line up</p>
        <div class="section__button">
          <span id="btn-pre"><i class="fas fa-chevron-left"></i></span>
          <span id="btn-nex"><i class="fas fa-chevron-right"></i></span>
        </div>
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
    <!-- Popular category end -->
    <!-- New arrivals start -->
    <div class="new__arrivals">
      <div class="section__title">
        <h2>New Arrivals</h2>
        <p>Add bestselling products to weekly line up</p>
        <div class="section__button">
          <span id="btn-pre"><i class="fas fa-chevron-left"></i></span>
          <span id="btn-nex"><i class="fas fa-chevron-right"></i></span>
        </div>
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
    <div class="footer"></div>
    <!-- Footer end -->
  </a-layout>
</template>

<style scoped>
.body {
  background-color: white;
}
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
  margin-left: 240px;
  float: right;
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
  transition: margin 0.2s;
}
.nav__content {
  max-width: 100%;
  background-color: #007bff;
  height: 60px;
  overflow: auto;
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
  width: 250px;
}

.dropdown {
  position: relative;
  width: 200px;
  float: left;
}

.dropdown-content {
  display: none;
  position: block;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: rgb(0, 0, 0);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #1b1ece;
  color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #2d72aa;
}

.search-container {
  margin-right: 500px;
}

input[type="text"] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  margin-left: 300px;
  border: none;
}

.search-container button {
  float: right;
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.search-container button:hover {
  background: #ccc;
}

* {
  box-sizing: border-box;
}

.slideshow-container {
  max-width: 500px;
  position: relative;
  margin: auto;
}
.mySlides {
  display: none;
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

.slide__home {
  width: 100%;
  height: 413px;
  position: relative;
}
.slide__all {
  width: 100%;
  height: 413px;
  overflow: hidden;
}
.slide {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
}
img {
  width: 100%;
}
.slide__button span {
  color: rgb(168, 168, 168);
  font-size: 60px;
  opacity: 0.6;
}
.slide.active {
  opacity: 1;
  visibility: visible;
}
span#btn-prev {
  position: absolute;
  top: 20%;
  left: 0%;
  z-index: 10;
  cursor: pointer;
}
span#btn-next {
  position: absolute;
  top: 20%;
  right: 0%;
  z-index: 10;
  cursor: pointer;
}
.slide__button ul {
  position: absolute;
  z-index: 10;
  width: 100px;
  bottom: 5%;
  left: 50%;
  margin-left: -50px;
  display: flex;
  justify-content: space-between;
}
.slide__button ul li {
  width: 20%;
  height: 20%;
  background: rgb(212, 248, 6);
  opacity: 0.6;
  /* list-style: none; */
  border-radius: 50%;
  cursor: pointer;
  transition: 0.6s;
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
  border-radius: 5%;
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
  height: 400px;
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
  padding-bottom: 20px;
  padding-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
  border: 1px solid#ebebeb;
  border-radius: 5px;
  display: flex;
  box-sizing: border-box;
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
  padding: 0;
  color: #666;
  position: relative;
  z-index: 1;
  background: #efefef;
  overflow: hidden;
}
.footer__top{
  padding: 60px 0;
}
</style>
<script>
// import $ from "jquery";
// $(document).ready(function () {
//   $("#btn-next").click(function () {
//     var slide_sau = $(".active").next();
//     $(".active").addClass("bien-mat-ben-trai").one('webkitAnimationEnd', function(){
//       $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
//     });
//     slide_sau.addClass("active").addClass("di-vao-ben-phai").one('webkitAnimationEnd', function(){
//       $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
//     });
//   });
// });
</script>