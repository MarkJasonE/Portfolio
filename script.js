// window.location.reload(true); //write this code everytime you update. This reloads the page from the server and not the cache

// When refreshed the page scrolls back to top
$(window).on('beforeunload', function() {
   $(window).scrollTop(0);
});


/********** Parallax effect **********/
var ypos, image;
function parallax() {
  ypos = window.pageYOffset; /*returns to your scrpit the number of px users had scrolled in your page*/
  image = document.getElementById('image-container');
  image.style.top = ypos * 0.4 + 'px';
}
window.addEventListener('scroll', parallax);


/********** Smooth scroll efect **********/
$(document).ready(function() {
  var scrollLink = $('.scroll');

  scrollLink.click(function(event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top /*gets the vertical position of scroll bar, then finds the coordiantes of the element */
    }, 1000)
  })
})

/********** Show/Hide menu **********/

var getNav = document.getElementById("nav");
var menuDown = document.getElementById("menuDown");

function openNav() {
  getNav.style.width = "100%";
  if (getNav.style.width === "100%") {
    menuDown.style.display = "none";
  }
}

function closeNav() {
  getNav.style.width = "0%";
  if(getNav.style.width === "0%") {
     menuDown.style.display = "block";
     }
}
