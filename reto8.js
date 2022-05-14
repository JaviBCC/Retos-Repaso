"use strict";
// REALIZAR UNA FUNCION QUE TE DEVUELVA LA SUMA DEL NUMERO DE CARACTERES DE LAS PALABRAS ALMACENADAS EN UN ARRAY
exports.__esModule = true;
exports.checkNombres = void 0;
var listaPalabras = ["Mesa de noche", "Cama", "Armario empotrado", "Puerta ", "Parquet"];
function checkNombres(listaPalabras) {
    var acumulador = 0;
    for (var i = 0; i < listaPalabras.length; i++) {
        acumulador += listaPalabras[i].length;
    }
    return acumulador;
}
exports.checkNombres = checkNombres;
(checkNombres(listaPalabras));
