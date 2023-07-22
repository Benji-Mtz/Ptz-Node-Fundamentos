async function saludar(nombre) {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 1000);

    });

}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Estoy hablando...')
            resolve(nombre);
            // reject('Error en hablar')
        }, 1000);
    })
}

async function despedida(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            resolve();
        }, 1000);
    })
}


async function main() {
    let nombre = await saludar("Benji");
    await hablar();
    await hablar();
    await hablar();
    await despedida(nombre)
    console.log('Termina el proceso...');
}
console.log('Empezamos el proceso...');
main();
console.log('Segunda instruccion...');
