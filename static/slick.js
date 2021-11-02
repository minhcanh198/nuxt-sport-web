"use strict";
require(["jquery", "slick"], (function (o, i) {
  var r = o(".slick-carousel"), e = {
    infinite: !0,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !0,
    centerMode: !0,
    autoplay: !0,
    autoplaySpeed: 4e3,
    lazyLoad: "progressive",
    nextArrow: '<div class="arrow slick-next slick-arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
    prevArrow: '<div class="arrow slick-prev slick-arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
    responsive: [{breakpoint: 1024, settings: {arrows: !1, dots: !0}}, {
      breakpoint: 768,
      settings: {arrows: !1, dots: !1}
    }]
  };
  o(document).ready((function () {
    r.slick(e), r.find(".carousel-item").addClass("loaded");
    var i = !1;
    o(".carousel-item").mousedown((function () {
      i = !1
    })).mousemove((function () {
      i = !0
    })).mouseup((function (r) {
      var e = i;
      if (i = !1, 1 === r.which && !e) {
        var t = o(r.target);
        if (t.hasClass("no-click") || t.closest(".no-click").length) return;
        let i = t.data("url");
        if (void 0 === i) {
          const o = t.closest("[data-url]");
          o.length && (i = o.data("url"))
        }
        if (void 0 !== i) {
          if (i.includes("/register")) return void o("#desktop-join-now-btn").click();
          const r = function (o) {
            var i = {};
            o.replace(/[?&]+([^=&]+)=([^&]*)/gi, (function (o, r, e) {
              i[r] = e
            }));
            return i
          }(i).gameType;
          void 0 !== r && "lotto" === r ? window.open(i, "", "width=" + window.outerWidth + ", height=" + window.outerHeight) : window.location.href = i
        }
      }
    }))
  }))
}));
