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
  })

  $('.needed input[type=checkbox]').on('click', function () {
    console.log($(this))
    console.log($(this).parent())

    if ($(this).prop('checked')) {
      $(this).next().css({ 'filter': 'hue-rotate(120deg)', '-webkit-filter': 'hue-rotate(120deg)' })
    } else {
      $(this).next().css({ 'filter': 'none', '-webkit-filter': 'none' })
    }
  })

  $('input.add').on('click', function () {
    console.log($(this))
    let checked = $('.needed input[type=checkbox]:checked')
    console.log(checked.length)
  })
})