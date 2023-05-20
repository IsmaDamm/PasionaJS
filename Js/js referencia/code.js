//especifica !!!!!, nombre de la funcion

function objeto(nombre, referencia, precio, stock){

        this.nombre = nombre,
        this.referencia = referencia,
        this.precio = precio,
        this.stock = stock

        let devolver = true;
        let regex = /^[A-Z]+$/;

        if(stock < 0 || precio < 0){
            devolver = false
        }
        if(referencia.length != 8 || !regex.test(referencia.substring(0,3)) || isNaN(referencia.substring(3,8))){
            console.log("si")
            devolver = false
        }

        if(devolver == true){
            return objeto
        }
        else{
            return null
        }
}
let ana;

ana = objeto("ana", "DHZ12345", 30, 40);

//array 

let arr = new Array(100);
let letras = ["AAA","BBB","CCC","DDD","EEE","FFF","GGG","HHH","III","JJJ"] 

for(let i = 0; i < arr.length ; i++){
    //usar la funcion objeto!!!
    arr[i] = {nombre: '', referencia: '', precio: '', stock: ''}
}

for (let i = 0; i < arr.length; i = i+10) {
        arr[i].referencia = (letras[i/10] + "000")
        for(let j = i; j < arr.length; j++){
            arr[j].referencia = arr[i].referencia;
        }
        console.log(arr[i].referencia)
}


for(let i = 0; i < arr.length; i++){
    arr[i].nombre = "producto " + i;
    arr[i].stock = Math.floor(Math.random() * 50) + 2;
    arr[i].precio = Math.floor(Math.random() * 200) + 10;
//format number (mirar)
    if(i < 10){
        arr[i].referencia = arr[i].referencia + "0" + i;
    }
    else{
        arr[i].referencia = arr[i].referencia + i;
    }    
}


//deberes viernes 23/10/22
let referencia = "BBB"

function getByReference(referencia){
    //si lo hacia con push, no me lo cogia todo, por eso uso una variable
    let arrayRetorno = [];
    let j = 0;
    if(referencia.length > 3){
        return arrayRetorno;
    }
    else{
        //usar filter, miratelo para mejorar eficiencia
        for(let i = 0; i< arr.length; i++){
            if(arr[i].referencia.startsWith(referencia)){
                console.log(arr[i].referencia)
                arrayRetorno[j] = arr[i].referencia
                j++;
            }
        }
    }
    return arrayRetorno
}

function getInventory(){
    let stockTotal = 0;
    //pasar los parametros, no podemos pillar arr que es global, mejor pasarlo arriba en get Inventroy
    //Usar reduce, haz apuntes de js puto vago
    for(let i = 0; i< arr.length; i++){
        stockTotal = stockTotal + arr[i].stock;
    }
    return stockTotal
}

function getValuedInventory(){
    let precioTotal = 0;
    for(let i = 0; i< arr.length; i++){
        precioTotal = precioTotal + arr[i].precio;
    }
    return getInventory()*precioTotal
}

function getPriceRange(min,max){
    let arrayRetorno = [];
    let j =0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i].precio > min && arr[i].precio < max){
            arrayRetorno[j] = arr[i].referencia
            j++;
        }
    }
    return arrayRetorno
}

function getSortValuedInventory(){
    let arrayRetorno = [];
    let j =0;
    for(let i = 0; i< arr.length; i++){
            arrayRetorno[j] = arr[i].stock*arr[i].precio
            j++;
    }
    // de menor a mayor (a-b), de mayor a menor (b-a)
    arrayRetorno.sort(function(a, b){return a - b});
    return arrayRetorno;
}