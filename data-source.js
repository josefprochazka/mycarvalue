const { DataSource } = require('typeorm');
const dbConfig = require('./ormconfig');

module.exports = new DataSource(dbConfig);