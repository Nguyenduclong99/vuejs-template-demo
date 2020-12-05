<template>
  <a-layout-header class="header" id="navbar">
    <div class="header__logo">
      <a href="#"
        ><router-link to="/home">
          <img src="./../assets/logo (1).jpg" />
        </router-link>
      </a>
    </div>
    <div class="header__main">
      <a-dropdown>
        <a @click="(e) => e.preventDefault()"> Home <a-icon type="down" /> </a>
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
        <a @click="(e) => e.preventDefault()"> Menu <a-icon type="down" /> </a>
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
        <a @click="(e) => e.preventDefault()"> Menu <a-icon type="down" /> </a>
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
        <a @click="(e) => e.preventDefault()"> Menu <a-icon type="down" /> </a>
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
    <div class="search__item">
      <input type="text" name="search" placeholder="Enter keyword..." />
      <div class="submit__button">
        <button type="submit">Search</button>
      </div>
    </div>
    <div class="cart__info">
      <a-badge count="2" :number-style="{ backgroundColor: '#52c41a' }">
        <a class="cart__a" href="/cart"><fa-icon icon="shopping-cart" /></a>
      </a-badge>
    </div>
  </a-layout-header>
</template>
<style scoped>
.header {
  height: 79px;
  line-height: normal;
  padding: 10px 0 15px 0;
  background: #ffffff;
  display: flex;
  width: 100%;
  position: none;
  z-index: 999999999999999;
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
  margin-left: 20px;
}
.cart__a {
  display: inline-block;
  font-size: 26px;
  font-family: "Ionicons";
  vertical-align: middle;
  margin-right: 15px;
  font-weight: 400;
  color: #253237;
}
.toggle-menu {
  display: none;
  font-size: 2rem;
  color: #fff;
  margin: 10px 10px 0 0;
  transition: 0.2s;
}
.search__item {
  overflow: hidden;
  width: 300px;
  height: 47px;
  position: relative;
  border-radius: 30px 30px 30px 30px;
  border: none;
}
.search__item input {
  height: 47px;
  background: #fff;
  color: #b1b1b1;
  padding: 10px 120px 10px 20px;
  display: inline-block;
  width: 100%;
  font-size: 14px;
  border-radius: 30px;
  outline: none;
  border: 1px solid black;
}
.submit__button {
  /* box-sizing: border-box; */
  right: 0;
  z-index: 2;
  outline: none;
  position: absolute;
  top: 0;
}
.submit__button button {
  background: black;
  border: 0;
  box-shadow: none;
  padding: 0 20px;
  height: 47px;
  border-radius: 0 30px 30px 0;
  transition: all 300ms linear;
  width: 90px;
  color: #fff;
  cursor: pointer;
}
.Fixed {
  position: fixed;
  top: 0;
  box-shadow: #253237;
}
</style>
<script>
export default {
  mounted() {
   this.pinHeader();
  },
  methods: {
    pinHeader() {
      var header =  document.getElementById("navbar");
      window.onscroll = function() { myFunction() };
      function myFunction() {
        if (
          document.body.scrollTop > 10 ||
          document.documentElement.scrollTop > 10
        ) {
          header.style.position = "fixed";
        } else {
          header.style.position = "none";
        }
        console.log("bbbbbbbbbbb")
      }
    },
  },
  destroyed() {
    this.pinHeader();
  },
};
</script>
