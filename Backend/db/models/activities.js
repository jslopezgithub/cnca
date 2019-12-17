const Sequelize = require('sequelize');
const DataType = require('sequelize').DataTypes;

const config = require('../configs/sqldbconfig');

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.type
});


const Activities = sequelize.define('activities', {

  volonteer_id: {
    type: DataType.INTEGER,

    allowNull: false,
    references: {
      model: users,
      key: 'id'
    }
  },

  id: {
    type: DataType.INTEGER,
    primaryKey: true
  },

  name: DataType.STRING(64)
});

module.exports = Activities;
