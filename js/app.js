$(document).ready(function () {
  $('#newitem').on('keydown', function (e) {
    if (e.keyCode === 13) {
      let item = $(this).val()
      $('.needed ul').append(`
        <li class="itemrow">
          <input type="checkbox" name="item_a">
          <input type="text" name="item_b" value="${item}" class="item">
        </li>`)
      e.preventDefault()
      $(this).val('')
    }
  });

  $('.needed input[type=checkbox]').on('click', function () {
    console.log($(this))
    console.log($(this).parent())

    $(this).next().toggleClass('checked');
  });

  $('input.add').on('click', function () {
    console.log($(this))
    $('.item.checked').each(function(){
      var html = "<li class='itemrow'>";
      html += "<input type='image' src='images/refresh.png' alt='Buy again'>";
      html += "<input type='text' value='"+$(this).val()+"' class='item'>";
      html += "</li>";
      $('.purchased ul').prepend(html);
      $(this).parent().remove();
    });
    console.log(checked.length)
  });


})