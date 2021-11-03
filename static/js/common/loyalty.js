"use strict";
require(["jquery", "mustache", "utility", "localization", "paging", "jquery.validate"], (function (e, t, r, o, a) {
    var n = e("#redeem-loyalty-points-form")
      , i = 0;
    i = o.useComma ? e("#vipPoints").text().replace(",", ".") : parseFloat(e("#vipPoints").text());
    var l = document.getElementById("points")
      , s = document.getElementById("redeem-amount")
      , d = document.getElementById("points-balance-remaining");
    e(l).keyup((function (t) {
        var r = e(this).val()
          , a = r.substr(r.length - 1);
        /^[0-9]$/.test(a) || (r.length > 0 ? e(this).val(r.substr(0, r.length - 1)) : e(this).val());
        var n, u, c = parseInt(e(l).val()), m = parseInt(e("#redemption-rate-raw").val());
        if (e(l).val()) {
          var p = (n = c / m,
            u = 2,
          Math.trunc(n * Math.pow(10, u)) / Math.pow(10, u))
            , f = Math.round(100 * (i - c + Number.EPSILON)) / 100;
          o.useComma && (p = p.toString().replace(".", ","),
            f = f.toString().replace(".", ",")),
            e(s).val(p),
            e(d).val(f)
        } else
          e(s).val(""),
            e(d).val("")
      }
    )),
      e("#points").keypress((function (e) {
          if (8 !== e.which && 0 !== e.which && (e.which < 48 || e.which > 57))
            return !1
        }
      )),
      e.validator.addMethod("sufficientPoints", (function () {
          try {
            if (parseInt(e("#points").val()) <= parseInt(e("#vipPoints").text()))
              return !0
          } catch (e) {
            console.log(e)
          }
          return !1
        }
      ), error_insufficient_points),
      n.validate({
        onkeyup: !1,
        rules: {
          RedeemdLoyaltyPointsAmount: {
            required: !0,
            sufficientPoints: "",
            min: 1
          }
        },
        messages: {
          RedeemdLoyaltyPointsAmount: {
            required: error_required,
            sufficientPoints: error_insufficient_points,
            min: error_invalid_amount
          }
        }
      }),
      e(l).keyup((function () {
          n.valid()
        }
      )),
      e(l).focusout((function () {
          e("#points-error").remove(),
            e("#points").removeClass("error")
        }
      )),
      n.submit((function (t) {
          t.preventDefault(),
          e("#points").val() > 0 && (e("#redeem-button").prop("disabled", !0),
            n.valid = !0,
            e("#points").blur(),
            e("#points-error").remove(),
            e("#points").removeClass("error"),
            e.post({
              url: n.attr("action"),
              data: n.serialize(),
              success: function (t) {
                "success" === t.Status && (!function () {
                  if (e.ajax({
                    type: "GET",
                    url: redeemedDataUrl,
                    success: function (t) {
                      e("#vipPoints").text(o.formatNumber(t.Data.PointsBalance, 2));
                      var r = e("#vipCashable")
                        , a = (t.Data.PointsBalance / t.Data.RedemptionRate).toLocaleString(localeCode, {
                        style: "currency",
                        currency: currencyCode,
                        currencyDisplay: "code"
                      });
                      a = a.replace(/\s/g, ""),
                        r.text(a)
                    }
                  }),
                  !0 === redeemtionHistoryShown) {
                    e("#MyRewardsHistoryForm").submit()
                  }
                }(),
                  e("#points-normal").hide(),
                  e("#points-redeemed").show()),
                "error" === t.Status && (e("#points").addClass("error"),
                  e("#points").after('<label id="points-error" class="error" for="RedeemdLoyaltyPointsAmount">' + t.Message + "</label>"))
              },
              error: function (t) {
                e("#points").addClass("error"),
                  e("#points").after('<label id="points-error" class="error" for="RedeemdLoyaltyPointsAmount">' + t.Message + "</label>")
              }
            }).always((function () {
                e("#redeem-button").prop("disabled", !1)
              }
            )))
        }
      ));
    var u = e("#MyRewardsHistoryForm")
      , c = document.querySelector("#MyRewardsHistoryForm .loader-animation")
      , m = document.getElementById("RewardsPlaceholder")
      , p = document.getElementById("input-date-start")
      , f = document.getElementById("input-date-end")
      , h = new Date
      , y = h.getFullYear()
      , v = h.getMonth()
      , g = h.getDate()
      , _ = new Date;
    _ = v >= 3 ? new Date(y, v - 3, g) : new Date(y - 1, 9 + v, g);
    var w = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    };

    function b(e) {
      var t = new Date(e);
      return t = new Date(t.getFullYear(), t.getMonth(), t.getDate())
    }

    error_date_to_early = error_date_to_early.replace("{js_start_date}", _.toLocaleDateString("en-GB", w)),
      error_date_to_late = error_date_to_late.replace("{js_end_date}", h.toLocaleDateString("en-GB", w)),
      e.validator.addMethod("fromBeforeTo", (function () {
          try {
            if (new Date(p.value) <= new Date(f.value))
              return !0
          } catch (e) {
            console.log(e)
          }
          return !1
        }
      ), error_date_to_before_from),
      e.validator.addMethod("maxDate", (function (e, t) {
          return b(e) <= h
        }
      ), error_date_to_late),
      e.validator.addMethod("minDate", (function (e, t) {
          return b(e) >= _
        }
      ), error_date_to_early),
      u.validate({
        onkeyup: !1,
        rules: {
          IntervalStart: {
            required: !0,
            minDate: p,
            maxDate: p,
            fromBeforeTo: ""
          },
          IntervalEnd: {
            required: !0,
            minDate: f,
            maxDate: f,
            fromBeforeTo: ""
          }
        },
        messages: {
          IntervalStart: {
            required: error_date_to_early,
            fromBeforeTo: error_date_to_before_from
          },
          IntervalEnd: {
            required: error_date_to_early,
            fromBeforeTo: error_date_to_before_from
          }
        }
      }),
      e(p).change((function () {
          e(".icon-calendar").hide(),
            u.valid()
        }
      )),
      e(f).change((function () {
          e(".icon-calendar").hide(),
            u.valid()
        }
      )),
      e("#trans-info-back-btn").click((function () {
          e("#TransInfoTable").hide(),
            e("#RewardsPlaceholder").show(),
            e(".usercontrol-page-selector-inputs").show(),
            e(".section-title").show(),
            e("#entry-title").hide(),
            e("#paging-dropdown").show(),
            e("#paging-select-element").show()
        }
      )),
      e("#RewardsPlaceholder").on("click", ".has-trans-info", (function () {
          "Mobile" === e("#device-type").val() && (e("#RewardsPlaceholder").hide(),
            e(".usercontrol-page-selector-inputs").hide(),
            e(".section-title").hide(),
            e("#data-col").html(e(this).parent().html()),
            e("#TransInfoTable").show(),
            e("#paging-dropdown").hide(),
            e("#paging-select-element").hide()),
            e("#TransInfoTable #entry-title #entry-title-date").html(e("#TransInfoTable #data-col #date-time-data").html()),
            e("#entry-title").show()
        }
      )),
      u.submit((function (t) {
          e(".icon-calendar").hide(),
            t.preventDefault(),
          u.valid() && (r.loaderShow(c),
            r.blurShow(m),
            e.get({
              url: u.attr("action"),
              data: u.serialize(),
              success: function (t) {
                if (t.History) {
                  var r = e("#RewardsPlaceholder")
                    , o = e("#RewardsTemplate").html();
                  t.History.forEach((function (e, t) {
                      e.Index = t + 1
                    }
                  )),
                    t.MoreThenThousand = 1e3 === t.History.length,
                    a.loadPaging(o, r, t),
                    redeemtionHistoryShown = !0
                }
              },
              error: function (e) {
              }
            }).always((function () {
                r.loaderHide(c),
                  r.blurHide(m)
              }
            )))
        }
      )),
      e((function () {
          e("#redeem-button").prop("disabled", !1),
            e("#submit-button").prop("disabled", !1)
        }
      ))
  }
));
