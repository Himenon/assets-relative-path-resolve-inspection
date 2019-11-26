import * as express from "express";
import * as path from "path";
import * as cors from "cors";

const SERVER_PORT = 10020;

const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:100010',
  optionsSuccessStatus: 200
}

const createServer = (): express.Application => {
  const app = express();
  app.use("/assets/stylesheets", express.static(path.join(__dirname, "stylesheets")));
  app.use("/assets2/images", express.static(path.join(__dirname, "images")));

  return app;
};

const server = createServer();
server.listen(SERVER_PORT, () => {
  console.log(`Serve start: http://localhost:${SERVER_PORT}`);
});
