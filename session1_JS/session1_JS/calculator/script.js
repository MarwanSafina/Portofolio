let displayValue = "";  //the dispalyedvalue is the sum
let currentOperation = null;  //the current operation that needs to be done
let previousValue = "";

//this function gets the number and add the selected number to the displayvalue (sum)
function appendNumber(number) {
  if (displayValue === "0" && number === "0") return; // Prevent multiple leading zeros
  displayValue += number; //adds the selected number to the displayvalue(sum)
  updateDisplay(); //send the code to this function
}

//this function gets the selected operation and puts it in currentoperation
//and if there was a previous value (selected number before) make the operation
//if not put the displayvalue in previousvalue and then clean the displayvalue
function setOperation(operation) {
  if (displayValue === "") 
    {
      alert('enter a number first'); //modification
      return; // Prevent operation without a number
    }
  if (previousValue !== "") calculate(); //if there is value in previousvalue then go calculate (he entered 2 numbers and the operation)
  currentOperation = operation; //puts the wondered operation in variable
  previousValue = displayValue; //puts the old value in prevoiusvalue to save it
  displayValue = ""; //clears the displayedvalue to put a new value in it
}

//this function makes the opeartion desired
function calculate() {
  let result;
  const prev = parseFloat(previousValue);
  const current = parseFloat(displayValue);
  if (isNaN(prev) || isNaN(current)) return; //to check that the data are correct (numbers)

  // to choose the operation depending on the currentoperation
  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }

  displayValue = result.toString(); //transforms the number to string to be able to put it in displayvalue
  currentOperation = null; //clears currentoperation
  previousValue = ""; // clears previous value
  updateDisplay(); //goes to the display function
}

//function to use th (C) button in the calculator to clean all the variables
function clearDisplay() {
  displayValue = "";
  currentOperation = null;
  previousValue = "";
  updateDisplay(); //update the display to clear it
}

//displays the displayvalue in thye display section in the page
function updateDisplay() {
  document.getElementById("display").value = displayValue;
}

//in the calculate function he doesn't clear the displayvalue so you can add multiple number
//in the setoperation function if he had 1 number then operation then another number then operation
// he will go to calculate before the second operation