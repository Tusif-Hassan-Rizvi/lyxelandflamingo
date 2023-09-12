$('.slick-carousel').slick({
  infinite: true,
  slidesToShow: 8, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  prevArrow: $('.custom-prev-button'), // Use your custom Previous button
  nextArrow: $('.custom-next-button'), // Use your custom Next button
  arrows: true, // Adds arrows to sides of slider
  dots: false, // Adds the dots on the bottom
});
