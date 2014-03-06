/*
 * =====================================================
 * Play v1.0.0
 * Copyright 2014 Erik Burns & SPINXSW
 *
 * V1.0.0 designed by @erikburns.
 * =====================================================
 */
var my_color = 'red';

function colorLabelMap(color_name){
  var color_labels = {
    'red': '#fff',
    'magenta': '#fff',
    'orange': '#000',
    'yellow': '#000',
    'green': '#fff',
    'mint': '#000',
    'aqua': '#000',
    'blue': '#fff',
    'purple': '#fff' 
  }
  return color_labels[color_name];
}

function colorMap(color_name){
  var color_values = {
    'red': '#ff0000',
    'magenta': '#a52a2a',
    'orange': '#ffa500',
    'yellow': '#ffff00',
    'green': '#008000',
    'mint': '#90ee90',
    'aqua': '#00ffff',
    'blue': '#0000ff',
    'purple': '#800080' 
  }
  return color_values[color_name];
}

function initColorPicker(){
  $('.colors li').bind('touchstart', function(e){
    if (!$(this).hasClass('selected')) {
      $('.colors li.selected').removeClass('selected');
      // update color button, global color value, and select new color
      my_color = $(this).attr('class');
      updateColors(my_color);
      $(this).addClass('selected');
    } 
  });
}

function initPlayAs(){
  $('#play_as').bind('touchstart', function(e){
    // hide color picker ui
    $('.play').hide();
    $('.bar-footer').hide();
    // show active play ui
    $('.bar-footer-play').show();
    $('.play-active').show();
    startCountdown(3);
  });
}

// pad a number with leading zeros
function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

function startCountdown(count){
  var $count = $('#countdown');
  $count.html(count);
  var myCountdown = setInterval(function(){
    count = count - 1;
    if (count == 1) startTime();
    if (count == 0) {
      $('.countdown').hide();
      showGameBoard();
    }
    else {
      $count.html(count);
    }
    if (count < 1) clearInterval(myCountdown);
  },1000)
}

function startTime(){
  var $timer_min = $('#timer_min');
  var $timer_sec = $('#timer_sec');
  var minutes = $timer_min.html();
  var seconds = $timer_sec.html();
  var total_seconds = parseInt(minutes) * 60 + parseInt(seconds);
  var timer = setInterval(function(){
    if (total_seconds == 0) { // are we done?
      clearInterval(timer);
      endGame();
    }
    else if ((total_seconds % 60) == 0) {
      total_seconds = total_seconds - 1;
      minutes = minutes - 1;
      seconds = 59;
      $timer_min.html(minutes);
      $timer_sec.html(pad(seconds));
    } else {
      total_seconds = total_seconds - 1;
      seconds = seconds - 1;
      $timer_sec.html(pad(seconds));
    }
  },1000);
}

function showGameBoard(){
  $('.color_block').show();
  $('.tip').show();
}

function updateColors(color_name){
  $('.my_color').html(my_color);
  var color_hex = colorMap(my_color);
  var color_label = colorLabelMap(my_color);
  $('.color_block').css('background-color', color_hex);
  $('.color_block h3').css('color', color_label);
}

$(document).ready(function(){
  initColorPicker();
  initPlayAs();
});
