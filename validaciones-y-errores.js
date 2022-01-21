function borrarErrores() {
    let $errores = document.querySelectorAll("#errores li")


    $errores.forEach(function (li) {
        li.remove()
    })
}

function manejarErrores(errores) {

    borrarErrores()
    const $errores = document.querySelector("#errores")
    let contadorErrores = 0

    if (errores) {

        contadorErrores++
        document.querySelector("#numero-de-familiares").className = 'error'
        const $error = document.createElement("li")
        $error.id = "error"
        $error.innerText = errores
        $errores.appendChild($error)


    } else {
        document.querySelector("#numero-de-familiares").className = ''
    }

    return contadorErrores
}

function validarNumeros($numeros) {

    if (!/^[0-9]\d*$/.test($numeros)) {

        return 'El campo solo acepta 1 o mas numeros del 0 al 9'

    } else if ($numeros + 1 <= 1) {

        return 'El numero no puede ser 0 ni un valor negativo'

    } else {

        return ''

    }
}

function validarEdades() {

}