$('#slide-1').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('#slide-2').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:6
        },
        600:{
            items:6
        },
        1000:{
            items:6
        }
    }
});
$('#slide-3').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:6
        },
        600:{
            items:6
        },
        1000:{
            items:6
        }
    }
});
$('#slide-4').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:6
        },
        600:{
            items:6
        },
        2000:{
            items:6
        }
    }
});

// chi tiết sản phẩm
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active1", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active1";
}
$(document).ready(function(){
    $(".nav-link").click(function(){
      $("#dropdown_full").hide();
    });
    $("#btn1").click(function(){
      $("#btn1").addClass('action');
      $("#btn2").removeClass('action');
    });
    $("#btn2").click(function(){
      $("#btn2").addClass('action');
      $("#btn1").removeClass('action');
    });
    $("#btn3").click(function(){
      $("#btn3").addClass('action');
      $("#btn4").removeClass('action');
    });
    $("#btn4").click(function(){
      $("#btn4").addClass('action');
      $("#btn3").removeClass('action');
    });
    $("#btn5").click(function(){
      $("#btn5").addClass('action');
      $("#btn6").removeClass('action');
    });
    $("#btn6").click(function(){
      $("#btn6").addClass('action');
      $("#btn5").removeClass('action');
    });
    $("#btn7").click(function(){
      $("#btn7").addClass('action');
      $("#btn8").removeClass('action');
      $("#btn9").removeClass('action');
    });
    $("#btn8").click(function(){
      $("#btn8").addClass('action');
      $("#btn7").removeClass('action');
      $("#btn9").removeClass('action');
    });
    $("#btn9").click(function(){
      $("#btn9").addClass('action');
      $("#btn7").removeClass('action');
      $("#btn8").removeClass('action');
    });
    $("#btn10").click(function(){
      $("#btn10").addClass('action');
      $("#btn11").removeClass('action');
      $("#btn12").removeClass('action');
    });
    $("#btn11").click(function(){
      $("#btn11").addClass('action');
      $("#btn12").removeClass('action');
      $("#btn10").removeClass('action');
    });
    $("#btn12").click(function(){
      $("#btn12").addClass('action');
      $("#btn11").removeClass('action');
      $("#btn10").removeClass('action');
    });
  });