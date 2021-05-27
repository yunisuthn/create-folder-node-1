const express = require('express')
const path = require("path");
const fs = require('fs');

// if(process.platform == "win32") { dir_home = process.env["USERPROFILE"]}
// if(process.platform  != "win32") {dir_home= process.env["$HOME"]} //process.env.$HOME};
var dir_home = path.resolve(process.env["$HOME"]);
// var dir_home = process.env[process.platform !="win32"?"HOME":"USERPROFILE"];

console.log("process.platform == ", dir_home);

var rep = path.resolve(dir_home,"Desktop", "Geeks")
if (!fs.existsSync(rep)){
  fs.mkdirSync(rep);
  //fs.mkdirSync(dir);
}

app = express()



app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.end('hello')
})


var port = process.env.PORT || 8081;
app.listen(port);
