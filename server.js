const express = require('express');
const app = express();
const fs = require('fs');
const port = 8080;

app.get('/', function(req, res) {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('./pages/index.html').pipe(res)
});

app.get('/about', function(req, res) {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('./pages/about.html').pipe(res)
});

app.get('/contact-me', function(req, res) {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('./pages/contact.html').pipe(res)
});

app.get('*', function(req, res) {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('./pages/404.html').pipe(res)
});


app.listen(port, function() {
  console.log(`Server is listening on port ${port}!`)
});
