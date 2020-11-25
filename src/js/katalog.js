jQuery.fn.reverse = [].reverse;
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

function cards() {
    var $btn = $('.katalog-btn');
    var $content = $('.katalog-content');
    var $arrow = $('.icon-icon-down-arrow');

    $btn.each(function(i) {
		$(this).attr('data-index', i);
    });

    $content.each(function(i) {
		$(this).attr('data-index', i);
    });

    $arrow.each(function(i) {
		$(this).attr('data-index', i);
    });

    var temp = 0;
    
    $btn.on('click', function() {
        var check = false;
        var index = $(this).data('index');
        if($('.icon-icon-down-arrow[data-index="'+ index + '"]').hasClass('katalog-icon-transform')) {
            check = true;
        }
        $content.stop().slideUp();
        $arrow.removeClass('katalog-icon-transform');
        $('.katalog-content[data-index="'+ index + '"]').stop().slideToggle();
        $('.icon-icon-down-arrow[data-index="'+ index + '"]').toggleClass('katalog-icon-transform');
        if(check === true) {
            $('.icon-icon-down-arrow[data-index="'+ index + '"]').removeClass('katalog-icon-transform');
        }
    })
}

navToggle();
headerScroll();
cards();