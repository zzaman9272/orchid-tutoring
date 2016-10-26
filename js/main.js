(function($) {
  "use strict"; // Start of use strict

  $(window).load(function() {
    // Preloader
    function preloaderExit() {
      $(".preloader").fadeOut("slow");
    };
    setTimeout(preloaderExit, 1000);

    // show logo after 1.4s
    function showLogo(){
      $("#logo").addClass("fade-in").css("visibility","visible");
    };
    setTimeout( showLogo, 1550 );

    // Show title after just after logo
    function showTitle(){
      $("#title, #desc").addClass("fade-in").css("visibility","visible");
    };
    setTimeout( showTitle, 1570 );
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

  //trigger tutor pic to become visible
  $(window).scroll(function() {
		var imagePos = $("#tutor").offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$("#tutor").addClass("fade-in").css("visibility","visible");
			}
	});

  // Initialize and Configure Scroll Reveal Animation
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

})(jQuery); // End of use strict
