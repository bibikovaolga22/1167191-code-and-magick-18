'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var GAP = 50;
var BAR_WIDTH = 40;
var HISTOGRAMM_HEIGHT = 150;
var TEXT_HEIGHT = 250;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getRandomNumber = function (min, max) {
  return Math.random() * (max - min) + min;
};
var getRoundInteger = function (number) {
  return Math.round(number);
};
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 100, 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 90, 0, 'rgb(255, 255, 255)');
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 150, 20);
  ctx.fillText('Список результатов:', 120, 40);

  var x = CLOUD_X + (CLOUD_WIDTH - (BAR_WIDTH * 4 + GAP * 3)) / 2;
  var maxScore = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(250, 100%, ' + getRandomNumber(40, 100) + '%)';
    }

    var barHeight = (times[i] / maxScore) * HISTOGRAMM_HEIGHT;
    ctx.fillRect(x, TEXT_HEIGHT - 20, BAR_WIDTH, -barHeight);
    ctx.fillStyle = 'rgb(0,0,0)';
    var scoreY = TEXT_HEIGHT - barHeight - 30;
    ctx.fillText(getRoundInteger(times[i]), x, scoreY);
    ctx.fillText(names[i], x, TEXT_HEIGHT);
    x = (x + BAR_WIDTH + GAP);
  }

};
