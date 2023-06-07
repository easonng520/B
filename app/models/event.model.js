module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("events", {
    name: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATE,
    }
     
  });

  return Event;
};


