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

    //Show pop up message after 7s
    setTimeout(function(){
       $('#discount-msg').modal('show');
   }, 7000);
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

// Offset trigger to reveal elements
  function scrollRevealer(id, offset, animation) {
    $(window).scroll(function() {
  		var imagePos = $(id).offset().top;
  		var topOfWindow = $(window).scrollTop();
  			if (imagePos < topOfWindow+offset) {
  				$(id).css("visibility","visible").addClass(animation);
  			}
  	});
  }
  scrollRevealer("#tutor", 400, "fade-in");

// Spin animation for service icon
  $(".service-icon").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
    $(this).removeClass("spin")
  });
  $(".service-icon").hover(function() {
    $(this).addClass("spin");
  });

  // Contact form validator
  $(function () {

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
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
