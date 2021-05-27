const express = require('express')
const path = require("path");
const fs = require('fs');
var dir_home = process.env[process.platform =="win32"?"USERPROFILE":"HOME"];

//fs.mkdirSync(path.join(dir_home,"Desktop", "Geeks"));
app = express()



app.use(function (req, res) {
  console.log("process.platform ");
  console.log("process.platform == ", process.platform);


  res.setHeader('Content-Type', 'text/plain')
  res.end('hello')
})


var port = process.env.PORT || 8081;
app.listen(port);
