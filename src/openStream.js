const playVideo = require('./playVideo');
const Peer = require('simple-peer');
const $ = require('jquery');
function openStream() {
	navigator.mediaDevices.getUserMedia({ audio: false, video: true })
		.then(stream => {
			playVideo(stream, "localStream");

			const p = new Peer({
				initiator: location.hash === "#1",
				trickle: false,
				stream,

			});
			// console.log(222);
			p.on('signal', token => {
				$('#txtMySignal').val(JSON.stringify(token))
			});
			p.on('stream', friendStream => playVideo(friendStream, "friendStream"));

			$('#btnConnect').click(() => {
				;
				const friendSignal = JSON.parse($('#txtFriendSignal').val())
				p.signal(friendSignal);
			});
		})
		.catch(err => console.log(err));
}

module.exports = openStream;
