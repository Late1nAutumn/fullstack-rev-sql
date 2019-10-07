// Express Server
// FIX ME :)
  const express = require('express');
  const path = require('path');
  const parser = require('body-parser');
  const router = require('./router');

  const port = 3000;

  const server = express();
  server.use(parser.json());
  server.use('/', express.static(path.join(__dirname + '/../client/dist')));

  server.use('/',router);

  server.listen(port, () => console.log('Connected to port: 3000'))