#!/usr/bin/env node
const app = require('todomvc/server');
const port = 8000;
app.listen(port, err => {
  if (err) {
    console.log(`Trouble starting server on ${port}`, err.message);
  } else {
    console.log(`Started todomvc at http://localhost:${port}`);
  }
});
