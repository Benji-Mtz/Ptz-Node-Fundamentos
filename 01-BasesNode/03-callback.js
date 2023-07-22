function saludar(nombre, miCallback) {
    setTimeout(function () {
        // Paso 2
        console.log(`Hola ${nombre}`);
        // Paso 3
        miCallback(nombre);
    }, 1000);
}

function despedida(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios ${nombre}`);
        otroCallback();
    }, 1000);
}
// Paso 1
console.log('Iniciando proceso...')

saludar("Benji Mtz", (nombre) => {
    despedida(nombre, function () {
        console.log('Terminando proceso...')
    })
})


// Los callback van encadenados para manipular el flujo de la información y resolver problemas como este
// saludar('Benji', () => { })
// despedida('Benji', () => { })