// REALIZAR UNA FUNCION QUE TE DEVUELVA LA SUMA DEL NUMERO DE CARACTERES DE LAS PALABRAS ALMACENADAS EN UN ARRAY

let listaPalabras:string[] = ["Mesa de noche", "Cama", "Armario empotrado", "Puerta ", "Parquet"];


export function checkNombres(listaPalabras:string[]) {

    let acumulador:number = 0;


    for (let i = 0; i < listaPalabras.length; i++ ) {    

        acumulador += listaPalabras[i].length;

    }

        return acumulador;

}


console.log(checkNombres(listaPalabras));