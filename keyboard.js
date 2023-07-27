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
            else if(value=='a2'){
              if(display.value=='x'||display.value=='y'){
              currentValue=display.value+'2';
              display.value=currentValue;
             }
            else{
              currentValue=display.value*display.value;
              display.value=currentValue;
            }
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
document.getElementById("cal-display").addEventListener('focus',function(){
  keybordopenNav();
})
function openNav() {
  document.getElementById("mySidenav").style.width = "415px";
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