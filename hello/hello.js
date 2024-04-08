const EventEmitter = require("events");

const subject = new EventEmitter();
const terminalInput = process.argv[2];

if (terminalInput === "hi") {
  console.log("hello");
} else {
  console.log("...");
}

//all event observer
process.on('exit', (code) => {
  console.log('all events closed', code);
});

// observer 1
subject.on("event", (result) => {
  if (result === "pos") {
    console.log("yeeee");
  } else if (result === "neg") {
    console.log("yeet");
  }
});
// observer 2
subject.on("event", (result) => {
  if (result === "pos") {
    console.log("ok");
  } else if (result === "neg") {
    console.log("no");
  }
});

subject.emit("event", "pos");
subject.emit("event", "neg");

/*
how node work?

[
  V8,
  node-api [fs, https, path...]
  node-bindings,
  libuv
]
*/

/*
libuv and node multi-threading

[
  event-loop,
  thread-pool,
  async-i/o [filesystem, network],
]

*/
