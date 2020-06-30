/**
 *
 * @calculator-HTML
 * @simonbesteiro Simón Fernández Besteiro <simonbesteiro@gmail.com>
 *
 * Created at: 2020-06-30 
 */
//var display = document.getElementsByClassName('display')
//display.innerHTML
var screen = document.getElementById("display");
//pantalla.innerText="TEST";
var inputCalc = screen.innerText;
var num0 = document.getElementById("0");
var num1 = document.getElementById("1");
var num2 = document.getElementById("2");
var num3 = document.getElementById("3");
var num4 = document.getElementById("4");
var num5 = document.getElementById("5");
var num6 = document.getElementById("6");
var num7 = document.getElementById("7");
var num8 = document.getElementById("8");
var num9 = document.getElementById("9");
var ac = document.getElementById("AC");
var reverse = document.getElementById("reverse");
var division = document.getElementById("division");
var multiplication = document.getElementById("multiplication");
var substraction = document.getElementById("substraction");
var add = document.getElementById("add");
var coma = document.getElementById("coma");
var equal = document.getElementById("equal");

ac.addEventListener("click",function (){
    screen.innerText="";
})
reverse.addEventListener("click",function (){
    //screen.innerText+="0"; Quitar el ultimo valor introducido
})
num0.addEventListener("click",function (){
    screen.innerText+="0";
})
num1.addEventListener("click",function (){
    screen.innerText+="1";
})
num2.addEventListener("click",function (){
    screen.innerText+="2";
})
num3.addEventListener("click",function (){
    screen.innerText+="3";
})
num4.addEventListener("click",function (){
    screen.innerText+="4";
})
num5.addEventListener("click",function (){
    screen.innerText+="5";
})
num6.addEventListener("click",function (){
    screen.innerText+="6";
})
num7.addEventListener("click",function (){
    screen.innerText+="7";
})
num8.addEventListener("click",function (){
    screen.innerText+="8";
})
num9.addEventListener("click",function (){
    screen.innerText+="9";
})
division.addEventListener("click",function (){
    screen.innerText+="÷";
})
multiplication.addEventListener("click",function (){
    screen.innerText+="X";
})
substraction.addEventListener("click",function (){
    screen.innerText+="-";
})
add.addEventListener("click",function (){
    if (!checkOperators(inputCalc))screen.innerText+="+";      
    
})
coma.addEventListener("click",function (){
    screen.innerText+=",";
})
equal.addEventListener("click",function (){
//    screen.innerText+=""; Hacr que saque el resultado
inputCalc = screen.innerText;
console.log(inputCalc);
for (var i = 0; i < inputCalc.length; i++) {
switch (inputCalc[i]) {
    case "+":
        addFunction(cutString(inputCalc,i));
        break;
    case "-":
        substractionFunction(cutString(inputCalc,i));
        break;
    case "÷":
        divisionFunction(cutString(inputCalc,i));
        break;
    case "X":
        multiplicationFunction(cutString(inputCalc,i));
        break;
    default:
        break;
}
}
})
function addFunction(sub) {
    var result=0;
    for (var j = 0; j < sub.length; j++) {
        result+=parseInt(sub[j]);
    }   
    screen.innerText=result;
}
function substractionFunction(sub) {
    var result=0;
    for (var j = 0; j < sub.length; j++) {
        if (j===0) result += parseInt(sub[j]);
        else result-=parseInt(sub[j]);
    }   
    screen.innerText=result;
}
function divisionFunction(sub) {
    var result=0;
    for (var j = 0; j < sub.length; j++) {
        if (j===0) result += parseInt(sub[j]);
        else result/=parseInt(sub[j]);
    }   
    screen.innerText=result;
}
function multiplicationFunction(sub) {
    var result=0;
    for (var j = 0; j < sub.length; j++) {
        if (j===0) result += parseInt(sub[j]);
        else result*=parseInt(sub[j]);
    }   
    screen.innerText=result;
}
function cutString (inputCalc,i) {
    var sub=[];
    sub.push(inputCalc.substring(0,i));
    sub.push(inputCalc.substring(i+1,inputCalc.length));
    return sub;
}
function checkOperators(inputCalc) {
    if (inputCalc[inputCalc.length-1] === "+" | inputCalc[inputCalc.length]=== "-" | inputCalc[inputCalc.length]=== "÷" | inputCalc[inputCalc.length]=== "X" ) return true
    else return false;
}

/*
FALLOS
-posibilidad de meter varios operadores a la vez
-cuando
*/
