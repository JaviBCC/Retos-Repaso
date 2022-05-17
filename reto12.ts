import {Mobile} from "./reto11"


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
        this.totalPrice = this.totalPriceCalculation();

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

    printLibrary() {

        let formatLibrary = "";

        for (let i=0; i < myStock.length; i++) {
          
            formatLibrary += (myStock[i].printMobile())   
        }

        return formatLibrary;           

    }

    printLibrary2(formatLibrary1, sumPrice1):void {

        let myListFinal = ("This is all my mobiles: "  + "\n" + formatLibrary1 + "\n" + "Price overall: " + sumPrice1);

        console.log(myListFinal);
          
    }


    private totalPriceCalculation():number {

        let sumPrice = 0;

        for(let i=0; i < this.mobiles.length; i++) {
          sumPrice += this.mobiles[i].getPrice();
        }

        return sumPrice 
    }


}
   
    
    let mobile4:Mobile  = new Mobile("iPhone 13 Pro Max", "13 Pro Max", "Apple", 256, "Silver", true, 2, 1300);
    let mobile5:Mobile  = new Mobile("Samsung Galaxy S22 Ultra", "Galaxy S22 Ultra", "Samsung", 512, "Negro", true, 4, 1380);
    let mobile6:Mobile  = new Mobile("Huawei Mate 40 Pro", "Mate 40 Pro", "Huawei", 256, "Gold", true, 4, 1090);
    let mobile7:Mobile  = new Mobile("Pocophone x2 pro", "x2 pro", "Pocophone", 128, "Yellow", false, 2, 200);
    
    let myStock:Mobile[] = [mobile4, mobile5, mobile6, mobile7];
    
    let myMobileLibrary1:MobileLibrary = new MobileLibrary("Movistar Center", "Madrid", myStock); 

    let formatLibrary1 = myMobileLibrary1.printLibrary();
    let sumPrice1 = myMobileLibrary1.getTotalPrice();
    myMobileLibrary1.printLibrary2(formatLibrary1, sumPrice1);



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

   