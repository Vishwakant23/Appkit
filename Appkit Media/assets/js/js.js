  function changebg(){
    document.getElementById("test").style.background="black";
    document.getElementById("test").style.color = "white";
  }


$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;
  
      trigger.click(function () {
        hamburger_cross();      
      });
  
      function hamburger_cross() {
  
        if (isClosed == true) {          
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {   
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }
    
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });  
  });

 

  var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
  navItems.forEach(function(e, i) {
    e.addEventListener("click", function(e) {
      navItems.forEach(function(e2, i2) {
        e2.classList.remove("mobile-bottom-nav__item--active");
      })
      this.classList.add("mobile-bottom-nav__item--active");
    });
  });


  
// function myFunction() {
//    var element = document.body;
//   element.classList.toggle("dark-mode");
  
// }
// function chBackcolor(color) {
//   document.vishwakant.style.background = color;
// }
 
// function changebackColor() {
//   document.getElementById("QQQQQ").style.backgroundColor = "black";       
// window.setTimeout("yourFunction()",10000);
// }
// function changeColor() {
//   document.getElementById("QQQQQ").style.Color = "white";       
// window.setTimeout("yourFunction()",10000);
// }