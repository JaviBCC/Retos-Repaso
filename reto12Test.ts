import {Mobile} from "./reto11-copy"
import {MobileLibrary} from "./reto12"


let mobile4:Mobile  = new Mobile("iPhone 13 Pro Max", "13 Pro Max", "Apple", 256, "Silver", true, 2, 1300);
let mobile5:Mobile  = new Mobile("Samsung Galaxy S22 Ultra", "Galaxy S22 Ultra", "Samsung", 512, "Negro", true, 4, 1380);
let mobile6:Mobile  = new Mobile("Huawei Mate 40 Pro", "Mate 40 Pro", "Huawei", 256, "Gold", true, 4, 1090);
let mobile7:Mobile  = new Mobile("Pocophone x2 pro", "x2 pro", "Pocophone", 128, "Yellow", false, 2, 200);

let myStock:Mobile[] = [mobile4, mobile5, mobile6, mobile7];

let myMobileLibrary1:MobileLibrary = new MobileLibrary("Movistar Center", "Madrid", myStock); 

console.log(myMobileLibrary1.totalPriceCalculation());

console.log(mobile4.getName());
console.log(mobile4.getModel());
console.log(mobile4.getTrademark());
console.log(mobile4.getSdsize());
console.log(mobile4.getColor());
console.log(mobile4.getIs5G());
console.log(mobile4.getCameranumber());
console.log(mobile4.getPrice());


console.log(myMobileLibrary1.getName());
console.log(myMobileLibrary1.getLocation());
console.log(myMobileLibrary1.getMobiles());

myMobileLibrary1.setName("Movistar Center Group");
myMobileLibrary1.setLocation("Madrid Capital");
console.log(myMobileLibrary1);






