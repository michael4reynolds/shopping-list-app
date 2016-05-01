$(document).ready(function () {
  $('#newitem').on('keydown', function (e) {
    if (e.keyCode === 13) {
      let item = $(this).val()
      $('.needed ul').append(`
        <li class="itemrow">
          <i class="fa fa-circle-o" aria-hidden="true"></i>
          <input type="text" name="item_b" value="${item}" class="item">
        </li>`)
      e.preventDefault()
      $(this).val('')
    }
  })

  $('.needed').on('click', '.fa', function () {
    $(this).toggleClass('checked')
    $(this).toggleClass('fa-circle-o')
    $(this).toggleClass('fa-check-circle-o')
    $(this).next().toggleClass('checked')
  })

  $('.purchased').on('click', '.fa', function () {
    var item = $(this).next().val()
    $('.needed ul').append(`
        <li class="itemrow">
          <i class="fa fa-circle-o" aria-hidden="true"></i>
          <input type="text" name="item_b" value="${item}" class="item">
        </li>`)
  })

  $('input.add').on('click', function () {
    $('.item.checked').each(function () {
      var html = `
        <li class='itemrow'>
          <i class="fa fa-history" aria-hidden="true"></i>
          <input type='text' value='${$(this).val()}' class='item' readonly>
        </li>`
      $('.purchased ul').prepend(html)
      $(this).parent().remove()
    })
  })
})