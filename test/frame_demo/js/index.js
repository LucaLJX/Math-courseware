$(function () {

  var query = [
    [1, function () {
      runTog([
        [10, 'ishow', 1],
        [10, 'ishow', 2],
        [10, 'ishow', 3],
        [10, 'ishow', 4],
        [10, 'ishow', 8],
        [10, 'ishow', 9],
      ])
    }],
    [20, 'fadeIn', '1'],
    [3, 'animateTo', '1, 2, 3, null'],
    [12, 'fadeOut', '1'],
    [4, 'colorTo', '2, "red"'],//建议每个颜色需要2-4个时间单位
    [24, 'fadeIn', '1'],
    [20, 'blink', '1, ["#fff", "red", "#fff", "red", "#fff"]'], //闪烁,建议每个颜色需要4个时间单位
  ];
  var query2 = [
    [20, 'blink', '1, ["#fff", "red", "#fff", "red", "#fff"]'], //闪烁,建议每个颜色需要4个时间单位
    [11, function () {
      runTog([
        [10, 'fadeOut', 2],
        [10, 'fadeOut', 3],
        [10, 'fadeOut', 4],
      ])
    }],
    [20, function () {
      runTog([
        [10, 'fadeIn', '3, 10'],
      ])
    }]
  ];

  var queryCtrl = $($('.z_animation_content')[0]).runQueryStep(query, query2);
  queryCtrl.init();
  queryCtrl.next();

  $('.next-btn').bind('click', function () {
    queryCtrl.next();
  })
  $('.prev-btn').bind('click', function () {
    queryCtrl.prev();
  })

  $('.knowledge_ul li:eq(0)').bind('click', function () {
    queryCtrl.init();
  });


})
