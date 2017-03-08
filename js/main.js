(function($) {
  "use strict"; // Start of use strict

  $(window).load(function() {

    // Preloader
    function preloaderExit() {
      $(".preloader").fadeOut("slow");
    };
    setTimeout(preloaderExit, 1000);

    // FadeIn function
    function fadeIn(element, time) {
      setTimeout (
        function() {
          $(element).addClass("fade-in").css("visibility","visible");
        }
      , time);
    };

    // Fade in logo
    fadeIn("#logo", 1550);

    // Fade in title after logo
    fadeIn("#title, #desc", 1950);

  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Change bg of the top nav as scrolling occurs
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

})(jQuery); // End of use strict
