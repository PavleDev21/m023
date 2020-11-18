function navToggle() {
    var $navToggle =  $('.nav-toggle');
    var $navToggleIcon = $('.nav-toggle-icon');
    var $navigation = $('.navigation');
  
    $navToggle.on('click', function() {
      $navToggleIcon.toggleClass('alt-nav-toggle-active');
      $navigation.toggleClass('nav-show');
    })
}

function headerScroll() {
    var $navToggleIcon = $('.nav-toggle-icon');
    var $header = $('.header');
    var $nav = $('.navigation');
    var $navLink = $('.nav-link');

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll >= 50) {
            $header.addClass('header-scroll');
            $nav.addClass('nav-scroll');
        }
        else {
            $header.removeClass('header-scroll');
            $nav.removeClass('nav-scroll');
        }
    })
}

navToggle();
headerScroll();