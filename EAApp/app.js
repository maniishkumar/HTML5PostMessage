window.onload = function () {
	var iframeWin = document.getElementById("da-iframe").contentWindow,
		form = document.getElementById("the-form"),
		myMessage = document.getElementById("my-message");

	myMessage.select();	

	form.onsubmit = function () {
		iframeWin.postMessage(myMessage.value, "http://localhost:8091/");
		return false;
	};
  
};
  
if (window.addEventListener) {
	// For standards-compliant web browsers
	window.addEventListener("message", displayiFrameMessage, false);
}
else {
	window.attachEvent("onmessage", displayiFrameMessage);
} 

function displayiFrameMessage (e) {
	var messageFromIFrame;
	if (e.origin !== "http://localhost:8091") {
		messageFromIFrame = "You are not worthy iframe";
	}
	else {
		messageFromIFrame = "<strong>Message from iFrame:</strong>" + e.data + " <br> <strong>Origin</strong>: " + e.origin;
	}
	document.getElementById("iframereceived-message").innerHTML = messageFromIFrame;
}