let nObjetos, beneficio, peso, maximo, beneficioTotal = 0, i = 0
nObjetos = window.prompt("Ingrese la cantidad de objetos")
nObjetos = parseInt(nObjetos)
maximo = window.prompt("Ingrese el peso maximo (en kilos)")
maximo = parseInt(maximo)

let mochila = [nObjetos - 1]

class Objetos {
    constructor(peso, beneficio) {
        this.peso = peso
        this.beneficio = beneficio
        this.cantidad
        this.beneficioNeto
    }
}

//Cargamos los objetos con su peso y beneficio por unidad
while (i < nObjetos) {
    beneficio = window.prompt("Ingrese el beneficio unitario del objeto numero " + (i + 1))
    beneficio = parseInt(beneficio)
    peso = window.prompt("Ingrese el peso (en kilos) del objeto numero " + (i + 1))
    peso = parseInt(peso)
    const objeto = new Objetos(peso, beneficio)
    mochila[i] = objeto
    i++
}

CalcularBeneficioNeto()

//Ordenamos el array de mayor a menor por su beneficio.
//En el uso de la funcion "sort" dariamos por entendido que se utilizar la funcion generica de seleccion de los algoritmos voraces
mochila.sort(function (a, b) { return b.beneficioNeto - a.beneficioNeto })

CargarMochila()
MostrarResultados()

function CalcularBeneficioNeto() {
    mochila.forEach(element => {
        element.beneficioNeto = element.beneficio * element.peso
    });
}

function CargarMochila() {
    let bandera = 0
    let valorActual = maximo
    i = 0
    while (bandera == 0 && i < nObjetos) {
        if (valorActual >= mochila[i].peso) {
            valorActual = valorActual - mochila[i].peso
            mochila[i].cantidad = mochila[i].peso
            beneficioTotal = beneficioTotal + mochila[i].beneficioNeto
        } else {
            mochila[i].cantidad = valorActual
            beneficioTotal = beneficioTotal + (mochila[i].beneficio * valorActual)
            valorActual = 0
        }

        if (valorActual == 0) {
            bandera = 0
        }

        i++
    }


}

//En esta funcion entemos que como devuelve el resultado seria la funcion generica de solucion
function MostrarResultados() {
    console.log("El maximo establecido de peso es: " + maximo)
    for (i = 0; i < nObjetos; i++) {
        console.log("Del objeto de peso " + mochila[i].peso + " con un beneficio unitario de " + mochila[i].beneficio +
            " el cual posee un beneficio neto de " + mochila[i].beneficioNeto + " se dio un total de " + mochila[i].cantidad + " kilos")
    }
    console.log("El beneficio total obtenido es: " + beneficioTotal)
}


