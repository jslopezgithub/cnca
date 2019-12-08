const { MongoClient } = require('mongodb');

const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/cyf';
const configuration = { useNewUrlParser: true };

const getClient = () => new MongoClient(dbUrl, configuration);

module.exports = getClient;
