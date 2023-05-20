
let numero = 5;
let numero2 = 2;
let resultado;

resultado = numeroMayor(numero, numero2);
console.log(resultado)

function numeroMayor(num1, num2){
    if (num1 > num2){
        console.log(num1 + "e s mayor a " + num2)
    }
    if (num1 < num2){
        console.log(num2 + " es mayor a " + num1)
    }
    if (num1 == num2){
        console.log(num1 + "es igual a " + num2)
    }
}

let numeroMayor2 = function numeroMayor(num1, num2){
    if (num1 > num2){
        console.log(num1 + " es mayor a " + num2)
    }
    if (num1 < num2){
        console.log(num2 + " es mayor a " + num1)
    }
    if (num1 == num2){
        console.log(num1 + "es igual a " + num2)
    }
}
let numeroMayor3 = (num1, num2) => {
    if (num1 > num2){
        console.log(num1 + " es mayor a " + num2)
    }
    if (num1 < num2){
        console.log(num2 + " es mayor a " + num1)
    }
    if (num1 == num2){
        console.log(num1 + "es igual a " + num2)
    }
};


console.log(numeroMayor(numero, numero2));
console.log(numeroMayor2(numero, numero2));
console.log(numeroMayor3(numero, numero2));


//paridad

function paridad(num1, num2){

    if(num1%2 == 0){
        console.log(num1 + " es par")
    }
    else{
        console.log( num1 + " es impar")
    }

    if(num2%2 == 0){
        console.log(num2 + " es par")
    }
    else{
        console.log( num2 + " es impar")
    }
}
paridad(3,4);
paridad(2,1);
paridad(2,2);
paridad(5,5);

let paridad2 = (num1, num2 ) => {
    !(num1%2)?  console.log(num1 + " es par"): console.log(num1 + " es impar");
    num2%2?  console.log(num2 + " es par"): console.log(num2 + " es impar");
}

function primo(num){
    let primo = true;
    for(i = 2; i < num; i++){
        if(num % i == 0){
            primo = false;
        }
    }
    if(primo == true){
        console.log( num + " es primo");
    }
    else{
        console.log( num + " no es primo");
    }
}

primo(2);
primo(3);
primo(4);
primo(5);
primo(7);
primo(56);