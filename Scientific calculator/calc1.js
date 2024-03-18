
 
let screen = document.getElementById("calc");

function display(num){
    screen.value += num;
    console.log(screen);
}
function calculate(){ 
try {
    screen.value = eval(screen.value);
  }
  catch(err) {
    alert("error in the output")
  }
}
function Clear(){
  screen.value = "";

}
function  dele(){
    screen.value = screen.value.slice(0,-1);
}
function  mysin(){
    screen.value = Math.sin(screen.value);
}
function  mycos(){
    screen.value = Math.cos(screen.value);
}
function  mytan(){
    screen.value = Math.tan(screen.value);
}
function  mylog(){
    screen.value = Math.log(screen.value);
}

function  square(){
    screen.value = Math.sqrt(screen.value);
}
function  mydisplay(){
    screen.value = Math.pow(screen.value,2);
}


