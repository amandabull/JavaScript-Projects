function count_To_Ten() { //defining and naming a function
    var Digit = ""; //creating a variable to state the current number
    var X = 1; //begin counting at 1
    while (X < 11) { //creating while loop to increase digit by 1 until it reaches it 10
        Digit += "<br>" + X; //Creating list of numbers from start to finish
        X++ //increment to the next x value before looping back to start of loop
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //creating a list of instruments and assigning it to a variable
var Content = "";
var Y;
function for_Loop() { //calling all of the items in the instruments list in order
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() { //creating variables with different indexes to be called later
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function() { //defining and naming a funtion
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"}; //creating 3 different constants
    Musical_Instrument.color = "blue"; //not able to change constant
    Musical_Instrument.price = "$900"; //added another constant
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var A = 82; //let variable is local whereas var variable is global
document.write("<br>" + A);
{
    let A = 33;
    document.write("<br>" + A);
}
document.write("<br>" + A + "<br>");

var Answer = myFunction(7, 3); //giving a function arguments in order to return a value
    function myFunction(g, h) {
        return g * h;
    }
document.getElementById("answer").innerHTML = Answer;

let car = { //creating an object car with properties
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

function for_break() { //using break will stop the for loop at i === 3
for (let i = 0; i < 10; i++) {
    if (i===3) {break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("text2").innerHTML = text;
}

function for_continue() { //using continue will continue the loop until completion
for (let j = 0; j < 10; j++) {
    if (j===3) {continue; }
    text3 += "The number is " + j + "<br>";
}
document.getElementById("text4").innerHTML = text3;
}