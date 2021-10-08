
const reverseString = require('./reverseString')

describe('tests for stringLength function', () => {
    test('returns the length of the string', () => {
        expect(reverseString('ismael')).toBe('leamsi');
      });
      test('returns the length of the string', () => {
        expect(reverseString('hello')).toBe("olleh");
      });
      
})