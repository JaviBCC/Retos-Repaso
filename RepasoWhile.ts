
let listaNombres:string[] = ["Manuel", "Mario", "Miriam", "Marcos", "Maria"];

export function checkNombres(listaNombres:string[]) {

    let foundM:boolean = true;
    let i:number = 0;

    while (i < listaNombres.length) {

        if (listaNombres[i][0] != "M") {
            foundM = false;
        }
        
        i++;
    }

    return foundM;
}


    console.log(checkNombres(listaNombres));