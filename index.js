const express = require('express');
const app = express();
const config = (() => {
  try {
    return require('./app.config');
  }
  catch (e) {
    return require('./app.config.default');
  }
})();

app.get('**', (req, res) => {
  res.json('Hello World! [0]');
});

const server = app.listen(config.port, () => {
  console.log(`Server running at port ${server.address().port}`);
});
