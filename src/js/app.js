$(document).ready(function () {
  $('.collapse').on('show.bs.collapse', function () {
    $(this).parent().addClass('active');
  })
  $('.collapse').on('hide.bs.collapse', function () {
    $(this).parent().removeClass('active');
  })

  $('#myModal').on('hidden.bs.modal', function (e) {
    $(this).find('iframe').removeAttr('src');
    updateText.play();
  })

  $('#myModal').on('show.bs.modal', function (e) {
    var src = $(this).data('video');
    $(this).find('iframe').attr('src', src);
    updateText.stop();
  })

  $('#subscribe').submit(function (e) {
    var $this = $(this);
    $this.find('.error').text('')
    e.preventDefault();
    var url = $this.attr('action');
    $.ajax({
      type: "GET",
      url: url,
      data: $this.serialize(),
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      error: function (err) { alert("Could not connect to the registration server."); },
      success: function (data) {
        var $error = $this.find('.error');
        if (data.result != "success") {
          $error.addClass('text-danger').removeClass('text-success').text('Something went wrong, please try again later.');
        } else {
          $error.addClass('text-success').removeClass('text-danger').text('Thank you for subscribing.');
        }
      }
    });
  })

  var myVar = setInterval(myTimer, 1000);
  var words = ['Practical', 'Efficient', 'Frictionless']
  var i = 0;

  function myTimer() {
    document.getElementById("change-text").innerHTML = words[i];
    if (i < words.length - 1) {
      i = i + 1;
    } else {
      i = 0;
    }
  }

  new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    on: {
      slideChange: function () {
        setTimeout(() => {
          var img = $('.swiper-slide-active').data('image');
          var $img = $('.swiper-image img');
          var $loading = $('.swiper-image .loading');
          $img.attr('src', img);
          var count = 1;
          var interval = setInterval(() => {
            count++;
            if (count > 5) $loading.show();
            if ($img[0].complete) {
              clearInterval(interval);
              $loading.hide();
            }
          }, 100);
        }, 0)
      },
    }

  })

  $(window).scroll(function () {
    $('.animate').each(function () {
      var offset = $(this).offset().top;
      var animateType = $(this).data('animate');
      if (!$(this).hasClass('animated') && (offset - window.innerHeight + 80) <= window.pageYOffset) {
        $(this).addClass('animated ' + animateType);
      }
    })
  })

})

function scrollToAnchor(id) {
  var $el = $(id);
  $('html,body').animate({ scrollTop: $el.offset().top }, 'slow');
}