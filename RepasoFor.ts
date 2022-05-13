// CLASIFICAR LAS FUNCIONES SEGUN EL TIPO Y GUARDALAS EN FICHEROS DISTINTOS

export function numImpar(numIni:number):void {

    for (let i = 1; i <= numIni; i+=2) {
        console.log(i);
    }

}

numImpar(88);


let arrayInput = [1, 5, 8, 10, 50];

export function arrayInvertido(array1:number[]) {

    let arrayOutput:number[] = [];

    for (let i = arrayInput.length - 1; i >= 0; i--) {

        arrayOutput.push(arrayInput[i]);
    }

    return (arrayOutput);
}

console.log(arrayInvertido(arrayInput));


let numbers1:number[] = [1 , 66, 33, 2 , 7, 8, 22, 61, 44, 73];
let contador:number = 0;

export function cheNumpar(numbers1:number[]) {

    for (let i = 0; i < numbers1.length; i++) {

        if (numbers1[i] % 2 == 0) {
            contador += 1
        }    
    }
        return contador;
}

cheNumpar(numbers1);
console.log("Existen " + contador + " numeros pares en el ARRAY");


let listaPalabras:string[] = ["Mesa de noche", "Cama", "Armario empotrado", "Puerta ", "Parquet"];

export function checkNombres(listaPalabras:string[]) {

    let acumulador:number = 0;


    for (let i = 0; i < listaPalabras.length; i++ ) {    

        acumulador += listaPalabras[i].length;

    }

        return acumulador;

}


checkNombres(listaPalabras);










