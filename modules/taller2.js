// Módulo Taller 2 - Funciones exportables

// 1. findMax
export function findMax(lista) {
    let max = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > max) {
            max = lista[i];
        }
    }
    return max;
}

// 2. includes
export function includes(lista, numero) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === numero) {
            return true;
        }
    }
    return false;   
}

// 3. sum
export function sum(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total += lista[i];
    }
    return total;
}

// 4. missingNumbers
export function missingNumbers(lista) {
    if (lista.length === 0) return [];

    let min = lista[0];
    let max = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < min) min = lista[i];
        if (lista[i] > max) max = lista[i];
    }
    let faltante = [];

    for (let i = min; i <= max; i++) {
        let encontrado = false;
        for (let j = 0; j < lista.length; j++) {
            if (lista[j] === i) {
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            faltante.push(i);
        }
    }
    return faltante;
}
