import pinoExpress = require("express-pino-logger");
import pino from "pino";

import Constants from "./environment";

export const logger = pino({ enabled: Constants.LOG_ENABLED });

export const expressLogger = pinoExpress({
  logger,
});

export default logger;
