var category;
var options = [];

var totalSelections = 0;
var selection;

// value vars
var optionDisplayText = ("#option-text-display");
var totalOptionsDisplayText = $("#total-options-text");
var totalSelectionsDisplayText = $("#total-selections-text");
var categoryDisplayText = $("#category-text");

// code to update values
function addOption(){
    option = prompt("Please enter your desired selection option:");
            options.push(option);
            addAnotherOption = confirm("Would you like to add another option?")
}

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
        addOption();
            do{
                addOption();
            }while(addAnotherOption === true);
    })
});