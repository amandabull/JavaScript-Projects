function my_Dictionary() { //Defining a function and naming it
    var Animal = {      //Defining a variable Animal and giving it properties and behaviors
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //Calling the key "Sound" for the variable Animal 
}