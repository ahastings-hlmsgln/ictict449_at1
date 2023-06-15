// JavaScript code for navigating the slideshow

let slideIndex = 1; // Initialize the slide index to 1
showSlides(slideIndex); // Display the intial slide

// Next/previous slide navigation controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function for displaying the slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} // Resets the slide index if it goes beyond the slide count
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { 
    dots[i].className = dots[i].className.replace(" active", ""); // Remove active class from all dots
  }
  slides[slideIndex-1].style.display = "block"; // Display the current slide and set the correspdoing
  dots[slideIndex-1].className += " active";  // dot to active
}