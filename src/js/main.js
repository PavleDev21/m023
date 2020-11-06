function bannerBtn () {
    $bannerBtn = $('.banner-btn');
    $aboutUs = $('.about-us');

    $bannerBtn.on('click', function() {
        $('html, body').stop().animate({scrollTop: $aboutUs.offset().top-51}, 900);
    })
}

function headerScroll() {
    $header = $('.header');
    $nav = $('.navigation');
    $navLink = $('.nav-link');
    $logoImgLight = $('.logo-img-light');
    $logoImgDark = $('.logo-img-dark');

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll >= 50) {
            $header.addClass('header-scroll');
            $navLink.addClass('header-scroll-link');
            $logoImgDark.addClass('logo-show');
            $logoImgLight.addClass('logo-hide');
            $nav.addClass('nav-scroll');
        }
        else {
            $header.removeClass('header-scroll');
            $navLink.removeClass('header-scroll-link');
            $logoImgDark.removeClass('logo-show');
            $logoImgLight.removeClass('logo-hide');
            $nav.removeClass('nav-scroll');
        }
    })
}

function fillUp() {
    $(window).scroll(function() {
        var a = 0;
        var oTop = $('.features').offset().top - window.innerHeight;
        console.log($('.features').offset().top);
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.feature-number').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-count');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },
      
              {
      
                duration: 1000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                  //alert('finished');
                }
      
              });
          });
          a = 1;
        }
      
    });
}
headerScroll();
bannerBtn();
fillUp();
