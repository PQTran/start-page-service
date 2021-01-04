const express = require('express');
const profilesRouter = require('./routes/profiles');

const app = express();
app.listen(8000);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/profiles', profilesRouter);

module.exports = app;
