$(function(){

    $(".menu").hide();
  
    $(".navButton").click( function(){
      $(".menu").slideToggle();
    });
  
  });
  // slider option

$(document).ready(function(){
   $('.slider').bxSlider({
      mode: 'fade',
      speed: 1000,
      pager: true,
      captions: true
   });
});