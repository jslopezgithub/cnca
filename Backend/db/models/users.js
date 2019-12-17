const Sequelize = require('sequelize');
const DataType = require('sequelize').DataTypes;

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.type
});


const User = sequelize.define('user', {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
  },

  codice_fisicale: DataType.STRING(32),
  nome: DataType.STRING(128),
  cognome: DataType.STRING(128),
  data_di_nascita: DataType.DATE,

  sesso: {
    type: DataType.BIT,
    defaultValue: true
  },

  organizzazione: DataType.STRING(255),
  commune_di_nascita: DataType.STRING(255),
  password: DataType.STRING(128),
  email: {
    type: DataType.STRING(128),
    name: 'email',
    unique: true
  },

  role_id: {
    type: DataType.INTEGER,
    references: {
      model: roles,
      key: 'id',
      defaultValue: 3
    }

  },
  createdAt: DataType.DATE,
  updatedAt: DataType.DATE,

  is_deleted: {
    type: DataType.BIT,
    defaultValue: false
  }


});

module.exports = User;
