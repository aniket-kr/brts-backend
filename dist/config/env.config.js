import 'dotenv/config';
const environ = {
    mongoUri: process.env.MONGO_URI,
    serverPort: process.env.SERVER_PORT,
    corsOrigin: process.env.CORS_ORIGIN,
};
export default environ;
