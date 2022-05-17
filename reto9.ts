// REALIZAR UNA FUNCION QUE IMPRIMA POR CONSOLA EL SIGUIENTE MENSAJE
//      -- "El numero es par" , si el numero introducido como parametro de entrada es par.
//      -- "El numero es impar" , si el numero introducido como parametro de entrada es impar.


export function detectParImpar (numero1:number) {

    let resultado:string;

    if (numero1 % 2 == 0) {

        resultado = ("El numero de caracteres " + numero1 + " es par");     


    } else {

        resultado = ("El numero de caracteres " + numero1 + " es impar");

    }

        return resultado;
 
}


console.log(detectParImpar(8));


