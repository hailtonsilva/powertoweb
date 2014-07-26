//this riquires Node.js installed with this modules "npm install connect" and "npm install serve-static"
//To run this, call "node server.js" from the console

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(80);