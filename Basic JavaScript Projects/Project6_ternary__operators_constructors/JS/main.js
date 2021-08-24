function Ride_Function() { //Defining and naming a function
    var Height, Can_ride; //Creating 2 new variables
    Height = document.getElementById("Height").value; //Assigning value input by user for variable height
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //Based on user input for height, determine if tall enough to ride
    document.getElementById("Ride").innerHTML = Can_ride + " to ride." //Outputting result based on previous ternary operation
}

function Vote_Function() { //Defining and naming a function
    var Age, Can_vote; //Creating 2 new variables
    Age = document.getElementById("Age").value; //Assigning value input by user for variable age
    Can_vote = (Age > 17) ? "You are old enough":"You are not old enough"; //Based on user input for age, determine if eligible to vote
    document.getElementById("Ride").innerHTML = Can_vote + " to vote." //Outputting result based on previous ternary operation
}

function Vehicle(Make, Model, Year, Color) { //Defining and naming a Class function
    this.Vehicle_Make = Make; //assigning a property to the Vehicle class
    this.Vehicle_Model = Model; //assigning a property to the Vehicle class
    this.Vehicle_Year = Year; //assigning a property to the Vehicle class
    this.Vehicle_Color = Color; //assigning a property to the Vehicle class
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //creating a new instance of the Vehicle class
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //creating a new instance of the Vehicle class
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //creating a new instance of the Vehicle class
function myFunction() { //Defining and naming a function
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik dirves a " + Erik.Vehicle_Color + "-colored " +  Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

/*function New_and_This(New, This) { //Defining and naming a Class using reserved words
    this.New = New; //assigning reserved-worded variables
    this.This = This; //assigning reserved-worded variables
}

var New = new New_and_This("new", "this"); //creating a new instance of the New_and_This class
var This = new New_and_This("new2", "this2"); //creating a new instance of the Vehicle class

function myFunction() { //Defining and naming a function
    document.getElementById("New_and_This").innerHTML = new + this*/

function count_Function() { //Creating a nested function
    document.getElementById("Counting").innerHTML = Count()
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

