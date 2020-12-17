
import CptFooter from "../cptFooter.vue";
import cptHeader from "../cptHeader.vue";
export default {
  components: { cptHeader, CptFooter },
  data() {
      return {
        usernameInput: ''
      }
  },
  name: "Infomation",
computed: {
  username() {
    return this.$store.state.username;
  },
//   age() {
//     return this.$store.state.age;
    
//   },
  methods: {
      changUsername(){
        this.$store.dispatch('handleChangeUsername', this.usernameInput);
      }
  },
},
};