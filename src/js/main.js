function bannerBtn () {
    $bannerBtn = $('.banner-btn');
    $aboutUs = $('.about-us');

    $bannerBtn.on('click', function() {
        $('html, body').stop().animate({scrollTop: $aboutUs.offset().top-51}, 900);
    })
}

function headerScroll() {
    var $navToggleIcon = $('.nav-toggle-icon');
    var $header = $('.header');
    var $nav = $('.navigation');
    var $navLink = $('.nav-link');
    var $logoImgLight = $('.logo-img-light');
    var $logoImgDark = $('.logo-img-dark');

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll >= 50) {
            $header.addClass('header-scroll');
            $navLink.addClass('header-scroll-link');
            $logoImgDark.addClass('logo-show');
            $logoImgLight.addClass('logo-hide');
            $nav.addClass('nav-scroll');
            $navToggleIcon.addClass('toggle-color-change');
        }
        else {
            $header.removeClass('header-scroll');
            $navLink.removeClass('header-scroll-link');
            $logoImgDark.removeClass('logo-show');
            $logoImgLight.removeClass('logo-hide');
            $nav.removeClass('nav-scroll');
            $navToggleIcon.removeClass('toggle-color-change');
        }
    })
}

function fillUp() {
    $(window).scroll(function() {
        var a = 0;
        var oTop = $('.features').offset().top - window.innerHeight;
        //console.log($('.features').offset().top);
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

function navToggle() {
  var $navToggle =  $('.nav-toggle');
  var $navToggleIcon = $('.nav-toggle-icon');
  var $navigation = $('.navigation');

  $navToggle.on('click', function() {
    $navToggleIcon.toggleClass('nav-toggle-active');
    $navigation.toggleClass('nav-show');
  })
}

function nav() {
  var $navLink = $('.nav-link-scroll');
  var $section = $('.js-section');
  var $icon = $('.nav-toggle-icon');
  var $navigation = $('.navigation');
  var $navToggleIcon = $('.nav-toggle-icon');

  $navLink.each(function(i) {
  var $this = $(this);
  $this.attr('data-scrollsec-index', i);
  });
  $section.each(function(i) {
  $(this).attr('data-scrollsec-index', i);
  });

  $navLink.on('click', function() {
  var index = $(this).data('scrollsec-index');
      var sectionOffset = $('.js-section[data-scrollsec-index="'+ index + '"]').offset().top - 51;
      $('html,body').stop().animate({scrollTop: sectionOffset}, 900);
      $navigation.toggleClass('nav-show');
      $navToggleIcon.toggleClass('nav-toggle-active');
  });
}


nav();
navToggle();
headerScroll();
bannerBtn();
fillUp();
