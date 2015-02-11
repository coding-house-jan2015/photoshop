'use strict';

$(document).ready(init);

function init() {
  $('#add-color').click(addColor);
  $('#add-random-colors').click(addRandom);
  $('#start').click(clickStart);
  $('#stop').click(clickStop);
  $('#add-canvas').click(clickAddCanvas);
  $('#colors').on('click', '.box', clickBox);
  $('#canvas').on('mouseenter', '.tiny', enterTiny);
}

var colors = [];
var timer;
var index = 0;

function enterTiny() {
  var color = $('#selected').css('background-color');
  $(this).css('background-color', color);
}

function clickAddCanvas() {
  var size = $('#canvas-size').val() * 1;

  for(var i = 0; i < size; i++){
    var $tiny = $('<div>');
    $tiny.addClass('tiny');
    $('#canvas').append($tiny);
  }
}

function clickBox() {
  var color = $(this).css('background-color');
  $('#selected').css('background-color', color);
}

function clickStart() {
  colors = $('.box').toArray().map(function(element){
    return $(element).css('background-color');
  });

  index = 0;
  clearInterval(timer);
  timer = setInterval(looping, 250);
}

function clickStop() {
  clearInterval(timer);
}

function looping(){
  var color = colors[index];
  $('body').css('background-color', color);
  index = index < colors.length ? index + 1 : 0;
}

function addColor() {
  var color = $('#color').val();
  box(color);
}

function addRandom() {
  var qty = $('#quantity').val() * 1;
  for (var i = 0; i < qty; i++) {
    box(rgba());
  }
}

function rgba() {
  return 'rgba(' + rnd() + ', ' + rnd() + ', ' + rnd() + ', ' + alpha() + ')';
}

function rnd() {
  return Math.floor(Math.random() * 256);
}

function alpha() {
  return Math.random();
}

function box(color) {
  var $box = $('<div>');
  $box.css('background-color', color);
  $box.addClass('box');
  $('#colors').append($box);
}
