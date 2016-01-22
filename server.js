var app = require('express')();
var server = require('http').Server(app);
var port = process.env.PORT || 3000;
server.listen(port);
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
console.log('Express server started on port %s', server.address().port);
