"use strict";require(["jquery"],(function(e){if(e("#day").length>0&&e("#hour").length>0&&e("#min").length>0&&e("#sec").length>0){var n=new Date("2021-06-12T03:00:00.000+08:00");setInterval((function(){var e=(new Date).getTime(),t=n-e,r=Math.floor(t/864e5),o=Math.floor(t%864e5/36e5),l=Math.floor(t%36e5/6e4),i=Math.floor(t%6e4/1e3);document.getElementById("day").innerHTML=r,document.getElementById("hour").innerHTML=o,document.getElementById("min").innerHTML=l,document.getElementById("sec").innerHTML=i}),1e3)}}));