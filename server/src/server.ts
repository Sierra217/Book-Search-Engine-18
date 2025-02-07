import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './schema/index.js'
import path from 'node:path';
import db from './config/connection.js';
import routes from './routes/index.js';
import { authenticateToken } from './services/auth.js';

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();


  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(authenticateToken);

  app.use('/graphql', expressMiddleware(server));
  
  // if we're in production, serve client/build as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../../client/build'));

    app.get('*', (_req, res) => {
      res.sendFile('../../client/dist/index.html');
    });
  }

  app.use(routes);

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  // db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  // });
}

startApolloServer();
