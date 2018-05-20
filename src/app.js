const openStream = require('./openStream');
openStream();
const $ = require('jquery');
const Peer = require('simple-peer');

const p = new Peer({
	initiator: location.hash === "#1",
	trickle  : false
});
// console.log(222);
p.on('signal', token => {
	$('#txtMySignal').val(JSON.stringify(token))
});
p.on('connect', token => {
	//    console.log("dang kt noi")
	//    console.log("dang kt noi")
	setInterval(() => {
		p.send(Math.random())
	}, 2000);
});
p.on('data', data => console.log("Nhan du lieu" + data))
$('#btnConnect').click(() => {
	;
	const friendSignal = JSON.parse($('#txtFriendSignal').val())
	p.signal(friendSignal);
});

// console.log("resolve : How to move file main.js from dist to public");
