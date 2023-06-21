function setupCalculator() {
    var addBtn = document.querySelector("#add");
    var subtractBtn = document.querySelector("#subtract");
    var multiplyBtn = document.querySelector("#multiply");
    var divideBtn = document.querySelector("#divide");
    var booleanBtn = document.querySelector("#boolean");
    var resultSpan = document.querySelector("#result");
  
    addBtn.addEventListener("click", function() {
      var firstNumber = parseFloat(document.querySelector("#firstNumber").value);
      var secondNumber = parseFloat(document.querySelector("#secondNumber").value);
      var result = firstNumber + secondNumber;
      resultSpan.textContent = result;
    });
  
    subtractBtn.addEventListener("click", function() {
      var firstNumber = parseFloat(document.querySelector("#firstNumber").value);
      var secondNumber = parseFloat(document.querySelector("#secondNumber").value);
      var result = firstNumber - secondNumber;
      resultSpan.textContent = result;
    });
  
    multiplyBtn.addEventListener("click", function() {
      var firstNumber = parseFloat(document.querySelector("#firstNumber").value);
      var secondNumber = parseFloat(document.querySelector("#secondNumber").value);
      var result = firstNumber * secondNumber;
      resultSpan.textContent = result;
    });
  
    divideBtn.addEventListener("click", function() {
      var firstNumber = parseFloat(document.querySelector("#firstNumber").value);
      var secondNumber = parseFloat(document.querySelector("#secondNumber").value);
      var result = firstNumber / secondNumber;
      resultSpan.textContent = result;
    });
  
    booleanBtn.addEventListener("click", function() {
      var firstNumber = parseFloat(document.querySelector("#firstNumber").value);
      var secondNumber = parseFloat(document.querySelector("#secondNumber").value);
      var result = firstNumber % secondNumber;
      resultSpan.textContent = result;
    });
  }
  
  document.addEventListener("DOMContentLoaded", setupCalculator);