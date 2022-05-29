import 'dotenv/config';
const environ = {
  mongoUri: process.env.MONGO_URI,
  serverPort: process.env.PORT,
  corsOrigin: process.env.CORS_ORIGIN,
};
export default environ;
