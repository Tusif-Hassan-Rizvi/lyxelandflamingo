$('.slick-carousel').slick({
  infinite: true,
  slidesToShow: 8, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  prevArrow: $('.custom-prev-button'), // Use your custom Previous button
  nextArrow: $('.custom-next-button'), // Use your custom Next button
  arrows: true, // Adds arrows to sides of slider
  dots: false, // Adds the dots on the bottom
});

// Function to update the window dimensions
function updateWindowDimensions() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  // Display the updated width and height
  console.log("Window Width: " + windowWidth);
  console.log("Window Height: " + windowHeight);

  // You can also perform additional actions based on the new dimensions here
}

// Add an event listener for the 'resize' event
window.addEventListener('resize', updateWindowDimensions);

// Call the function once to get the initial dimensions
updateWindowDimensions();
