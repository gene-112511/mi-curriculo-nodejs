"use strict";

const express = require("express");
const http = require("http");
const path = require("path");

const PORT = process.env.NODE_ENV === "production" ? process.env.PORT : 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.send("Bienvenido a mi Curriculum por: Genesis Trias");
});

app.get("*", (req, res) => {
  res.send("Error 404: Not found");
});


const server = http.createServer(app);

server.listen(8000, () => {
  console.log(`Server running at: 'http://localhost:${PORT}`)
});