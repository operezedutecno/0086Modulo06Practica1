export const ejercicio28 = () => {
    const arreglo = []

    for (let index = 1; index <= 50; index++) {
        const fila = { 
            numero: index, 
            p2: index ** 2,
            p3: index ** 3,
            p4: index ** 4
        }
        arreglo.push(fila)
    }

    console.log(arreglo);
}