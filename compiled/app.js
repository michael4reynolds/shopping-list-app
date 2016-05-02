'use strict';

$(document).ready(function () {
  $('#newitem').on('keydown', function (e) {
    if (e.keyCode === 13) {
      var item = $(this).val();
      $('.needed ul').append('\n        <li class="itemrow">\n          <i class="fa fa-circle-o" aria-hidden="true"></i>\n          <input type="text" name="item_b" value="' + item + '" class="item">\n        </li>');
      e.preventDefault();
      $(this).val('');
    }
  });

  $('.needed').on('click', '.fa', function () {
    $(this).toggleClass('checked');
    $(this).toggleClass('fa-circle-o');
    $(this).toggleClass('fa-check-circle-o');
    $(this).next().toggleClass('checked');
  });

  $('.purchased').on('click', '.fa', function () {
    var item = $(this).next().val();
    $('.needed ul').append('\n        <li class="itemrow">\n          <i class="fa fa-circle-o" aria-hidden="true"></i>\n          <input type="text" name="item_b" value="' + item + '" class="item">\n        </li>');
  });

  $('input.add').on('click', function () {
    $('.item.checked').each(function () {
      var html = '\n        <li class=\'itemrow\'>\n          <i class="fa fa-history" aria-hidden="true"></i>\n          <input type=\'text\' value=\'' + $(this).val() + '\' class=\'item\' readonly>\n        </li>';
      $('.purchased ul').prepend(html);
      $(this).parent().remove();
    });
  });
});
//# sourceMappingURL=app.js.map