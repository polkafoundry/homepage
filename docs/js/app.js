$(document).ready(function() {
  // $('[data-toggle="collapse"]').click(function() {
  //   $(this).toggleClass('active')
  // })
  $('.collapse').on('show.bs.collapse', function () {
    $(this).parent().addClass('active');
  })
  $('.collapse').on('hide.bs.collapse', function () {
    $(this).parent().removeClass('active');
  })
})