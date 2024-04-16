// Function to display the alphabet by using Loop method
function Call_Loop() {
    var Alphabet = ""; // To store the alphabet
    var currentCharCode = "A".charCodeAt(0);
    // Loop through each character from A to Z
    while (currentCharCode <= "Z".charCodeAt(0)) {
        Alphabet += "<br>" + String.fromCharCode(currentCharCode);
        currentCharCode++;
    }
    //To display the alphabet
    document.getElementById("Loop").innerHTML = Alphabet;
}

// Array of insrtumnets
var Insrtuments = ["Harp", "Bongo drums", "Saxephone", "Ukulele", "Piano", "Alimba"];
var Content = ""; // To store the content 
var Y;
//Function to loop through the instruments array
function for_Loop() {
    for (Y = 0; Y < Insrtuments.length; Y++) {
        Content += Insrtuments[Y] + "<br>";
    }
    //To display the list
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Array function
function array_Function() {
    var Names = [];
    Names[0] = "John";
    Names[1] = "Jessica";
    Names[2] = "Stan";
    Names[3] = "Stephanie";
    //Displays a message from the third name from the array
    document.getElementById("Array").innerHTML = "Please welcome our newest members, starting with " +
        Names[2] + "!";
}

//Conctant function
function constant_Function() {
    //Constant object representing cultural  background
    const Cultural_Background = {race:"Mexican", ethnicity:"Hispanic", nationality:"Mexican-American"};
    Cultural_Background.language = "spanish/english";
    Cultural_Background.custom = "Dia de los Muertos";
    document.getElementById("Constant").innerHTML = "Monica is " +
    Cultural_Background.nationality + " and her favorite tradition she celebrates is " +
    Cultural_Background.custom + ".";
}

// Using let anf var keyowrds
var M = 21;
document.write(M);
{
    let M = 7;
    document.write("<br>" + M);
}
document.write("<br>" + M);

//Object representing an actor
let actor = {
    name: "Tom Hanks",
    age: 67,
    nationality: "American",
    famousMovies: ["Forrest Gump", "Cast Away", "Saving Private Ryan"],
    //Method to describe the actor
    description : function() {
        return "This male academy award winner for best actor is " + this.name + ". He is " + this.age + 
        " years old and " + this.nationality + ". His famous movies include: " + this.famousMovies;
    }
};
//Display the actor's description 
let actorParagraph = document.getElementById("actor");
actorParagraph.innerHTML = actor.description();

