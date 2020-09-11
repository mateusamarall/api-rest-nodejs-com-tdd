const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/users', (req, res) => {
  const users = [
    {
      name: 'mateus', email: 'mateus@gmail.com',
    },
  ];

  res.status(200).json(users);
});

module.exports = app;
