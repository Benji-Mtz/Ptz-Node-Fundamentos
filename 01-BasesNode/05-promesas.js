function saludar(nombre) {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 1000);

    });

}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Estoy hablando...')
            // resolve(nombre);
            reject('Error en hablar')
        }, 1000);
    })
}

function despedida(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            resolve();
        }, 1000);
    })
}

// --
console.log('Iniciando el proceso')
saludar('Benji')
    .then(nombre => {
        return hablar(nombre);
    })
    .then(nombre => {
        return despedida(nombre);
    })
    .then((nombre) => {
        console.log('Terminando el proceso', nombre)
    })
    .catch((error) => {
        console.error('Hubo un error');
        console.error(error);
    })