const express = require('express');
const PORT = process.env.PORT || '8888';
const app = express();
const schema = require('./joiConfig');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    method: req.method,
    message: 'Hello World im here for joi',
    ...req.body,
  });
});

app.post('/post', (req, res, next) => {
  const { error, value } = schema.validate(req.body);
  if (error) {
    console.log(error);
    res.send(error.details);
  }
  res.send('successfully signed up');
});

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

// https://www.youtube.com/watch?v=_svzevhv4vg&ab_channel=OnelightWebDev
