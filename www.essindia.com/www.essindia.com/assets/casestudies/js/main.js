$(function($) {

    "use strict";

    $('.project-slide-three').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        Speed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.project-slide-four').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        prevArrow: '<div class="prev"><i class="icofont-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="icofont-arrow-right"></i></div>',
        Speed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    //===== brand slide slick slider
    $('.brand-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1201,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            }
        ]
    });

});