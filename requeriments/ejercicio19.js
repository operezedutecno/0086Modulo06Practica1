import { calcularSalarioBruto, calcularSalarioNeto, calcularValorRetencion } from "../utils/functions.js"

export const ejercicio19 = ({ nombre, salario_hora, horas_trabajadas, porcentaje_retencion}) => {
    const salarioBruto = calcularSalarioBruto(salario_hora, horas_trabajadas)
    const valorRetencion = calcularValorRetencion(salarioBruto, porcentaje_retencion)
    const salarioNeto = calcularSalarioNeto(salarioBruto, valorRetencion)
    return { nombre, salarioBruto, valorRetencion, salarioNeto };
}