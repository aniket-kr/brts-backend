import cors from 'cors';
const setupCors = (app, origin) => {
    app.use(cors({ origin }));
};
export default setupCors;
