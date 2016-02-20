'use strict';

var moment = require('moment');


function TimeStampConverter() {

    this.convert = function(req, res) {
        var time = req.params.time;
        var isNumRegex = /\d+/;
        var unix, natural;
        if (isNumRegex.test(time)) {
            natural = moment.unix(time).format("MMMM D, YYYY");;
            unix = time;
        }
        else if (moment(time).isValid()) {
            unix = moment(time).unix();
            natural = time;
        }
        else {
            unix = null;
            natural = null;
        }
        var answer = {
            "unix": unix,
            "natural": natural
        };
        res.json(answer);
    };
}

module.exports = TimeStampConverter;
