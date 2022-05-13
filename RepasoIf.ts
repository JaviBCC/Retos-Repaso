// CLASIFICAR LAS FUNCIONES SEGUN EL TIPO Y GUARDALAS EN FICHEROS DISTINTOS

export function signoZodiacal (day:number, month:number) {
    
    switch (true) {
     
        case (day > 22 && month == 11) || (day <= 20 && month == 12):
            console.log("Tu signo Zodiacal es SAGITARIO");            
            break;

        case (day > 21 && month == 12) || (day <= 19 && month == 1):
            console.log("Tu signo Zodiacal es CAPRICORNIO");
            break;

        case (day > 19 && month == 1) || (day <= 18 && month == 2):
            console.log("Tu signo Zodiacal es ACUARIO");
            break;

        case (day > 18 && month == 2) || (day <= 20 && month == 3):
            console.log("Tu signo Zodiacal es PISCIS");
            break;

        case (day > 20 && month == 3) || (day <= 20 && month == 4):
            console.log("Tu signo Zodiacal es ARIES");
            break;

        case (day > 20 && month == 4) || (day <= 20 && month == 5):
            console.log("Tu signo Zodiacal es TAURO");
            break;

        case (day > 20 && month == 5) || (day <= 20 && month == 6):
            console.log("Tu signo Zodiacal es GEMINIS");
            break;

        case (day > 20 && month == 6) || (day <= 20 && month == 7):
            console.log("Tu signo Zodiacal es CANCER");
            break;

        case (day > 20 && month == 7) || (day <= 21 && month == 8):
            console.log("Tu signo Zodiacal es LEO");
            break;       

        case (day > 21 && month == 8) || (day <= 22 && month == 9):
            console.log("Tu signo Zodiacal es VIRGO");
            break;    

        case (day > 22 && month == 9) || (day <= 22 && month == 10): 
            console.log("Tu signo Zodiacal es LIBRA");
            break;    

        case (day > 22 && month == 10) || (day <= 22 && month == 11):
            console.log("Tu signo Zodiacal es ESCORPIO");
            break;    

        default:
            console.log("Los datos introducidos no son validos, no puede obtener su signo Zodiacal");
          
    }

}

(signoZodiacal(18, 1));



export function geoLocalizacion(pais:string):void {

    if (pais ==  "Angola" || pais == "Argelia" || pais == "Egipto" || pais == "Kenia" || pais == "Nigeria") {
        console.log("Esta usted en " + pais + " pais perteneciente al contiente de AFRICA");

            } else if (pais == "Afganistan" || pais == "Armenia" || pais == "China" || pais == "Filipinas" || pais == "Rusia") {
                       console.log("Esta usted en " + pais + " pais perteneciente al contiente de ASIA");
        
            } else if (pais == "España" || pais == "Italia" || pais == "Portugal" || pais == "Francia" || pais == "Alemania") {
                      console.log("Esta usted en " + pais + " pais perteneciente al contiente de EUROPA");

            } else if (pais == "Argentina" || pais == "Chile" || pais == "Cuba" || pais == "Colombia" || pais == "Venezuela") {
                       console.log("Esta usted en " + pais + " pais perteneciente al contiente de AMERICA");

            } else if (pais == "Australia" || pais == "Fiyi" || pais == "Micronesia" || pais == "Palaos" || pais == "Samoa") {
                       console.log("Esta usted en " + pais + " pais perteneciente al contiente de OCEANIA");    

            } else {
                       console.log("Esta usted en la ANTARTIDA y va a pasar mucho frio");

            }
}

geoLocalizacion("Micronesia");




let checkColores = ["rojo", "negro", "naranja", "blanco", "azul", "verde", "marron"];

export function detectColors(checkColores:string[]):void {

    for (let i = 0; i < checkColores.length; i++) {

        switch (checkColores[i]) { 
            
            case "rojo":
                console.log("Enhorabuena el color rojo se encuentra en el Arcoiris");
                break;
            case "naranja":
                console.log("Enhorabuena el color naranja se encuentra en el Arcoiris");
                break;
            case "amarillo":
                console.log("Enhorabuena el color amarillo se encuentra en el Arcoiris");
                break;
            case "verde":
                console.log("Enhorabuena el color verde se encuentra en el Arcoiris");
                break;
            case "añil":
                console.log("Enhorabuena el color añil se encuentra en el Arcoiris");
                break;
            case "azul":
                console.log("Enhorabuena el color azul se encuentra en el Arcoiris");
                break;
            case "violeta": 
                console.log("Enhorabuena el color violeta se encuentra en el Arcoiris");
                break;
            default:
                console.log("Lo sentimos pero el color " + checkColores[i] + " no es un color del Arcoiris");

        }
        
    }
 
}

detectColors(checkColores);




export function detectParImpar (numero1:number) {

    let resultado:string;

    if (numero1 % 2 == 0) {

        resultado = ("El numero de caracteres " + numero1 + " es par");     


    } else {

        resultado = ("El numero de caracteres " + numero1 + " es impar");

    }

        return resultado;
 
}


(detectParImpar(8));












