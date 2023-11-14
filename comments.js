// Create web server with express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Route handler
app.get('/comments', (req, res) => {
  // Get comments from database
  const comments = [
    { username: 'Tam' },
    { username: 'Tim' },
    { username: 'Tom' }
  ];
  // Send comments to client
  res.send(comments);
});

// Start web server on port 8000
app.listen(8000, () => {
  console.log('Server started!');
});

// Path: comments.js
// Create web server with express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Route handler
app.get('/comments', (req, res) => {
  // Get comments from database
  const comments = [
    { username: 'Tam' },
    { username: 'Tim' },
    { username: 'Tom' }
  ];
  // Send comments to client
  res.send(comments);
});

// Start web server on port 8000
app.listen(8000, () => {
  console.log('Server started!');
});

// Path: comments.js
// Create web server with express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Route handler
app.get('/comments', (req, res) => {
  // Get comments from database
  const comments = [
    { username: 'Tam' },
    { username: 'Tim' },
    { username: 'Tom' }
  ];
  // Send comments to client
  res.send(comments);
});

// Start web server on port 8000
app.listen(8000, () => {
  console.log('Server started!');
});

// Path: comments.js
// Create web server with express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Route handler
app.get('/comments', (req, res) => {
  // Get comments from database
  const comments = [
    { username: 'Tam' },
    { username: 'Tim' },
    { username: 'Tom' }
  ];
  // Send comments to client
  res.send(comments);
});

// Start web server on port 8000
app.listen(8000, () => {
  console.log('Server