const Insect = require('../models/Insect')

const getInsectDetails = async (name) => {
  return await Insect.findOne({
    name: new RegExp(name, "i"),
  });
};


module.exports = getInsectDetails