/// <reference types="cypress" />

describe('TC2 - This is failed test', () => {
    it('This is failed test', () => {
        // create a failed test
        expect(true).to.equal(false)
    })
});