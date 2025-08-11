const { factorial, fibonacci } = require('./math');

describe('Pruebas para factorial', () => {
    test('Factorial de 0 debe ser 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('Factorial de 5 debe ser 120', () => {
        expect(factorial(5)).toBe(120);
    });

    test('Factorial de número negativo debe ser -1', () => {
        expect(factorial(-3)).toBe(-1);
    });
});

describe('Pruebas para fibonacci', () => {
    test('Fibonacci de 0 debe ser 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('Fibonacci de 6 debe ser 8', () => {
        expect(fibonacci(6)).toBe(8);
    });

    test('Fibonacci de número negativo debe ser -1', () => {
        expect(fibonacci(-2)).toBe(-1);
    });
});