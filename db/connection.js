const monk = require('monk');
const connectionURL = process.env.MONGODB_URI || 'localhost/short-ly-';
const db = monk(connectionURL);

module.exports = db;