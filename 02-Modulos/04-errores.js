function otraFuncion() {
    serompe();
}

function serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    // Para evitar que se rompa metemos el try-catch dentro de la asyncronia
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            console.error("Error en mi funcion asyncrona")
            cb(error)
        }
    });
}

try {
    // otraFuncion();
    seRompeAsincrona(function (err) {
        console.log(err.message)
    });
} catch (error) {
    console.error('Algo salio mal...');
    console.error(error.message)
}
console.log('Estamos en el final');