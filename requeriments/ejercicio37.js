export const ejercicio37 = (datos) => {
    let totalMasculinos = 0
    let totalFemeninas = 0
    for (const fila of datos) {
        if(fila.edad >= 18) {
            if(fila.id_sexo === 1) {
                totalMasculinos++
            } else {
                totalFemeninas++
            }
        }
    }
    return { totalMasculinos, totalFemeninas}
}