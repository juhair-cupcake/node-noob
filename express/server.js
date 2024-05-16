const express = require("express");
const app = express();
const PORT = 3000;

//fake database
const data = [
  {
    id: 0,
    name: "Raja",
  },
  {
    id: 1,
    name: "Rani",
  },
  {
    id: 2,
    name: "Boka",
  },
  {
    id: 3,
    name: "Khoka",
  },
];

app.use((req, res, next) => {
  const startTime = Date.now();
  next();

  const delta = Date.now() - startTime;
  console.log(req.method, req.url, "time-diff:", delta);
});
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>check api route</h1>");
});

app.get("/api", (req, res) => {
  res.json(data);
});
app.get("/api/:dataId", (req, res) => {
  const dataID = Number(req.params.dataId);
  const singleData = data[dataID];

  if (singleData) {
    res.status(200).json(singleData);
  } else {
    res.status(404).json({
      error: "you have no friend",
    });
  }
});
app.post("/api", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "you have no friend",
    });
  }
    const newData = {
      id: data.length,
      name: req.body.name,
    };
    data.push(newData);

    res.json(newData);
});

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
