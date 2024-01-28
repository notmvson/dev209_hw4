document.addEventListener("DOMContentLoaded", function(event) {

    let newFood = function (pName, pCalories) { //food object template
        this.foodName = pName;
        this.foodCalories = pCalories;
    }

    let foodList = []; //array
    let totalCaloriesInput = parseInt(document.getElementById("totalCalories"));

    document.getElementById("submitButton").addEventListener("click", function() { //submit button click event
        let foodName = document.getElementById("foodName").value;
        let foodCalories = document.getElementById("calorieNumber").value;

        if (foodName && foodCalories) {
            let newFoodItem = new newFood(foodName, foodCalories);
            foodList.push(newFoodItem); //adds food item to array

            console.log("New Item Added:", newFoodItem); //updates content of array in console
            totalCaloriesInput += parseInt(foodCalories);
            document.getElementById("totalCalories") = totalCaloriesInput;
        } else {
            alert("Please enter both food name and calories");
        }
    })

    document.getElementById("resetButton").addEventListener("click", function(){
        document.getElementById("foodName").value = "";
        document.getElementById("calorieNumber").value = "";
        document.getElementById("totalCalories").value = "";
        foodList = [];
        location. reload();
    })


})