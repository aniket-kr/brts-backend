import cors from 'cors';
import { Express } from 'express';

const setupCors = (app: Express, origin: string) => {
  app.use(cors({ origin }));
};
export default setupCors;
