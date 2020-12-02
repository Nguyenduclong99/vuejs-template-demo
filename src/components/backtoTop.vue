<template>
  <div class="up__page" id="myBtn" @click="topFunction">
    <i id="icon" class="fas fa-arrow-up"></i>
  </div>
</template>
<style scoped>
.up__page {
  width: 50px;
  height: 50px;
  color: #fff;
  position: fixed; /*cuộn tới đâu, nó sẽ đi đến đó*/
  right: 20px;
  bottom: 60px;
  background-color: #4fb68d;
  border-radius: 30px;
  cursor: pointer;
  z-index: 9999;
  display: none;
  opacity: 0.6;
}
.up__page #icon {
  display: block;
  font-size: 22px;
  margin: 13px 10px 8px 15px;
}
.up__page:hover {
  opacity: 1;
}
</style>
<script>
export default {
  mounted() {
    this.page_scroll_top();
  },
  methods: {
    page_scroll_top() {
      var mybutton = document.getElementById("myBtn");
      window.onscroll = function () {
        scrollFunction();
      };
      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
    },
    topFunction: function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>