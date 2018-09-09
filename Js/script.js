// var modal = document.getElementById("myModal");
// var btn = document.getElementById("two");
// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   modal.style.display = 'block';
// }
// span.onclick = function() {
//   modal.style.display= "none";
// }

// window.onclick =  function(event) {
//         if (event.target == modal){
//         modal.style.display = 'none';
//       }
//   }
var modal3 = document.getElementById('work');

var btn = document.getElementById('two');
      
var span = document.getElementsByClassName('close')[0];
      
$(btn).click(function() {
  $(modal3).fadeIn(500);
  $("body").addClass("modalopen");
});
      
$("#closework").click(function() {
  $("#work").fadeOut(500);
  $("body").removeClass("modalopen")
});

// window.onclick =   function(event) {
//          if (event.target == modal1) {
//          $(modal1).fadeOut(1000);
//        }
//    }
 
var modal1 = document.getElementById('myModal');
var btn = document.getElementById('three');
      
var span = document.getElementsByClassName('close')[0];
      
$(btn).click(function() {
  $(modal1).fadeIn(500);
  $("body").addClass("modalopen");
});
      
$(span).click(function() {
  $(modal1).fadeOut(500);
  $("body").removeClass("modalopen")
});

// window.onclick =   function(event) {
//   var modal = document.getElementById('myModal');
//          if (event.target == modal) {
//          $(modal).fadeOut(500);
//        }
//    }

var modal2 = document.getElementById('myModal1'); 
var btn = document.getElementById('four');
      
var span = document.getElementsByClassName('close')[0];
      
$(btn).click(function() {
  $("#myModal1").css("display", "block");
  $("body").addClass("modalopen");
});
 
$("#close").click(function() {
  $("#myModal1").fadeOut(1000);
  $("body").removeClass("modalopen")
});

var myModalpage = document.getElementById('myModalpage');

$("#myTrigger").on("click",function(e) {
  e.preventDefault();
  $('#myModalpage').fadeIn(500);
  $("body").addClass("modalopen");
  $("#myModa")
  .css('height', '80%')
  .css('width', '80%')
  .css('margin', 'auto')
  .html('<object width="100%" height="100%" type="text/html" data="https://bodanu.github.io/responsive/" ></object>')
 

});

var myModalpage2 = document.getElementById('myModalpage2')

$("#myTrigger2").on("click",function(e) {
  e.preventDefault();
  $('#myModalpage2').fadeIn(500);
  $("body").addClass("modalopen");
  $("#myModa2")
  .css('height', '80%')
  .css('width', '80%')
  .css('margin', 'auto')
  .html('<object width="100%" height="100%" type="text/html" data="https://bodanu.github.io" ></object>')
 

});



window.onclick =   function(event) {
  
         if (event.target == modal1) {
         $(modal1).fadeOut(1000);
         $("body").removeClass("modalopen")
       }
        if (event.target == modal2) {
          $(modal2).fadeOut(500)
          $("body").removeClass("modalopen")
        }
        if (event.target == modal3) {
          $(modal3).fadeOut(500)
          $("body").removeClass("modalopen")
        }
        if (event.target == myModalpage) {
          $(myModalpage).fadeOut(500)
          $("body").removeClass("modalopen")
        }
        if (event.target == myModalpage2) {
          $(myModalpage2).fadeOut(500)
          $("body").removeClass("modalopen")
        }
   }

   /* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myNav");
  if (x.className === "top-nav") {
      x.className += " responsive";
  } else {
      x.className = "top-nav";
  }
}


