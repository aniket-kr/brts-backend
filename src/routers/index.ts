import { Express } from 'express';
import v1Router from './v1/index.js';

const addRouters = (app: Express) => {
  app.use('/v1', v1Router);
};
export default addRouters;
