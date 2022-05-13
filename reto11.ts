// CREA UNA CLASE LLAMADA MOBILE CON LAS SIGUIENTES CARACTERISTICAS

//    Propiedades Publicas
//    - name
//    - model
//    - trademark
//    - sdSize
//    - color
//    - is5G
//    - cameraNumber
//    - price



export class Mobile {

    private name:string;
    private model:string;
    private trademark:string;
    private sdSize:number;
    private color:string;
    private is5G:boolean;
    private cameraNumber:number;

    constructor (name:string, model:string, trademark:string, sdSize:number, color:string, is5G:boolean, cameraNumber:number) {

       this.name         = name;
       this.model        = model;
       this.trademark    = trademark;
       this.sdSize       = sdSize;
       this.color        = color;
       this.is5G         = is5G;
       this.cameraNumber = cameraNumber;
    }

    // Getters
    public getName():string{
        return this.name;
    } 

    public getModel():string{
        return this.model;
    } 

    public getTrademark():string{
        return this.trademark;
    }

    public getSdsize():number{
        return this.sdSize;
    }

    public getColor():string{
        return this.color;
    }

    public getIs5G():boolean{
        return this.is5G;
    }

    public getCameranumber():number{
        return this.cameraNumber;
    }


    // Setters
    public setName(newName:string):void{
        this.name = newName;
    }     

    public setModel(newModel:string):void{
        this.model = newModel;
    }

    public setTrademark(newTrademark:string):void{
        this.trademark = newTrademark;
    }

    public setSdsize(newSdsize:number):void{
        this.sdSize = newSdsize;
    }

    public setColor(newColor:string):void{
        this.color = newColor;
    }

    public setIs5G(newIs5G:boolean):void{
        this.is5G = newIs5G;
    }

    public setCameraNumber(newCameraNumber:number):void{
        this.cameraNumber = newCameraNumber;
    }

    // METODOS


    printMobile() {

        let formatMobile = ("The characteristics of the mobile name are: " + "\n" +
                            "Name: "              + this.name              + "\n" +
                            "Model: "             + this.model             + "\n" +
                            "Trademark: "         + this.trademark         + "\n" +
                            "SD Size (GB): "      + this.sdSize            + "\n" +
                            "Color: "             + this.color             + "\n" +
                            "Is 5g?: "            + this.is5G              + "\n" +
                            "Number of Cameras: " + this.cameraNumber      + "\n") 
                   
        return formatMobile;
    }  
 

}
