import {Mobile} from './reto11'


let mobile1:Mobile = new Mobile("Nokia3210", "3210", "Nokia", 64, "Rojo", false, 1, 350);
let mobile2:Mobile = new Mobile("Iphone3G", "3G", "Iphone", 128, "Gris", false, 1, 660);
let mobile3:Mobile = new Mobile("Samsug Galaxy 10", "10", "Samsung", 128, "Amarillo", false, 2, 750);

let arrMobile:Mobile[] = [mobile1,mobile2,mobile3];

// console.log(mobile1);

// mobile1.is5G = true;
// console.log(mobile1);

// mobile1.cameraNumber = 4;
// console.log(mobile1);

console.log(mobile1, mobile2, mobile3);

console.log(mobile1.printMobile());


for (let i = 0; i < arrMobile.length; i++) {
     console.log(arrMobile[i].printMobile());         
}
    

