var testModule = (function() {
  var me = {};

  me.init = function (){
    console.log('hey there');
    // alert('hey there');
  };

  return me;
}());
// Андрей Алексеев [AA]
// alexeev.andrey.a@gmail.com

$(document).ready(function() {

  document.body && testModule.init();

});
// END doc.ready