// REALIZAR UNA FUNCION QUE RECIBA COMO PARAMETRO DE ENTRADA UN ARRAY DE STRINGS CON COLORES Y TE IMPRIMA 
// EN CADA CASO SI EL COLOR SE ENCUENTRA EN EL ARCO IRIS O NO -- (rojo, naranja, amarillo, verde, añil, azul y violeta)

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


