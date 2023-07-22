// Inicia y acaba
console.log('Aqui inicia')


let i = 0;

// Inicia y repite y si hay errores muere :(
setInterval(() => {
    console.log(i)
    i++;

    if (i == 5) {
        console.log("Forzamos error")
        var a = 3 + z;
    }
}, 1000);

console.log("Se pasa para el final antes de ejecutar al setInterval")