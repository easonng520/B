module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("events", {
    name: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.STRING,
    },
    completed: {
      type: Sequelize.STRING,
    }

  });

  return Event;
};


