/*
 * =====================================================
 * Detect v1.0.0
 * Copyright 2014 Michael Rienstra, Erik Burns & SPINXSW
 *
 * V1.0.0 designed by spinxsw.
 * =====================================================
 */
define(['jquery', '/js/app/utils-mobile'],
function ($, utils) {
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
        $('#textOutput1').text('alphaCenter = ' + Math.round(alphaCenter) + ', alphaStart = ' + Math.round(alphaStart) + ', alphaEnd = ' + Math.round(alphaEnd));
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

        $('#textOutput2').text('eventData.alpha = ' + Math.round(eventData.alpha) + ', intensityA = ' + intensityA);

        if (outputIntensityA !== void 0 && outputIntensityA !== 'n/a') {
          $('#intensityA').css('left', (outputIntensityA * 100) + '%');
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

        $('#textOutput3').text('eventData.beta = ' + Math.round(eventData.beta) + ', intensityB = ' + intensityB);

        if (outputIntensityB !== void 0 && outputIntensityB !== 'n/a') {
          $('#intensityB').css('top', (outputIntensityB * 100) + '%');
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
        window.addEventListener('deviceorientation', detect.deviceOrientationHandler, false);
      });
    }
  }

  return detect;
});