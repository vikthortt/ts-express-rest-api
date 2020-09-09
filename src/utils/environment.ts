import dotenv = require('dotenv-safe');
dotenv.config();

export default {
  LOG_ENABLED: !(process.env.LOG_ENABLED === 'false'),
  STRING_CONNECTION: process.env.DB_CONNECTION,
  BASE_PATH: process.env.CWD,
};
