const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const port = process.env.PORT || 3001

const app = express();

app.use(logger('dev'));
app.use(express.json());

//configure both serve-favicon & static middleware to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


//Create Read Update Destroy routes go here (Index, Show, Create, Update, Delete) -- (New and Edit go on the front end (And kind of Tndex & Show))

//Index and Show on the express server grab the data from the database that's needed and send it to the front end to be rendered there.


//Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests. If the express server doesn't match anything, it sends it over to react.


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });



// configure to use port 3001 instead of 3000 during the development to avoid collision with React's dev server.
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  });