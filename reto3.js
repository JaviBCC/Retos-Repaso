"use strict";
// CREAR UNA FUNCION QUE IMPRIMA LOS NUMEROS IMPARES EXISTENTES HASTA EL NUMERO INDICADO COMO PARAMETRO DE ENTRADA
exports.__esModule = true;
exports.numImpar = void 0;
function numImpar(numIni) {
    for (var i = 1; i <= numIni; i += 2) {
        console.log(i);
    }
}
exports.numImpar = numImpar;
numImpar(88);
