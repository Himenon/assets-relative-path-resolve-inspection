import * as express from "express";
import * as path from "path";

const SERVER_PORT = 10010;

const createServer = (): express.Application => {
  const app = express();
  app.get("/", express.static(path.join(__dirname, "static")));

  return app;
};

const server = createServer();
server.listen(SERVER_PORT, () => {
  console.log(`Serve start: http://localhost:${SERVER_PORT}`);
});