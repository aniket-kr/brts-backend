import express from 'express';
const setupJson = (app) => {
    app.use(express.json());
};
export default setupJson;
