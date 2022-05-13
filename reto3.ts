// CREAR UNA FUNCION QUE IMPRIMA LOS NUMEROS IMPARES EXISTENTES HASTA EL NUMERO INDICADO COMO PARAMETRO DE ENTRADA

export function numImpar(numIni:number):void {

    for (let i = 1; i <= numIni; i+=2) {
        console.log(i);
    }

}

numImpar(88);



