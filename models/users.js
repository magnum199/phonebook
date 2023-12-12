
const mongoose = require('mongoose');

// Define a schema
const userSchema = new mongoose.Schema({
    
  first_name: {
    type: String,
    required: true 
  },
  last_name: {
    type: String,
    required: true 
  },
  phone: {
    type: String,
    required: true 
  },
  password: {
    type: String,
    required: true 
   }


});








// Create a model
const testUser = mongoose.model('testUser', userSchema);

// Export the model
module.exports = testUser;
