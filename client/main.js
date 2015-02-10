'use strict';

$(document).ready(init);

function init() {
  $('#add-color').click(addColor);
  $('#add-random-colors').click(addRandom);
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
