'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var BOTTOM_FONT_Y = 265;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var barMaxHeight = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  if (arr.length > 0) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = Math.ceil(arr[i]);
      }
    }
    return maxElement;
  }
};

var getRandomBlue = function () {
  var colorBlue = 'rgba(0, ' + Math.floor(Math.random() * 256).toString(10) + ', 255, 1)';
  return colorBlue;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура, вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP * 2 + (BAR_WIDTH + BAR_GAP) * i, BOTTOM_FONT_Y);
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + GAP * 2 + (BAR_WIDTH + BAR_GAP) * i, (CLOUD_Y + GAP + FONT_GAP * 3) + 150 - (barMaxHeight * times[i]) / maxTime - GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + GAP * 2 + (BAR_WIDTH + BAR_GAP) * i, (CLOUD_Y + GAP + FONT_GAP * 3) + 150 - (barMaxHeight * times[i]) / maxTime, BAR_WIDTH, (barMaxHeight * times[i]) / maxTime);
    } else {
      ctx.fillStyle = getRandomBlue();
      ctx.fillRect(CLOUD_X + GAP * 2 + (BAR_WIDTH + BAR_GAP) * i, (CLOUD_Y + GAP + FONT_GAP * 3) + 150 - (barMaxHeight * times[i]) / maxTime, BAR_WIDTH, (barMaxHeight * times[i]) / maxTime);
    }
  }
};
