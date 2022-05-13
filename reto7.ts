// REALIZAR UNA FUNCION QUE RECIBA UN ARRAY DE NOMBRES Y TE DEVUELVA VERDADERO SI SOLO TODOS LOS NOMBRES EMPIEZAN POR M

let listaNombres:string[] = ["Manuel", "Mario", "Miriam", "Marcos", "Maria"];

export function checkNombres(listaNombres:string[]) {

    let foundM:boolean = true;
    let i:number = 0;

    while (i < listaNombres.length) {

        if (listaNombres[i][0] != "M") {
            foundM = false;
        }
        
        i++;
    }

    return foundM;
}


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








