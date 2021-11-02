"use strict";require(["jquery","jquery.validate"],(function(e){var o={FirstName:!1,UserName:!1,Password:!1,Currency:!1,Email:!1,MobilePhone:!1};e("html").css("overflow","hidden");var n,r,t,s,l=document.querySelector(".slider .bottom-drawer-border"),i=document.querySelectorAll(".slider"),a=!1,d=0,c=0;const g=e("#reg-popup-lang-dropdown").length>0,u=e("#PrefixDropdown").length>0,h=e("#CurrencyDropdown").length>0;for(var p=void 0,m=!1,w=0;w<i.length;w++)i[w].addEventListener("touchstart",M,!1),i[w].addEventListener("touchend",k,!1),i[w].addEventListener("touchmove",q,!1),i[w].addEventListener("mousedown",M,!1),i[w].addEventListener("mouseup",k,!1),i[w].addEventListener("mousemove",q,!1);!function(){let o="CNY",n=101,r="+86";if("undefined"!=typeof forced_dropdowns&&null!==forced_dropdowns)"USD"===forced_dropdowns?(o="USD",n=1,r="+81"):"VND"===forced_dropdowns&&(o="VND",n=105,r="+84");else{switch(P()){case"en-US":o="MYR",n=102,r="+60";break;case"th-TH":o="THB",n=103,r="+66";break;case"vi-VN":o="VND",n=105,r="+84";break;case"id-ID":o="IDR",n=111,r="+62";break;default:o="CNY",n=101,r="+86"}}_(o,n),C(r),function(){if(!g)return;var o=P(),n=document.getElementById("reg-popup-lang-dropdown"),r=document.getElementById("selectedLangRegPopup"),t=document.getElementsByClassName(o)[0];null==t&&(t=document.getElementById("en-US"));n.replaceChild(t,r),t.className="dropbtn",e(".dropbtn").removeAttr("onclick"),e(".dropbtn").append('<i class="icon-caret"></i>'),n.querySelector(".dropbtn").id||(t.innerHTML=e(".dropbtn")[0].innerHTML,n.querySelector(`#${o}`)?.remove())}(),e(".lang-selector").addClass("loaded"),1==e("#PrefixDropdown .dropdown-menu-lang-dropdown a").length&&(e("#prefix-value a").addClass("disabled"),e("#PrefixDropdown").addClass("disabled"));1==e("#CurrencyDropdown .reg-popup-dropdown a").length&&(e("#currency-value a").addClass("disabled"),e("#CurrencyDropdown").addClass("disabled"));1==e("#reg-popup-lang-dropdown a").length&&(e("#reg-popup-lang-dropdown").addClass("disabled"),e("#reg-popup-lang-dropdown").parent().addClass("disabled"),e("#reg-popup-lang-dropdown .icon-caret").hide())}();new ResizeObserver((o=>{o.forEach((o=>{window.innerWidth>1119.5?e("#popup-modal-register-body-content").css("height",e(".register-form:visible").height()+16+32+40+17):e("#popup-modal-register-body-content").css("height","1600px")}))})).observe(document.querySelector(".register-form")),setTimeout((function(){window.scrollTo(0,window.pageYOffset+1)}),1e3),e(document).click((function(o){e(o.target).parents(".field-currency").length||!e(".reg-popup-dropdown").hasClass("dropdown-open")||e(o.target).parents(".change-prefix").length||e(o.target).next().parents(".change-currency").length||e(".reg-popup-dropdown").removeClass("dropdown-open")})),e(".cancel-registration").click((function(){e("html").css("overflow","auto"),e(".register-popup").hide(),window.location.href.includes("register")&&(window.location.href="/")})),e.validator.addMethod("regex",(function(e,o,n){"email"===o.type&&(e=e.toLowerCase());var r=new RegExp(n);return this.optional(o)||r.test(e)}),"Please check your input."),e.validator.addMethod("passwordnotusername",(function(){var o=e("#UserName").val().toLowerCase(),n=e("#register-form #Password").val().toLowerCase();return!(o.length>0)||!n.includes(o)}),password_passwordnotusername);var f=e(location).attr("protocol")+"//"+e(location).attr("host")+e("#validate-data-url").val(),b=e("#register-form");b.validate({onkeyup:!1,rules:{UserName:{required:!0,minlength:5,maxlength:16,remote:{url:f},regex:/^[a-zA-Z0-9]*$/},Email:{required:!0,email:!0,remote:{url:f},regex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/},Password:{required:!0,minlength:8,maxlength:10,regex:/^[a-zA-Z0-9@$*!%#?&]*$/,passwordnotusername:""},MobilePhone:{required:!0,minlength:8,maxlength:9,regex:/^([1-9][0-9]+)$/},FirstName:{required:!0,minlength:1,maxlength:50}},messages:{UserName:{required:username_required,minlength:username_wronglenght,maxlength:username_wronglenght,remote:function(){return b.removeClass("form-valid"),username_taken},regex:username_wrongcharacters},Email:{required:email_required,email:email_wrongformat,regex:email_wrongformat,remote:function(){return b.removeClass("form-valid"),email_taken}},Password:{required:password_required,minlength:password_wronglenght,maxlength:password_wronglenght,regex:password_wrongcharacters},MobilePhone:{required:mobilephone_required,regex:mobilephone_wronglenght_form,minlength:mobilephone_wronglenght_form,maxlength:mobilephone_wronglenght_form},FirstName:{required:firstname_required,minlength:firstname_wronglenght,maxlength:firstname_wronglenght}}}),b.submit((function(o){o.preventDefault(),b.valid()&&b.hasClass("form-valid")&&!m&&(m=!0,e.ajax({type:"post",url:"/register",data:b.serialize(),success:function(o){if(!0===o.success)trackEvents("Click - Complete Registration CTA","Registration Page",1),window.location.href="/account/registersuccess";else if(!1===o.success){if(o.errors){e(".validation-error").html("");for(var n=0;n<o.errors.length;n++)e(".validation-error > p").remove(),e(".validation-error").append("<p>"+o.errors[n]+"</p>"),e(".validation-error").show()}m=!1}}}))})),e("#MobilePhone").keypress((function(e){if(!String.fromCharCode(e.which).match(/[0-9]/))return!1})),e("#toggle-pw").on("click",(function(){var o=document.getElementById("Password");"password"===o.type?(o.type="text",e("#toggle-pw").addClass("toggled")):(o.type="password",e("#toggle-pw").removeClass("toggled"))}));var v=!1;function x(o,n){if("Password"===n){const n=e(o);n.is(":-webkit-autofill")||!n.hasClass("valid")&&!n.hasClass("error")||n.closest(".field-input").addClass("has-icon")}}function _(o,n){if(h){e("#currency-input").val(n);var r=e("#currency-value"),t=e("#currency-value .active"),s=e("#"+o).clone();0==s.length?(s=e("#CurrencyDropdown .reg-popup-dropdown a").clone(),r.append(s[0]),e("#currency-input").val(s.attr("id"))):r.append(s),t.remove(),s.addClass("active")}else e("#currency-input").val(n),e("#currency-input-value").val(o)}function C(o){if(u){e("#prefix-input").val(o);var n=document.getElementById("prefix-value"),r=document.getElementsByClassName("active-prefix")[0],t=document.getElementById(o);if(t){const e=t.cloneNode(!0);n.appendChild(e),e.classList.add("active-prefix")}else t=e("#PrefixDropdown .dropdown-menu-lang-dropdown a").clone(),n.append(t[0]),t.addClass("active-prefix"),e("#prefix-input").val(t.attr("id"));n.removeChild(r),r.classList.remove("active-prefix")}else e("#prefix-input").val(o),e("#prefix-input-value").val(o)}function y(){var o=e("#prefix-input").val();p!==o&&("+855"===o?(e("#MobilePhone").rules("add",{minlength:8}),e("#MobilePhone").rules("add",{maxlength:9}),e("#MobilePhone").rules("add",{messages:{minlength:mobilephone_wronglenght_855}}),e("#MobilePhone").rules("add",{messages:{maxlength:mobilephone_wronglenght_855}}),e("#MobilePhone").rules("add",{messages:{regex:mobilephone_wronglenght_855}})):"+60"===o?(e("#MobilePhone").rules("add",{minlength:9}),e("#MobilePhone").rules("add",{maxlength:10}),e("#MobilePhone").rules("add",{messages:{minlength:mobilephone_wronglenght_60}}),e("#MobilePhone").rules("add",{messages:{maxlength:mobilephone_wronglenght_60}}),e("#MobilePhone").rules("add",{messages:{regex:mobilephone_wronglenght_60}})):"+66"===o?(e("#MobilePhone").rules("add",{minlength:9}),e("#MobilePhone").rules("add",{maxlength:9}),e("#MobilePhone").rules("add",{messages:{minlength:mobilephone_wronglenght_66}}),e("#MobilePhone").rules("add",{messages:{maxlength:mobilephone_wronglenght_66}}),e("#MobilePhone").rules("add",{messages:{regex:mobilephone_wronglenght_66}})):"+84"===o?(e("#MobilePhone").rules("add",{minlength:9}),e("#MobilePhone").rules("add",{maxlength:10}),e("#MobilePhone").rules("add",{messages:{minlength:mobilephone_wronglenght_84}}),e("#MobilePhone").rules("add",{messages:{maxlength:mobilephone_wronglenght_84}}),e("#MobilePhone").rules("add",{messages:{regex:mobilephone_wronglenght_84}})):"+62"===o?(e("#MobilePhone").rules("add",{minlength:10}),e("#MobilePhone").rules("add",{maxlength:12}),e("#MobilePhone").rules("add",{messages:{minlength:mobilephone_wronglenght_62}}),e("#MobilePhone").rules("add",{messages:{maxlength:mobilephone_wronglenght_62}}),e("#MobilePhone").rules("add",{messages:{regex:mobilephone_wronglenght_62}})):"+86"===o?(e("#MobilePhone").rules("add",{minlength:11}),e("#MobilePhone").rules("add",{maxlength:11}),e("#MobilePhone").rules("add",{messages:{minlength:mobilephone_wronglenght_86}}),e("#MobilePhone").rules("add",{messages:{maxlength:mobilephone_wronglenght_86}}),e("#MobilePhone").rules("add",{messages:{regex:mobilephone_wronglenght_86}})):"+81"===o&&(e("#MobilePhone").rules("add",{minlength:9}),e("#MobilePhone").rules("add",{maxlength:10}),e("#MobilePhone").rules("add",{messages:{minlength:mobilephone_wronglenght_81}}),e("#MobilePhone").rules("add",{messages:{maxlength:mobilephone_wronglenght_81}}),e("#MobilePhone").rules("add",{messages:{regex:mobilephone_wronglenght_81}}))),void 0!==p&&p!==o&&(e("#MobilePhone").trigger("change"),e("#MobilePhone").valid()),p=o}function P(){for(var e="CultureCookie=",o=decodeURIComponent(document.cookie).split(";"),n="",r=currUserLocale,t=0;t<o.length;t++){for(var s=o[t];" "===s.charAt(0);)s=s.substring(1);0===s.indexOf(e)&&(n=s.substring(e.length,s.length))}return""!==n&&(r=n.split("uic=")[1]),r}function M(o){l=document.querySelector(".slider:not(.close) .bottom-drawer-border"),o.target.classList.contains("close-drawer")||e(".slider:not(.close)").css("transition","initial"),"touchstart"===o.type?(r=o.touches[0].clientX-d,s=o.touches[0].clientY-c):(r=o.clientX-d,s=o.clientY-c),o.target==l&&(a=!0)}function k(o){i=document.querySelector(".slider:not(.close)"),t>0&&(e(this).closest(".bottom-drawer:not(.hide)").addClass("hide"),e(this).closest(".slider:not(.close)").addClass("close"),D(0,0,i),c=0,t=0,e(".slider").removeAttr("style")),a=!1}function q(o){i=document.querySelector(".slider:not(.close)"),a&&(o.preventDefault(),"touchmove"===o.type?(n=o.touches[0].clientX-r,t=o.touches[0].clientY-s):(n=o.clientX-r,t=o.clientY-s),t<0&&(t=0),d=n,0<(c=t)<400?D(0,t,i):c>400&&(t=0,e(this).closest(".bottom-drawer:not(.hide)").addClass("hide"),e(this).closest(".slider:not(.close)").addClass("close")))}function D(e,o,n){n.style.transform="translate3d("+e+"px, "+o+"px, 0)"}e(".info-dropdown-image").click((function(o){var n="#text-info-Currency";(v=!v)?(e(n).css("display","flex"),e(".arrow-Currency").css("display","block")):(e(n).css("display","none"),e(".arrow-Currency").css("display","none"))})),e(".field-input input, .mobile-number-input input").focus((function(n){const r=n.target.id;x(this,r),!1===o[r]&&(e(`.arrow-${r}`).css("display","block"),o[r]=!0)})),e(".field-input input, .mobile-number-input input").focusout((function(o){const n=o.target.id;x(this,n),e(`.arrow-${n}`).css("display","none"),e(`#text-info-${n}`).css("display","none")})),e(".field-input input, .mobile-number-input input").on("input",(function(e){x(this,e.target.id)})),e(".field-input input:not(label)").focus((function(){e(this).attr("aria-invalid")||e(this).attr("for")||(e("#text-info-"+e(this).attr("id")).show(),e(this).first(".field-info-text").show())})),e(document).on("click",".bottom-drawer",(function(o){e(o.target).hasClass("bottom-drawer")&&(e(this).closest(".bottom-drawer").addClass("hide"),e(this).find(".slider").addClass("close"))})),y(),e(".change-prefix").click((function(){y()})),e(".trigger").click((function(){if(window.screen.width<768){var o=e('.bottom-drawer[data-drawer="'+e(this).attr("id").split("Dropdown")[0]+'"]');o.removeClass("hide"),o.find(".slider").removeClass("close")}else e(this).find(".reg-popup-dropdown").toggleClass("dropdown-open"),2===e(".reg-popup-dropdown.dropdown-open").length&&(e(".reg-popup-dropdown.dropdown-open").removeClass("dropdown-open"),e(this).find(".reg-popup-dropdown").toggleClass("dropdown-open"))})),e(".close-drawer, .change-language, .change-currency, .change-prefix, .bottom-drawer-border").click((function(){window.screen.width<768?(e(this).closest(".bottom-drawer").addClass("hide"),e(this).closest(".slider").addClass("close"),e(this).closest(".slider").removeAttr("style")):e(this).find(".reg-popup-dropdown").removeClass("dropdown-open")})),e(".change-language").click((function(){!function(o){var n=new Date;n.setTime(n.getTime()+6048e5);var r="expires="+n.toUTCString();document.cookie="CultureCookie=c="+o+"|uic="+o+";"+r+";path=/",e(".register-popup").load("/registerpopup",e("#register-form").serializeObject())}(e(this).attr("id"))})),e(".change-prefix").click((e=>{C(e.currentTarget.id),y()})),e(".change-currency").click((e=>{var o=function(e){var o;switch(e){case"USD":o=1;break;case"THB":o=103;break;case"VND":o=105;break;case"IDR":o=111;break;case"MYR":o=102;break;default:o=101}return o}(e.currentTarget.id);_(e.currentTarget.id,o)}))}));