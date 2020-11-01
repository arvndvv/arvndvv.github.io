$(function() {
  $(".rslides").responsiveSlides();
});



function writeopen() {
  var $write = $("#writing");
  $write.removeClass("close");
  $write.addClass("open");
}
function writeclose() {
  var $write = $("#writing");
  $write.addClass("close");
  $write.removeClass("open");
}
function aboutopen() {
  var $write = $("#about");
  $write.removeClass("close");
  $write.addClass("open");
}
function aboutclose() {
  var $write = $("#about");
  $write.addClass("close");
  $write.removeClass("open");
}
function galleryopen() {
  var $write = $("#gallery");
  $write.removeClass("close");
  $write.addClass("open");
}
function galleryclose() {
  var $write = $("#gallery");
  $write.addClass("close");
  $write.removeClass("open");
}
var audio = document.getElementById("bgm");
var playing = false;
function bgm() {
  if (playing) {
    audio.pause();
    playing = false;
  } else {
    audio.play();
    playing = true;
  }
}
function isElementInViewport(elem) {
  var $elem = $(elem);

  // Get the scroll position of the page.
  var scrollElem =
    navigator.userAgent.toLowerCase().indexOf("webkit") != -1 ? "body" : "html";
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  // Get the position of the element on the page.
  var elemTop = Math.round($elem.offset().top);
  var elemBottom = elemTop + $elem.height();

  return elemTop < viewportBottom && elemBottom > viewportTop;
}

// Check if it's time to start the animation.
function checkAnimation() {
  var $elem = $(".progress");

  // If the animation has already been started
  if ($elem.hasClass("anime")) return;

  if (isElementInViewport($elem)) {
    // Start the animation
    $elem.addClass("anime");
  }
}

// Capture scroll events
$(window).scroll(function() {
  checkAnimation();
});

document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";

    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";

    document.querySelector("body").classList.remove("hid");
  }
};
