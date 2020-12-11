import CptFooter from "../cptFooter.vue";
import cptHeader from "./../cptHeader.vue";
export default {
  components: {cptHeader, CptFooter },
  mounted() {
    this.btnlr();
  },
  methods: {
    btnlr() {
      document
        .querySelector(".img__btn")
        .addEventListener("click", function () {
          document.querySelector(".cont").classList.toggle("s__signup");
        });
    },
  },
};