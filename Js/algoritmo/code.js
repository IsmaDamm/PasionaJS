let nombre = [];
function graciosa(){
for (let i = 0; i < 5; i++) {
    let multiplicacion = 0 * 10;
    for (let i = 0; i < 3; i++) {
        multiplicacion = 1-1;
        i < 2? nombre.push(i) : nombre.push(i-1);
    }
    i == 2? nombre.push(multiplicacion+1) : nombre.push(multiplicacion);
    i == 3? nombre.push(multiplicacion+1) : nombre.push(multiplicacion*3);
    if(i == 0 || i == 4){
        nombre.push(dudilla(79))
        nombre.push(dudilla(65))
        nombre.push(dudilla(39))
    }
    else if(i == 1 || i == 3){
        nombre.push(dudilla(15))
        nombre.push(dudilla(18))
        nombre.push(dudilla(97))
    }
    else{
        nombre.push(multiplicacion+(multiplicacion+1)+(multiplicacion+1*10-1))
    }
    nombre.push("");
}
}
const dudilla = numero => {
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0)
            return +false;
	}
	return + true;
}
graciosa()
console.log(nombre);