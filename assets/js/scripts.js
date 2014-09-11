/**
 * CLICK outside to CLOSE -> Function to figure out how the menu can be closed if you click/tap outside the menu area
 * JQUERY must be loaded in the html file -> <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
 */
$(function(){
  $(document).click(function(e){
    var $checkbox = $('#toggle-mobile-menu'),
        $elClicked = $(e.target);
    if(!($elClicked.is($checkbox) || $elClicked.is("label[for='toggle-mobile-menu']") && $checkbox.is(':checked'))) {
      e.stopPropagation();
      $checkbox.prop('checked', false);
    }
  });
});

$(document).ready(function() {
  $("#contactForm").validate();
} 