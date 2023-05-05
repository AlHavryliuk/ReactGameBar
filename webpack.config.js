const Dotenv = require('dotenv-webpack');

module.exports = {
  // ... другие настройки webpack ...
  plugins: [new Dotenv()],
};
