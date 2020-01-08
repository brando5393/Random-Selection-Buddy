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
});