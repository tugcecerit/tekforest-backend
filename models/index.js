const mongoose = require('mongoose');
const {DATABASE_URL} = process.env.MONGODB_URI

mongoose.connect(DATABASE_URL);

mongoose.connection
  .on('open', () => console.log('Your are connected to mongoose'))
  .on('close', () => console.log('Your are disconnected from mongoose'))
  .on('error', (error) => console.log(error));

  module.exports = {
    Plant: require('./Plant')
}