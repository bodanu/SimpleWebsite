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
var modal = document.getElementById('myModal');

var btn = document.getElementById('two');
      
var span = document.getElementsByClassName('close')[0];
      
$(btn).click(function() {
  $(modal).css("display", "block");
});
      
$(span).click(function() {
  $(modal).fadeOut(1000);
});

window.onclick =   function(event) {
         if (event.target == modal) {
         $(modal).fadeOut(1000);
       }
   }

   var modal = document.getElementById('myModal');

var btn = document.getElementById('three');
      
var span = document.getElementsByClassName('close')[0];
      
$(btn).click(function() {
  $(modal).css("display", "block");
});
      
$(span).click(function() {
  $(modal).fadeOut(1000);
});

window.onclick =   function(event) {
         if (event.target == modal) {
         $(modal).fadeOut(1000);
       }
   }

   var modal = document.getElementById('myModal');

var btn = document.getElementById('four');
      
var span = document.getElementsByClassName('close')[0];
      
$(btn).click(function() {
  $(modal).css("display", "block");
});
      
$(span).click(function() {
  $(modal).fadeOut(1000);
});

window.onclick =   function(event) {
         if (event.target == modal) {
         $(modal).fadeOut(1000);
       }
   }