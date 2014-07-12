// console.log("node.js çalıştı");
var cember = require("./cember"); // cember modülünü çağır

console.log("Yarıçapı 5 olan çemberin alanı : " + cember.alan(5));

var dikdortgen = require("./lib/dikdortgen");

console.log("Eni 5 boyu 4 olan dikdörtgenin alanı : " + dikdortgen.alan(5,4));

var kare = require("kare");

console.log("Bir kenarı 6 olan karenin alanı : " + kare.alan(6));

var elips = require("elips");

console.log("Eksenleri 5 ve 4 olan elipsin alanı : " + elips(5, 4));

var parabol = require("parabol");

console.log("f(x)=2x^2+8x+3 şeklindeki parabolün tepe noktası : " + parabol(2, 8, 3));