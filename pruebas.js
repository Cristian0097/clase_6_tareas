function probarValidarIntegrantes (){
    console.assert(
        validarNumeros('+-., ') === 'El campo solo acepta 1 o mas numeros del 0 al 9',
        'Validar numeros no valido que el campo solo tenga numeros del 1 al 9'
    )

    console.assert(
        validarNumeros('10') === '',
        'Validar numeros no funciono con un numero valido'
    )

    console.assert(
        validarNumeros('0') === 'El numero no puede ser 0 ni un valor negativo',
        'Validar numeros no validó que el numero de integrantes no sea 0'
    )

}

probarValidarIntegrantes()