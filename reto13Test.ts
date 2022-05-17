import {Punto} from "./reto13"
import {Triangulo} from "./reto14"

let coordenada1:Punto  = new Punto(8, 12);
let coordenada2:Punto  = new Punto(9, - 16);
let coordenada3:Punto  = new Punto(16, 2);
let coordenada4:Punto  = new Punto(-5, 8);

let misPuntos1:Punto[] = [coordenada2, coordenada3, coordenada4];

let triangulo1:Triangulo = new Triangulo(coordenada2, coordenada3, coordenada4);


let convertCoord = coordenada1.toString();
console.log(convertCoord);

let distancia1 = coordenada1.distanciaAlOrigen();
console.log("Distancia-1: " + distancia1);

let distancia2 = coordenada1.calcularDistancia(coordenada2);
console.log("Distancia-2: " + distancia2);

let cuadrante1 = coordenada1.calcularCuadrante();
console.log("Cuadrante: " + cuadrante1);

console.log(coordenada1.calcularMasCercano(misPuntos1));

let longitudLados1 = (triangulo1.calcularLongitudLados());
console.log("Longitud de los lados: " + longitudLados1);




