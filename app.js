const islem = document.querySelector(".grid-container");
const screen = document.querySelector(".screen");
let leftPart = "";
let rightPart = "";
let sonuc = 0;
let selectedOperator;
let numbers;

islem.addEventListener("click", (event) => {
  if (event.target.classList.contains("num")) {
    numbers = event.target.innerText;
    screen.innerText += numbers;
    if (!selectedOperator == "") {
      rightPart += numbers;
    } else {
      leftPart += numbers;
    }

    console.log(leftPart, rightPart);
  } else if (event.target.className == "tab grid-item1 remove") {
    screen.innerText = " ";
    leftPart = "";
    rightPart = "";
    selectedOperator = "";
    console.log(leftPart, rightPart);
  } else if (event.target.classList.contains("operator")) {
    selectedOperator = event.target.innerText;
    // console.log(selectedOperator);
    if (event.target.innerText == "+") {
      event.target.parentElement.parentElement.children[0].innerText = "";
      // console.log(event.target.parentElement.parentElement.children[0]);
    } else if (event.target.innerText == "-") {
      event.target.parentElement.parentElement.children[0].innerText = "";
    } else if (event.target.innerText == "x") {
      event.target.parentElement.parentElement.children[0].innerText = "";
    } else if (event.target.innerText == "÷") {
      event.target.parentElement.parentElement.children[0].innerText = "";
    }
  } else if (event.target.classList.contains("result")) {
    if (selectedOperator == "+") {
      sonuc = parseFloat(leftPart) + parseFloat(rightPart);
      event.target.parentElement.parentElement.children[0].innerText = sonuc;
    }
    if (selectedOperator == "-") {
      sonuc = parseFloat(leftPart) - parseFloat(rightPart);
      event.target.parentElement.parentElement.children[0].innerText = sonuc;
    }
    if (selectedOperator == "÷") {
      sonuc = parseFloat(leftPart) / parseFloat(rightPart);
      event.target.parentElement.parentElement.children[0].innerText =
        sonuc.toFixed(3);
    }
    if (selectedOperator == "x") {
      sonuc = parseFloat(leftPart) * parseFloat(rightPart);
      event.target.parentElement.parentElement.children[0].innerText =
        sonuc.toFixed(3);
    }
  } else if (event.target.classList.contains("plusminus")) {
    if (!selectedOperator) {
      leftPart = screen.innerText *= -1;
    } else if (selectedOperator) {
      rightPart = screen.innerText * -1;
      screen.innerText = rightPart;
    }
    console.log(leftPart, rightPart);
  } else if (event.target.classList.contains("percent")) {
    if (!selectedOperator) {
      leftPart = screen.innerText / 100;
      screen.innerText = leftPart;
    } else if (selectedOperator) {
      rightPart = screen.innerText / 100;
      screen.innerText = rightPart;
    }
    console.log(leftPart, rightPart);
  }
});
