const express = require('express');
const cors = require('cors');
const app = express();
require('./src/db/mongoose')

const bodyParser = require('body-parser')

// Basic Configuration
const port = process.env.PORT;

app.use(cors());
app.enable('trust proxy'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


const routers = require('./src/Routers/router')
app.disable('etag');
app.use(express.json());
app.use(routers);


// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
