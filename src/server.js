const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'anwar1234'
  });
});

app.listen(8089, () => console.log('API is running on http://localhost:8089/login'));