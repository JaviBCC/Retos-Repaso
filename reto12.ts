import {Mobile} from "./reto11-copy"


// CREAR UNA CLASE QUE SE DENOMINE MOBILELIBRARY QUE CONTENGA LOS SIGUIENTES ATRIBUTOS PRIVADOS:
//          - name: string
//          - location: string
//          - mobiles: Mobile[]
//          - totalPrice: number


export class MobileLibrary {

    private name:string;
    private location:string; 
    private mobiles:Mobile[];
    private totalPrice:number;
      

    constructor (name:string, location:string, mobiles:Mobile[]) {

        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPrice;

    }


    // Getters
    public getName():string{
        return this.name;
    } 

    public getLocation():string{
        return this.location;
    } 

    public getMobiles():Mobile[]{
        return this.mobiles;
    } 

    public get():string{
        return this.location;
    } 

    public getTotalPrice():number{
        return this.totalPrice;
    }


    // Setters
    public setName(newName:string):void{
        this.name = newName;
    }     

    public setLocation(newLocation:string):void{
        this.location = newLocation;
    }   

    public setMobiles(newMobiles:Mobile[]):void{
        this.mobiles = newMobiles;
    }


    // METODOS

    totalPriceCalculation():number {

        let sumPrice = 0;

        for(let i=0; i < this.mobiles.length; i++) {

            sumPrice += this.mobiles[i].getPrice();

        }

        return sumPrice 
    }

}
   
    
    

    // let mobile1:Mobile = new Mobile("Nokia3210", "3210", "Nokia", 64, "Rojo", false, 1, 350);
    // let mobile2:Mobile = new Mobile("Iphone3G", "3G", "Iphone", 128, "Gris", false, 1, 660);
    // let mobile3:Mobile = new Mobile("Samsug Galaxy 10", "10", "Samsung", 128, "Amarillo", false, 2, 750);

    // let arrMobile:Mobile[] = [mobile1,mobile2,mobile3];


    // let mobile4:Mobile  = new Mobile("iPhone 13 Pro Max", "13 Pro Max", "Apple", 256, "Silver", true, 2, 1300);
    // let mobile5:Mobile  = new Mobile("Samsung Galaxy S22 Ultra", "Galaxy S22 Ultra", "Samsung", 512, "Negro", true, 4, 1380);
    // let mobile6:Mobile  = new Mobile("Huawei Mate 40 Pro", "Mate 40 Pro", "Huawei", 256, "Gold", true, 4, 1090);
    // let mobile7:Mobile  = new Mobile("Pocophone x2 pro", "x2 pro", "Pocophone", 128, "Yellow", false, 2, 200);
    
    // let miStock:Mobile[] = [mobile4, mobile5, mobile6, mobile7];

    // let myMobileLibrary:MobileLibrary = new MobileLibrary("Movistar Center", "Madrid", miStock); 
    
    // console.log(myMobileLibrary.totalPriceCalculation());




