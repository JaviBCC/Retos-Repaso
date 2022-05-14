"use strict";
// REALIZAR UNA FUNCION QUE TE DEVUELVA SI EXISTE UN NUMERO PAR EN EL ARRAY DE NUMEROS QUE INTRODUCES COMO PARAMETRO ENTRADA
exports.__esModule = true;
exports.cheNumpar = void 0;
var numbers1 = [1, 66, 33, 2, 7, 8, 22, 61, 44, 73];
var contador = 0;
function cheNumpar(numbers1) {
    for (var i = 0; i < numbers1.length; i++) {
        if (numbers1[i] % 2 == 0) {
            contador += 1;
        }
    }
    return contador;
}
exports.cheNumpar = cheNumpar;
cheNumpar(numbers1);
console.log("Existen " + contador + " numeros pares en el ARRAY");
