document.write(typeof "Word"); //Output will be "string"

document.write(typeof 3); //Output will be "number"

document.write("10" + 5); //Output will be "105"

function my_Function() { //Defining a function and giving it a name
    document.getElementById("Test").innerHTML = 0/0; //Calling ID "Test" to get output of NaN
}

function my_Function2() { //Defining a function and giving it a name
    document.getElementById("Test2").innerHTML = isNaN('This is a string'); //Calling ID "Test" to get output of true
}
function my_Function3() { //Defining a function and giving it a name
    document.getElementById("Test3").innerHTML = isNaN('007'); //Calling ID "Test" to get output of false
}

document.write(2E310); //Output will be "infinity"

document.write(-2E310); //Output will be "negative infinity"

document.write(10 > 2); //Output will be "true"

document.write(10 < 2); //Output will be "false

console.log(2 + 2); //The console will display answer of 4

console.log(2 > 2); //The console will display answer of false

document.write(10 == 10); //Output will be "true"

document.write(3 == 10); //Output will be "false"

X = 10; //Assign variable a value
Y = 10; //Assign variable a value
document.write(X === Y); //Output will be "true"

A = "carrot"; //Assign variable a value
B = 10; //Assign variable a value
document.write(A === B); //Output will be "false"

C = "carrot"; //Assign variable a value
D = "carrot"; //Assign variable a value
document.write(C === D); //Output will be "true

E = "82"; //Assign variable a value
F = 82; //Assign variable a value
document.write(E === F); //Output will be "false""

document.write(5 > 2 && 10 > 4); //Output will be "true"

document.write(5 > 10 && 10 > 4); //Output will be "false"

document.write(5 > 10 || 10 > 4); //Output will be "true"

document.write(5 > 10 || 10 > 20); //Output will be "false"

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10); //Output will be "false"
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(5 > 10); //Output will be "true"
}