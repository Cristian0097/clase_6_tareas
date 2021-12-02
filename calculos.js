function encontrarEdadMenor(arrayEdades) {
    let numeroMasChico = arrayEdades[0]

    for (let i = 0; i < arrayEdades.length; i++) {
        if (arrayEdades[i] < numeroMasChico) {
            numeroMasChico = arrayEdades[i]
        }
    }
    return numeroMasChico
}

function encontrarEdadMayor(arrayEdades) {
    let numeroMasGrande = arrayEdades[0]

    for (let i = 0; i < arrayEdades.length; i++) {
        if (arrayEdades[i] > numeroMasGrande) {
            numeroMasGrande = arrayEdades[i]
        }
    }
    return numeroMasGrande
}

function calcularPromedio(arrayEdades) {
    let sumatoria = 0

    for (let i = 0; i < arrayEdades.length; i++) {
        sumatoria += arrayEdades[i]
    }

    let promedio = sumatoria / arrayEdades.length
    return Math.floor(promedio)
}
