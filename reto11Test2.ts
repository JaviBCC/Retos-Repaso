import {Mobile} from './reto11'

let mobile1:Mobile = new Mobile("Nokia3210", "3210", "Nokia", 64, "Rojo", false, 1);
let mobile2:Mobile = new Mobile("Iphone3G", "3G", "Iphone", 128, "Gris", false, 1);
let mobile3:Mobile = new Mobile("Samsug Galaxy 10", "10", "Samsung", 128, "Amarillo", false, 2);

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













