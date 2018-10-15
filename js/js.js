"use strict"

$(document).ready(function(){

 $('.nav-item');

// on écoute le click

$('.nav-item').click(function(){
  console.log(this);
  $(this).addClass('active');
  $('.nav-item').removeClass('active');
});

});
