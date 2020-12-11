<template>
  <a-layout class="body">
    <!-- header start -->
    <cpt-header></cpt-header>
    <!-- header end -->
    <!-- breadcrumb-links start -->
    <ul class="breadcrumb__links">
      <li>
        <a href="/home">Home</a>
      </li>
      <li><i class="fas fa-chevron-right"></i>Sign in/Sign up</li>
    </ul>
    <!-- breadcrumb-links end -->
    <!-- container start -->
    <div class="tab__content">
      <div class="cont">
        <div class="form__sign__in">
          <h2>Welcome back,</h2>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <p class="forgot__pass">Forgot password?</p>
          <button type="button" class="submit">Sign In</button>
          <button type="button" class="fb-btn">
            Connect with <span>facebook</span>
          </button>
        </div>
        <div class="sub__cont">
          <div class="img">
            <div class="img__text m__up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div class="img__text m__in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div class="img__btn">
              <span class="m__up">Sign Up</span>
              <span class="m__in">Sign In</span>
            </div>
          </div>
          <div class="form sign-up">
            <h2>Time to feel like home,</h2>
            <label>
              <span>Name</span>
              <input type="text" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
            <button type="button" class="submit">Sign Up</button>
            <button type="button">Join with facebook</button>
          </div>
        </div>
      </div>
    </div>
    <!-- container end -->
    <!-- footer start -->
    <cpt-footer></cpt-footer>
    <!-- footer end -->
  </a-layout>
</template>

<style scoped src="./style-login.css">
</style>

<script src="./login.js">
</script>

