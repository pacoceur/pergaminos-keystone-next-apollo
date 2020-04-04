require('dotenv').config();
const { Keystone } = require('@keystonejs/keystone');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { NextApp } = require('@keystonejs/app-next');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const initialiseData = require('./initial-data');

// Keystone App
const PROJECT_NAME = "pergaminos-keystone-next-apollo";
const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
  onConnect: initialiseData,
});

// Lists
const UserList = require('./lists/User.js');
keystone.createList('User', UserList);

const PostList = require('./lists/Post.js');
keystone.createList('Post', PostList);

// User Authentication
const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identityField: 'username',
    secretField: 'password',
  },
});

// Exports
module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ 
      enableDefaultRoute: false,
      authStrategy,
    }),
    new NextApp({ dir: 'app' }),
  ],
};