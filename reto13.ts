
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

<<<<<<< HEAD
        let a = this.getX();
        let b = this.getY();

        // console.log("Valor de a: " + a);
        // console.log("Valor de b: " + b);
=======
        let a = this.x;
        let b = this.y;
>>>>>>> rama5

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

<<<<<<< HEAD
        coordenadaX = this.getX();
        coordenadaY = this.getY();

        // console.log("Valor de a: " + coordenadaX);
        // console.log("Valor de b: " + coordenadaY);

=======
        coordenadaX = this.x;
        coordenadaY = this.y;

     
>>>>>>> rama5
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

<<<<<<< HEAD
        // console.log("Valor de a: " + coordenadaX);
        // console.log("Valor de b: " + coordenadaY);

=======
>>>>>>> rama5
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


            let distanciaMinima  = Number.MAX_VALUE;
            let puntoMascercano  :Punto;

            for( let i = 1; i < misPuntos1.length; i++ ){

                if (this.calcularDistancia(misPuntos1[i]) < distanciaMinima) {
                
                     distanciaMinima = this.calcularDistancia(misPuntos1[i]);
                     puntoMascercano = misPuntos1[i];
                }      
             }
             
             return puntoMascercano;

    }
}



