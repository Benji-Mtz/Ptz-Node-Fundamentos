const fs = require('fs');

function leer(ruta, callback) {
    fs.readFile(ruta, (err, data) => {
        callback(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.log('ERROR:', err);
        } else {
            console.log('Archivo escrito correctamente');
        }
    })
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb)
}

// leer(__dirname + '/file.txt', console.log)
// escribir(__dirname + '/file2.txt', 'Soy un archivo nuevo\nLinea2', console.log)
borrar(__dirname + '/file2.txt', console.log)