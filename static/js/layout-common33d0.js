"use strict";
require(["jquery"], (function (e) {
  window.changeDisplayLanguage = i, window.freezeBodyScroll = d;
  let t = document.querySelector("meta[name=viewport]"), n = window.screen.width;
  const o = document.createElement("meta");
  o.setAttribute("name", "viewport"), o.setAttribute("content", "width=1024");
  const c = document.createElement("meta");
  c.setAttribute("name", "viewport"), c.setAttribute("content", "width=375");
  const s = document.createElement("meta");

  function a(a) {
    const i = n;
    if (n = window.screen.width, t = document.querySelector("meta[name=viewport]"), (e("#side-menu-toggle").is(":checked") || e("#sidebar-toggle").is(":checked")) && d(!1), t) {
      if (a && (n <= 375 && i <= 375 || n > 375 && i > 375)) return;
      const e = t.getAttribute("content").split(",");
      for (let a = 0; a < e.length; ++a) {
        const i = e[a].trim().split("=");
        if ("width" === i[0]) {
          if ("true" === forceDesktop && "1024" !== i[1]) {
            document.head.removeChild(t), document.head.appendChild(o);
            break
          }
          if ("device-width" === i[1]) {
            if (n <= 375) {
              document.head.removeChild(t), document.head.appendChild(c);
              break
            }
          } else if ("375" === i[1] && n > 375) {
            document.head.removeChild(t), document.head.appendChild(s);
            break
          }
        }
      }
    } else "true" === forceDesktop ? document.head.appendChild(o) : document.head.appendChild(n > 375 ? s : c)
  }

  function i(e, t) {
    if ("register" !== window.location.pathname.split("/").pop()) {
      trackEvents("Click - Language", "Header", 1, "On Boarding Journey and Login");
      const n = new Date;
      n.setTime(n.getTime() + 6048e5);
      const o = "expires=" + n.toUTCString();
      document.cookie = "CultureCookie=c=" + e + "|uic=" + e + ";" + o + ";path=/", document.cookie = `ContentCurrency=${t};${o};path=/`, location.reload(!0)
    }
  }

  s.setAttribute("name", "viewport"), s.setAttribute("content", "width=device-width, initial-scale=1"), a(!1), e(window).on("resize", (function () {
    a(!0), handleWalletSection()
  })), e(".language-collapse").on("click", (function () {
    const t = e(this).closest(".language-item"), n = t.find(".collapsible-content"), o = t.find(".arrow-collapse");
    if (n.length) {
      n.hasClass("collapsed") ? (n.removeClass("collapsed"), o.addClass("rotate")) : (n.addClass("collapsed"), o.removeClass("rotate"))
    }
  })), e(".change-language").click((function () {
    const t = e(this);
    i(t.data("language"), t.data("currency"))
  })), e("#msports-auth").click((function (t) {
    t.preventDefault();
    const n = e("#msports-popup-url").val();
    window.open(n, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes"), window.location.href = e("input#livecasino-url").val()
  })), e("#msports-auth-landing").click((function (t) {
    t.preventDefault();
    const n = e("#msports-popup-url-landing").val();
    window.open(n, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes"), window.location.href = e("input#livecasino-url").val()
  })), e("#sports-auth").click((function (t) {
    t.preventDefault(), window.open("/Home/GetSportsUrlAuth", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes"), window.location.href = e("input#livecasino-url").val()
  }));
  const l = document.getElementById("openLink");
  if (l) {
    const e = l.getAttribute("data-link").replace("{domain}", function (e, t) {
      t = t || !1, e = e.replace(/(https?:\/\/)?(www.)?/i, ""), t || (e = (e = e.split(".")).slice(e.length - 2).join("."));
      if (-1 !== e.indexOf("/")) return e.split("/")[0];
      return e
    }(window.location.hostname));
    l.addEventListener("click", (function () {
      openInNewWindow(e, 915, 1e3)
    }))
  }

  function d(t) {
    if (t) {
      const t = document.body, n = document.documentElement,
        o = document.documentElement.style.getPropertyValue("--scroll-y");
      t.style.minWidth = e(window).width().toString() + "px", t.style.top = "-" + o, n.style.overflow = "hidden"
    } else {
      const e = document.body, t = e.style.top, n = document.documentElement;
      e.style.position = "", e.style.top = "", window.scrollTo(0, -1 * parseInt(t || "0")), n.style.overflow = "auto"
    }
  }

  e(window).scroll((function () {
    document.documentElement.style.setProperty("--scroll-y", window.scrollY + "px")
  })), e("#side-menu-toggle").click((function () {
    d(e("#side-menu-toggle").is(":checked"))
  })), e("#sidebar-toggle").click((function () {
    d(e("#sidebar-toggle").is(":checked"))
  }));
  const u = document.getElementById("main-menu-header"), r = document.getElementById("main-header"),
    m = document.getElementById("promo-menu"), p = document.querySelector("#mobile-main-menu");
  let g, h, w = !1;

  function f() {
    window.pageYOffset > 32 ? (u.classList.add("new-sticky"), r.classList.add("new-sticky"), null !== document.getElementById("desktop-promotions") && m.classList.add("menu-fixed")) : (u.classList.remove("new-sticky"), r.classList.remove("new-sticky"), null !== document.getElementById("desktop-promotions") && m.classList.remove("menu-fixed"))
  }

  e(document).ready((function () {
    !function () {
      const t = document.documentElement.lang;
      let n = document.documentElement.dataset.currency;
      const o = e(".selectedLang");
      languageListObject[t].includes(n) || (n = languageListObject[t][0]);
      const c = e(`[data-language=${t}][data-currency=${n}]`);
      c[0].classList.add("selected"), c.closest(".currency-item").length && c.closest(".language-item").find(".language-collapse").addClass("selected");
      const s = document.createElement("a");
      s.classList.add("dropbtn"), s.setAttribute("id", t), s.setAttribute("data-language", t), s.setAttribute("data-currency", n);
      const a = document.createElement("img");
      a.src = `/images/icons/flag.${t}.svg`, a.alt = `${languageObject[t]} (${n})}`;
      const i = document.createElement("span");
      i.classList.add("hide-text"), i.textContent = `${languageObject[t]} (${n})`;
      const l = document.createElement("i");
      l.classList.add("icon-caret"), s.appendChild(a), s.appendChild(i), s.appendChild(l), o.replaceWith(e(s)), e(".lang-selector").addClass("loaded"), handleMainMenuSize(), 1 === e("#lang-dropdown a").length && (e("#lang-dropdown").addClass("disabled"), e("#lang-dropdown").parent().addClass("disabled"), e("#lang-dropdown .icon-caret").hide())
    }(), function () {
      const t = document.documentElement.lang;
      let n = document.documentElement.dataset.currency;
      languageListObject[t].includes(n) || (n = languageListObject[t][0]);
      const o = document.getElementById(`mobile-${t}-${n}`);
      o.classList.add("selected");
      const c = e(o);
      c.hasClass(".currency-item").length && c.closest(".language-item").find(".language-collapse").addClass("selected");
      const s = document.createElement("a");
      s.classList.add("side-menu-element"), s.setAttribute("data-language", t), s.setAttribute("data-currency", n), s.setAttribute("id", t);
      const a = document.createElement("div");
      a.classList.add("side-menu-text");
      const i = document.createElement("span");
      i.textContent = `${languageObject[t]} (${n})`;
      const l = document.createElement("div");
      l.classList.add("side-menu-icon");
      const d = document.createElement("img");
      d.src = `/images/icons/flag-circular.${t}.svg`, d.alt = `${languageObject[t]} (${n})}`, a.appendChild(i), l.appendChild(d), s.appendChild(a), s.appendChild(l), document.getElementById("mobile-selected-language").appendChild(s)
    }(), p.addEventListener("mousedown", (e => {
      w = !0, g = e.pageX - p.offsetLeft, h = p.scrollLeft
    })), p.addEventListener("mouseleave", (() => {
      w = !1
    })), p.addEventListener("mouseup", (() => {
      w = !1
    })), p.addEventListener("mousemove", (e => {
      if (!w) return;
      e.preventDefault();
      const t = e.pageX - p.offsetLeft - g;
      p.scrollLeft = h - t
    }))
  })), f(), window.onscroll = function () {
    f()
  }, e("#show-popup-mobile-desktop-switch").click((function () {
    e("#popup-mobile-desktop-switch").show()
  })), e(".close-mobile-desktop-switch").click((function () {
    e("#popup-mobile-desktop-switch").hide()
  })), e("#switch-to-desktop-button").click((function () {
    document.cookie = "force-desktop=;path=/;", location.reload()
  })), e("#switch-to-mobile-button").click((function () {
    document.cookie = "force-desktop=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;", location.reload()
  }))
}));
