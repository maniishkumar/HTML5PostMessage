# HTML5PostMessage
Using postMessage, a new feature in HTML5 to securely communicate between parent and child window, to post messages between windows &amp; iframes.

The Window.postMessage() method safely enables cross-origin communication. Normally, scripts on different pages are allowed to access each other if and only if the pages that executed them are at locations with the same protocol (usually both https), port number (443 being the default for https), and host (modulo Document.domain being set by both pages to the same value). window.postMessage() provides a controlled mechanism to circumvent this restriction in a way which is secure when properly used.

The window.postMessage() method, when called, causes a MessageEvent to be dispatched at the target window when any pending script that must be executed completes (e.g., remaining event handlers if window.postMessage() is called from an event handler, previously-set pending timeouts, etc.) The MessageEvent has the type message, a data property which is set to the value of the first argument provided to window.postMessage(), an origin property corresponding to the origin of the main document in the window calling window.postMessage at the time window.postMessage() was called, and a source property which is the window from which window.postMessage() is called. (Other standard properties of events are present with their expected values.)

# EAApp
This is Enclosing App (we can say iFrame hosting/parent app). It will embedd an iFrame in its DOM and send a message to iFrame using postMessage. EA has been configured to receive message from iFrameApp as well and display it accordingly.

# iFrameApp
This app will be load in iFrame, embedded in Enclosing App. It will receive an message from EA and process it. It will also send separate message to EA.

# References

https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage

