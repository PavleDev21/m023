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

function gallery() {
    $galleryItem = $('.gallery-item-wrap-src');
    $overlayImg = $('.gallery-img-overlay');
    $overlay = $('.gallery-overlay');
    $closeBtn = $('.gallery-overlay-close-btn');
    $nextBtn = $('.gallery-overlay-next-btn');
    $prevousBtn = $('.gallery-overlay-prevous-btn');

    var src = "";
    $galleryItem.on('click', function() {
        src = $(this).data('src');
        $overlayImg.attr("src", src);
        $overlay.show();
    })
    /*$nextBtn.on('click', function() {
        src+1;
        $overlayImg.attr("src", src);
        console.log(src);
    })
    $prevousBtn.on('click', function() {
        src-1;
        $overlayImg.attr("src", src);
        console.log(src);    
    })*/
    $closeBtn.on('click', function() {
        $overlay.hide();
    })
}

gallery();
navToggle();
headerScroll();