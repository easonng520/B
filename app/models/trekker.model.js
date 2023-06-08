module.exports = (sequelize, Sequelize) => {
  const Trekker = sequelize.define("trekkers", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    code: {
      type: Sequelize.STRING,
    }
     
  });

  return Trekker;
};


