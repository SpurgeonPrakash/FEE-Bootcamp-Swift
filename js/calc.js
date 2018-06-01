displayNum = "";
    storedNum = "";
    operation = 0;
    queuedOperation = 0;
    calculationFinished = false;

function clearDisplay() {
   
    var display = document.getElementById("display");
    var display1 = document.getElementById("display1");

    
    displayNum = "";
    storedNum = "";
    operation = 0;
    queuedOperation = 0;        
    display.value = displayNum;
    display1.value = displayNum;

}

function numInput(num) {
   
    var display = document.getElementById("display");
    var display1 = document.getElementById("display1");

    
    if ((display.value == "") && num == "0") {
    
      return;
    }
    
    else if (calculationFinished == true) {
        display.value = num;
        calculationFinished = false;
    }
    
    else {
      display.value += num;
    }
    display1.value += display.value;
}

function insertDecimal(dec) {
    
    var display = document.getElementById("display");

   
    for (i = 0; i < display.value.length; i++)
        if (display.value.charAt(i) == '.') {
           
            return;
        }
    
        display.value += dec;
}

function setOperation(command) {
    
    var display = document.getElementById("display"),
            displayNum = display.value;
            var display1 = document.getElementById("display1");
            var symbol;
    
            evalDisplay = eval(displayNum),
            evalStored = eval(storedNum);

     
    if (queuedOperation == 0) {
        storedNum = display.value;
    }
    else if (queuedOperation == 1) {
        storedNum = evalStored + evalDisplay;
    }
    else if (queuedOperation == 2) {
        storedNum = evalStored - evalDisplay;
    }
    else if (queuedOperation == 3) {
        storedNum = evalStored * evalDisplay;
    }
    else if (queuedOperation == 4) {
        storedNum = evalStored / evalDisplay;
    }

    
    if (command == 'add') {
        operation = 1;
        symbol='+';
    }
    else if (command == 'subtract') {
        operation = 2;
        symbol='-';
    }
    if (command == 'multiply') {
        operation = 3;
        symbol='*';
    }
    if (command == 'divide') {
        operation = 4;
        symbol='/';
    }

    
    queuedOperation = operation;
    display1.value += symbol;
    
    display.value = '';
}

function calculate() {
    
    var display = document.getElementById("display");
            displayNum = display.value;
    var evalDisplay = eval(displayNum),
            evalStored = eval(storedNum);

   
    if (operation == 1) {
        displayNum = evalStored + evalDisplay;
    }
    else if (operation == 2) {
        displayNum = evalStored - evalDisplay;
    }
    else if (operation == 3) {
        displayNum = evalStored * evalDisplay;
    }
    else if (operation == 4) {
        displayNum = evalStored / evalDisplay;
    }
    
    display.value = displayNum;
    if (operation != 0)
        calculationFinished = true;
    
    operation = 0;
    queuedOperation = 0;
    displayNum = "";
    storedNum = "";
}