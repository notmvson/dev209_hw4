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
        let intyFoodCalories = parseInt(foodCalories);

        if (!foodName || !foodCalories) { //check if there are two inputs
            alert("Please enter both food name and calories");
        } else if (isNaN(intyFoodCalories)){ // functionally checks if not int
            alert("Calories must be an integer");
        } else {
            let newFoodItem = new newFood(foodName, foodCalories);
            foodList.push(newFoodItem); //adds food item to array
            console.log("New Item Added:", newFoodItem); //updates content of array in console
            console.log(intyFoodCalories + " Calories Will Be Added To Current Total Of " + totalCaloriesInput + " Calories");//shows current total calories in console
            totalCaloriesInput += intyFoodCalories; // adds int of foodCalories to current total
            document.getElementById("totalCalories").value = totalCaloriesInput; //pushes total to document
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