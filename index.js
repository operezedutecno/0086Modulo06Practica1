import { ejercicio19 } from "./requeriments/ejercicio19.js";
import { ejercicio28 } from "./requeriments/ejercicio28.js";
import { ejercicio52 } from "./requeriments/ejercicion52.js";
import { ejercicio35 } from "./requeriments/ejercicio35.js";

// console.log("********** Ejercicio 19 **********");
// const trabajador = { 
//     nombre: "Juan López", 
//     salario_hora: 10000, 
//     horas_trabajadas: 24, 
//     porcentaje_retencion: 5
// }
// const calculo = ejercicio19(trabajador)
// const respuesta = { ...trabajador, ...calculo }
// console.log(respuesta);



// console.log("********** Ejercicio 28 **********");
// ejercicio28()



// console.log("********** Ejercicio 52 **********");
// ejercicio52()


// console.log("********** Ejercicio 35 **********");
const series = [
    { n1: 2, n2: 1, n3: 5 }, //1 ,5
    { n1: 9, n2: 2, n3: 4 }, // 2,9
    { n1: 0, n2: 9, n3: 1 }, // 0,9
    { n1: 0, n2: 9, n3: 0 } // Al 2 núumeros son iguales
]

const result = ejercicio35(series)
console.table(result);