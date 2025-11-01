// Módulo Taller 1 - Funciones exportables

// Punto 1 - convertidorTemp
export function convertidorTemp(TempC) {
    return (TempC * (9 / 5) + 32);
}

// Punto 2 - resolvedor
export function resolvedor(a, b, c, positivo) {
    let x;
    const num = b**2 - 4*a*c;
    if (num < 0) {
        return "No hay raíz";
    } else {
        if (positivo) {
            x = (-b + Math.sqrt(num)) / (2 * a);
        } else {
            x = (-b - Math.sqrt(num)) / (2 * a);
        }
    }
    return x;
}

// Punto 3 - mejorParidad
export function mejorParidad(nump) {
    return nump % 2 === 0;
}

// Punto 4 - peorParidad
export function peorParidad(nump) {
    let contador = 0;
    for (let i = 1; i <= nump && i <= 10; i++) {
        contador++;
    }
    if (contador % 2 === 0) {
        return "El número es par " + nump;
    } else {
        return "El número es impar " + nump;
    }
}
