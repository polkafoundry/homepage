$(document).ready(function () {
  $('.collapse').on('show.bs.collapse', function () {
    $(this).parent().addClass('active');
  })
  $('.collapse').on('hide.bs.collapse', function () {
    $(this).parent().removeClass('active');
  })

  setInterval(() => {
    updateText();
  }, 3000);

  var updateText = (function () {
    var texts = ['Practical', 'Efficient', 'Frictionless'];
    var index = 1;
    return function () {
      $('.home__title span').text(texts[index++]);
      index = index == texts.length ? 0 : index
    }
  })();

  new Swiper ('.swiper-container', {
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },

  })

})