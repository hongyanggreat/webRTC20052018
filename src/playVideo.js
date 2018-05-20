function playVideo(stream, idVideo) {
	// console.log(stream);
	const video            = document.getElementById(idVideo);
	video.srcObject        = stream;
	video.onloadedmetadata = function(e) {
		video.play();
	};
}
console.log("day nay thay doi luon moi so");
module.exports = playVideo;
