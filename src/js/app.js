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

  new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    on: {
      slideChange: function () {
        setTimeout(() => {
          var img = $('.swiper-slide-active').data('image');
          console.log(img)
          $('.swiper-image img').hide().attr('src', img).fadeIn();
        }, 0)
      },
    }

  })

  $(window).scroll(function() {
    $('.animate').each(function() {
      var offset = $(this).offset().top;
      var animateType = $(this).data('animate');
      console.log(animateType)
      if( !$(this).hasClass('animated') && (offset - window.innerHeight + 80) <= window.pageYOffset) {
        $(this).addClass('animated ' + animateType);
      }
    })
  })

})