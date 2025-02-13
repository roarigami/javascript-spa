const express = requre("express");
const path = requre("path");

const app = express();

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("frontend", "index.html"));
})
