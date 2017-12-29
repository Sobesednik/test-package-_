const assert = require('assert')
const testPackage = require('../../src/')

const testPackageTestSuite = {
    'should be a function': () => {
        assert.equal(typeof testPackage, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testPackage()
        })
    },
}

module.exports = testPackageTestSuite
