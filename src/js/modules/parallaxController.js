define('parallaxController', [
  'jquery', 
  'TweenMax',
  'ScrollMagic',
  'jquery.ScrollMagic',
  'debug.addIndicators', 
  'animation.gsap'], function($, TweenMax, ScrollMagic, jqueryScrollMagic, debugAddIndicators, animationGsap) {

  'use strict';
  
  var privateMethod = function (message) {
    console.log('Parallax Controller OK!');
  };

  var init = function (text) {
    privateMethod(text);
  };
  
  return {
    init: init
  };

});