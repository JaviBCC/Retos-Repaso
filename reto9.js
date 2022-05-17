"use strict";
// REALIZAR UNA FUNCION QUE IMPRIMA POR CONSOLA EL SIGUIENTE MENSAJE
//      -- "El numero es par" , si el numero introducido como parametro de entrada es par.
//      -- "El numero es impar" , si el numero introducido como parametro de entrada es impar.
exports.__esModule = true;
exports.detectParImpar = void 0;
function detectParImpar(numero1) {
    var resultado;
    if (numero1 % 2 == 0) {
        resultado = ("El numero de caracteres " + numero1 + " es par");
    }
    else {
        resultado = ("El numero de caracteres " + numero1 + " es impar");
    }
    return resultado;
}
exports.detectParImpar = detectParImpar;
console.log(detectParImpar(8));
