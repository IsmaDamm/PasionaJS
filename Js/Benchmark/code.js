function arrayCorrelativo(tamaño) {
    const array = []
    for (let i = 0; i < tamaño; i++) {
        array[i] = i;
    }
    return array;
}

function generarNumeroAleatorio(tamaño) {
    let numero;
    const array = [];
    do {
        numero = Math.floor(Math.random() * tamaño + 1);
        if (!array.includes(numero)) {
            array.push(numero);
        }
    } while (array.length < tamaño)
    return array;
}

function arraySortRandom(tamaño) {
    array = arrayCorrelativo(tamaño)

    array = array.sort((a, b) => 0.5 - Math.random());
    return array;
}

function FisherYater(tamaño) {
    array = arrayCorrelativo(tamaño)

    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    
    return array;
}

function Durstenfeld(tamaño) {
    array = arrayCorrelativo(tamaño)

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


// Benchmark

class Benchmark {
    constructor(funcion, array, times) {
        times = 100;
        array = [10, 100, 1000, 10000]
        funcion = 1;

        this.array = array;
        this.times = times;
        this.funcion = funcion;
    }

    getTimes() {
        return this.times
    }

    setTimes(value) {
        if (value > 0) {
            this.times = value;
        }
        else{
            this.times = 0;
        }
    }
    setFuncion(value){
        if (value > 0 && value < 4) {
            this.funcion = value;
        }
        else{
            this.funcion = 1;
        }
    }

    getDuration() {
        this.evaluar(this.array, this.times, this.funcion)
    }
    getDurationAll(){
        this.evaluarAll(this.array, this.times)
    }

    evaluarAll(tamaño, numeroEjecuciones) {

        for (let j=0; j < tamaño.length; j++) {
            console.log(" --- Tamaño array : " + tamaño[j] + " --- ")
            console.time('generarNumeroAleatorio')
            for (let i = 0; i < numeroEjecuciones; i++) {
                generarNumeroAleatorio(tamaño[j])
            }
            console.timeEnd('generarNumeroAleatorio')
            console.time('arraySortRandom')
            for (let i = 0; i < numeroEjecuciones; i++) {
                arraySortRandom(tamaño[j])
            }
            console.timeEnd('arraySortRandom')
            console.time('FisherYater')
            for (let i = 0; i < numeroEjecuciones; i++) {
                FisherYater(tamaño[j])
            }
            console.timeEnd('FisherYater')
            console.time('Durstenfeld')
            for (let i = 0; i < numeroEjecuciones; i++) {
                Durstenfeld(tamaño[j])
            }
            console.timeEnd('Durstenfeld')
        }

    }

    evaluar(tamaño, numeroEjecuciones, funcion){
            if(funcion == 1){
                for (let j=0; j < tamaño.length; j++) {
                console.log(" --- Tamaño array : " + tamaño[j] + " --- ")
                console.time('generarNumeroAleatorio')
                for (let i = 0; i < numeroEjecuciones; i++) {
                    generarNumeroAleatorio(tamaño[j])
                }
                console.timeEnd('generarNumeroAleatorio')
            }
            }
            if(funcion == 2){
                for (let j=0; j < tamaño.length; j++) {
                    console.log(" --- Tamaño array : " + tamaño[j] + " --- ")
                    console.time('arraySortRandom')
                    for (let i = 0; i < numeroEjecuciones; i++) {
                        arraySortRandom(tamaño[j])
                    }
                    console.timeEnd('arraySortRandom')
                }
            }
            if(funcion == 3){
                for (let j=0; j < tamaño.length; j++) {
                    console.log(" --- Tamaño array : " + tamaño[j] + " --- ")
                    console.time('FisherYater')
                    for (let i = 0; i < numeroEjecuciones; i++) {
                        FisherYater(tamaño[j])
                    }
                    console.timeEnd('FisherYater')
                }
            }
            if(funcion == 4){
                for (let j=0; j < tamaño.length; j++) {
                    console.time('Durstenfeld')
                    for (let i = 0; i < numeroEjecuciones; i++) {
                        Durstenfeld(tamaño[j])
                    }
                    console.timeEnd('Durstenfeld')
                }
            }
    }
}


