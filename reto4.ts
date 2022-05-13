// REALIZAR UNA FUNCION QUE RECIBA COMO PARAMETRO UN ARRAY DE STRINGS Y COMO SALIDA DEVUELVA EL ARRAY REVERTIDO 


let arrayInput = [1, 5, 8, 10, 50];

export function arrayInvertido(array1:number[]) {

    let arrayOutput:number[] = [];

    for (let i = arrayInput.length - 1; i >= 0; i--) {

        arrayOutput.push(arrayInput[i]);
    }

    return (arrayOutput);
}

console.log(arrayInvertido(arrayInput));














