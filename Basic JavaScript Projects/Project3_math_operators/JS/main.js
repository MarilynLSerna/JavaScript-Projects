//Math function adding the numbers//
function addition_Function() {
    var addition = 4 + 4;
    document.getElementById("Math").innerHTML = "4 + 4 = " + addition;
}

//Math function subtracting the numbers//
function subtraction_Function() {
    var Subtraction = 6 - 3;
    document.getElementById("Sub").innerHTML = "6 - 3 = " + Subtraction;
}

//Math function multiplying the numbers//
function multiplication() {
    var multiply_Math = 7 * 4;
    document.getElementById("Multi").innerHTML = "7 x 4 = " + multiply_Math;
}

//Math function divding the numbers//
function division() {
    var division_Math = 24 / 8;
    document.getElementById("Divide").innerHTML = "24 / 8 = " + division_Math;
}

//Math function modulus, giving the remainder of the numbers divided//
function modulus__Operator() {
    var modulus_Math = 38 % 7;
    document.getElementById("Modulus").innerHTML = "When you divide 38 by 7 you have a remainder of: " + modulus_Math;
}

//Math function negation, turns the variable into a negative number//
function negation_Operator() {
    var n = 30;
    document.getElementById("Negation").innerHTML = -n;
}

//Math function increment, increasing the value of the number//
var X = 11;
X++;
document.write(X+"<br>");

//Math function decrement, decreasing the value of the number//
var D = 7.75;
D--;
document.write(D);

window.alert(Math.random() * 100);