/** Used Only For Touch Devices **/
( function( window ) {

    // for touch devices: add class visible to the figcaption when touching it.
    if( Modernizr.touch ) {

        // classie.js https://github.com/desandro/classie/blob/master/classie.js
        // class helper functions from bonzo https://github.com/ded/bonzo

        function classReg( className ) {
            return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
        }

        // classList support for class management
        // altho to be fair, the api sucks because it won't accept multiple classes at once
        var hasClass, addClass, removeClass;

        if ( 'classList' in document.documentElement ) {
            hasClass = function( elem, c ) {
                return elem.classList.contains( c );
            };
            addClass = function( elem, c ) {
                elem.classList.add( c );
            };
            removeClass = function( elem, c ) {
                elem.classList.remove( c );
            };
        }
        else {
            hasClass = function( elem, c ) {
                return classReg( c ).test( elem.className );
            };
            addClass = function( elem, c ) {
                if ( !hasClass( elem, c ) ) {
                    elem.className = elem.className + ' ' + c;
                }
            };
            removeClass = function( elem, c ) {
                elem.className = elem.className.replace( classReg( c ), ' ' );
            };
        }

        function toggleClass( elem, c ) {
            var fn = hasClass( elem, c ) ? removeClass : addClass;
            fn( elem, c );
        }

        var classie = {
            // full names
            hasClass: hasClass,
            addClass: addClass,
            removeClass: removeClass,
            toggleClass: toggleClass,
            // short names
            has: hasClass,
            add: addClass,
            remove: removeClass,
            toggle: toggleClass
        };

        // transport
        if ( typeof define === 'function' && define.amd ) {
            // AMD
            define( classie );
        } else {
            // browser global
            window.classie = classie;
        }

        [].slice.call( document.querySelectorAll( 'ul.grid > li > figure' ) ).forEach( function( el, i ) {
            el.querySelector( 'figcaption' ).addEventListener( 'touchstart', function(e) {
                e.stopPropagation();
            }, false );
            el.addEventListener( 'touchstart', function(e) {
                classie.toggle( this, 'visible' );
            }, false );
        } );

    }

})( window );

$(document).ready(function() {

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function() {
        $('.wp3').addClass('animated bounceInDown');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function() {
        $('.wp4').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });

    /***************** Flickity ******************/

    $('#featuresSlider').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false
    });

    $('#showcaseSlider').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        imagesLoaded: true
    });

    /***************** Fancybox ******************/

    $(".vimeo-media").on("click", function(e) {
        var jWindow = $(window).width();
        if (jWindow <= 768) {
            return;
        }
        $.fancybox({
            href: this.href,
            padding: 4,
            type: "iframe",
            'href': "//player.vimeo.com/video/120962437?autoplay=1&title=0&byline=0&portrait=0"
        });
        return false;
    });

});

$(document).ready(function() {
    $("a.single_image").fancybox({
        padding: 4,
    });
});

/***************** Nav Transformicon ******************/

/* When user clicks the Icon */
$(".nav-toggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay-dwork").toggleClass("open");
});

/* When user clicks a link */
$(".overlay ul li a").click(function() {
    $(".nav-toggle").toggleClass("active");
    $(".overlay-dwork").toggleClass("open");
});

/* When user clicks outside */
$(".overlay").click(function() {
    $(".nav-toggle").toggleClass("active");
    $(".overlay-dwork").toggleClass("open");
});

/***************** Smooth Scrolling ******************/

$("a[href*='#']:not([href='#'])").click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 2000);
            return false;
        }
    }
});
