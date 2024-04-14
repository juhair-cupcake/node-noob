const http = require("http");

const PORT = 3000;

const serv = http.createServer((req, res) => {
  res.writeHead(200, {
    // "Content-Type": "text/plain",
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      message: "mɛsɪdʒ",
    }),
  );
});

serv.listen(PORT, () => {
  console.log("f-ing", PORT);
});
