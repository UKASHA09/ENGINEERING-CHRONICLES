    // Show or hide the scroll-to-top button based on scrolling position
  window.addEventListener("scroll", function() {
    var scrollToTopButton = document.getElementById("scroll-to-top");
    if (window.pageYOffset > 200) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
  