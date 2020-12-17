import CptFooter from "../cptFooter.vue";
import cptHeader from "./../cptHeader.vue";
export default {
  components: { cptHeader, CptFooter },
  name: "Infomation",
  computed: {
    username() {
      return this.$store.state.username;
      
    },
    age() {
      return this.$store.state.age;
      
    },
    
  },
  mounted() {
    this.btnlr();
  },
  methods: {
    btnlr() {
      document.querySelector(".img__btn").addEventListener("click", function() {
        document.querySelector(".cont").classList.toggle("s__signup");
      });
    },
  },
};
