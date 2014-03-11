/*
 * =====================================================
 * Detect v1.0.0
 * Copyright 2014 Michael Rienstra, Erik Burns & SPINXSW
 *
 * V1.0.0 designed by spinxsw.
 * =====================================================
 */
define(['jquery', '/js/app/utils-mobile.js', '/js/app/remote-mobile.js', 'shake'],
function ($, utils, remote, shake) {
  // Local Vars
  var alphaCenter,
    alphaStart,
    alphaEnd,
    previousAlpha,
    previousBeta,
    previousIntensityA,
    previousIntensityB;

  var detect = {

    deviceOrientationHandler: function(eventData) {
      var intensityA, outputIntensityA, intensityB, outputIntensityB;

      intensityA = Math.round(eventData.alpha);

      if (alphaCenter === void 0) {
        alphaCenter = intensityA;
        alphaStart = utils.constrainPeriodic(alphaCenter - 90, 360);
        alphaEnd = utils.constrainPeriodic(alphaCenter + 90, 360);
      } else if (intensityA !== previousAlpha) {
        if (
          (alphaEnd > alphaStart && intensityA >= alphaStart && intensityA <= alphaEnd) ||
          (intensityA >= alphaStart || intensityA <= alphaEnd)
        ) {
          intensityA = intensityA - alphaStart;
          if (intensityA < 0) {
            intensityA += 360;
          }
          outputIntensityA = intensityA = Math.round((180 - intensityA) * 100 / 180) / 100;
        } else {
          if (previousIntensityA !== 'n/a') {
            // todo: could also be based on previous delta
            if (previousIntensityA < 0.5) {
              outputIntensityA = 0;
            } else {
              outputIntensityA = 1;
            }
          }
          intensityA = 'n/a';
        }

        if (outputIntensityA !== void 0 && outputIntensityA !== 'n/a') {
          remote.send({ intensityA: outputIntensityA });
        }

        previousIntensityA = intensityA;
        previousAlpha = Math.round(eventData.alpha);
      }

      intensityB = Math.round(eventData.beta);

      if (intensityB !== previousBeta) {
        if (intensityB > 45 || intensityB < -45) {
          if (previousIntensityB !== 'n/a') {
            // todo: could also be based on previous delta
            if (previousIntensityB < 0.5) {
              outputIntensityB = 0;
            } else {
              outputIntensityB = 1;
            }
          }

          intensityB = 'n/a';
        } else {
          outputIntensityB = intensityB = Math.round((1 - (intensityB + 45) / 90) * 100) / 100;
        }

        if (outputIntensityB !== void 0 && outputIntensityB !== 'n/a') {
          remote.send({ intensityB: outputIntensityB });
        }

        previousIntensityB = intensityB;
        previousBeta = Math.round(eventData.beta);
      }

      // todo: do something with outputIntensityA & outputIntensityB
    },

    // listen: send nothing or true to listen, false to stop listening
    init: function(){
      // Add listener to device motion events
      $(document).ready(function(){
        remote.init('ws://quiet-earth-2640.herokuapp.com');
        window.addEventListener('deviceorientation', detect.deviceOrientationHandler, false);
        window.addEventListener('shake', function(){
          remote.send({gesture: 'shake'});
        }, false);
      });
    }
  }

  return detect;
});