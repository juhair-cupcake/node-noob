const { subject, req, res } = require("./utils");

// get hi from terminal
if (process.argv[2] === "hi") {
  console.log("hello\n");
} else {
  console.log("no/unknown process argument\n");
}

//all event observer
process.on("exit", (code) => {
  console.log("all events closed", code);
});

debugger;
subject.emit("event", "pos");
subject.emit("event", "neg");
req.end();
res.then((x) => {
  console.log(x);
});

/*
how node work?
[
  V8,
  node-api [fs, https, path...]
  node-bindings,
  libuv
]

libuv and node multi-threading
[
  event-loop,
  thread-pool,
  async-i/o [filesystem, network],
]
*/
