const EventEmitter = require("node:events");
const subject = new EventEmitter();

// observer 1
debugger;
subject.on("event", (result) => {
  if (result === "pos") {
    console.log("yeeee");
  } else if (result === "neg") {
    console.log("yeet");
  }
});
// observer 2
debugger;
subject.on("event", (result) => {
  if (result === "pos") {
    console.log("ok");
  } else if (result === "neg") {
    console.log("no");
  }
});

module.exports = {
  subject,
};
