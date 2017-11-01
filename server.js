var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var handlebars = require("handlebars");

var app = express();
var db = require("./models");
var PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
})

