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
  res.json({
    message: 'Hello World! [2]',
    APP_HOST: process.env.APP_HOST
  });
});

// bandaid override
if (process.env.APP_HOST) {
  config.port = Number(process.env.APP_HOST.split(':')[1]);
}

const server = app.listen(config.port, () => {
  console.log(`Server running at port ${server.address().port}`);
});
