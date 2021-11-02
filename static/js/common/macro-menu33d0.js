"use strict";
require(["jquery", "jquery.validate"], (function (e) {
  var t = 1;
  e(".next-card").click((function () {
    e(this).parent().find(".page-" + t).hide(), t++, e(this).parent().find(".page-" + t).show()
  })), e(".previous-card").click((function () {
    e(this).parent().find(".page-" + t).hide(), t--, e(this).parent().find(".page-" + t).show()
  })), e(".macro-cards .require-authentication").click((function (t) {
    var n = e(this).parents(".macro-menu").prev().attr("href"), i = e(this).attr("href");
    "False" === isAuthenticated && (t.preventDefault(), t.stopPropagation(), window.location.href = "/login?ReturnUrl=" + n + "?open-from-macro=" + i + "&macro-page=" + n)
  })), e(document).on("mouseleave", ".main-menu-elements, .tooltip-item, .macro-menu", (function () {
    e(this).find(".menu-content").removeClass("macro-active"), e(".macro-menu").css("height", "0px")
  })), e(document).on("mouseenter", ".main-menu-elements .tooltip-item", (function () {
    e(this).find(".menu-content").addClass("macro-active");
    var t = e(this).find(".menu-content").outerHeight();
    e(this).find(".macro-menu").css("height", t + "px")
  })), e(".macro-menu").css("display", "flex")
}));
