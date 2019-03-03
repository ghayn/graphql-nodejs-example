const express = require('express');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const config = require('./config');
const schema = require('./graphql/schema/schema');

const { info } = console;
const { port } = config;

const app = express();

mongoose.connect(config.mongoUri, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  info('Connected to database');
});

app.use('/graphql', graphqlHttp({
  schema,
  graphiql: true,
}));

app.listen(port, () => {
  info(`Now listening to requests on port ${port}`);
});
