var expect = require ('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it ('should generate correct message object', () => {
        //store response in variable
        var from= 'Tester1';
        var text= 'Text to test';
        var message = generateMessage(from, text);
        
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,text});

    })
});