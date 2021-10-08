const capitalize = require ('./capitalize');

describe('Tests for capitalize String method', () => {

    test('checks if jonathas returns Jonathas',() => {
        expect(capitalize('ismael')).toBe('Ismael');
    });

    test('checks if string returns String', () => {
        expect(capitalize('ixboy')).toBe('Ixboy');
    });

    test('checks if microverse returns Microverse', () => {
        expect(capitalize('microverse')).toBe('Microverse');
    });

});

