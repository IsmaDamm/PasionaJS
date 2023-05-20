function conjetura2(num){
    let cadena = "cadena : ";
    do{
        if(num%2 == 0){
            num = num /2;
        }
        else{
            num = (num*3)+1
        }
        cadena = cadena + num +  ' / ';
    }while(num != 1)
    return cadena;
}

conjetura(40);
conjetura2(40)


//parte 2

function telefonoValido(telefono){

    //sin isNan >:)

    if(telefono.length == 9 && telefono.toLowerCase() == telefono.toUpperCase()){
        return true;
    }
    else{
        return false;
    }
    

}

function formatTelefono(telefono){

    if(telefonoValido(telefono) == true){
        return (telefono.substring(0,3) + '-' + telefono.substring(3,6) + '-' + telefono.substring(6,9))
    }
    else{
        return ("numero no valido")
    }
}

function CifValido(cif){

    if(cif.length == 9 && isNaN(cif.substring(1-9)) &&  cif.substring(0-1) == cif.substring(0-1).toUpperCase()){
        return true
    }
    else{
        return false
    }
}

function Cadenas2(cadena1, cadena2){

    return cadena1.length > cadena2.length ? cadena1 : cadena2;
}

function Cadenas(){
    //convertir argument a array, con el sort ordenarla a partir del length y despues devolverla con el pop
    array = ([].slice.call(arguments).sort((function(a,b){ 
        return b.length - a.length; }))
        )        
        return array.pop()
}


// viernes 

function conjetura(num){
    let contador = 0
    do{
        contador++;
        if(num%2 == 0){
            num = num /2;
        }
        else{
            num = (num*3)+1
        }
    }while(num != 1)
    return contador;
}


function masPasos(num){
    let arr = [];
    let top3 = [];
    let posTop3 = [];
    for(let i=1; i <= num; i++){
        arr[i] = conjetura(i);
    }
    top3 = [...arr].sort((a,b) => b-a).slice(0,3); 
        for(let k=0; k < top3.length; k++){
            //muy mejorable, bucle de fuera sobra
            posTop3[k] = arr.indexOf(top3[k])
        }
    let valores = {
        //especifica, array de objetos es mejor, aprende a estructurar >:)
        valor : top3,
        posicion : posTop3
    }

    return valores
}