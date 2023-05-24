import mongoose, { mongo } from 'mongoose';

/*
* 0 = disconnected
* 1 = connected
* 2 = connecting
* 3 = disconnecting
*/

const uri = process.env.MONGODB_URI;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}
export const mongooConnection = {
  isConnected: 0
};

export const connect = async () => {

  if (mongooConnection.isConnected === 1) {
    console.log('Mongoose is connected');
    return;
  }

  if (mongoose.connections.length > 0) {
    mongooConnection.isConnected = mongoose.connections[0].readyState;

    if (mongooConnection.isConnected === 1) {
      console.log('Using previous connection');
      return;
    }

    await mongoose.disconnect;
  }

  await mongoose.connect(uri!);
  mongooConnection.isConnected = 1;

};


export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development') return;

  if (mongooConnection.isConnected === 0) return;

  await mongoose.disconnect();
  console.log("Mongo disconnected");
};