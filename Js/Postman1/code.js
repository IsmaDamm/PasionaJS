usuario = [];
Todos = [];

opciones = document.getElementById('option');
opciones2 = document.getElementById('option2');

async function Usuarios(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let json = await response.json();
    console.log(json)
    for(let i = 0; i < json.length; i++){
        usuario.push(json[i].name)
    }
    return json.length;
}

async function todo(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    .then((response) => response.json())
    .then((json) => {
        array = []
        for(let i = 0; i < json.length; i++){
            array.push(json[i].title)
        }
        Todos.push(array);
    })
}

function option(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      let opcion = document.createElement('option');
      opcion.value = i;
      opcion.append(array[i]);
      result.push(opcion);
    }
    console.log(result)
    return result;
}

function option2(array){
    let result = []

    for (let i = 0; i < array.length; i++) {
        let opcion = document.createElement('option');
        opcion.append
    }
}

async function Creacion(){
    await Usuarios().then(
        value => {
            for(let i = 1; i <= value; i++){
                todo(i);
            }
            opciones.append(...option(usuario))  
            ClickSelect();  
            //opciones2.append(...option(Todos[0]))  
        }
    )
}

function ClickSelect(){
    const selectElement = document.querySelector('.form-select');
    selectElement.addEventListener('change', (event) => {
        const resultado = document.querySelector('.resultado');
            resultado.textContent =  Todos[event.target.value][0];
    });
}

Creacion();

