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
var modal1 = document.getElementById('myModal');

var btn = document.getElementById('two');
      
var span = document.getElementsByClassName('close')[0];
      
$(btn).click(function() {
  $(modal1).fadeIn(500);
});
      
$(span).click(function() {
  $(modal1).fadeOut(500);
});

// window.onclick =   function(event) {
//          if (event.target == modal1) {
//          $(modal1).fadeOut(1000);
//        }
//    }
 

var btn = document.getElementById('three');
      
var span = document.getElementsByClassName('close')[0];
      
$(btn).click(function() {
  $(modal1).fadeIn(500);
});
      
$(span).click(function() {
  $(modal1).fadeOut(500);
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
});
 
$("#close").click(function() {
  $("#myModal1").fadeOut(1000);
});

window.onclick =   function(event) {
  
         if (event.target == modal1) {
         $(modal1).fadeOut(1000);
       }
        if (event.target == modal2) {
          $(modal2).fadeOut(500)
        }
   }