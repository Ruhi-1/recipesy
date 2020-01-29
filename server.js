const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// const cors = require('cors');
// const recipeRoutes = express.Router();


// let RecipeSchema = require('./models/recipe');

require('dotenv').config();
require('./config/database');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/recipes', require('./routes/api/recipes'));

// app.use('/api/recipes', require);
//This is an option, but I put it in the scores router instead
// app.use(require('./config/auth'));
// app.use('/api/scores', require('./routes/api/scores'));

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3002 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3002;



app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});