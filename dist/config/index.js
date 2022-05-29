import mongoConfig from './mongo.config.js';
const configAll = (env) => {
    mongoConfig(env.mongoUri);
};
export default configAll;
