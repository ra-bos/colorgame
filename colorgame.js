var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


resetButton.addEventListener("click", resetGame);

easyBtn.addEventListener("click", easyMode);
hardBtn.addEventListener("click", hardMode);

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//Add initial colors to square
	squares[i].style.backgroundColor = colors[i];

	// Add click listeners to squares
	squares[i].addEventListener("click", clicked);
}

function easyMode(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

function hardMode(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
}

function resetGame(){
	// Generate all new colors
	colors = generateRandomColors(numSquares);
	// Pick a new random color from array
	pickedColor = pickColor();
	// Change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	// Change colors of square
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	this.textContent = "New Colors"


}

function clicked(){
	// grab color of clicked square
	var clickedColor = this.style.backgroundColor;
	// compare color to pickerColor
	if(clickedColor === pickedColor){
		messageDisplay.textContent ="Correct!";
		changeColors(clickedColor);
		h1.style.background = clickedColor;
		resetButton.textContent ="Play Again?"
	} else {
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again!";
	}
}

function changeColors(color){
	// Loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
	// Change each color to match given color
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = []
	// repeat num times
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
		// get random color and push into array
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
