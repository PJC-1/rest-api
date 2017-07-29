const express = require('express');
const bodyParser = require('body-parser');

// set up express app
const app = express();

app.use(bodyParser.json());
// initialize routes
app.use('/api',require('./routes/api'));

// listen for requests
// will listen for the port specified by the environment variable (heroku, etc.)
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});
