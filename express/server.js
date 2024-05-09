const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});
app.get("/api", (req, res) => {
  res.send({
    id: 1,
  });
});

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
