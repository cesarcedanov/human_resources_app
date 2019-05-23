const express = require('express');
const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
require('./models');
const schema = require('./schema/schema');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI,  { useNewUrlParser: true });
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log(`Error connecting to MongoLab: ${error}`));

const app = express();
app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.get('/', function(req, res) {
  res.send('Human Resources API - Health Check')
});

module.exports = app;
