<template>
<div>
<cpt-header></cpt-header>
<!-- breadcrumb-links start -->
    <ul class="breadcrumb__links">
      <li>
        <a href="#">Home</a>
      </li>
      <li><i class="fas fa-chevron-right"></i>My Account</li>
    </ul>
    <!-- breadcrumb-links end -->
<div class="myacc__container">
<div class="row">
    <div class="col">
        <div class="myacc__wrapper">
            <div class="myacc__single">
                <h3 class="collapsible">
                    <span>1.</span>
                </h3>
            </div>
        </div>
    </div>
</div>
</div>

    <cpt-footer></cpt-footer>
    </div>
</template>
<style scoped src="./style-myacc.css">
</style>
<script>
import CptFooter from "../cptFooter.vue";
import cptHeader from "../cptHeader.vue";
export default {
  components: { cptHeader, CptFooter },
};
</script>CptFooter