<!--<script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>-->
<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.4/TweenMax.min.js'></script>

<script>
"use strict";

jQuery(document).ready(function ($) {
  var DEBUG = false;
  var running = false;
  var speed = 3;
  var s_top = 3400;
  var scale = 1.75;
  var repeat = 0;
  var repeat_delay = 1;
  var studio_letters = $('#studio-letters');
  var top = -$('#studio-letters').height() / 2;
  var bottom = $('#studio-letters').height() / 2;
	hideLetters();

  if (DEBUG) {
    console.log("Top: ".concat(top));
    console.log("Bottom: ".concat(bottom));
  }

  var animate_letter = function animate_letter(element, y_direction, x_direction, speed) {
    var tl = new TimelineMax({
      repeat: repeat,
      repeatDelay: repeat_delay
    }),
        letter = $(element).toArray();
    /* S */

    tl.staggerFrom(letter, speed, {
      y: y_direction,
      x: x_direction,
      ease: Strong.easeOut,
      scale: scale
    }, 0);
  }; //animate letters

	function hideLetters() {
		$('.icw-s').css('visibility', 'hidden');
		$('.icw-t').css('visibility', 'hidden');
		$('.icw-u').css('visibility', 'hidden');
		$('.icw-d').css('visibility', 'hidden');
		$('.icw-i').css('visibility', 'hidden');
		$('.icw-o').css('visibility', 'hidden');
	}

  function runAnim() {
		//get data attributes
    var letterS = document.querySelector('.icw-s');
    var letterT = document.querySelector('.icw-t');
    var letterU = document.querySelector('.icw-u');
    var letterD = document.querySelector('.icw-d');
    var letterI = document.querySelector('.icw-i');
    var letterO = document.querySelector('.icw-o');
		
		
    animate_letter(letterS, top, 0, letterS.getAttribute('data-speed'));
    animate_letter(letterT, bottom, 0, letterT.getAttribute('data-speed'));
    animate_letter(letterU, top, 0, letterU.getAttribute('data-speed'));
    animate_letter(letterD, bottom, 0, letterD.getAttribute('data-speed'));
    animate_letter(letterI, top, 0, letterI.getAttribute('data-speed'));
    animate_letter(letterO, bottom, 0, letterO.getAttribute('data-speed'));
  }

  function showLetters() {
    $('.icw-s').css('visibility', 'visible');
		$('.icw-t').css('visibility', 'visible');
		$('.icw-u').css('visibility', 'visible');
		$('.icw-d').css('visibility', 'visible');
		$('.icw-i').css('visibility', 'visible');
		$('.icw-o').css('visibility', 'visible');
  } //main
  //startAnim();


  $(window).scroll(function () {
    var triggerHeight = $('#studio-letters').offset().top,
        outerHeight = $('#studio-letters').outerHeight(),
        winHeight = $(window).height(),
        winTop = $(this).scrollTop();
    var triggerPoint = winHeight - triggerHeight; //call anim when trigger is reached

    if (winTop > triggerPoint + 580) {
      if (DEBUG) {
        console.log(triggerPoint);
      }

      if (!running) {
        running = true;
        showLetters();
        runAnim();
      }
    }
  });
});
</script>