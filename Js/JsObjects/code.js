function objeto(nombre, sueldo){

    const trabajador = {
        Nombre: nombre, 
        Sueldo: sueldo
    }

    return trabajador;
}
/*
//error, solo funciona con objetos que tienen la propiedad sueldo

function SueldoMayor(object1, object2){
    return object1.Sueldo > object2.Sueldo?  object1 : object2; 
}
*/

//solucion, meterle if
function SueldoMayor(object1, object2){

    if(object1.Sueldo === undefined && object2.Sueldo === undefined){
        return null
    }
    if(object2.Sueldo === undefined){
        return object1
    }
    if(object1.Sueldo === undefined){
        return object2
    }
    if(object1.Sueldo > object2.Sueldo){
        return object1
    }
    else{
        return object2
    }
}


let ana;
let pepe;

ana = objeto("Ana Pi", 1500);
pepe = objeto("Jose Buj"), 1300;

SueldoMayor(ana, pepe);

