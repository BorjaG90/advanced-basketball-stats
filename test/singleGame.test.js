const { expect, assert } = require('chai');
const { singleGame } = require('./data/mocks/single');
const app = require('../lib/main');

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
