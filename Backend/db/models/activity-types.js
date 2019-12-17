const Sequelize = require('sequelize');
const DataType = require('sequelize').DataTypes;

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.type
});

const ActivityTypes = sequelize.define('activities', {

  id: {
    type: DataType.INTEGER,
    primaryKey: true,
  },

  name: DataType.STRING(64)
});

module.exports = ActivityTypes;
