import promise from 'bluebird';
import { default as pgPromise, IMain } from 'pg-promise';

const options = { promiseLib: promise };
const pgp: IMain = pgPromise(options);
const connections: { [key: string]: unknown } = {};

export const pgHelpers = pgp.helpers;

export default {
  connect: (connectionString: string): unknown => {
    if (connections[connectionString]) {
      return connections[connectionString];
    }

    connections[connectionString] = pgp(connectionString);
    return connections[connectionString];
  },
};
