// Additional js files are loaded here

// @codekit-prepend '../bower_components/jquery/dist/jquery.js'
// @codekit-prepend '../bower_components/what-input/dist/what-input.min.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/foundation.min.js'
// @codekit-prepend '../bower_components/fullpage.js/vendors/scrolloverflow.min.js'
// @codekit-prepend '../bower_components/fullpage.js/jquery.fullPage.min.js'
// @codekit-prepend '../bower_components/wow/dist/wow.min.js'




$(document).foundation();

//////////// FadeIn on Page Load  //////////////////

jQuery(document).ready(function($) {

	// site preloader -- also uncomment the div in the header and the css style for #preloader
	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});

});

//////////// Fullpage.js options //////////////////

$(document).ready(function() {
	$('#fullpage').fullpage({
		// 'anchors': ['home', 'unternehmen', 'leistung', 'kontakt'],
    'menu': '#menu',
		'verticalCentered': false,
		'css3': true,
		'sectionsColor': ['transparent'],
		'navigation': false,
		'navigationPosition': 'right',
		// 'navigationTooltips': ['Home', 'Unternehmen', 'Leistung', 'Kontakt'],
		'responsiveWidth': 567,
		'responsiveHeight': 420,
		'controlArrows': false,
		'scrollBar': true,
		'animateAnchor': false,

		afterResponsive: function(isResponsive){
				console.log("Is responsive: " + isResponsive);
			}

    });


		$(document).on('click', '.scrollDown', function() {
			$.fn.fullpage.moveSectionDown();
		});
		$(document).on('click', '.scrollUp', function() {
			$.fn.fullpage.moveSectionUp();
		});

		$(document).on('click', '.next', function() {
			$.fn.fullpage.moveSlideRight();
		});

    $(".menu-collapsed").click(function() {
      $(this).toggleClass("menu-expanded");
    });


    /////////////////// WOW Init /////////////////////////

    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       100,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        // callback:     function(box) {
        //   // the callback is fired every time an animation is started
        //   // the argument that is passed in is the DOM node being animated
        // },
        // scrollContainer: null // optional scroll container selector, otherwise use window
      }
    );
    wow.init();

});
