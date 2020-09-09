import * as dotenv from "dotenv-safe";
import * as http from "http";
require("module-alias/register"); // tslint:disable-line

import App from "./app";

dotenv.config();

const normalizePort = (val: number | string): number | string | boolean => {
  const normPort: number = typeof val === "string" ? parseInt(val, 10) : val;
  if (isNaN(normPort)) {
    return val;
  } else if (normPort >= 0) {
    return normPort;
  } else {
    return false;
  }
};

const onError = (error: NodeJS.ErrnoException): void => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`); // tslint:disable-line
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`); // tslint:disable-line
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = (): void => {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`); // tslint:disable-line
};

const port = normalizePort(process.env.PORT || 3000);
App.set("port", port);

const server = http.createServer(App);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

server.setTimeout(2 * 60 * 60 * 1000, () => {
  return;
});
