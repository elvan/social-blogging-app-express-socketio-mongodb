require('dotenv').config();

const { MongoClient } = require('mongodb');

const CONNECTIONSTRING =
  process.env.CONNECTIONSTRING || 'mongodb://localhost:27017/social-blogging-app';

const client = new MongoClient(CONNECTIONSTRING);

async function start() {
  await client.connect();
  module.exports = client;
  const app = require('./app');
  app.listen(process.env.PORT);
}

start();
