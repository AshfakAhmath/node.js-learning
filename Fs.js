const fs = require("fs");

if (!fs.existsSync("./docs")) {
  fs.mkdir("./docs", (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Folder Created.");
    }
  });
  console.log(`mkdir is async`);
}

fs.writeFile("./docs/hi.txt", "Hi! How are you?", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`File Written`);
  }
});

if (fs.existsSync("./docs/hi.txt")) {
  fs.readFile("./docs/hi.txt", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(data.toString());
    }
  });
}

if (fs.existsSync("./docs/hi.txt")) {
  fs.unlink("./docs/hi.txt", (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("File Deleted");
    }
  });
}

if (fs.existsSync("./docs")) {
  fs.rmdir("./docs", (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Folder Deleted");
    }
  });
}
