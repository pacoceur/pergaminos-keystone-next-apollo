const { Keystone } = require('@keystonejs/keystone');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { NextApp } = require('@keystonejs/app-next');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

// Keystone App
const PROJECT_NAME = "Keystone Next Apollo Starter";
const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
});

// Lists
const UserList = require('./lists/User.js');
const PostList = require('./lists/Post.js');
keystone.createList('User', UserList);
keystone.createList('Post', PostList);

// Exports
module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ enableDefaultRoute: false }),
    new NextApp({ dir: 'app' }),
  ],
};