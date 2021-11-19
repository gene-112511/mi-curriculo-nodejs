"use strict";

const http = require("http");
const { join } = require("path");
require("dotenv").config({ path: join(__dirname, "..", ".env") });

const isProduction = process.env.NODE_ENV === "production" ? true : false; 
const PORT = isProduction ? process.env.PORT : 8000;

const app = isProduction
  ? require("./app.prod")
  : require("./app.dev");

const server = http.createServer(app);

server.listen(...isProduction ? [ PORT ] : [ PORT, () => {
  console.log(`Server running at: 'http://localhost:${PORT}`)
}]);