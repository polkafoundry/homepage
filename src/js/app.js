$(document).ready(function () {
  $('.collapse').on('show.bs.collapse', function () {
    $(this).parent().addClass('active');
  })
  $('.collapse').on('hide.bs.collapse', function () {
    $(this).parent().removeClass('active');
  })

  setTimeout(() => {
    updateText();
  }, 3000);

  var updateText = (function () {
    var texts = ['Practical', 'Efficient', 'Frictionless'];
    var timeout = 3000
    var index = 0;
    return function () {
      var i = ++index % texts.length
      const text = texts[i]+ ' Blockchain'
      $('.home__title span').fadeOut(function() {
        $(this).text(text).fadeIn()
      })

      var round = Math.floor(index / texts.length)
      timeout = Math.min(Math.floor(3000 * (1 + round / 2)), 6000)
      setTimeout(updateText, timeout)
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