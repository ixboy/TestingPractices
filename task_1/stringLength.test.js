const stringLength = require('./stringLength')


describe('tests for stringLength function', () => {
    test('returns the length of the string', () => {
        expect(stringLength('ismael')).toBe(6);
      });
      
    test('checks if the length is grater than 1 and less than 11', () =>{

        const value = stringLength('ixboy')
        expect(value).toBeGreaterThanOrEqual(1);
        expect(value).toBeLessThan(11);
    })

    
    test('checks if a string smaller than 1 char, the function throws an error', () => {
        expect(()=>{stringLength('')}).toThrow('the string should not be empty...');
    });

    test('checks if a string larger than 10 chars, the function throws an error', () => {
        expect(()=>{stringLength('Ididnotreallywritethis')}).toThrow('Your string is too long.');
    });


  });