/*------------------------------------------------------------------
[Master Custom JS] - [Table of contents]

1. Preloader
2. Isotope
3. Owl Carousel
4. Counter
5. SCROLL TO TOP
6. Validate and Submit contact form
7. Sticky Head 
8. Shop button
9. SIDEBAR EFFECTS
10. Parallax
11. Testimonials slider
12. Pastors slider
13. Clients slider
14. Products by category
15. Portfolio single slider
16. Back to top
17. SITE NAVIGATION
18. NEWSLETTER FORM 
19. REVOLUTION SLIDER
20. ANIMATION DOMAIN NAME
21. TEAM MEMBERS
------------------------------------------------------------------- */

(function($) {
    'use strict';

    /*---------------------------------------------*/
    /*--- 1. Preloader ---*/
    /*---------------------------------------------*/
    $(window).on('load', function() {
        $('#northwest_preloader_holder').fadeOut(1000, function() {
            $(this).fadeOut();
        });
    });

    new WOW().init();

    $('[data-toggle="tooltip"]').tooltip();

    /*---------------------------------------------*/
    /*--- 2. Isotope ---*/
    /*---------------------------------------------*/
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            category: '[data-category]',
            weight: function(itemElem) {
                var weight = $(itemElem).find('.weight').text();
                return parseFloat(weight.replace(/[\(\)]/g, ''));
            }
        }
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('#filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });

    // change is-checked class on buttons
    $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    /*---------------------------------------------*/
    /*--- 3. Owl Carousel ---*/
    /*---------------------------------------------*/
    $("#nw_owl_testimonials").owlCarousel({
        loop: true,
        autoPlay: 2000,
        items: 1,
        dots: false,
        // navText: ["",""]
        margin: 10,
        autoWidth: false,
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>"
        ]

    });

    $("#nw_owl_clients").owlCarousel({

        autoPlay: 2000, //Set AutoPlay to 3 seconds
        items: 6,
        pagination: false,
        responsive: {
            0: {
                items: 2
            },
            991: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    });


    /*---------------------------------------------*/
    /*--- 4. Counter---*/
    /*---------------------------------------------*/

    $.fn.countTo = function(options) {
        options = options || {};

        return $(this).each(function() {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 0, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }

    // start all the timers
    $('.timer').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }

    /*---------------------------------------------*/
    /*--- 5. SCROLL TO TOP ---*/
    /*---------------------------------------------*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $("#nw_contact_us_fill input").on('click', function() {
        $(this).css("border-top-color", "rgba(37,37,37,0.75)");
    });
    $("#nw_contact_us_fill input").on('mouseleave', function() {
        $(this).css("border-top-color", "transparent");
    });
}(jQuery));