const fs = require("fs");
const { buffer } = require("stream/consumers");

const readStream = fs.createReadStream("./docs/hi.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./docs/copyhi.txt");

// readStream.on("data", (buffer) => {
//   console.log("\nNew Buffer\n");
//   console.log(buffer);
// });

// readStream.on("data", (buffer) => {
//   writeStream.write("\nNew Buffer\n");
//   writeStream.write(buffer);
// });

readStream.pipe(writeStream);