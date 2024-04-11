//Functoin to get the current hour using the Date method//
function get_Date() {
    if (new Date().getDate() < 2024-04-08) {
        document.getElementById("Day").innerHTML = "It is past April 8th 2024";
    }
}

//Function to check eligibilty for discount//
function checkDiscountEligibilty() {
    purchaseAmount = document.getElementById("purchaseAmount").value;
    //If statement purchase amount is greater than or equal to 100//
    if (purchaseAmount >= 100 ) {
        //Display message if user is eligible//
        discountMessage = "Congratulations! You are eligible for a discount."
    }
    else {
        //Display message if user is not eligible//
        discountMessage = "Sorry, you are not eligible for a discount."
    }
    document.getElementById("discount").innerHTML = discountMessage;
}

//Function to determine the alarm message based on the hour//
function sleep_Function() {
    //Get the current hour//
    var Sleep = new Date().getHours();
    var Alarm;
    if (Sleep < 6) {
        //Display message to get up if the condition is met//
        Alarm = "It's time to get up!";
    }
    else if (Sleep >= 6) {
        //Display message if the user is late and needs to get up//
        Alarm = "You're late and need to get up!"
    }
    else {
        //Display messgae if there's still time to sleep and go back to sleep//
        Alarm = "You still have sometime to sleep and go back to bed."
    }
    document.getElementById("sleep_Snooze").innerHTML = Alarm;
}

//Else if statement using time of day function with Date method Example//
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}