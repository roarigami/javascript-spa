//"type": "module",<-- Add this to package.json to enable ES6 modules
// import express from 'express';
// import path from 'path';
const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
})

app.listen(process.env.PORT || 5000, () => console.log("Server running.."));
