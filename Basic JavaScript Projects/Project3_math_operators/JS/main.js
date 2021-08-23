function addition_Function() { //Defining a function and naming it
    var addition = 2 + 2; //Defining a variable and giving it an expression to simplify
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition; //Creating a string to reflect the results of the element ID "Math"
}

function subtraction_Function() { //Defining a function and naming it
    var subtraction = 5 - 2; //Defining a variable and giving it an expression to simplify
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction; //Creating a string to reflect the results of the element ID "Math2"
}

function multiplication_Function() { //Defining a function and naming it
    var multiplication = 6 * 8; //Defining a variable and giving it an expression to simplify
    document.getElementById("Math3").innerHTML = "6 * 8 = " + multiplication; //Creating a string to reflect the results of the element ID "Math3"
}

function division_Function() { //Defining a function and naming it
    var division = 48 / 6; //Defining a variable and giving it an expression to simplify
    document.getElementById("Math4").innerHTML = "48/6 = " + division; //Creating a string to reflect the results of the element ID "Math4"
}

function more_Math() { //Defining a function and naming it
    var simple_Math = (1 + 2) * 10 / 2 -5; //Defining a variable and giving it an expression to simplify
    document.getElementById("Math5").innerHTML = "(1 + 2) * 10 / 2 - 5 = " + simple_Math; //Creating a string to reflect the results of the element ID "Math5"
}

function modulus_Operator() { //Defining a function and naming it
    var simple_Math2 = 25 % 6; //Defining a variable and giving it an expression to simplify
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math2; //Creating a string to reflect the results of the element ID "Math6"
}

function negation_Operator() { //Defining a function and naming it
    var x = 10 //Defining a variable and giving it an expression to simplify
    document.getElementById("Math7").innerHTML = -x; //Creating a string to reflect the results of the element ID "Math7"
}

var y = 5;
y++;
document.write("If y = 5 and we increment it, we would have: " + y + " and ");

var z = 5.25
z--;
document.write("if z = 5.25 and we decrement it, we would have: " + z + ".");

window.alert(Math.random());
window.alert(Math.random()*100);