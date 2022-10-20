const { expect } = require('chai');
const chai = require('chai');
const expects = chai.expect;
const reverseString = require('../problems/reverse-string');

describe('reverseString', () => {
  it('should return the string reversed', () => {
    expect(reverseString('fun')).to.equal('nuf');
  })

  it('should return an error if not a string', () => {
    expect(() => reverseString(1)).to.throw(TypeError);
  })
})
