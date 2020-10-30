const { expect, assert } = require('chai');
const { singleGame } = require('./data/mocks/single');
const app = require('../lib/main');

// Functions
/* function writeOutputFile(nameFile, data){
  fs.writeFile (`${nameFile}.json`, JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log(`File ${nameFile} Write complete`);
    }
  );
}; */

// Tests that calculate values from one single game
describe("Checks single games calculations", ()=>{
  before(()=>{
    let result;
  });
  afterEach(()=>{
    result = null;
  });
  // Tender PIR (Performance Index Rating)
  describe("Checks Tender PIR function",()=>{
    it("Checks that given a filled object we get the PIR value", ()=>{
      result = app.getTendexPIR(singleGame);
      assert.typeOf(singleGame, 'object');
      expect(result).to.be.a('number');
      expect(result).to.equal(10);
    })
  })
  
})
