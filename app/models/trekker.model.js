module.exports = (sequelize, Sequelize) => {
  const Trekker = sequelize.define("trekkers", {
    nickname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    code: {
      type: Sequelize.STRING,
    },
    step: {
      type: Sequelize.DOUBLE,
    },
        distance: {
      type: Sequelize.DOUBLE,
    }
     
  });

  return Trekker;
};


