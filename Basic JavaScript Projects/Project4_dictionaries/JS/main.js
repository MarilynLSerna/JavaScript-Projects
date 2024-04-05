//Dictionary function with the delete operator to remove a vale from my dictionary//
function my_Dictionary() {
    var Fruit = {
        Type: "Apple",
        Color: "Red",
        Shape: "Round",
        Taste: "Sweet"
    };
    delete Fruit.Taste;
    document.getElementById("Dictionary").innerHTML = Fruit.Taste;
}

//Dictionary with two KVPs that have identical keys, displaying my second value//
function my_Keys() {
    var Car = {
        Manufacture: "Honda",
        Manufacture: "Toyota"
    };
    document.getElementById("Dictionary_2").innerHTML = Car.Manufacture;
}
