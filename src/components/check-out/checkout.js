import CptFooter from '../cptFooter.vue';
import cptHeader from './../cptHeader.vue';
export default {
  components: {  cptHeader, CptFooter },
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