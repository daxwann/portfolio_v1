//set nav properties at top of window
function enlargeNav() {
  var currentPosition = $(window).scrollTop();
  if (currentPosition == 0) {
    $('nav').css('background-color', 'rgba(20, 19, 22, 0)')
    $('#navLogo').css('margin', '1em 1.5em');
    $('#menu').css('margin', '1em 1.5em');
  };
};

//change nav properties when scrolled down
function reduceNav() {
  var currentPosition = $(window).scrollTop();
  if (currentPosition > 0) {
    $('nav').css('background-color', 'rgba(20, 19, 22, 1)');
    $('#navLogo').css('margin', '0.25em 1em');
    $('#menu').css('margin', '0.25em 1em');
  } else {
    enlargeNav();
  };
};

//smooth scolling to links on the same page
function smoothScroll() {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 600, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
};

function toggleMenu() {
  function openToggle() {
    $('#menuToggle').fadeToggle(200);
  }

  function exitToggle() {
    $('#menuIcon').removeClass('open');
    $('#menuToggle').css("display", "none");
  }

  function checkViewport() {
    if($(window).width()>768) {
      exitToggle();
    };
  }

  $(window).resize(function() {
    checkViewport()
  });

  $('#menuIcon').click(function(){
   $(this).toggleClass('open');
   openToggle();
  });

  $('#menuToggle ul li a').click(function() {
    exitToggle();
  });
}

$(document).ready(function() {
  enlargeNav();
  smoothScroll();
  toggleMenu();
});

$(window).scroll(function() {
  reduceNav();
});
