// CREAR UNA FUNCION QUE DADA UNA FECHA DE NACIMIENTO TE DEVUELVA EL SIGNO ZODIACAL


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

