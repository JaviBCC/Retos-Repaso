// PROCEDIMIENTO QUE DADO UN PAIS IMPRIMA EN QUE CONTIENNTE ESTAS (MAXIMO 5 PAISES POR CONTINENTE)

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




