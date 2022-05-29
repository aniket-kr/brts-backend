import express from 'express';
const setupBodyParser = (app) => {
    app.use(express.urlencoded({ extended: true }));
};
export default setupBodyParser;
