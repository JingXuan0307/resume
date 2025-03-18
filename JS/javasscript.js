$(document).ready(function(){
  $(".name").fadeIn(1000).css("display","flex");
  $("#headshot").delay(2000).fadeIn(5000);
  $("#left .experince h3").delay(5000).animate({"left":"0px","opacity":"1"},1000);
  $("#left .experince li").delay(8000).slideDown();
  $("#right h3").delay(9000).animate({"left":"-10px","opacity":"1"},1000);
  $("#right .introduce").delay(12000).slideDown();
  $("#right ul").delay(13000).animate({"opacity":"1"},1000);
});

