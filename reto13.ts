
export class Punto {

    private x:number;
    private y:number; 
   

    constructor (x:number, y:number) {

        this.x = x;
        this.y = y;
        
    }


    // Getters

    public getX():number{
        return this.x;
    } 

    public getY():number{
        return this.y;
    } 


    // Setters
    public setX(newX:number):void{
        this.x = newX;
    }     

    public setY(newY:number):void{
        this.y = newY;
    }   


    // METODOS

    toString():string{

        let convertCoordX = "";
        let convertCorrdY = "";
        let convertCoord  = "";

        let a = this.x;
        let b = this.y;

        convertCoordX = a.toString();
        convertCorrdY = b.toString();

        console.log(typeof(convertCoordX));
        console.log(typeof(convertCorrdY));

        convertCoord = "(" + convertCoordX + "," + convertCorrdY + ")"

        return convertCoord; 
    }


    distanciaAlOrigen():number{

        let coordenadaX  = 0;
        let coordenadaY  = 0;
        let coordOrigenX = 0;
        let coordOrigenY = 0;

        coordenadaX = this.x;
        coordenadaY = this.y;

     
        let distancia1 = Math.sqrt((coordOrigenX - coordenadaX) * (coordOrigenX - coordenadaX) + (coordOrigenY - coordenadaY) * (coordOrigenY - coordenadaY));
        

        return distancia1;
    }


    calcularDistancia(coordenadaImput:Punto):number {


        let coordenadaX:number;
        let coordenadaY:number;
      
        coordenadaX = this.x
        coordenadaY = this.y;             
    
        let distancia2 = Math.sqrt(((coordenadaX - coordenadaImput.x) * (coordenadaX - coordenadaImput.x)) + ((coordenadaY - coordenadaImput.y) * (coordenadaY - coordenadaImput.y)));

        return distancia2;
        
    }


    calcularCuadrante():number {

        let coordenadaX  = 0;
        let coordenadaY  = 0;
        let cuadrante    = 0;
        
        coordenadaX = this.getX();
        coordenadaY = this.getY();

        switch (true) {
            
            case (coordenadaX == 0 || coordenadaY == 0):
                    cuadrante = 0;
                    break;

            case (coordenadaX > 0 && coordenadaY > 0):
                    cuadrante = 1;
                    break;

            case (coordenadaX < 0 && coordenadaY > 0):
                    cuadrante = 2;
                    break;

            case (coordenadaX < 0 && coordenadaY < 0):
                    cuadrante = 3;
                    break;

            case (coordenadaX > 0 && coordenadaY < 0):
                    cuadrante = 4;
                    break;
        }

            return cuadrante;
    }


    calcularMasCercano(misPuntos1: Punto[]): Punto {

 
        let indexAux :Punto = misPuntos1[0];
    
            for( let i = 1; i < misPuntos1.length; i++ ){

                if (misPuntos1[i].calcularDistancia(indexAux) < indexAux.calcularDistancia(indexAux)) {
                    indexAux = misPuntos1[i];
                }
    
            }
    
            return indexAux;

    }

}



