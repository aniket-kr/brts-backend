import { Environment } from './env.config.js';
import mongoConfig from './mongo.config.js';

const configAll = (env: Environment) => {
  mongoConfig(env.mongoUri);
};
export default configAll;
