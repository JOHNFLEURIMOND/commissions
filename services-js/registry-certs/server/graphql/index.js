// @flow

import { makeExecutableSchema } from 'graphql-tools';

import { Schema as QuerySchema, resolvers as queryResolvers } from './query';
import { Schema as DeathSchema, resolvers as deathResolvers } from './death-certificates';

export type Context = {
};

const SchemaDefinition = `
schema {
  query: Query,
}
`;

export default makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    QuerySchema,
    DeathSchema,
  ],
  resolvers: {
    ...queryResolvers,
    ...deathResolvers,
  },
  allowUndefinedInResolve: false,
});
