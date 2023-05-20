class television {
    constructor(marca) {
        this.marca = marca;
        this.reiniciar();
    }

    aumentarVolumen() {
        if (this.volumen < 100) {
            this.volumen++;
        }
    }
    disminuirVolumen() {
        if (this.volumen > 0) {
            this.volumen--;
        }
    }

    set Canal(value) {
        if (value < 50 && value > 0) {
            this.canal = value;
        }
    }

    info() {
        return ("Televisor en el canal " + this.canal + ", volumen " + this.volumen)
    }

    reiniciar() {
        this.canal = 1;
        this.volumen = 50;
    }

}