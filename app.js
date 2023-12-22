const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/users');

app.use(cors());

const port = 3000;
const bodyParser = require('body-parser');




const mongoose = require('mongoose');

const tokenRoute = require('./routes/tokenroute');
const usersRoute = require('./routes/usersroute');
const verifytokenRoute = require('./routes/verifytokenroute');
const dataRoute = require('./routes/mycontactsroute');








app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// Connection URL
const url = 'mongodb://localhost:27017/yourDatabaseName'; // Replace with your MongoDB connection string and database name

// Connect to MongoDB
mongoose.connect(url);

// Get the default connection
const db = mongoose.connection;

// Event listener for successful connection
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Event listener for connection error
db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Event listener for disconnection
db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Close the Mongoose connection when the Node.js application is terminated
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('Mongoose connection closed due to app termination');
    process.exit(0);
  } catch (err) {
    console.error('Error closing Mongoose connection:', err);
    process.exit(1);
  }
});



// Use the userRoutes router
app.use('/phonebook/login', tokenRoute);
app.use('/phonebook/users', usersRoute);
app.use('/phonebook/verifylogin', verifytokenRoute);
app.use('/phonebook/users/mycontacts', dataRoute);



// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
