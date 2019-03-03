// ==UserScript==
// @name         联通互联网套餐网上选号AABB靓号筛选Tampermonkey油猴脚本，支持大王卡，米粉卡等。
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://m.10010.com/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// ==/UserScript==
(function() {
    "use strict";
    setInterval(function(){
        document.getElementById("refresh").click();
        $(".number-list").each(function () {
        $(this).find("li").each(function() {
            var reg,result;
            var phone = $(this).text();
            reg = "(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){5}\\d";
            if (phone.match(reg) != null) {
                console.log("ABCDEF-"+phone);
            }
            reg = "(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2}\\d";
            if (phone.match(reg) != null) {
                console.log("ABC-"+phone);
            }
            reg = "^(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2}\\d[\\d][\\d](?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2}\\d";
            if (phone.match(reg) != null) {
                result = phone.match(reg).toString();
                if (result.substring(0, 3) == result.substring(5,8)) {
                    console.log("ABC**ABC-"+phone);
                }
            }
            reg = "[\\d](?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2}\\d[\\d](?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2}\\d$";
            if (phone.match(reg) != null) {
                result = phone.match(reg).toString();
                if (result.substring(1, 4) == result.substring(5, 8)) {
                    console.log("*ABC*ABC-"+phone);
                }
            }
            reg = "(\\d)((?!\\1)\\d)\\2[\\d]";
            if (phone.match(reg) != null) {
                result = phone.match(reg).toString();
                if (result.substring(0, 1) == result.substring(3, 4)) {
                    console.log("ABBA-"+phone);
                }
            }
            reg = "(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2}\\d{4}";
            if (phone.match(reg) != null) {
                result = phone.match(reg).toString();
                if (result.substring(0, 3) == result.substring(3, 6)) {
                    console.log("ABCABC-"+phone);
                }
            }
            reg = "^(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2}\\d{4}";
            if (phone.match(reg) != null) {
                result = phone.match(reg).toString();
                if (result.substring(0, 3) == result.substring(3, 6)) {
                    console.log("ABCABC*-"+phone);
                }
            }
            reg = "(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2}\\d{3}";
            if (phone.match(reg) != null) {
                result = phone.match(reg).toString();
                if (result.substring(0, 2) == result.substring(3, 5)) {
                    console.log("ABCAB-"+phone);
                }
            }
            reg = "(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){3}\\d";
            if (phone.match(reg) != null) {
                console.log("ABCD-"+phone);
            }
            reg = "(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){3}\\d{5}";
            if (phone.match(reg) != null) {
                result = phone.match(reg).toString();
                if (result.substring(0, 4) == result.substring(4, 8)) {
                    console.log("ABCDABCD-"+phone);
                }
            }
            reg = "(\\d)((?!\\1)\\d)\\1\\2\\1\\2";
            if (phone.match(reg) != null) {
                console.log("ABABAB-"+phone);
            }
            reg = "^(\\d)((?!\\1)\\d)\\1\\2\\1\\2";
            if (phone.match(reg) != null) {
                console.log("ABABAB*-"+phone);
            }
            reg = "(\\d)((?!\\1)\\d)\\1\\2";
            if (phone.match(reg) != null) {
                console.log("ABAB-"+phone);
            }
            reg = "^(\\d)((?!\\1)\\d)[\\d][\\d](\\d)((?!\\1)\\d)[\\d][\\d]";
            if (phone.match(reg) != null) {
                result = phone.match(reg).toString();
                if (result.substring(0, 2) == result.substring(4, 6)) {
                    console.log("AB**AB**-"+phone);
                }
            }
            reg = "[\\d][\\d](\\d)((?!\\1)\\d)[\\d][\\d](\\d)((?!\\1)\\d)$";
            if (phone.match(reg) != null) {
                result = phone.match(reg).toString();
                if (result.substring(2, 4) == result.substring(6, 8)) {
                    console.log("**AB**AB-"+phone);
                }
            }
            reg = "([\\d])\\1{4,}";
            if (phone.match(reg) != null) {
                console.log("AAAAA-"+phone);
            }
            reg = "(.)\\1{3}";
            if (phone.match(reg) != null) {
                console.log("AAAA-"+phone);
            }
            reg = "(\\d)\\1\\1((?!\\1)\\d)";
            if (phone.match(reg) != null) {
                console.log("AAAB-"+phone);
            }
            reg = "(.)\\1{2}";
            if (phone.match(reg) != null) {
                console.log("AAA-"+phone);
            }
            reg = "(\\d)\\1((?!\\1)\\d)\\2";
            if (phone.match(reg) != null) {
                console.log("AABB-"+phone);
            }
            reg = "(\\d)\\1((?!\\1)\\d)((?!\\1)\\d)\\3";
            if (phone.match(reg) != null) {
                result = phone.match(reg).toString();
                if (result.substring(2, 3) != result.substring(0, 1) && result.substring(2, 3) != result.substring(3, 4)) {
                    console.log("AABCC-"+phone);
                }
            }
            reg = "(\\d)\\1((?!\\1)\\d)\\2((?!\\1)\\d)\\3";
            if (phone.match(reg) != null) {
                result = phone.match(reg).toString();
                if (result.substring(2, 4) != result.substring(0, 2) && result.substring(2, 4) != result.substring(4, 6)) {
                    console.log("AABBCC-"+phone);
                }
            }
            reg = "^(\\d)\\1((?!\\1)\\d)\\2((?!\\1)\\d)\\3";
            if (phone.match(reg) != null) {
                result = phone.match(reg).toString();
                if (result.substring(2, 4) != result.substring(0, 2) && result.substring(2, 4) != result.substring(4, 6)) {
                    console.log("AABBCC*-"+phone);
                }
            }
        });
    });
    },1000);
    // Your code here...
})();