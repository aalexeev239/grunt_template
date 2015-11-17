var collapse = (function() {

  var speed = 200;
  // .js-collapse
  // .js-collapse-item || opened
  // .js-collapse-toggle
  // .js-collapse-body
  var collapse = {
    init: function(){
      $(document).on('click', '.js-collapse-toggle', onToggleClicked);

      // first init
      $('.js-collapse-item.opened .js-collapse-body').slideDown(0);
    }
  };

  function onToggleClicked(ev) {
    ev.preventDefault();

    var
      $tgl = $(this),
      $item = $tgl.closest('.js-collapse-item'),
      $col = $item.closest('.js-collapse'),
      isMultiple = $col.data('collapse') === 'multiple';

    if (isMultiple) {

      if ($item.hasClass('opened')) {
        $item.find('.js-collapse-body').slideUp(speed, function(){
          $item.removeClass('opened');
        });
      } else {
        $item.find('.js-collapse-body').slideDown(speed, function() {
          $item.addClass('opened');
        });
      }

    } else {

      $col.find('.js-collapse-item.opened .js-collapse-body').slideUp(speed);
      if ($item.hasClass('opened')) {
        $item.removeClass('opened');
      } else {
        $col.find('.js-collapse-item.opened').removeClass('opened');
        $item.find('.js-collapse-body').slideDown(speed, function() {
          $item.addClass('opened');
        });
      }

    }


  }

  return collapse;
}());
