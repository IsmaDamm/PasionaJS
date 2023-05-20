let obtener = document.getElementById("obtener");
let opciones = document.getElementById("div1");
let Categorias = [];
let Minerales = [];

fetch('https://localhost:7112/api/Categorias')
  .then(response => response.json())
  .then(data => {
    console.log(data[0])
    Categorias = data;
});

fetch('https://localhost:7112/api/Minerals')
  .then(response => response.json())
  .then(data => {
    console.log(data[0])
    Minerales = data;
});

Obtener();

function Obtener(){
    obtener.addEventListener('click', function(){
         Click();   
    })
}
async function Click(){
    await opciones.append(...creacion(Categorias))
    await opciones.append(...creacion(Minerales))
}

function creacion(array) {
    let result = [];
    opciones.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
      let opcion = document.createElement('option');
      opcion.id = i;
      opcion.append("Nombre = " + array[i].name);
      opcion.append(", Descripcion = " + array[i].descripcion);
      opcion.append(", Strunz = " + array[i].strunz);
      opcion.append(", Categoria = " + array[i].minerals);
      result.push(opcion);
    }
    console.log(result)
    return result;
}
