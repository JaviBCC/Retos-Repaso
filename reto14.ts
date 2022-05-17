import {Punto} from "./reto13"


export class Triangulo {

     private coordenada2:Punto;
     private coordenada3:Punto;
     private coordenada4:Punto;
   

    constructor (coordenada2:Punto, coordenada3:Punto, coordenada4:Punto) {

        this.coordenada2 = coordenada2;
        this.coordenada3 = coordenada3;
        this.coordenada4 = coordenada4;
        
    }

    calcularLongitudLados() : number[] {

        let lado1:number;
        let lado2:number;
        let lado3:number;
              
        lado1 = this.coordenada2.calcularDistancia(this.coordenada3);
        lado2 = this.coordenada3.calcularDistancia(this.coordenada4);
        lado3 = this.coordenada4.calcularDistancia(this.coordenada2);

        let myTriangulo = [lado1, lado2, lado3]
        
        console.log(myTriangulo);

        return myTriangulo;

    }


}