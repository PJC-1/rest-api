const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
// overriding mongoose Promise with the global object's Promise
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
// initialize routes
app.use('/api',require('./routes/api'));

// listen for requests
// will listen for the port specified by the environment variable (heroku, etc.)
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});
