"use strict";
exports.__esModule = true;
var reto11_1 = require("./reto11");
var mobile1 = new reto11_1.Mobile("Nokia3210", "3210", "Nokia", 64, "Rojo", false, 1, 350);
var mobile2 = new reto11_1.Mobile("Iphone3G", "3G", "Iphone", 128, "Gris", false, 1, 660);
var mobile3 = new reto11_1.Mobile("Samsug Galaxy 10", "10", "Samsung", 128, "Amarillo", false, 2, 750);
var arrMobile = [mobile1, mobile2, mobile3];
// console.log(mobile1);
// mobile1.is5G = true;
// console.log(mobile1);
// mobile1.cameraNumber = 4;
// console.log(mobile1);
console.log(mobile1, mobile2, mobile3);
console.log(mobile1.printMobile());
for (var i = 0; i < arrMobile.length; i++) {
    console.log(arrMobile[i].printMobile());
}
