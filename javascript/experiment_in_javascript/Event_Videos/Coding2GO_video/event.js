const button = document.getElementById("myButton");
button.addEventListener("click", doSomething) //triggers on reload, not on click of the button? it was the empty parenthesis

const heading = document.getElementById("heading");
heading.addEventListener("mouseover", changeBackground) // once changed doesn't change back... :(

function doSomething(){
    //console.log("Hello World");
    alert("Hello World")
}

function changeBackground(){
    document.body.style.backgroundColor = "#f3f3f3";
}