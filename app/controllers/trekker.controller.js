const db = require("../models");
const Trekker = db.trekkers;
const Op = db.Sequelize.Op;
  var xcode=Math.floor(100000 + Math.random() * 900000)

  
// Create and Save a new Event
exports.create = (req, res) => {
  console.log(req.body.email)
console.log(req.params.email)
console.log(req.query.email)
  var email=req.body.email
  // Create a Event
  const trekker = {
    nickname: req.body.nickname,
    email: email,
    code:xcode,
     step:req.body.code,
     distance:req.body.code

  };
  console.log(trekker)
  // Save Event in the database
  Trekker.create(trekker)
    .then(data => {
      res.send(data);





var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'easonng',
    pass: 'mbougnuetabojikz'
  }
});

var mailOptions = {
  from: 'easonng@gmail.com',
 to: `${email}`,
  //to: 'easonng@surgery.cuhk.edu.hk',
  subject: `your passCODE: ${xcode}`,
  text: `your passCODE: ${xcode}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
      
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Message."
      });
    });
};

// Retrieve all Event from the database.
exports.findAll = (req, res) => {
  const code = req.params.code;
  var condition = code ? { code: { [Op.iLike]: `%${code}%` } } : null;
  Trekker.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cats."
      });
    });
};

// Find a single Cat with an id
exports.findOne = (req, res) => {
  const code = req.params.code;
 Trekker.findByPk(code)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Cat with id=" + id
      });
    });
};


// find all centre Cat
exports.findCode = (req, res) => {
  const code = req.query.code;
  var condition = code ? { code: { [Op.iLike]: `%${code}%` } } : null;

  Trekker.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cats."
      });
    });
};

// Update a Event by the id in the request
exports.update = (req, res) => {

  
  const id = req.params.id;
console.log("paramsid"+id)
 

    Event.update({message:queryMessage}, {
    where: { id: id }
  })

    .then(num => {
      if (num == 1) {
        res.send({
          message: "Message was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Message with id=${id}. Maybe Cat was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Cat with id=" + id
      });
    });
};

// Delete a Cat with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Event.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Message was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Message with id=${id}. Maybe Cat was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Message with id=" + id
      });
    });
};

