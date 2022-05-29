import express from 'express';
import environ from './config/env.config.js';

const app = express();

// configuration
import configAll from './config/index.js';
configAll(environ);

// middleware
import setupMiddlewares from './middlewares/index.js';
setupMiddlewares(app, environ);

// routers
import addRouters from './routers/index.js';
addRouters(app);

// bind server to port
const port = environ.serverPort || 6000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
