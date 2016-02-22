var chai = require('chai');
var expect = chai.expect;
var TimestampConverter = require('../controllers/timestampController.server.js');

describe('TimestampConverter', function() {
    it('convert() should return null in both values if invalid natural date or unix time is passed in', function() {
        var timestampConverter = new TimestampConverter();
        var expectedResult = {
            "unix": null,
            "natural": null
        };
        var actualResult = timestampConverter._convert('asdfasdfa');
        expect(actualResult.unix).to.equal(expectedResult.unix);
        expect(actualResult.natural).to.equal(expectedResult.natural);
    });
    
    it('convert() should return Dec 15, 2015 and 1450137600 if 1450137600 is passed in', function() {
        var timestampConverter = new TimestampConverter();
        var expectedResult = {
            "unix": '1450137600',
            "natural": "December 15, 2015"
        };
        var actualResult = timestampConverter._convert('1450137600');
        expect(actualResult.unix).to.equal(expectedResult.unix);
        expect(actualResult.natural).to.equal(expectedResult.natural);
    })
});