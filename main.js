document.addEventListener("DOMContentLoaded", function(event) {

    let newFood = function (pName, pCalories) { //food object template
        this.foodName = pName;
        this.foodCalories = parseInt(pCalories);
    }

    let foodList = []; //array
    let totalCaloriesInput = 0;//int

    document.getElementById("submitButton").addEventListener("click", function() { //submit button click event
        let foodName = document.getElementById("foodName").value;
        let foodCalories = document.getElementById("calorieNumber").value;

        if (parseInt(foodCalories) = NaN) { //check if valid input
            alert("Please enter a valid integer for calories input");
        } else if (foodName && foodCalories) {
            let newFoodItem = new newFood(foodName, foodCalories);
            foodList.push(newFoodItem); //adds food item to array
            console.log("New Item Added:", newFoodItem); //updates content of array in console
            console.log(foodCalories + " Calories Will Be Added To Current Total Of " + totalCaloriesInput + " Calories");//shows current total calories in console
            totalCaloriesInput += parseInt(foodCalories); // adds int of foodCalories to current total
            document.getElementById("totalCalories").value = totalCaloriesInput; //pushes total to document
        } else {
            alert("Please enter both food name and calories");
        }
    })

    document.getElementById("resetButton").addEventListener("click", function(){ //fully clearing everything, then reload
        document.getElementById("foodName").value = ""; 
        document.getElementById("calorieNumber").value = "";
        document.getElementById("totalCalories").value = "";
        foodList = [];
        location. reload();
    })


})