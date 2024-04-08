const https = require("node:https");

//get request
debugger;
const req = https.request("https://www.google.com", (res) => {
  res.on("data", (chunck) => {
    console.log("chunck-of-data", chunck);
  });
  res.on("end", () => {
    console.log("\ndata-end");
  });
});

module.exports = {
  req,
};
