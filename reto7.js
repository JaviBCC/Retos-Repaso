"use strict";
// REALIZAR UNA FUNCION QUE RECIBA UN ARRAY DE NOMBRES Y TE DEVUELVA VERDADERO SI SOLO TODOS LOS NOMBRES EMPIEZAN POR M
exports.__esModule = true;
exports.checkNombres = void 0;
var listaNombres = ["Manuel", "Mario", "Miriam", "Marcos", "Maria"];
function checkNombres(listaNombres) {
    var foundM = true;
    var i = 0;
    while (i < listaNombres.length) {
        if (listaNombres[i][0] != "M") {
            foundM = false;
        }
        i++;
    }
    return foundM;
}
exports.checkNombres = checkNombres;
console.log(checkNombres(listaNombres));
// export function checkNombres(listaNombres:string[]) {
//     let contador:number  = 0;
//     let nombresM:boolean = false;
//     for (let i = 0; i < listaNombres.length; i++ ) {    
//         if (listaNombres[i][0] == "M") {
//             contador += 1
//         }      
//     }
//     if (listaNombres.length == contador){
//         nombresM = true;
//       
//     } else {
//         nombresM = false;
//     }
//     return nombresM;
// }
// console.log(checkNombres(listaNombres));
