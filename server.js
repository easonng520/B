const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

global.__basedir = __dirname;

var corsOptions = {
  //origin: "http://localhost:8081"
  origin: "*"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");

const Message = db.messages;

 db.sequelize.sync();
// force: true will drop the table if it already exists


db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Database with { force: true }');
  initial();
});


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to loveCATS application." });
});

// routes
require("./app/routes/message.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Message.create({
   message:"Message 1",
    reply: "Reply 1",
catid:2
  });
    
 Message.create({
    message:"Message 2",
      reply: "Reply 2",
catid:1
  });

 Message.create({
    message:"Message 3",
    catid:3
  });
  
  Message.create({
    message:"Message 4",
      reply: "Reply 4",
catid:1
  });
   
  
}