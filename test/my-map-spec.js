const chai = require('chai');
const { expect } = require("chai");
const spies = require("chai-spies");
chai.use(spies);
const myMap = require('../problems/my-map');

describe('This is my map', function() {

  let newArray1 = [100, 25, 81, 64];

  beforeEach(() => {
    newArray1 = [100, 25, 81, 64];
  });

  it('should work just like array.map', function() {
    let result1 = myMap(newArray1, Math.sqrt)
    expect(result1).to.eql([10, 5, 9, 8])
  })

  it('should not mutate the input array', function() {
    myMap(newArray1, Math.sqrt);
    expect(newArray1).to.deep.equal([100, 25, 81, 64]);
  })

  it('should not have array.map', function() {
    const mapSpy = chai.spy.on(Array.prototype, 'map');
    myMap(newArray1, (el) => el + 1)
    expect(mapSpy).to.have.not.been.called()
  })

  it('should invoke the callback for each element in the array', function() {
    const callBack = (el) => el + 1;
    const mapSpy = chai.spy(callBack);
    myMap(newArray1, callBack);
    expect(mapSpy).to.have.been.called.exactly(3)
  })
})

// ROGER'S EXAMPLE
// it("should call the callback for each element in the input array", () => {
//   const callback = element => element + 1;
//   const callbackSpy = chai.spy(callback);
//   myMap(inputArray, callbackSpy);
//   expect(callbackSpy).to.have.been.called.exactly(3);
// });
