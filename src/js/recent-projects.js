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

function gallery() {
    $galleryItem = $('.gallery-item-wrap-src');
    $overlayImg = $('.gallery-img-overlay');
    $overlay = $('.gallery-overlay');
    $closeBtn = $('.gallery-overlay-close-btn');
    $nextBtn = $('.gallery-overlay-next-btn');
    $prevousBtn = $('.gallery-overlay-prevous-btn');

    var nmbr = 0;
    $galleryItem.reverse().each(function(i) {
		$(this).attr('data-index', i+1);
    });
    $galleryItem.on('click', function() {
        nmbr = $(this).data('index');
        var src = "src/images/gallery-img-" + nmbr + ".jpg";
        $overlayImg.attr("src", src);
        $overlay.show();
    })
    $prevousBtn.on('click', function() {
        nmbr++;
        if(nmbr>6) {
            nmbr = 6;
        }
        var newSrc = "src/images/gallery-img-" + nmbr + ".jpg";
        $overlayImg.attr("src", newSrc);
    })
    $nextBtn.on('click', function() {
        nmbr--;
        if(nmbr<1) {
            nmbr = 1;
        }
        var newSrc = "src/images/gallery-img-" + nmbr + ".jpg";
        $overlayImg.attr("src", newSrc);
    })
    $closeBtn.on('click', function() {
        $overlay.hide();
    })
}

function pageCrossing() {
    var $next = $('.next-page-btn');
    var $prev = $('.prev-page-btn');
    $next.on('click', function() {
        var lol = $('.body').data('index');
        lol+=2;
        if(lol>5) {
            lol = 5;
        }
        console.log(lol);
        window.location.href='recent-projects-'+ lol +'.html';
    })
    $prev.on('click', function() {
        var lol = $('.body').data('index');
        if(lol<1) {
            lol = 1;
        }
        window.location.href='recent-projects-'+ lol +'.html';
    })
}

navToggle();
headerScroll();
gallery();
pageCrossing();