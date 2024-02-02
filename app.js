
// DOM
const ratingNum = $(".rating-num");
const submitBtn = $(".submit-btn");
const ratingSection = $(".rating-card");
const thanksSection = $(".thank-you");
const ratingResult = $(".rating-result");


// App Logic

let ratingClicked = false;

ratingNum.on("click", function() {
    
    // Toggle the "clicked" class on the clicked element
    $(this).toggleClass("clicked");

    // Get the inner HTML of the clicked element.
    var clickedNum = $(this).html();

    // Setting the innerHtml of the span in the thank-you section.
    ratingResult.html(clickedNum);

    // Set ratingClicked flag to true
    ratingClicked = true;

    // Remove the "clicked" class from all other elements
    ratingNum.not(this).removeClass("clicked");

});

submitBtn.on("click", function() {

    if (!ratingClicked) {
        // If no rating has been clicked, do not submit
        return false;
    }
    else {
        // Adding hidden class to the ratingSection.
        ratingSection.addClass("hidden");

        // Removing hidden class from the thanksSection.
        thanksSection.removeClass("hidden");
    }

});
