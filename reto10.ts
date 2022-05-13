// UTILIZANDO LAS DOS FUNCIONES ANTERIORES INDICAR SI ES PAR O IMPAR LA SUMA DE LOS CARACTERES DE CADA UNO DE LOS SIGUIENTES ARRAYS


import {checkNombres} from "./reto8";
import {detectParImpar} from "./reto9"


let listaPalabras1 = ["Casa", "Coche", "Ciudad", "Cesta"];
let listaPalabras2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let listaPalabras3 = ["Venezuela", "Veneno", "Voltaje"];


let resultado1:number = (checkNombres(listaPalabras1));
let resultado2:number = (checkNombres(listaPalabras2));
let resultado3:number = (checkNombres(listaPalabras3));

console.log(detectParImpar(resultado1));
console.log(detectParImpar(resultado2));
console.log(detectParImpar(resultado3));



// TAMBIEN SE REALIZAR POR CODIGO DE ESTA OTRA MANERA AUNQUE HAY QUE MODIFICAR LAS FUNCIONES 8 Y 9

// let acumulador1 = 0;
// let acumulador2 = 0;
// let acumulador3 = 0;
// let sumaListas = 0;

// function checklistas(array1, array2, array3) {

//     for (let i = 0; i < listaPalabras1.length; i++ ) {    

//         acumulador1 += listaPalabras1[i].length;
//     }

//         if (acumulador1 % 2 == 0) {
//             console.log("La suma de los caracteres de la lista compuesta por Casa, Coche, Ciudad y Cesta es Par " + "(" + acumulador1 + ")");

//         } else {  
//             console.log("La suma de los caracteres de la lista compuesta por Casa, Coche, Ciudad y Cesta es Impar " + "(" + acumulador1);
//         }


//     for (let i = 0; i < listaPalabras2.length; i++ ) {    

//         acumulador2 += listaPalabras2[i].length;
//     }

//         if (acumulador2 % 2 == 0) {
//             console.log("La suma de los caracteres de la lista compuesta por Barco, Baca, Bicicleta, Balon, Bisiesto, Brasil es Par");

//         } else {  
//             console.log("La suma de los caracteres de la lista compuesta por Barco, Baca, Bicicleta, Balon, Bisiesto, Brasil es Impar");
//         }


//     for (let i = 0; i < listaPalabras3.length; i++ ) {    

//         acumulador3 += listaPalabras3[i].length;
//     }

//         if (acumulador2 % 2 == 0) {
//             console.log("La suma de los caracteres de la lista compuesta por ");

//         } else {  
//             console.log("La suma de los caracteres de la lista compuesta por Barco, Baca, Bicicleta, Balon, Bisiesto, Brasil es Impar");
//         }


//     if (sumaListas % 2 == 0) {
//         console.log("La suma de los caracteres de la lista compuesta por Venezuela, Veneno, Voltaje es Par");

//     } else {
//         console.log("La suma de los caracteres de la lista compuesta por Venezuela, Veneno, Voltaje es Par");

//     }  

//     sumaListas = (acumulador1 + acumulador2 + acumulador3);
//     return sumaListas;


// }

// console.log(checklistas(listaPalabras1, listaPalabras2, listaPalabras3));






