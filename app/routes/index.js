'use strict';

var path = process.cwd();
var TimeStampConverter = require(path + '/app/controllers/timestampController.server.js');

module.exports = function (app, passport) {

	app.get('/', function(req, res){
		res.sendFile(path + '/public/index.html');
	});
   
   var timeStampConverter = new TimeStampConverter();
   app.get('/:time', timeStampConverter.convert)
};
