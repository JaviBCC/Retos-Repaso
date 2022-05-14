"use strict";
// UTILIZANDO LAS DOS FUNCIONES ANTERIORES INDICAR SI ES PAR O IMPAR LA SUMA DE LOS CARACTERES DE CADA UNO DE LOS SIGUIENTES ARRAYS
exports.__esModule = true;
var reto8_1 = require("./reto8");
var reto9_1 = require("./reto9");
var listaPalabras1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var listaPalabras2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var listaPalabras3 = ["Venezuela", "Veneno", "Voltaje"];
var resultado1 = ((0, reto8_1.checkNombres)(listaPalabras1));
var resultado2 = ((0, reto8_1.checkNombres)(listaPalabras2));
var resultado3 = ((0, reto8_1.checkNombres)(listaPalabras3));
console.log((0, reto9_1.detectParImpar)(resultado1));
console.log((0, reto9_1.detectParImpar)(resultado2));
console.log((0, reto9_1.detectParImpar)(resultado3));
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
