import mongoose from 'mongoose';

const mongoConfig = (uri: string) => {
  mongoose
    .connect(uri)
    .then(() => console.log('Connected to MongoDB Atlas successfully!'))
    .catch((err) => console.error('Failed MongoDB Atlas connection!', err));
};
export default mongoConfig;
