window.alert("Hello World!"); //Creating an alert pop-up button
document.write("Hello World!" ); //Printing the text

var A = "This is a string. "; //Assigning a string to a variable
var A = A.fontcolor("red"); //Assigning the color red to the variable A
document.write(A); //Printing the string contained within the variable A

document.write("Amanda said, \"Hello!\" "); //Using the escape character in order to effectively print quotation marks within a string.

document.write("A " + "B " + "C"); //Printing the concatentating strings

var B = " Concatenated " + "String "; //Assigning concatenated strings to a variable
var B = B.fontcolor("green"); //Assigning the color green to the variable B

document.write(B); //Printing the string within the variable B

var Family = "The Arezzinis ", Dad = "Jeremiah ", Mom = "Hermoine ", Daughter = "Penny ", Son = "Zorro "; //Creating multiple variables within one statement
var Dad = Dad.fontcolor("orange"); //Assigning the color orange to the variable Dad
document.write(Dad); //Printing the string contained within the variable Dad

var blues = "I have the blues. "; //Assigning a string to a variable
var blues = blues.fontcolor("blue"); //Assigning the color blue to the variable blues
document.write(blues); //Printing the string  within the variable blue

document.write(3+3 ); //Creating an expression to be simplified

function My_First_Function() { //Defining a function and naming it
    var str = "This text is green!"; //Defining a variable and giving it a string value
    var result = str.fontcolor("green"); //Using the fontcolo methon on str variable
    document.getElementById("Green_Text").innerHTML = result; //Putting the value of result into HTML element with "Green_Text" id
}