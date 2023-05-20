let paginas;
let paginasLocation;
let species = [];
let localizaciones = [];

opciones = document.getElementById("inputGroupSelect");
opciones2 = document.getElementById("inputGroupSelect2");
//intento frustado de buscar la cantidad de paginas de la api(al final funciono)
function despaginacion(){
    promesa =  fetch('https://rickandmortyapi.com/api/character')
    .then(res => {return res.json()})
    .then(response => { 
            paginas = response.info.pages;
            getInfo();
            imagen();
    })
}
// function despaginacionLocation(){
//     promesa =  fetch('https://rickandmortyapi.com/api/character')
//     .then(res => {return res.json()})
//     .then(response => { 
//             paginasLocation = response.info.pages;
//             getInfo();
//             imagen();
//     })
// }
// despaginacionLocation();
despaginacion();
//lo que hace esto, es buscar en la api y devolverte una array con tus especificaciones
// recursos--> location/character/episode
// tipo --> name/species/status

function Buscador(recursos, tipo, pagina, arrayGuardar){
    fetch(`https://rickandmortyapi.com/api/${recursos}/?page=${pagina}`)
    .then(res => res.json())
    .then(response => {
        let array = getValues(response.results, tipo)
        for (let i = 0; i < array.length; i++) {
            if (!arrayGuardar.includes(array[i]))
            arrayGuardar.push(array[i]);
        }
        if(array.length == response.info.pages){
            meter()
        }
    }
    )
    return arrayGuardar
}

function getValues(objeto, tipo) {
    return objeto.map(function(item) {
        return item[tipo];   
    });
}

function getInfo(){
    for(let i = 0; i <8; i++) {
        Buscador("location", "name", i, localizaciones)
    }
    for(let i = 0; i < paginas+1; i++) {
        Buscador("character", "species", i, species)
    }
}

//creacion de las opciones


function option(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      let opcion = document.createElement('option');
      opcion.id = i;
      opcion.append(array[i]);
      result.push(opcion);
    }
    console.log(result)
    return result;
}

//setTimeout(meter, 150);
function meter(){
        opciones.append(...option(species)),    
        opciones2.append(...option(localizaciones))  
}

pagina = 1;
function ejectuar(){
    console.log(pagina)
    let input = document.getElementById("inputGroupSelect").value
    let input2 = document.getElementById("inputGroupSelect2").value
    console.log(input)
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}&species=${input}&location.name=${input2}`)
    .then(res => res.json())
    .then(response => {
        
            for (let i = 0; i < response.results.length; i++) {
                if(input2 ==""){
                    const imagen = document.createElement('img')
                    imagen.src = response.results[i].image
                    document.getElementById('mostrador').appendChild(imagen)
                }
                else if (response.results[i].location.name == input2){
                    const imagen = document.createElement('img')
                    imagen.src = response.results[i].image
                    document.getElementById('mostrador').appendChild(imagen)
                }
            }
            if(response.info.pages < pagina){
                pagina=1;
           }
            else if(pagina <= response.info.pages){
                ejectuar(pagina);
                pagina++;
                console.log(response.info.pages)
            }
    })
}
function imagen(  ){
    // document.getElementById("alante").addEventListener("click", function(){
    //     document.getElementById('mostrador').innerHTML = '';
    // })
    // document.getElementById("atras").addEventListener("click", function(){
    //     document.getElementById('mostrador').innerHTML = '';
    //     if(pagina2 == 0){
    //         pagina2++;
    //     }
    //     else{
    //         pagina2--;
    //     }
    //     ejectuar(pagina2);
    // })
    document.getElementById("buscar").addEventListener("click", function(){
        ejectuar();
    
}
    )
}




function limpiar(){
    document.getElementById("limpiar").addEventListener("click", function(){
        document.getElementById('mostrador').innerHTML = '';
    });
}

limpiar()