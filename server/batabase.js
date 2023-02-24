// connection to the database

import mongoose from 'mongoose';

const connectToDatabase = async () => {
  console.log(process.env.MONGO_URI);

  try {
    mongoose.set('strictQuery', false);
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDb connected ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};
export default connectToDatabase;
