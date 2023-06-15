//CS10 Grade Calculator
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let num1 = +document.getElementById("num1-in").value;
  let num2 = +document.getElementById("num2-in").value;
  let num3 = +document.getElementById("num3-in").value;
  let num4 = +document.getElementById("num4-in").value;
  let num5 = +document.getElementById("num5-in").value;

  //PROCESS
  let total = (num1 + num2 + num3 + num4 + num5) / 5;

  //OUTPUT
  document.getElementById("output").innerHTML = total;
}
