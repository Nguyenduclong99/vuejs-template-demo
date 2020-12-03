<template>
  <a-layout class="body">
<cpt-header></cpt-header>
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
<cpt-footer></cpt-footer>
    <!-- Footer end -->
    <backto-top></backto-top>
  </a-layout>
</template>
<style scoped src="./style-checkout.css">
</style>
<script>
import CptFooter from '../cptFooter.vue';
import BacktoTop from './../backtoTop.vue'
import cptHeader from './../cptHeader.vue';
export default {
  components: { BacktoTop, cptHeader, CptFooter },
  mounted(){
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