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

    totalPriceCalculation() {

        let sumPrice = 0;

        for(let i=0; i < this.mobiles.length; i++) {
            sumPrice += this.totalPrice;
        }

        return sumPrice
    }


}

