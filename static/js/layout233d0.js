"use strict";function toggleDropdown(e){var t=e.target.parentNode,a=document.getElementById(t.id+"-dropdown-content"),n=t.getElementsByClassName("down-arrow")[0];a&&("block"===a.style.display?(a.style.display="none",n.style.transform="rotate(0deg)"):(a.style.display="block",n.style.transform="rotate(180deg)"))}function formatNumber(e){require(["jquery","localization"],(function(t,a){t(document).ready((function(){var n=t("#"+e.target.id);t.isNumeric(n.val())&&n.val(a.formatNumber(n.val().replace(",",""),2))}))}))}require(["jquery"],(function(e){function t(){if("deposit"===selectedTab||"withdrawal"===selectedTab||"transfer"===selectedTab||"mywallet"===selectedTab){var e=window.screen.width;"mywallet"===selectedTab||e>="1024"?(document.getElementById("balanceInfo").classList.add("visible"),document.getElementById("transactions").classList.add("visible")):(document.getElementById("balanceInfo").classList.remove("visible"),document.getElementById("transactions").classList.remove("visible"))}}window.handleWalletSection=t,e(document).ready((function(){const a=window.location.hash.replace("#",""),n=e("#cashier_nav_mobile_"+a);if(e("#cashier_nav_"+a).addClass("selected"),n.addClass("selected"),n.parent().hasClass("dropdown-container")){var l=n.parent()[0].id.split("-")[0];e("#"+l).children()[0].click()}t()})),e(".side-menu-element").click((function(){void 0!==e(this).attr("href")&&e("#sidebar-toggle").click()}))}));