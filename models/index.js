const mongoose = require('mongoose');
const {DATABASE_URL} = process.env

mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection
  .on('open', () => console.log('Your are connected to mongoose'))
  .on('close', () => console.log('Your are disconnected from mongoose'))
  .on('error', (error) => console.log(error));

  module.exports = {
    Plant: require('./Plant')
}