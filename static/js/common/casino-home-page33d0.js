"use strict";var polyfills=[];window.IntersectionObserver||polyfills.push("intersection-observer"),require(["jquery","mustache","utility","localization"].concat(polyfills),(function(e,t,a,r){var o,i,n,l,s,c,d=document.getElementById("casino-data-form"),m=document.getElementById("additional-categories-form"),u=document.querySelector(".slider-games .bottom-drawer-border"),g=document.querySelector(".slider-games"),f=!1,h=0,p=0;g&&(g.addEventListener("touchstart",R,!1),g.addEventListener("touchend",z,!1),g.addEventListener("touchmove",H,!1),g.addEventListener("mousedown",R,!1),g.addEventListener("mouseup",z,!1),g.addEventListener("mousemove",H,!1));var v,w,y,b,C={get Data(){return v},set Data(e){v=e,G()},get FilterProvider(){return w},set FilterProvider(e){w=e,persistFilterProvider(e),G()},get Sort(){return y},set Sort(e){y=e,G()},get FilterSearch(){return b},set FilterSearch(e){b=e}};function k(e){e.LobbyData.Games.forEach((function(e){var t=Object.values(e.CategoryOrder)[0];e.CategoryOrder["All Games"]=t}))}function G(){if(C.Data){e(".casino-replace").each((function(){const a=e(this),r=a.attr("id"),o=a.hasClass("casino-recommended"),i=o?"Recommended - ":"",n=a.closest(".swiper-slide"),l=C.Data.LobbyData.Games.find((e=>e.Id.toString()===r));if(l){n.addClass("item").attr("data-name",l.Name).attr("data-component-name",`${i}${l.Name}`);var c={Game:l,Recommended:o},d=t.render(s.recentlyPlayedTileTemplate,c);n.addClass("item").attr("data-name",l.Name).attr("data-component-name",`${i}${l.Name}`),n.html(d)}setTimeout((function(){swipers[n.closest(".swiper-container").attr("id")].update()}),1e3)})),e("#recently-played .casino-card-outer").click((function(t){n=0,t.preventDefault();var a=e(this).data("link");"True"===authenticated?window.open(a,"popup","width="+window.outerWidth+",height="+window.outerHeight):window.location.href=a}));const r=C.Data.LobbyData.Games.filter((function(e){return!(C.FilterProvider&&C.FilterProvider!==e.ProviderName||C.FilterCategory&&!(C.FilterCategory in e.CategoryOrder))}));S(r,"a-z"),r.forEach((function(e){""===C.FilterCategory&&(e.Category=C.Data.CategoryMetadata[I(e)].DisplayName)}));const o=document.querySelectorAll("[data-row-category]");for(var a in o)if(Object.prototype.hasOwnProperty.call(o,a)){const t=o[a].getAttribute("data-row-category").replaceAll("&nbsp;"," ");let r=o[a].getAttribute("id");null!=r&&""!==r||(r=Date.now(),o[a].setAttribute("id",r));const i=e(o[a]).find(".casino-tiles");i.length&&i.hasClass("casino-grid")?P(t,s.gridTemplate,r,T(t)):O(t,24,s.sliderTemplate,r,T(t))}const i=document.querySelectorAll("[data-row-provider]");for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&O(void 0,24,s.sliderTemplate,i[a].getAttribute("id"),"",i[a].getAttribute("data-row-provider"))}e("#disabled-input").removeAttr("disabled")}function O(a,r,o,i,n,l){C.selectedCategory=a;var s=j(a,l,-1);S(s,n);var c={Category:a,Games:s.slice(0,r)};if(!(c.Games.length>=1))return!1;{r>c.Games.length&&(r=c.Games.length),e("#"+i+" .casino-game-placeholder").length&&e("#"+i+" .casino-tiles .swiper-slide").remove();const n=e("#"+i+" .casino-tiles").attr("id"),l=swipers[n];for(var d=0;d<r;d++){var m=c.Games[d];if(m.Position=e("#"+i).parent().attr("data-modul-position"),m.CategoryOrProviderName=a||currentProviderName,m.SlideIndex=d+1,o){var u=t.render(o,c.Games[d]);l.appendSlide(u)}}var g=new IntersectionObserver(N);e(".lazyload").each((function(e,t){g.observe(t)}))}var f=e("#"+i);e(".game-card-link",f).on("click",(function(e){D(e)})),e(".bottom-drawer-border").on("click",(function(){x("-games",!0)})),e("#mobile-game-modal").on("click",(function(e){e.target===this&&x("-games",!0)})),e(document).on("click",".mobile-game-play-buttons a",(function(t){t.stopPropagation();var a=e(this).attr("data-url");"True"===authenticated?window.open(a,"popup","width="+window.outerWidth+",height="+window.outerHeight):window.location.href=a}))}function P(a,r,o,i,n){let l=3,s=5;window.innerWidth<=587?(l=6,s=2):window.innerWidth>587&&window.innerWidth<1024&&(l=4,s=4);const c=j(a,n,-1);S(c,i);const d={Games:[]};if(c.length>0){const a=[];for(let e=0;e<l;e++){a[e]=[];for(let t=0;t<s;t++)a[e][t]=0}const i=2,n=1;let f=0,h=0;for(let e=0;e<c.length;e++){const t=c[e],r=null!=t.CategoryOrder["Featured Games"]&&!0===t.WideImg,o=r?i:1,l=r?n:1;let s=f,m=h,u=!1,g=!0;for(;g;){let e=!0;for(let t=0;t<l;t++)for(let r=0;r<o;r++)if(0!==a[s+t][m+r]){e=!1;break}if(e)g=!1,u=!0;else{let e=!1;for(let t=s;t<a.length;t++){for(let r=0;r<a[t].length;r++)if((t!==s||r!==m)&&0===a[t][r]){s=t,m=r,e=!0;break}if(e)break}e||(g=!1)}}if(u){for(let e=0;e<l;e++)for(let r=0;r<o;r++)a[s+e][m+r]=t.Id;if(t.GridArea=`grid-area: ${s+1} / ${m+1} / span ${l} / span ${o}`,t.CategoryName=I(t),d.Games.push(t),s===f&&m===h){let e=!1;for(let t=f;t<a.length;t++){const r=a[t].findIndex((e=>0===e));if(-1!==r){f=t,h=r,e=!0;break}}if(!e)break}}else console.log(`Found no empty space to fit the game with ID ${t.Id} inside the grid, skipping it...`)}var m=`<div class="gallery">${t.render(r,d)}</div>`;e(`#${o}`).html(m);var u=e("#"+o);e(".game-card-link",u).on("click",(function(e){D(e)})),e(".bottom-drawer-border").on("click",(function(){x("-games",!0)})),e("#mobile-game-modal").on("click",(function(e){e.target===this&&x("-games",!0)})),e(document).on("click",".mobile-game-play-buttons a",(function(t){t.stopPropagation();var a=e(this).attr("data-url");"True"===authenticated?window.open(a,"popup","width="+window.outerWidth+",height="+window.outerHeight):window.location.href=a}));var g=new IntersectionObserver(N);e(".lazyload-fgames").each((function(e,t){g.observe(t)}))}}function I(e){for(var t=["Hot Games","Slot Games","Scratch Cards","Jackpots","Card & Table","Video Poker","Other Games"],a=0;a<t.length;a++)if(t[a]in e.CategoryOrder)return t[a];return console.log("Game with id = "+e.Id+" does not contain any category from the prioritizedPrimaryCategories!"),""}function D(a){if(n=0,a.preventDefault(),window.innerWidth<1024){x("-games",!1);var r=function(e){var t=e;for(;t.parentNode;){if(t.dataset.gameId)return+t.dataset.gameId;t=t.parentNode}}(e(a.target)[0]);!function(a){var r=function(e){if(C.Data&&e){var t=C.Data.LobbyData.Games.filter((function(t){return t.Id===e}));return t.length>0?t[0]:null}}(a);e(".gallery").length&&(r.Position=!1);var o=r,i=t.render(s.tabletGame,o);e("#mobile-game-container").html(i),e("#mobile-game-modal").show(),$(),e("#mobile-game-close").click((function(){x("-games",!0)}));var n=e(".drawer-content"),l=t.render(s.mobileGame,o);n.html(l),e(".close-drawer").on("click",(function(){x("-games",!0)}))}(r)}else if(e(a.target).hasClass("play-button")||e(a.target).hasClass("btn1")){var o=a.target.getAttribute("href");"True"===authenticated||o.includes("demo")?window.open(o,"popup","width="+window.outerWidth+",height="+window.outerHeight):window.location.href=o}}function N(e,t){e.forEach((function(e){if(e.isIntersecting){var a=e.target;a.src=a.dataset.src,t.unobserve(a)}}))}function T(e){return function(t,a){return t.CategoryOrder[e]-a.CategoryOrder[e]}}function A(e,t){return e.Name.localeCompare(t.Name)}function E(e,t){return t.Name.localeCompare(e.Name)}function L(e,t){"Popularity"in e.CategoryOrder?popGames.push(e):e.Name.localeCompare(t.Name)}function S(e,t){var a,r;if((r=t)&&"[object Function]"==={}.toString.call(r))a=t;else switch(t){default:a=A;break;case"z-a":a=E;break;case"popularity":a=L}e.sort(a)}function j(e,t,a){let r=0;const o=-1===a,i=void 0!==e,n=void 0!==t&&"All Games"!==t;return C.Data.LobbyData.Games.filter((function(l){let s=!1;return i&&n?Object.prototype.hasOwnProperty.call(l.CategoryOrder,e)&&(l.ProviderId===t||l.ProviderName===t)&&(r<a||o)&&(r++,s=!0):i?Object.prototype.hasOwnProperty.call(l.CategoryOrder,e)&&(r<a||o)&&(r++,s=!0):n&&(l.ProviderId!==t&&l.ProviderName!==t||!(r<a||o)||(r++,s=!0)),s}))}!function(){var r=e.ajax({url:d?.action,error:a.handleAjaxError,dataType:"json"});if("True"===authenticated){var o=e.ajax({url:m.action,error:a.handleAjaxError,dataType:"json"});e.when(r,o).done((function(e,t){var a=e[0];null!=t[0]&&""!==t[0].Recent&&function(e,t){var a=1;t.forEach((function(t){e.LobbyData.Games.forEach((function(e){t.GameId===e.Id&&(e.IsRecent=!0,e.CategoryOrder.Recent=a++)}))}))}(a,t[0].Recent.RecentGames),k(a),C.Data=a}))}else e.when(r).done((function(e){k(e),C.Data=e}));for(var i in s={gridTemplate:e("#template-grid-card").html(),sliderTemplate:e("#template-game-category-sections").html(),recentlyPlayedTileTemplate:e("#recently-played-tile").html(),mobileGame:e("#mobile-game-template-drawer").html(),tabletGame:e("#mobile-game-template").html()})Object.prototype.hasOwnProperty.call(s,i)&&t.parse(s[i])}(),e(document).on("click",".hover-box",(function(){var t=e(this).data("link");trackEvents("Click - Casino - "+e(this).closest(".item").data("name"),"Landing Page",1),"Desktop"===device&&("True"===authenticated?window.open(t,"_blank"):window.location=t)})),e(".area .view-all-category").click((function(){var t=e(this).attr("data-viewall-category");window.location="/casino?filter="+t.replace(" ","-")}));var F=!0;function x(t,a){e(".slider"+t).removeAttr("style"),""===t?(e(".bottom-drawer").toggleClass("hide"),e(".slider").toggleClass("close")):a?(e("#mobile-game-modal").hide(),e(".bottom-drawer"+t).addClass("hide"),e(".slider"+t).addClass("close")):(e("#mobile-game-modal").show(),e(".bottom-drawer"+t).removeClass("hide"),e(".slider"+t).removeClass("close")),"-games"!==t||a||$(),F?(F=!1,e("html").css("overflow","hidden")):(F=!0,e("html").css("overflow","auto"))}function $(){e(".bottom-drawer-games").hasClass("hide")?q():(q(),c=setInterval(W,5e3))}function W(){for(var t=e(".bottom-drawer-games").find("ul").find("img"),a=e(".mobile-game-content").find("ul").find("img"),r=0;r<t.length;r++)if(e(t[r]).hasClass("active")||e(a[r]).hasClass("active")){if(r+1<t.length){e(t[r+1]).trigger("click"),e(a[r+1]).toggleClass("active"),e(a[r+1]).prev().show();break}e(t[0]).trigger("click"),e(a[0]).toggleClass("active"),e(a[0]).prev().show();break}}function q(){clearInterval(c)}function R(t){u=document.querySelector(".slider-games .bottom-drawer-border"),t.target.classList.contains("close-drawer")||e(".slider-games").css("transition","initial"),"touchstart"===t.type?(i=t.touches[0].clientX-h,l=t.touches[0].clientY-p):(i=t.clientX-h,l=t.clientY-p),t.target==u&&(f=!0)}function z(t){e(".slider-games").css("transition","1s"),n>0&&(x("-games",!0),X(0,0,g),p=0,n=0,e(".slider").removeAttr("style")),f=!1}function H(e){f&&(e.preventDefault(),"touchmove"===e.type?(o=e.touches[0].clientX-i,n=e.touches[0].clientY-l):(o=e.clientX-i,n=e.clientY-l),n<0&&(n=0),h=o,0<(p=n)<400?X(0,n,g):p>400&&(n=0,x("-games",!0)))}function X(e,t,a){a.style.transform="translate3d("+e+"px, "+t+"px, 0)"}function Y(e){const t=e.find(".image-item");if(t.length>1){const a=t.first();a.find("img").addClass("active");const r=a.find(".arrow-up");r.length&&r.css("display","block"),e.css("display","flex")}}e(document).on("click",".image-list img",(function(t){var a=e(".product-gallery").find(".product-image").find(".active");e(".image-list .active").toggleClass("active"),e(".image-list .arrow-up").hide(),e(t.target).toggleClass("active"),e(t.target).prev().show(),a.attr("src",e(t.target).attr("src")),$()})),e(document).on("click",".bottom-drawer-games",(function(t){e(t.target).hasClass("bottom-drawer-games")&&x("-games",!0)})),window.imageItemLoaded=function(t){const a=e(t),r=a.closest(".image-item"),o=a.closest(".image-list");let i=o.data("processed-images");i++,r.css("display","flex"),o.data("processed-images",i),4===i&&Y(o)},window.imageItemFailed=function(t){const a=e(t),r=a.closest(".image-item"),o=a.closest(".image-list");let i=o.data("processed-images");i++,r.remove(),o.data("processed-images",i),4===i&&Y(o)}}));