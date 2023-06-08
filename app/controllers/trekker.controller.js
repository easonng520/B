const db = require("../models");
const Trekker = db.trekkers;
const Op = db.Sequelize.Op;

// Create and Save a new Event
exports.create = (req, res) => {
 
  
  // Create a Event
  const trekker = {
    name: req.query.name,
    email: req.query.date,
    code:req.query.code

  };
  console.log(trekker)
  // Save Event in the database
  Trekker.create(trekker)
    .then(data => {
      res.send(data);
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
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  Event.findAll({ where: condition })
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

