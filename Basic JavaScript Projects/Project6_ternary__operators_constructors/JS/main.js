//Tenrary Operator Example//
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//Constructor Function with Keywords Example//
function Vehicle(Make, Model, Year, Color) {
    //Define properties of the Vehicle//
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//Creates instances of Vehicle//
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinot", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;   
}

//Constructor Function for People //
function Person(Occupation, Skill, Personality, Hobby) {
    //Define properties of the Person object using 'this' keyword//
    this.Person_Occupation = Occupation;
    this.Person_Skill = Skill;
    this.Person_Personality = Personality;
    this.Person_Hobby = Hobby;
}
//Creates instances of Person object using 'new' keyword//
var Lisa = new Person("Architect", "Drawing", "Creative", "Painting");
var Kai = new Person("Engineer", "Coding", "Analytical", "Hiking");
var Jonathan = new Person("Chef", "Culinary Arts", "Charismatic", "Photography");
function newFunction () {
    document.getElementById("New_and_This").innerHTML =
    "Jonathan's skill set lies in " + Jonathan.Person_Skill + " -occupation " + Jonathan.Person_Occupation +
    " but his hobby is that he enjoys " + Jonathan.Person_Hobby
}

//Nested function calling another function//
function lineageFunction() {
    // Family members representing a family tree//
    var familyTree = {
        father: { name: "Matthew", age: 45, child: ("Madison") },
        mother: { name: "Brenda", age: 42, child: ("Madison") },
        child: { Madison: { name: "Madison", age: 16} },
        //Define method to retrieve family members names//
        getFatherName: function() { return this.father.name; },
        getMotherName: function() { return this.mother.name; },
        getChildName: function() { return this.child.name; },
    };

    //Displays the names of the family members//
        document.getElementById("Nested_Function").innerHTML = "Father: " + familyTree.getFatherName() +
        ", Mother: " + familyTree.getMotherName() + ", Child: " + familyTree.getChildName();
}