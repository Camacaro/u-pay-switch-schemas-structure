const Sequelize = require('./SequelizeClass.js');
import { DataTypes } from 'sequelize'; 

const Timezone = Sequelize.appInstance.define('timezones', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
});

module.exports = Timezone;