import express, { Express } from 'express';

const setupBodyParser = (app: Express) => {
  app.use(express.urlencoded({ extended: true }));
};
export default setupBodyParser;
