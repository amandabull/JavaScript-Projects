function My_First_Function() { //Defining a function and naming it
    var str = "This text is green!"; //Defining a variable and giving it a string value
    var result = str.fontcolor("green"); //Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result; //Putting the value of result into HTML element with "Green_Text" id
}

function myFunction() { //Defining a function and naming it
    var sentence = "I am learning"; //Defining a variable and giving it a string value
    sentence+= " a lot from this book!"; //Concatening another string to the variable sentence
    document.getElementById("Concatenate").innerHTML = sentence; //Putting the value of result into HTML element with "Concatenate" id
}