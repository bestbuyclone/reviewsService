const express = require("express");
const path = require("path");

const app = express();


app.use(express.static(path.resolve(__dirname, '../dist')));


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3005;
}
app.listen(port, () => {
  console.log('listening on port 3005!');
});
