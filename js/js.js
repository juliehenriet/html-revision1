"use strict"

$(document).ready(function(){

 $('.nav-item');

// on écoute le click

$('.nav-item').click(function(event){
  console.log(event);
  $('.nav-item').removeClass('active');
  $(this).addClass('active');

});

//on ajoute le texte

var texte = $('.texte').text().trim();
console.log(texte);

//parcourir les lettres

for(let i=0; i <texte.length; i++){
console.log(texte[i]);

setTimeout(function(){
console.log(texte[i]);
$('.texte').append(texte[i]);
},250*i);

};

});
