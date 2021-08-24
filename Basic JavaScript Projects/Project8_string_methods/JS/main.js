function full_Sentence() { //Defining and naming a function
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //Concatenate all of the previous variables created
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //Defining and naming a function
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33); //Slicing out the word "Johhny" from the entire sentence
    document.getElementById("Slice").innerHTML = Section;
}

function UpperCase() { //Defining and naming a function
    var str = "the tech academy";
    var string = str.toUpperCase(); //Making the entire string uppercase letters
    document.write(string);
}

UpperCase();

let str = "The Tech Academy!"; //Create a string
answer = str.search("Tech") //Returns 4
document.write("<br>" + answer) 

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML= X.toString(); //conver the number into a string
}

function precision_Method() { 
    var Y = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = Y.toPrecision(10); // round the number such that there are 10 place values
}

var num = 5.56789;
var n = num.toFixed(2); //round the number such that index 2 is the final place value
document.write("<br>" + n)

let str2 = "Hello World!";
answer2 = str2.valueOf()   // Returns "Hello World!"
document.write("<br>" + answer2)
