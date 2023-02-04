import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('connected to cloud.mongodb.com'))
    .catch((err) => {
      console.error('failed to connect with cloud.mongodb.com');
      console.error(err);
    });
};

export default connectDB;
