"use strict";
exports.__esModule = true;
var reto11_1 = require("./reto11");
var mobile1 = new reto11_1.Mobile("Nokia3210", "3210", "Nokia", 64, "Rojo", false, 1);
var mobile2 = new reto11_1.Mobile("Iphone3G", "3G", "Iphone", 128, "Gris", false, 1);
var mobile3 = new reto11_1.Mobile("Samsug Galaxy 10", "10", "Samsung", 128, "Amarillo", false, 2);
console.log(mobile1.getName());
console.log(mobile1.getModel());
console.log(mobile1.getTrademark());
console.log(mobile1.getSdsize());
console.log(mobile1.getColor());
console.log(mobile1.getIs5G());
console.log(mobile1.getCameranumber());
console.log(mobile2.getModel());
console.log(mobile2.getTrademark());
console.log(mobile2.getSdsize());
console.log(mobile2.getColor());
console.log(mobile2.getIs5G());
console.log(mobile2.getCameranumber());
console.log(mobile3.getModel());
console.log(mobile3.getTrademark());
console.log(mobile3.getSdsize());
console.log(mobile3.getColor());
console.log(mobile3.getIs5G());
console.log(mobile3.getCameranumber());
mobile1.setIs5G(true);
mobile1.setCameraNumber(4);
console.log(mobile1);
console.log(mobile1, mobile2, mobile3);
