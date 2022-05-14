"use strict";
// REALIZAR UNA FUNCION QUE RECIBA COMO PARAMETRO UN ARRAY DE STRINGS Y COMO SALIDA DEVUELVA EL ARRAY REVERTIDO 
exports.__esModule = true;
exports.arrayInvertido = void 0;
var arrayInput = [1, 5, 8, 10, 50];
function arrayInvertido(array1) {
    var arrayOutput = [];
    for (var i = arrayInput.length - 1; i >= 0; i--) {
        arrayOutput.push(arrayInput[i]);
    }
    return (arrayOutput);
}
exports.arrayInvertido = arrayInvertido;
console.log(arrayInvertido(arrayInput));
