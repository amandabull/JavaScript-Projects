function Color_Function() { //Defining and nameing a function
    var Color_Output; //Declaring a variable
    var Colors = document.getElementById("Color_Input").value; //Declaring a variable and assigning it a value
    var Color_String = " is a great color!"; //Declaring a variable and assigning it a value
    switch(Colors) { //Creating Switch-Case statements
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default: //Used if none of the above options are chosen
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output; 
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";011
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

//Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);