<template>
  <div class="login-page">
    <div class="form-layout-new">

      <div class="title">Đăng Nhập</div>

      <form id="login-form" method="post" class="login-form-validation validation-bound" action="/login"
            novalidate="novalidate">


        <div class="input-area">
          <label class="field-label" for="PrimaryLoginCred">Tên Đăng Nhập</label>
          <div class="field-input">
            <input class="PrimaryLoginCredValidation" type="text" data-val="true"
                   data-val-regex="Validation_RegisterModel_UsernameWrongCharacters"
                   data-val-regex-pattern="^[a-zA-Z0-9_]*$" data-val-required="Validation_LoginModel_Username"
                   id="PrimaryLoginCred" name="PrimaryLoginCred"
                   v-model="loginForm.username">
            <span class="field-validation-valid" data-valmsg-for="PrimaryLoginCred" data-valmsg-replace="true"></span>
          </div>
        </div>

        <div class="input-area">
          <label class="field-label" for="Password">Mật Khẩu</label>
          <div class="field-input">
            <input autocomplete="off" class="PasswordValidation" type="password" data-val="true"
                   data-val-required="Validation_LoginModel_Password" id="Password" name="Password"
                   v-model="loginForm.password">
            <span class="field-validation-valid" data-valmsg-for="Password" data-valmsg-replace="true"></span>
          </div>
        </div>


        <div class="input-area" style="padding: 0px 30px 7px 30px;">
        <span id="dont-have-account">
          Chưa Có Tài Khoản? &nbsp;
          <a class="login-forgotpassword-link" onclick="trackEvents('Click - Register Now', 'Login', 1)"
             href="/register">Đăng Ký Ngay!</a>
        </span>
        </div>

        <div class="input-area">
        <span id="dont-have-account">
          <a class="login-forgotpassword-link" onclick="trackEvents('Click - Forgot login details link', 'Login', 1)"
             href="/forgot-login-details">
            Quên Mật Khẩu?
          </a>
        </span>
        </div>

        <div class="input-area">
          <input class="btn btn-secondary-alt" id="login-button" style="margin-bottom:1em;" type="button"
                 value="Đăng Nhập" @click="login">
        </div>

        <input type="hidden" value="" id="ReturnUrl" name="ReturnUrl">
        <input type="hidden" id="IOvationBlackBox-4" data-iovationblackbox=""
               value="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;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"
               name="IOvationBlackBox">

        <input name="__RequestVerificationToken" type="hidden"
               value="CfDJ8Nw57LT0A09JuR-QhECQfbjb3QTIQ8GXBmhZXpUKvLF5oiayEq8OGIpnhv_jEsbdp2_gBEok51kRHLSks0oRObSGn5MepBsnlMNwpuTKMaac8ms7skvRyJpDZwGIm6561nBk9dCJa9WNELrQYNDr1EE">
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",

  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    login() {
      if (this.loginForm.username === 'user' && this.loginForm.password === 'password') {
        console.log("trueee")
        this.$router.push('/cashier/deposit')
      } else {
        alert("Wrong username or password!")
      }
    }
  }
}
</script>

<style scoped lang="css">
@import '~/assets/css/forms.css'
</style>
