const express = require('express');
const graphqlHttp = require('express-graphql');
const config = require('./config');
const schema = require('./graphql/schema/schema');

const { info } = console;

const { port } = config;

const app = express();

app.use('/graphql', graphqlHttp({
  schema,
  graphiql: true,
}));

app.listen(port, () => {
  info(`now listening to requests on port ${port}`);
});
