
const mongoose = require('mongoose');

// Define a schema
const userdashboardSchema = new mongoose.Schema({
    
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
const userDashboard = mongoose.model('userDashboard', userdashboardSchema);

// Export the model
module.exports = userDashboard;
