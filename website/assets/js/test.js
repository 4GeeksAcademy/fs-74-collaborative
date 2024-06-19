let nombre_string = "Juan";

let numero_string = "1";
let numero_number = 1;
let deciaml_number = 1.23;

var null_null = null;

var sinAsignar_undefined;


let soyMentor_boolean = true;
let soyMentor_number = 1;

let deseos_array = [
    "familia", // Posicion 0
    "casa", // Posicion 1
    "coche", // Posicion 2
];

let familiaDesdeArray_string = deseos_array[0]
let casaDesdeArray_string = deseos_array[1]
let cocheDesdeArray_string = deseos_array[2]

let prioridades_diccionario = {
    "casa": 2,
    "familia": 1,
    "coche": 3,
}

let familia_desde_diccionario = prioridades_diccionario["familia"]
let casa_desde_diccionario = prioridades_diccionario["casa"]
let coche_desde_diccionario = prioridades_diccionario["coche"]

console.log("test");

for (let step = 0; step < 5; step++) {
    // Corre 5 veces, desde 0 hasta 4.
    console.log("Step for: " + step);
}

let step = 0;
while (step < 5) {
    // Corre 5 veces, desde 0 hasta 4.
    console.log("Step while: " + step);
    step++;
}

console.log("Lista de deseos: (for)")
for (i = 0; i < deseos_array.length; i++) {
    let deseo_string = deseos_array[i];

    console.log(i + ". " + deseo_string);
} 

console.log("Lista de deseos: (foreach: valor)")
deseos_array.forEach(function(deseo_string) {
    console.log(deseo_string);
});

console.log("Lista de deseos: (foreach: valor, index)")
deseos_array.forEach(function(deseo_string, i) {
    console.log(i + ". " + deseo_string);
});

console.log("Lista de deseos: (funcion flecha: valor, index)")
deseos_array.forEach((deseo_string, i) => {
    console.log(i + ". " + deseo_string);
});