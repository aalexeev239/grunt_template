// Андрей Алексеев [AA]
// alexeev.andrey.a@gmail.com

$(document).ready(function() {
  
  // test jQuery
  $('.col-xs-4').eq(1).find('p')
  .hide()
  .closest('.col-xs-4').on('click',function(){
  // $('.col-xs-4').eq(1).click(function(){
    $(this).find('p').slideToggle(400);
  });
});