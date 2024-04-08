//Type of operator showing the data type variable//
var a = 10;
document.write(typeof a+"<br>");

//Type coercion converting two variables//
document.write("20" + 24 + "<br>");//added in <br> to create a line break//

//Not a Number value, showing a true statement//
function my_Function() {
    document.getElementById("Check").innerHTML = isNaN('Numeral');
}

//Not a Number value, showing a false statement//
function check_Function() {
    document.getElementById("Run").innerHTML = isNaN('00.8');
}

//Large number, displaying infinity//
function infinity_Function() {
    let x = 1.7976931348623157E308;
    let y = x * 1.001;
    document.getElementById("Infinity").innerHTML = y;
}

//Large negative number, displaying -infinity//
function negative_Function() {
    let n = -1.7976931348623157E308
    let i = n * 1.001;
    document.getElementById("-Infinity").innerHTML = i;
}

//Boolean logic showing a greater than condition, true statement//
document.write(12 > 7);
document.write("<br>") //This is to add a line break//

//Boolean logic showing a greater than or equal condition, false statement//
document.write(34 <= 21);
document.write("<br>") //This is to add a line break//

//Console log math equation//
console.log(5 + 3);

//Console log function using Boolean logic, showing a false statement//
console.log(40 < 32);

//Double equal signs showing a true statement//
document.write(6 == 6);
document.write("<br>") //This is to add a line break//

//Double equal signs showing a false statement//
document.write(12 == 7);
document.write("<br>") //This is to add a line break//

//Triple equal signs showing a true statement with matching data type & value//
j = 21;
l = 21;
document.write(j === l);
document.write("<br>") //This is to add a line break//

//Showing a false statement with different data type & value//
Mineral = "quartz";
Crystal = "amethyst";
document.write(Mineral === Crystal);
document.write("<br>") //This is to add a line break//

//Showing a false statement with a different data type but same value//
string = "56";
number = 56;
document.write(string === number);
document.write("<br>") //This is to add a line break//

//Showing a false statement with the same data type but different value//
sports1 = "Baseball";
sports2 = "Football";
document.write(sports1 === sports2);
document.write("<br>") //This is to add a line break//

//AND operator showing a true statement//
document.write(4 < 12 && 21 > 7);
document.write("<br>") //This is to add a line break//

//AND operator showing a false statement//
document.write(12 > 14 && 16 > 5);
document.write("<br>") //This is to add a line break//

//OR operator showing a true statement//
document.write(6 < 4 || 20 < 32);
document.write("<br>") //This is to add a line break//

//OR operator showing a false statement//
document.write(4 > 12 || 12 > 21);
document.write("<br>") //This is to add a line break//

//Not function dshowing a true statement//
function not_Function() {
    document.getElementById("Not").innerHTML = !(7 > 21);
}

//Not function dshowing a false statement//
function not_Function2() {
    document.getElementById("Not2").innerHTML = !(21 > 14);
}