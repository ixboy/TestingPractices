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
