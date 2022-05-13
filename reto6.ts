// REALIZAR UNA FUNCION QUE TE DEVUELVA SI EXISTE UN NUMERO PAR EN EL ARRAY DE NUMEROS QUE INTRODUCES COMO PARAMETRO ENTRADA


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