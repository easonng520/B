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
const Event = db.events;
const Trekker = db.trekkers;
const Photo = db.photos;

//db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Database with { force: true }');
  initial();
});


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to GoTrekking application." });
});

// routes
require("./app/routes/event.routes")(app);
require("./app/routes/trekker.routes")(app);
require("./app/routes/photo.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
 
 
   Event.create({
    name:"GoTrekking",
    date:"2023-06-24 21:55:00:00 UTC",
    completed:"false"
  });  

     
   Event.create({
    name:"Go",
    date:"2025-08-27 13:00:00:00 UTC",
    completed:"false"
  });  

     Trekker.create({
    name:"Eason",
       email:"a@a.com",
    code:"000000"
  });  
/*
       Photo.create({
    name:"Eason",
       email:"a@a.com",
    code:"000000",
         url:"https://files.catbox.moe/25ep0u.png"
  });  
  */
}