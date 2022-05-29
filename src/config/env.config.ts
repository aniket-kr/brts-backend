import 'dotenv/config';

const environ = {
  mongoUri: process.env.MONGO_URI!,
  serverPort: process.env.SERVER_PORT as unknown as number,
  corsOrigin: process.env.CORS_ORIGIN!,
};

export type Environment = typeof environ;
export default environ;
