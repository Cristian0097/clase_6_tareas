const $numeroDeFamiliares = document.querySelector("#numero-de-familiares")
const $botonAceptar = document.querySelector("#aceptar")

$botonAceptar.onclick = function () {

    borrarIntegrantes()
    ocultarBotonCalcular()
    ocultarLabel()

    if ($numeroDeFamiliares.value > 0){
        mostrarLabel()
        crearIntegrantes()
        mostrarBotonCalcular()
    } else {

    }
    
    return false
}


document.querySelector("#boton-calcular").onclick = function () {
    let listaEdades = document.querySelectorAll("#edades-de-familiares")
    let arrayEdades = []

    for (let i = 0; i < listaEdades.length; i++) {
        arrayEdades.push(Number(listaEdades[i].value))
    }

    let edadMenor = document.querySelector("#menor-edad")
    edadMenor.textContent = `La edad más pequeña es ${encontrarEdadMenor(arrayEdades)}`

    let edadMayor = document.querySelector("#mayor-edad")
    edadMayor.textContent = `La edad más grande es ${encontrarEdadMayor(arrayEdades)}`

    let promedioEdades = document.querySelector("#promedio-edades")
    promedioEdades.textContent = `El promedio de edades es ${calcularPromedio(arrayEdades)}`

    mostrarBotonResetear()

    return false
}


document.querySelector("#resetear").onclick = function () {
    $botonAceptar.disabled = false

    borrarIntegrantes()

    document.querySelector("#menor-edad").textContent = ""
    document.querySelector("#mayor-edad").textContent = ""
    document.querySelector("#promedio-edades").textContent = ""


    ocultarBotonResetear()
    ocultarLabel()
    ocultarBotonCalcular()
}

function crearIntegrantes() {
    let $divIntegrantes = document.querySelector("#integrantes")
    let numeroIntegrante = 1

    for (let i = $numeroDeFamiliares.value; i >= 1; i--) {
        let integrante = document.createElement("div")
        integrante.className = "integrante"
        let labelIntegrante = document.createElement("label")
        labelIntegrante.textContent = "Edad de Integrante # " + numeroIntegrante
        let nuevoInput = document.createElement("input")
        nuevoInput.type = "number"
        nuevoInput.id = "edades-de-familiares"
        integrante.appendChild(labelIntegrante)
        integrante.appendChild(nuevoInput)
        $divIntegrantes.appendChild(integrante)
        numeroIntegrante += 1
    }
}

function borrarIntegrantes(){
    let $integrantes = document.querySelectorAll(".integrante")

    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove()
    }
}

function mostrarLabel() {
    document.querySelector("#label-ingresar-edades").className = ""
}

function ocultarLabel() {
    document.querySelector("#label-ingresar-edades").className = "oculto"
}

function mostrarBotonCalcular() {
    document.querySelector("#boton-calcular").className = ""
}

function ocultarBotonCalcular() {
    document.querySelector("#boton-calcular").className = "oculto"
}

function mostrarBotonResetear() {
    document.querySelector("#resetear").className = ""
}

function ocultarBotonResetear() {
    document.querySelector("#resetear").className = "oculto"
}
