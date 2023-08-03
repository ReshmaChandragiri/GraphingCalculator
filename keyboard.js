
document.addEventListener("DOMContentLoaded", function () {
  var display = document.getElementById("cal-display");
  var buttons = document.getElementsByClassName("btn");
  let currentValue = "";

  display.addEventListener("input", function (event) {
    currentValue = event.target.value; // Update the current value whenever the input changes
  });

  display.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
        // Update the current value when the backspace key is pressed
        currentValue = inputField.value;
    }
  });

  /* display.addEventListener("blur", function () {
    // Ensure the input field value is up to date when it loses focus
    currentValue = inputField.value;
  });

  display.addEventListener("focus", function () {
    // Set the input field value to the current value when it gains focus
    inputField.value = currentValue;
  }); */

  for (let button of buttons) {
    button.addEventListener("click", function () {
      const value = button.innerText;

      if (value == "⌫") {
        backSpace();
      }
      else if (value == "🗙") {
        currentValue = " ";
        display.value = currentValue;
      }
      else if (value == 'a2') {
        var exponent = "\u00B2";
        currentValue = display.value + exponent;
        display.value = currentValue;
      } else if (value == '×') {
        currentValue = display.value + "*"
        display.value = currentValue;

      } else if (value == 'Graph') {

      }

      else {
        currentValue += value;
        display.value = currentValue;
      }
      function backSpace() {
        if (display.value.length > 1) {
          display.value = display.value.substring(0, display.value.length - 1);
          currentValue = display.value;
        } else {
          currentValue = "";
          display.value = "";
        }
      }

      /* function backSpace() {
        display.value="";
        currentValue="";
      } */

    });
  }
});


document.getElementById("cal-display").addEventListener("focus", function () {
  keybordopenNav();
});

function switchKeys() {
  var alphabeticKeys = document.getElementById("alphabeticKeys");
  var numericKeys = document.getElementById("numericKeys");

  if (alphabeticKeys.style.display == "none") {
    alphabeticKeys.style.display = "block";
    numericKeys.style.display = "none";
  } else {
    alphabeticKeys.style.display = "none";
    numericKeys.style.display = "block";
  }
}
function capslockKeys() {
  var capsAlphabeticKeys = document.getElementById("capsAlphabeticKeys");
  var alphabeticKeys = document.getElementById("alphabeticKeys");

  if (capsAlphabeticKeys.style.display == "none") {
    capsAlphabeticKeys.style.display = "block";
    alphabeticKeys.style.display = "none";
  } else {
    capsAlphabeticKeys.style.display = "none";
    alphabeticKeys.style.display = "block";
  }
}
function openNav() {
  document.getElementById("mySidenav").style.width = "417px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("myNav").style.height = "0%";
}

function keybordopenNav() {
  document.getElementById("myNav").style.height = "35%";
}
function KeybordcloseNav() {
  document.getElementById("myNav").style.height = "0%";
}
