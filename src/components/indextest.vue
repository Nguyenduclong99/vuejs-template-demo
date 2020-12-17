<template>
  <div>
    <input type="text" v-model="postBody" @change="postPost()" />
    <div v-for="(item, product) in info" :key="product">
      <h1>{{ item.title }}</h1>
    <img v-bind:src= "item.image">
    </div>
  </div>
</template>
<script>
import axios from "axios";
import VueAxios from "vue-axios";
export default {
  data() {
    return {
      slideIndex: 1,
       postBody: '',
      info: [],
      users: [],
    };
  },
  watch: {},
  mounted() {
    axios
      .get("https://fakestoreapi.com/products?limit=6")
      .then((response) => (this.info = response.data));
    this.postPost();
    this.getUser();
    this.deleteUser();
  },
  methods: {
    postPost() {
    axios.post(`https://fakestoreapi.com/products`, {
      body: this.postBody
    })
    .then(response => {})},
    getUser(){
      axios.get("https://fakestoreapi.com/users").then((response) => (this.users = response));
    }
  },
};
</script>
