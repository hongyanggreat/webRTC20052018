const express = require("express");
const app     = express();
app.use(express.static("public"));

app.set("view engine", "ejs");

app.set("views", "./views")
// var server = require("http").Server(app);

// var io = require("socket.io")(server);

app.get("/",(req,res)=>res.render("home"));
app.listen(3000,() => console.log("Server Started"));
// server.listen(process.env.PORT || 3000,() => console.log("Server Started"));
// server.listen(3000,() => console.log("Server Started"));


// var arrData = [];
// io.on("connection", function(socket) {
// 	socket.on("Client-user-send-info", function(data) {
// 		arrData.push(new HocVien(data.fullname,data.email,data.phone));
// 		io.sockets.emit("Server-send-list-user", arrData);
// 	})
// });

// function HocVien(fullname,email,phone){
// 	this.fullname = fullname;
// 	this.email = email;
// 	this.phone = phone;
// }

// app.get("/", function(req, res) {
// 	res.render("home");
// });