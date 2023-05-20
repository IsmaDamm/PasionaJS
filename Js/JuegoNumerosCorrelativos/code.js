let pausado;

var tabla = document.getElementById('TablaContenido');
function shuffleArray(array) {
  for (var i = 99; i > 1; i--) {
    //console.log(array[i])
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

//fatal :'c
function creacionTabla() {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    //aqui creas de mas filas
    let td = document.createElement('td');
    td.id = "numero" + i;
    td.append(i);
    result.push(td);
  }
  shuffleArray(result)
  let tabla = [];
  for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
      tr.appendChild(result[j + i * 10])
    }
    tabla.push(tr)
    console.log(tabla)
  }
  return tabla;
}


function clicados() {
  let puntuacion = document.getElementById("Puntuacion")
  let clicados = document.getElementById("Clicados")
  let noClicados = document.getElementById("PorClicar")
  puntuacion.innerHTML++;
  clicados.innerHTML++;
  noClicados.innerHTML--;
}

function pause() {
  let pausa = document.getElementById("pausa")
  pausa.addEventListener("click", function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    pauseTimer();
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        startTimer();
      }
    }
  })
}

function Teclas() {
  window.addEventListener("keydown", event => {
    if (event.key.toUpperCase() == 'P') {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
      pauseTimer();
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
          startTimer();
        }
      }
    }
    //gracias StackOverflow <3
    //mirar si se esta pulsanod una tecla, si esta es control, pues control es igual a true
    var ctrl = event.ctrlKey ? event.ctrlKey : ((event.keyCode === 17)
      ? true : false);

    if (event.keyCode == 70 && ctrl) {
      event.preventDefault();
      alert("De verdad estas haciendo trampas?, no seas llorón y juega")
    }
  });
}


function juego() {
  let i = 1;
  document.getElementById('timer').innerHTML = 4 + ":" + 59;
  let contador = document.getElementById('timer').innerHTML;
  //Refactorizar
  let trampa = document.getElementById("trampa")
  trampa.addEventListener("click", function () {
    let siguiente = document.getElementById("numero" + i);
    siguiente.classList.add("trampa");
    document.getElementById("trampa").disabled = true;
  })
  document.querySelectorAll('#TablaContenido td')
    .forEach((e, n, x) => e.addEventListener("click", function () {
      if (i == 1) {
        startTimer();
      }
      if (e.classList == ('color')) {
      }
      if (contador == '0:00') {
        Puntuacion()
        GameOver()
      }
      else if (i == e.innerText) {
        e.classList.add('color');
        clicados()
        if (e.innerText == 5) {
          Puntuacion()
          Win()
        }
        i++;
      }
      else {
        document.getElementById('timer').innerHTML = 0 + ":" + 00;
        Puntuacion()
        GameOver()
      }
    }));
}

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if (s == 59) { m = m - 1 }
  if (m < 0) {
    return
  }

  document.getElementById('timer').innerHTML =
    m + ":" + s;

  pausado = setTimeout(startTimer, 1000);
}
function pauseTimer() {
  clearTimeout(pausado);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) { sec = "0" + sec };
  if (sec < 0) { sec = "59" };
  return sec;
}

function GameOver() {
  window.location.href = "./GameOver.html";
}

function Win() {
  window.location.href = "./win.html";
}

function Puntuacion() {
  //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  //let data = JSON.parse(localStorage["data"]); 
  nombre = document.querySelector('#nombre').value;
  puntuacionF = document.getElementById("Puntuacion").innerHTML
  tiempoRestante = document.getElementById("timer").innerHTML

  if (nombre == '') {
    nombre = 'SinNombre'
  }
  // //data[localStorage.length] = JSON.stringify({name: nombre, puntuacion: puntuacionF, tiempo: tiempoRestante});
  let lista = [];
  if (localStorage.lista) {
    lista = JSON.parse(localStorage.lista);
  }
  lista.push({ name: nombre, puntuacion: puntuacionF, tiempo: tiempoRestante });
  localStorage.setItem('lista', JSON.stringify(lista));

  if (localStorage.length == 0) {
    localStorage.jugador = JSON.stringify({ name: nombre, puntuacion: puntuacionF, tiempo: tiempoRestante });
  }
  else {
    localStorage.jugador = JSON.stringify({ name: nombre, puntuacion: puntuacionF, tiempo: tiempoRestante }) + localStorage.jugador;
  }

}


tabla.append(...creacionTabla());
juego();
Teclas();
pause();