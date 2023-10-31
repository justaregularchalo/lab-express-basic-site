const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.get("/photo-gallery",(req,res)=>{

    res.sendFile(__dirname + "/views/photo-gallery.html");


})

app.get("*", (req, res) => {
  res.send("Error 404 - Me quedé sin telaraña");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
