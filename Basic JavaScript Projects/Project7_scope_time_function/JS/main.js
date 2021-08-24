/*---------IF, ELSE-IF, AND ELSE FUNCTIONS-----------*/

if (1 < 2) { //Creating an if function
    document.write("The left number is smaller than the number on the right.<br>")
}

function Age_Function() { //Defining and naming a function
    Age = document.getElementById("Age").value; //Assigning value to variable Age based on user input
    if (Age >= 18) { //Creating an if-else function
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

/*-----------------------------------------------------------------------*/

/*---------PREVIOUS CHALLENGES-----------*/


var X = 10 //Creating a global variable and assigning it a value
function Add_numbers_1() { //Defining and naming a function
    document.write(20 + X + "<br>"); //Calling the global variable and outputting the result
}
function Add_numbers_2() { //Defining and naming a function
    document.write(X + 100 + "<br>"); //Calling the global variable and outputting the result
}
Add_numbers_1(); //Calling the function
Add_numbers_2(); //Calling the function

function Add_numbers_3() { //Defining and naming a function
    var Z = 10; //Creating a local variable and assigning it a value
    document.write(Z + 100 + "<br>"); //Calling the local variable and outputting the result
}

/*----------MADE INTO A COMMENT SO OTHER FUNCTIONS WOULD WORK------------
function Add_numbers_4() { //Defining and naming a function
    document.write(Z + 100); //Unable to call the variable
}

Add_numbers_4(); //Calling the function

-----------------------------------------------------------------------*/

Add_numbers_3(); //Calling the function


function Add_numbers_5() { //Defining and naming a function
    var A = 10; //Creating a local variable and assigning it a value
    console.log(15 + A); //using console to check answer/error
}

function Add_numbers_6() { //Defining and naming a function
    console.log(A + 100); //using console to check answer/error
}
Add_numbers_5(); //Calling the function
Add_numbers_6(); //Calling the function

function get_Date() {
    if (new Date().getHours() < 23) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

