document.addEventListener("DOMContentLoaded",function(){
    var display = document.getElementById("cal-display");
    var buttons = document.getElementsByClassName("btn");
    let currentValue = "";
    for(let button of buttons){
        button.addEventListener("click", function(){
            const value = button.innerText;
            if(value=='⌫'){
                backSpace();
            }
            else{
            currentValue +=value;
            display.value = currentValue;
            }
            function backSpace() {
                if (display.value.length > 1) {
                  display.value = display.value.substring(0, display.value.length - 1);
                  currentValue = display.value;
                } else {
                  currentValue = "";
                  display.value = 0;
                }
              }
        });
    }
});