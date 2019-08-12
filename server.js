
var express = require('express');
var app = express();
app.use(express.static("myApp")); // myApp will be the same folder name.
app.get('/', function (req, res,next) {
 res.redirect('/'); 
});
app.listen(4000, 'localhost');
console.log("AngularJS Project Server is Listening on port 4000");