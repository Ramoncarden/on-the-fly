'use strict';

/** Database setup for on_the_fly */

const { Client } = require('pg');
const { getDatabaseUri } = require('./config');

const db = new Client({
  connectionString: getDatabaseUri()
});

db.connect();

module.exports = db;
