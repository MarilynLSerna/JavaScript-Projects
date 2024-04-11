//Function that uses the slice method//
function slice_Method() {
    var Sentence = "The seaturtle ate the jellyfish.";
    var part = Sentence.slice(4,18); //Etracts characters from index 4 to 17//
    document.getElementById("Slice").innerHTML = part;
}

//Function that uses the concat method//
function concat_Sentence() {
    //Defines the parts of the sentence
    var sen_1 = "Yesterday's rain";
    var sen_2 = " left behind";
    var sen_3 = " a glistenong trail";
    var sen_4 = " of hope";
    var sen_5 = " in the morning sun";
    var full_sentence = sen_1.concat(sen_2, sen_3, sen_4, sen_5);
    document.getElementById("Concat").innerHTML = full_sentence;
}

//Functions that uses the toUpperCase method//
function  to_Upper() {
    //Defines the text//
    var text = " i am groot!"
    //Changes the text to uppercase
    var upper = text.toUpperCase();
    document.getElementById("UpperCase").innerHTML = upper;
}

//Function that uses the search method//
function search_Method() {
    //Defines the string to search within//
    var string = "I like to drink coffee.";
    //Searches for the term "coffee"//
    var searchTerm = string.search("coffee");
    document.getElementById("Search").innerHTML = searchTerm;
}

//Function that uses toString method//
function string_Method() {
    var N =76;
    document.getElementById("Number_string").innerHTML = N.toString();
}

//Function that uses the toPrecision method//
function precision_Method() {
    var num = 567.54682;
    document.getElementById("Precision").innerHTML = num.toPrecision(13);
}

//Function that uses the toFixed method//
function fixed_Method() {
    var N = 7.65;
    //Changes the number to a string with fixed number of decimal//
    var fixed = N.toFixed();
    document.getElementById("to_Fixed").innerHTML = fixed;
}

//Function that uses the valueOf method//
function value_Method() {
    var Y = "Random";
    //Get the primitive value of the string//
    var result = Y.valueOf();
    document.getElementById("Value").innerHTML = result;
}