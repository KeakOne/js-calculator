// This calculator works but taking in clicks from the HTML page, it then performs the function pressed
// once a function is done it records it all in one variable so that other functons can be performed on it/*
// what is needed:
// -a text box for user input and answers
// - box buttons linking to functions?
// -a global variable to keep track of all the calculations
// -a clear button which can erase the contence (will probably go with a page reload)

var result = 0;

function calc(digit){
    
    if (digit == "sum"){
        console.log(eval(result)) ;
        $("#resultBox").append(result);
    }
    else if (digit == "-"){
    	result += "-";
    }
    else if (digit == "+"){
    	result += "+";
    }
    else if (digit == "*"){
    	result += "*";
    }
    else if (digit == "/"){
    	result += "/";
    }
    else if (digit == "."){
    	result += ".";
    }
    else if (digit == "%"){
    	result += "%";
    }
    else if (digit == "clear"){
    	location.reload();
    }
    else{
    	result += parseFloat(digit);
    }

}

//append result everytime a button is clicke to resultBox


	
	// var input(click){}var equals = function (){
	//     return result;
	//     //apend somehow to screen textbox
	// }var divide = function(a,b){
	//     result / b;
	// }

	// var multiply = function(a,b){
	//     result*b;

	// }var subtract = function(a,b){
	//     result-b;

	// }var add = function(a){
	//     result +a;

	// }var ans = function(a){
	//     return result;   
	// }

	// function clear(){
	//     location.reload(); //resets the page
	// }