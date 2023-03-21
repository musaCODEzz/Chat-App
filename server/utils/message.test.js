
let expect = require('expect');


var { generateMessage } = require('./message');

describe('Generate Message', () => {
     it("It should generate the correct message object", () => {
        let from = "Musa Maxwel";
          text = "Hello World";
          message = generateMessage(from, text);

          expect.expect(typeof message.createdAt).toBe('number');
          expect.expect(message).toMatchObject({from, text});
        
        

        
     });
});