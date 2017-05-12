var EAWindow;
function displayMessage (evt) {
	var message;
    EAWindow = evt;
	if (evt.origin !== "http://localhost:8092") {
		message = "You are not worthy";
	}
	else {
		message = "<strong>Message from EA</strong>: " + evt.data + " <br> <strong>Origin</strong>: " + evt.origin;
	}
	document.getElementById("received-message").innerHTML = message;
   
}
if (window.addEventListener) {
    // For standards-compliant web browsers
    window.addEventListener("message", displayMessage, false);
}
else {
    window.attachEvent("onmessage", displayMessage);
}
var iframeform = document.getElementById("iframe-form");
iframeform.onsubmit = function () {
    var myMessageToEA = document.getElementById("framemy-message");
    myMessageToEA.select();	
    EAWindow.source.postMessage(myMessageToEA.value, "http://localhost:8092/");
    return false;
};
