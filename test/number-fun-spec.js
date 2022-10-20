// Your code here
const {returnsThree, reciprocal} = require('../problems/number-fun')

const { expect } = require('chai');
const chai = require('chai');
const expects = chai.expect;

describe('returnsThree', function() {
    it('String that says what ever we want to describe', function(){
        expect(returnsThree()).to.equal(3)
    })
})

describe('reciprocal', function() {
    it('Should return the reciprocal of the number', function() {
        expect(reciprocal(2)).to.equal(1/2)
        expect(reciprocal(5)).to.equal(1/5)
    })
    context('Less than 1 or greater than 1,000,000', function() {
        it('Should throw an error with invalid input', function(){
            expect(() => reciprocal(-10)).to.throw(TypeError)
            expect(() => reciprocal(0.04)).to.throw(TypeError)

        })
    })
})
