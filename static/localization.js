"use strict";
Math.trunc || (Math.trunc = function (t) {
    return t < 0 ? Math.ceil(t) : Math.floor(t)
  }
),
  define(["mustache", "mustache-wax"], (function (t) {
      function e(t) {
        if (t = a(t))
          return t.toLocaleDateString("en-GB")
      }

      function r(t) {
        if (t = a(t))
          return t.toLocaleString("en-GB")
      }

      function n(t) {
        if (t = a(t))
          return t.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: !0
          })
      }

      function o(t) {
        if (t = a(t))
          return (new Date).toDateString() === t.toDateString() ? n(t) : e(t)
      }

      function i(t, e) {
        if ("number" == typeof (t = c(t, e = e || 0)))
          return t.toLocaleString(m(), {
            minimumFractionDigits: e,
            maximumFractionDigits: e
          })
      }

      function u(t, e, r) {
        return e ? "number" == typeof (t = c(t, r = r || 2)) ? t.toLocaleString(m(), {
          style: "currency",
          currency: e,
          currencyDisplay: "code",
          minimumFractionDigits: r,
          maximumFractionDigits: r
        }) : void 0 : i(t, r)
      }

      function a(t) {
        return t && "function" != typeof t.getMonth && (t = new Date(t)),
          t
      }

      function c(t, e) {
        return t && "number" != typeof t && (t = Number(t)),
          t = Math.round(100 * (t + Number.EPSILON)) / 100
      }

      function m() {
        return document.documentElement.lang + "-u-ca-gregory"
      }

      t.Formatters = {
        date: e,
        datetime: r,
        datetimesmart: o,
        time: n,
        number: i,
        currency: u,
        lowercase: function (t) {
          return t.toLowerCase()
        },
        uppercase: function (t) {
          return t.toUpperCase()
        },
        slugify: function (t) {
          return (t = (t = (t = (t = t.toLowerCase()).replace(/\s+/g, "-")).replace(/[^\w\-]+/g, "")).replace(/\-\-+/g, "-")).trim("-")
        },
        "conditional-print": function (t, e, r) {
          return "true" === t.toString().toLowerCase() ? e : r
        }
      };
      var f = -1 !== i(1.23, 2).indexOf(",")
        , l = !f;
      return f && require(["jquery", "jquery.validate"], (function (t) {
          console.log("Registering comma-style number validation methods..."),
            t.extend(t.validator.methods, {
              number: function (t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(t)
              }
            })
        }
      )),
        {
          currentLocale: m,
          formatDate: e,
          formatDatetime: r,
          formatTime: n,
          formatDateTimeSmart: o,
          formatNumber: i,
          formatCurrency: u,
          normalizeNumber: function (t) {
            return t = l ? t.replace(/,/g, "") : t.replace(/\./g, "")
          },
          useComma: f
        }
    }
  ));
