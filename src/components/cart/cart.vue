<template>
  <a-layout class="body">
    <cpt-header></cpt-header>
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
    <cpt-footer></cpt-footer>
    <!-- Footer end -->
    <!-- Back to top start-->
    <!-- Back to top end  -->
  </a-layout>
</template>

<style scoped>
@import "./style-cart.css";
</style>
<script src="./cart.js">
</script>