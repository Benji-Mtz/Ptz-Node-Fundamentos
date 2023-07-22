function saludar(nombre, miCallback) {
    setTimeout(function () {
        console.log(`Hola ${nombre}`);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Estoy hablando...')
        callbackHablar();
    }, 100);
}

function despedida(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios ${nombre}`);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        })
    } else {
        despedida(nombre, callback);
    }
}

console.log('Iniciando proceso...');
saludar('Benji', function (nombre) {
    conversacion(nombre, 3, function () {
        console.log('Proceso Terminado...')
    })
})


//  --

// console.log('Iniciando proceso')
// saludar("Benji Mtz", (nombre) => {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 despedida(nombre, function () {
//                     console.log('Terminando proceso...')
//                 })
//             })
//         })
//     })
// })


// Factorizando el código del hell
// saludar("Benji", function (nombre) {
//     despedida(nombre, function () {
//         console.log('Terminamos');
//     })
// })

