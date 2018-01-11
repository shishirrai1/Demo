document.getElementById("colorRed").addEventListener("click", colorRed);
document.getElementById("colorBlue").addEventListener("click", colorBlue);
document.getElementById("colorYellow").addEventListener("click", colorYellow);
document.getElementById("colorWhite").addEventListener("click", colorWhite);
document.getElementById("colorBlack").addEventListener("click", colorBlack);

//Accessing dom elements by id
function colorRed(){
var elem = document.getElementById("texts");
elem.style.color="red"; // change color to red
}

//Accessing dom elements by tag name
function colorBlue(){
var elem = document.getElementsByTagName("p");
//elem.length
//elem[0].style.color="blue";
elem[0].style.color="blue"; // change color to Blue
}

//Accessing dom elements by class name
function colorYellow(){
var elem = document.getElementsByClassName("classTexts");
elem[0].style.color="yellow"; // change color to yellow
}

//Accessing dom elements by css selector(class style)
function colorWhite(){
var elem = document.querySelector(".classTexts");
elem.style.color="white"; // change color to white
}

//Accessing dom elements by css selector (id style)
function colorBlack(){
var elem = document.querySelector("#texts");
elem.style.color="black"; // change color to black
}