import express, { Express } from 'express';

const setupJson = (app: Express) => {
  app.use(express.json());
};
export default setupJson;
