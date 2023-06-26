// Definición de la clase Cuota
class Cuota {
    constructor(monto, cuotaMensual) {
        this.monto = monto;
        this.cuotaMensual = cuotaMensual;
    }
}

// Función que calcula el monto de cada cuota
function calcularCuotas(monto, cuotas) {
    if (isNaN(monto) || isNaN(cuotas)) {
        return "Ingrese valores válidos.";
    }

    if (cuotas < 1) {
        return "El número de cuotas debe ser mayor a cero.";
    }

    let cuotaMensual = monto / cuotas;
    return new Cuota(monto, cuotaMensual);
}

// Inicializamos el valor de la variable que vamos a utilizar en el ciclo
let realizarCalculo = true;

// Almacenamos los objetos Cuota calculados
let cuotasCalculadas = [];

// Ciclo while que permite múltiples cálculos
while (realizarCalculo) {
    // Ingreso de datos
    let montoInput = parseFloat(prompt("Ingrese el monto total:"));
    let cuotasInput = parseInt(prompt("Ingrese el número de cuotas:"));

    // Llamada de la función cargada en la variable resultado
    let resultado = calcularCuotas(montoInput, cuotasInput);

    // Validación del resultado
    if (typeof resultado === "string") {
        alert(resultado);
    } else {
        // Almacenamos el objeto Cuota en el array
        cuotasCalculadas.push(resultado);
        alert("El monto de cada cuota mensual es: $" + resultado.cuotaMensual);
    }

    // Consulta al usuario
    let opcion = prompt("¿Desea realizar otro cálculo? (s/n)");

    // Verificación
    if (opcion.toLowerCase() !== "s") {
        realizarCalculo = false;
    }
}

// Filtrar cuotas cuyo monto sea mayor a $100
let cuotasFiltradas = cuotasCalculadas.filter(cuota => cuota.monto > 100);

// Obtener un nuevo array con los montos de las cuotas
let montosCuotas = cuotasCalculadas.map(cuota => cuota.monto);

// Encontrar la primera cuota cuyo monto sea mayor a $200
let primeraCuotaMayor200 = cuotasCalculadas.find(cuota => cuota.monto > 200);

// Visualización de los resultados
console.log("Cuotas filtradas:", cuotasFiltradas);
console.log("Montos de las cuotas:", montosCuotas);
console.log("Primera cuota con monto mayor a $200:", primeraCuotaMayor200);

