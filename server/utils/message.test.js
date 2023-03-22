
let expect = require('expect');


var { generateMessage, generateLocationMessage } = require('./message');

describe('Generate Message', () => {
     it("It should generate the correct message object", () => {
        let from = "Musa Maxwel";
          text = "Hello World";
          message = generateMessage(from, text);

          expect.expect(typeof message.createdAt).toBe('number');
          expect. expect(message).toMatchObject({from, text});
        
     });
});

describe('Generate Location Message', () => {
     it("It should generate the correct location object", () => {
          let from = "Musa Maxwel";
          let latitude = 1;
          let longitude = 1;
          let url = `https://www.google.com/maps?q=${latitude},${longitude}`;

          let message = generateLocationMessage(from, latitude, longitude);

          expect.expect(typeof message.createdAt).toBe('number');
          expect. expect(message).toMatchObject({from, url});

     });
});
