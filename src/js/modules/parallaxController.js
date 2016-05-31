define('parallaxController', [
  'jquery', 
  'TweenMax',
  'ScrollMagic',
  'jquery.ScrollMagic',
  'debug.addIndicators', 
  'animation.gsap'], function($, TweenMax, ScrollMagic, jqueryScrollMagic, debugAddIndicators, animationGsap) {

  'use strict';



  var addToScene = function ( controller, scene, timeline ) {

    new ScrollMagic.Scene({
      duration: '200%',
      triggerElement: scene
    })
    .setTween( timeline )
    .addTo( controller );
    
  };



  var parallax = function ( controller ) {

    var $scene = $('.animation');

    $scene.each( function() {

      var $animation = $(this),
          $animationCaptions = $animation.find('.animation-captions'),
          $animationGraphics = $animation.find('.animation-graphics');

      var timeline = new TimelineMax().add([

        TweenMax.from( $animationCaptions, 1, { 
          y: '+60%', 
          ease: Power0.easeNone 
        }),

        TweenMax.from( $animationGraphics, 1, { 
          y: '+30%', 
          ease: Power0.easeNone 
        })

      ]);

      addToScene( controller, $animation, timeline );

    })

  };



  var init = function () {

    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onEnter'
      }
    });

    parallax( controller );

  };
  
  return {
    init: init
  };

});