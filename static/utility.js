"use strict";
define([], (function () {
    return {
      handleAjaxError: function (e, s, r) {
        console.log("handleAjaxError", e, s, r),
          e.responseJSON && e.responseJSON.errorMessage ? alert(e.responseJSON.errorMessage) : console.error(s.toUpperCase() + ": " + r)
      },
      loaderShow: function (e) {
        e && (e.style.display = "inline-block")
      },
      loaderHide: function (e) {
        e && (e.style.display = "none")
      },
      blurShow: function (e) {
        e && !e.classList.contains("blur-effect") && e.classList.add("blur-effect")
      },
      blurHide: function (e) {
        e && e.classList.contains("blur-effect") && e.classList.remove("blur-effect")
      }
    }
  }
));
