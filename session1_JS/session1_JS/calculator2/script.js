// function calculateSum() {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let sum = num1 + num2;
//     document.getElementById("result").textContent = "Result: " + sum;
//     //alert(`${sum}`);
//   }
//
function calculateSum() {
  //definig variable num1
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = num1 + num2;
  
  const resultElement = document.getElementById('result');
  resultElement.innerText = `number1 + number2 =  ${result}`;
  resultElement.style.display = 'block'; // Show the paragraph
}
