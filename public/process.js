// var constraints = { audio: false, video: { width: 1280, height: 720 } }; 
navigator.mediaDevices.getUserMedia({ audio: false, video: true })
.then(function(stream => console.log(stream)) {
  /* use the stream */
})
.catch(function(err => console.log(err)) {
  /* handle the error */
});