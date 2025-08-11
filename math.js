// Función para calcular el factorial de un número
function factorial(n) {
    if (n < 0) return -1; // Caso inválido para números negativos
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Función para calcular el enésimo número de Fibonacci
function fibonacci(n) {
    if (n < 0) return -1; // Caso inválido
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

module.exports = { factorial, fibonacci };