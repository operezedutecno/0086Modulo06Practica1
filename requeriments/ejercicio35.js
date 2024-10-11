export const ejercicio35 = (series) => {
    for (const fila of series) {
        if(fila.n1 == fila.n2 || fila.n2 == fila.n3 || fila.n1 == fila.n3) {
            fila.response = "Al menos 2 números son iguales"
            continue
        }
        let menor = null
        let mayor = null

        if(fila.n1 < fila.n2 && fila.n1 < fila.n3)
            menor = fila.n1
        else if(fila.n2 < fila.n1 && fila.n2 < fila.n3)
            menor = fila.n2
        else
            menor = fila.n3

        if(fila.n1 > fila.n2 && fila.n1 > fila.n3)
            mayor = fila.n1
        else if(fila.n2 > fila.n1 && fila.n2 > fila.n3)
            mayor = fila.n2
        else
            mayor = fila.n3

        fila.response = `Menor: ${menor} | Mayor: ${mayor}`
    }
    return series
}