const http = require("http");
//cors works with white listing

//fake database
const data = [
  {
    id: 0,
    name: "Sokina",
  },
  {
    id: 1,
    name: "Morzina",
  },
  {
    id: 2,
    name: "Sultan",
  },
  {
    id: 3,
    name: "Raju",
  },
];

//create server
const PORT = 3000;
const serv = http.createServer();

//listen request
serv.on("request", (req, res) => {
  const urlItems = req.url.split("/");

  //handle methods using url
  if (urlItems[1] === "") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    //different way of writing header
    // res.writeHead(200, {
    //   "Content-Type": "text/html",
    // });

    res.write(`<html>
      <body>
        <h1>ho ho ho</h1>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </body>
      </html>`);

    res.end();
  } else if (urlItems[1] === "api" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    if (urlItems.length === 3) {
      //child url
      const singleData = data[parseInt(urlItems[2])];
      console.log(singleData);

      res.end(JSON.stringify(singleData));
    } else {
      //response every data
      res.end(JSON.stringify(data));
    }
  } else if (urlItems[1] === "api" && req.method === "POST") {
    //handle post method
    req.on("data", (e) => {
      const foundData = e.toString();
      console.log("requeset", foundData);

      data.push(JSON.parse(foundData));
    });

    //pipe the given request as response
    req.pipe(res);
  } else {
    //404 not found
    res.statusCode = 404;
    res.end();
  }
});

//start the server
serv.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
