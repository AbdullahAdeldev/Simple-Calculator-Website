function add() {
  // Getting the user numbers
  const firstNum = document.getElementById("firstNum").value;
  const secondNum = document.getElementById("secondNum").value;

  // Doing the math opreation
  const result = parseFloat(firstNum) + parseFloat(secondNum);

  // Displaying the result to the user
  document.getElementById("result").innerHTML = result;
}

function sub() {
  // Getting the user numbers
  const firstNum = document.getElementById("firstNum").value;
  const secondNum = document.getElementById("secondNum").value;

  // Doing the math opreation
  const result = parseFloat(firstNum) - parseFloat(secondNum);

  // Displaying the result to the user
  document.getElementById("result").innerHTML = result;
}

function mul() {
  // Getting the user numbers
  const firstNum = document.getElementById("firstNum").value;
  const secondNum = document.getElementById("secondNum").value;

  // Doing the math opreation
  const result = parseFloat(firstNum) * parseFloat(secondNum);

  // Displaying the result to the user
  document.getElementById("result").innerHTML = result;
}

function div() {
  // Getting the user numbers
  const firstNum = document.getElementById("firstNum").value;
  const secondNum = document.getElementById("secondNum").value;

  // Doing the math opreation
  const result = parseFloat(firstNum) / parseFloat(secondNum);

  // Displaying the result to the user
  document.getElementById("result").innerHTML = result;
}
