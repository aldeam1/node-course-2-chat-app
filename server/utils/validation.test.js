const expect = require ('expect');

//import isRealString
var {isRealString}= require('./validation');

//isRealString
    //should reject non-string values
     //should reject string with only spaces
     //should allow strings with non space characters

describe('isRealString', () => {  
    it('should reject non-string values',  () => {
        var res = isRealString(98);
        expect(res).toBe(false);
    });
   
    it('should reject string with only spaces', ()=> {
    var res = isRealString('    ');
    expect(res).toBe(false);
    });

    it('should allow string with non-space characters', ()=> {
        var res = isRealString('   Mihai   ')
        expect(res).toBe(true);
    })
    
});
    