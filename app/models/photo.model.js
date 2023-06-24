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
    url: {
      type: Sequelize.STRING,
    }
     
  });

  return Trekker;
};


