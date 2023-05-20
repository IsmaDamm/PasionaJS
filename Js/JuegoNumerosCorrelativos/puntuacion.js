puntos = document.getElementById("puntuaciones");

let jugadores = JSON.parse('[' + localStorage.jugador.replace(/}{/g, '},{') + ']');

let nombres = [];
let puntuacion = [];
let tiempo = []

puntos.innerHTML = "Nombre" + " " + "tiempo" + " " + "puntuacion" + "<br>" + "<br>"


for(let i = 0; i < jugadores.length; i++) {
    nombres[i] = jugadores[i].name
    puntuacion[i] = jugadores[i].puntuacion
    tiempo[i] = jugadores[i].tiempo
    
    puntos.innerHTML = puntos.innerHTML + nombres[i] + " " + tiempo[i] + " " + puntuacion[i] + "<br>"
}


console.log(jugadores)