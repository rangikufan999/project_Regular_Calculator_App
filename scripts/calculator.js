var calcString = "";
var fontCategory = "normal";
const defaultLeft = "90%";
const maxInputLength = 60;


function addToString(stringToAdd){

	if(calcString.length <= maxInputLength){
		calcString += stringToAdd;
		updateDisplay();
	}else{
		displayError("Input Too Long!");
	}
	
}

function updateDisplay(){
	var disp = document.getElementById("input");

	if(calcString == ""){
		disp.style.left = defaultLeft;
		disp.style.fontSize = calculateFontSize();
		disp.innerHTML = 0;
	}else{
		disp.style.left = calculateLength();
		disp.style.fontSize = calculateFontSize();
		disp.innerHTML = calcString;
	}

	
}

function displayResult(){
	var disp = document.getElementById("input");

	if(calcString == ""){
		displayError("No numbers have been input!");
		disp.style.fontSize = calculateFontSize();
		disp.innerHTML = 0;
	}else{
		disp.style.left = calculateLength();
		disp.style.fontSize = calculateFontSize();
		disp.innerHTML = eval(calcString).toString();

		calcString = eval(calcString).toString();
	}
}

function clearInput(){
	calcString = "";
	updateDisplay();
	displayError(" ");
}

function displayError(errToDisplay){
	var err = document.getElementById("err");

	err.innerHTML = errToDisplay;
}

function calculateLength(){
	var multiplier = determineMultiplier();

	return Math.floor((90 - calcString.length * multiplier)) .toString() + "%";
}

function calculateFontSize(){
	if(calcString.length < 16){
		fontCategory = "normal";
		return "15px";
	}else if(calcString.length > 16 && calcString.length < 32){
		fontCategory = "small";
		return "13px";
	}else if(calcString.length > 32 && calcString.length < 48){
		fontCategory = "extraSmall";
		return "11px";
	}else if(calcString.length > 48){
		fontCategory = "superSmall";
		return "9px";
	}
}

function determineMultiplier(){
	switch(fontCategory){
		case "normal":
			return 2.2;
		break;

		case "small":
			return 1.8;
		break;

		case "extraSmall":
			return 1.5;
		break;

		case "superSmall":
			return 1.3;
		break;
	}
}