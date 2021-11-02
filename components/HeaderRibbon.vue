<template>
  <div class="header-ribbon" id="main-header">
    <div class="header-container">
      <div id="" class="header-logo-mobile" data-component-name="">
        <a href="/" id="header-logo-mobile" class=" " data-component-name="" data-qa-type="" data-qa-context="">
          <img class="" src="~/assets/img/header/icon-logo-mobile-laliga33d0.svg"
               data-component-name="" alt="home">
        </a>
      </div>
      <div id="" class="header-logo" data-component-name="">
        <a href="/" id="header-logo" class=" " data-component-name="" data-qa-type="" data-qa-context="">
          <img class="" src="~/assets/img/header/icon-logo.svg" data-component-name=""
               alt="home">
        </a>
      </div>
      <div class="header-content">
        <a name="Login" class="btn btn-transparent" id="desktop-login-btn"
           onclick="trackEvents('Click - ' + this.getAttribute('name'), 'Header', 1)" href="/login">
          Đăng Nhập
        </a>
        <a name="Register" id="desktop-join-now-btn" class="btn btn-primary-new join-now-btn">
          ĐĂNG KÝ
        </a>
        <label name="Hamburger" for="side-menu-toggle" class="header-menu-mobile"
               onclick="trackEvents('Click - ' + this.getAttribute('name'), 'Header', 1)">
          <img src="/images/header/icon-menu33d0.svg" class="hamburger-menu" alt="Menu">
        </label>
      </div>
    </div>
    <script type="text/javascript" src="/js/common/anonymous33d0.js" async="async"></script>
  </div>
</template>

<script>
export default {
  name: "HeaderRibbon"
}
</script>

<style scoped>

</style>
