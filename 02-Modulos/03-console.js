let tabla = [
    {
        a: 1,
        b: 'Algo'
    },
    {
        a: 2,
        b: 'Algo2'
    }
];

console.error('Error');
console.warn('Error');
console.table(tabla);

// Agrupación de logs
console.group('Conversation');
console.log("Hola");
console.log("Blablabla");
console.log("Adios");
console.groupEnd('Conversation')

function funcion1() {
    console.group('funcion 1')
    console.log('esto es de la funcion 1')
    console.log('esto tambien')
    console.log('esto tambien')
    funcion2()
    console.log('Hemos vuelto a la 1')
    console.groupEnd('funcion 1');
}

function funcion2() {
    console.group('funcion 2');
    console.log('ahora estamos en la funcion 2')
    console.groupEnd('funcion 2');
}

console.log("Empezamos")
funcion1();

// Conteos
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');