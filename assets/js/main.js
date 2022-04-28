(function ($) {
    "use strict";

/*Menu Sticky0*/
var windows = $(window);
var sticky = $('.header-sticky');

windows.on('scroll', function() {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
        sticky.removeClass('is-sticky');
    }else{
        sticky.addClass('is-sticky');
    }
});

/*Mobile Menu*/
var menuNav = $('.main-menu nav');
menuNav.meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu',
    meanMenuClose: '<span class="menu-close"></span>',
    meanMenuOpen: '<span class="menu-bar"></span>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '0',
});

/*Header Search*/
var searchToggle = $('.ht-search-toggle');
var searchClose = $('.ht-search-close');
var searchSection = $('#ht-header-search');

searchSection.hide();
/*-- Search Open --*/
searchToggle.on('click', function(){
    searchSection.slideToggle();
    return false;
});
/*-- Search Close --*/
searchClose.on('click', function(){
    searchSection.slideToggle();
    return false;
});

/*Hero Slider*/
var heroSlider = $('.hero-slider');
heroSlider.slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                dots: true,
            }
        }
    ]
});

/*Testimonial Slider*/
var testimonialSlider = $('.testimonial-slider');
testimonialSlider.slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: false,
    infinite: true,
    slidesToShow: 1,
    appendArrows: '.testimonial-arrows',
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                dots: true,
            }
        }
    ]
});
var testimonialSlider2 = $('.testimonial-slider-2');
testimonialSlider2.slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: false,
    infinite: true,
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
});

/*Service Slider*/
var serviceSlider = $('.service-slider');
serviceSlider.slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: false,
    infinite: true,
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
});

/*Blog Slider*/
var blogSlider = $('.blog-slider');
blogSlider.slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: false,
    infinite: true,
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 1199
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
});


/*Portfolio Filter (Isotope)*/    
var $isotopeGrid = $('.isotope-grid'),
$isotopeFilter = $('.isotope-filter');
$isotopeGrid.imagesLoaded(function () {
    // filter items on button click
    $isotopeFilter.on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $(this).addClass('is-checked').siblings('.active').removeClass('active');
        $isotopeGrid.isotope({
            filter: filterValue,
        });
    });
    // init Isotope
    $isotopeGrid.isotope({
        itemSelector: '.isotope-item',
        percentPosition: true,
        transitionDuration: '0.7s',
        layoutMode: 'masonry',
        masonry: {
            columnWidth: '.resizer',
        }
    });
});

/*Counter UP*/
var counter = $('.counter');
counter.counterUp({
    delay: 20,
    time: 3000
});

})(jQuery);	
