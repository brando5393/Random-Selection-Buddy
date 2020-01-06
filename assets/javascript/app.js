var category;
var options = ["dog", "cat", "rabbit", "mouse"];
var totalOptions = options.length;
var totalSelections = 0;
var selection;

// value vars
var optionDisplayText = ("#option-text-display");
var totalOptionsDisplayText = $("#total-options-text");
var totalSelectionsDisplayText = $("#total-selections-text");
var categoryDisplayText = $("#category-text");

// code to update values


// document ready
$(document).ready(function () {
    // code to set overall category
    $("#set-category-button").on("click", function () {
        category = prompt("Please enter your choice of category:");
        category = category.toUpperCase();
        categoryDisplayText.html(category);
        console.log("category changed to " + category);
    })

    // code to add options
    $("#add-option-button").on("click", function(){
        var option = prompt("Please enter your desired selection option:");
        options.push(option);
        var addAnotherOption = confirm("Would you like to add another option?")
        if(addAnotherOption === true){
            option = prompt("Please enter your desired selection option:");
            options.push(option);
            addAnotherOption = confirm("Would you like to add another option?")
        }else{
            optionDisplayText.html("Your entry(s) have been added.")
        }
    })

    $("#clear-all-options-button").on("click", function(){
        options.length = 0;
        optionDisplayText.html("Choice pool cleared");
    })

    // code to pick a selection
    $("#make-selection-button").on("click", function(){
        var randomChoice = Math.floor(Math.random() * options.length);
        selection = options[randomChoice];
        optionDisplayText.html(selection);
    })
});