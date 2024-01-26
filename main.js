document.addEventListener("DOMContentLoaded", function(event) {

    let newFood = function (pName, pCalories) { //food object template
        this.foodName = pName;
        this.foodCalories = pCalories;
    }

    let foodList = []; //array
    let totalCaloriesInput = document.getElementById("totalCalories");

    document.getElementById("submitButton").addEventListener("click", function() { //submit button click event
        let foodName = document.getElementById("foodName").value;
        let foodCalories = document.getElementById("calorieNumber").value;

        if (foodName && foodCalories) {
            let newFoodItem = new newFood(foodName, foodCalories);
            foodList.push(newFoodItem); //adds food item to array

            console.log("New Item Added:", newFoodItem); //updates content of array in console
        } else {
            alert("Please enter both food name and calories");
        }
    })




})