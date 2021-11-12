let monto = window.prompt("Ingrese el monto abonado")
monto = parseInt(monto)
let aCobrar = window.prompt("Ingrese el monto a cobrar")
aCobrar = parseInt(aCobrar)
let cambio = 0
let divisor = 0
//Definimos las monedas y la cantidad que existe de cada una
let moneda = [100, 50, 20, 10, 5, 1]
let cantidad = [0, 0, 0, 0, 0, 0]
CalcularCambio()
MostrarResultados()

function CalcularCambio() {
    cambio = monto - aCobrar
    bandera = 0
    i = 0
    while (bandera == 0 && i <= 5) {
        if (cambio >= moneda[i]) {
            divisor = Math.trunc(cambio / moneda[i])
            cambio = cambio - divisor * moneda[i]
            cantidad[i] = divisor
            if (cambio <= 0) {
                bandera = 1
            }
        }
        i++
    }
}

function MostrarResultados() {
    for (i = 0; i <= 5; i++) {
        console.log("De la moneda de " + moneda[i] + " se dio un total de " + cantidad[i])
    }
}