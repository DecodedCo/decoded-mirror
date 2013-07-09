// When the document is ready, call the startEverything function
$(document).ready(startEverything);

// Define our main function to run when the document is ready
function startEverything() {
	// Write a message to the console
	console.log("It's working!");

	// Ask the browser for access to the computer's audio and video
 	navigator.webkitGetUserMedia({video: true, audio: true}, onSuccess, onError);
} // END startEverything

// Define a function to run if we successfully get the video
function onSuccess(stream) {
	// Get the <video id="source" src="" autoplay="true"></video> element in our HTML
	var output = document.getElementById('webcam');
	
	// Set the empty src attribute to the stream
    output.src = window.webkitURL.createObjectURL(stream);
} // END onSuccess

// Define a function to run if we can't get the video
function onError(errorInfo) {
	// Output the error message to the console
	console.log(errorInfo);
} END onError