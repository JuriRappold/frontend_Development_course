// DOM = DOCUMENT OBJECT MODEL
//              Object{} that represents the page you see in the web browser
//              and provides you with an API to interact with it.
//             Web browser constructs the DOM when it loads an HTML document,
//             and structures all the elements in a tree-like representation.
//             JavaScript can access the DOM to dynamically
//             change the content, structure, and style of a web page.

const username = "";
const WelcomeMsg = document.getElementById("welcome-msg");
WelcomeMsg.textContent += (username === "" ? `Guest` : username); //added parenthesis for my clarity's sake

