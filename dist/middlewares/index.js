import setupBodyParser from './bodyParser.middleware.js';
import setupCors from './cors.middleware.js';
import setupJson from './json.middleware.js';
const setupMiddlewares = (app, env) => {
    setupCors(app, env.corsOrigin);
    setupBodyParser(app);
    setupJson(app);
};
export default setupMiddlewares;
