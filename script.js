//Main
function app() {
    //Sumar
    const suma = document.getElementById("botonSumar")
    suma.addEventListener("click", sumar)
    //Restar
    const resta = document.getElementById("botonRestar")
    resta.addEventListener("click", restar)
    //Multiplicar
    const multiplicacion = document.getElementById("botonMultiplicar")
    multiplicacion.addEventListener("click", multiplicar)
    //Dividir
    const division = document.getElementById("botonDividir")
    division.addEventListener("click", dividir)
}

function sumar(){
    //Obteniendo valores
    let primerOperando = document.getElementById("pOperando")
    let segundoOperando = document.getElementById("sOperando")
    //Calculando valores
    let primerNumero = parseFloat(primerOperando.value)
    let segundoNumero = parseFloat(segundoOperando.value)
    let resultado = primerNumero + segundoNumero 
    //Mostrando resultado
    let r = document.getElementById("r")
    parseFloat(r.value = resultado)
}

function restar(){
    //Obteniendo valores
    let primerOperando = document.getElementById("pOperando")
    let segundoOperando = document.getElementById("sOperando")
    //Calculando valores
    let primerNumero = parseFloat(primerOperando.value)
    let segundoNumero = parseFloat(segundoOperando.value)
    let resultado = primerNumero - segundoNumero
    //Mostrando resultados
    let r = document.getElementById("r")
    parseFloat(r.value = resultado)
}

function multiplicar(){
    //Obteniendo valores
    let primerOperando = document.getElementById("pOperando")
    let segundoOperando = document.getElementById("sOperando")
    //Calculando valores
    let primerNumero = parseFloat(primerOperando.value)
    let segundoNumero = parseFloat(segundoOperando.value)
    let resultado = primerNumero * segundoNumero
    //Mostrando resultados
    let r = document.getElementById("r")
    parseFloat(r.value = resultado)
}

function dividir(){
    //Obteniendo valores
    let primerOperando = document.getElementById("pOperando")
    let segundoOperando = document.getElementById("sOperando")
    //Calculando valores
    let primerNumero = parseFloat(primerOperando.value)
    let segundoNumero = parseFloat(segundoOperando.value)
    let resultado = primerNumero / segundoNumero
    //Mostrando resultados
    let r = document.getElementById("r")
    parseFloat(r.value = resultado)
}

app()
