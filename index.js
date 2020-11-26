const express = require('express'),
     http = require('http');

// declare morgan
const morgan = require('morgan');

// setuping restful api

const bodyParser = require('body-parser');

// import dishes router file
const dishRouter = require('./routes/dishRouter');


const hostname = 'localhost';
const port = 3000;

const app = express();

//   uses morgan:
app.use(morgan('dev'));

//using middleware

app.use(bodyParser.json());

// using dishes file
app.use('/dishes', dishRouter);


// setup server 
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});



const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});