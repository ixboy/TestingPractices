const Calculator = require ('./calculator');
const calculator = new Calculator;

describe('Tests for Calculator add method', () => {

    test('checks if 8 + 8 = 16',() => {
        expect(calculator.add(8, 8)).toBe(16);
    });

    test('checks if 5 + 3 = 8',() => {
        expect(calculator.add(5, 3)).toBe(8);
    });

    test('checks if 130 + 120 = 250',() => {
        expect(calculator.add(130, 120)).toBe(250);
    });
});

describe('Tests for Calculator subtract method', () => {

    test('checks if 1 - 2 = -1',() => {
        expect(calculator.subtract(1, 2)).toBe(-1);
    });

    test('checks if 15 - 15 = 0',() => {
        expect(calculator.subtract(15, 15)).toBe(0);
    });

    test('checks if 1 - 5 = -4',() => {
        expect(calculator.subtract(1, 5)).toBe(-4);
    });
});

describe('Tests for Calculator multiply method', () => {

    test('checks if 1 * 2 = 2',() => {
        expect(calculator.multiply(1, 2)).toBe(2);
    });

    test('checks if 5 * 7 = 35',() => {
        expect(calculator.multiply(5, 7)).toBe(35);
    });

    test('checks if 130 * 267 = 34710',() => {
        expect(calculator.multiply(130, 267)).toBe(34710);
    });
});