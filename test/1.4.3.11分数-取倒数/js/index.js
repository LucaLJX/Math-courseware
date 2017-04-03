$(function () {

  var query = [
    [1, function () {
      runTog([
        [10, 'ishow', 11],
        [10, 'ishow', 12],
        [10, 'ishow', 13],
        [10, 'ishow', 21],
        [10, 'ishow', 22],
        [10, 'ishow', 23],
        [10, 'ishow', 2],
        [10, 'ishow', 3],
        [10, 'ishow', 4],
      ])
    }],
    [20, 'fadeIn', '1'],
    [12, 'animateTo', '1, 2, 3, null'],
    [12, 'fadeOut', '1'],
    [4, 'colorTo', '2, "red"'],//建议每个颜色需要4个时间单位
    [24, 'fadeIn', '1'],
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
        [10, 'fadeIn', 2],
        [10, 'fadeIn', '3, 10'],
        [10, 'fadeIn', 4],
        [10, 'fadeIn', 5],
        [10, 'fadeIn', 6],
        [10, 'fadeIn', 7],
      ])
    }]
  ];

  var query1 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 111],
        [10, 'fadeIn', 112],
        [10, 'fadeIn', 113],
      ])
    }],
    [10, 'fadeIn', '1000'],
    [10, function () {
      runTog([
        [10, 'fadeIn', 122],
        [10, 'fadeIn', 121],
        [10, 'fadeIn', 123],
      ])
    }],
    [10, function () {
      runTog([
        [12, 'animateTo', '121, 1.63, 3.28, null'],
        [12, 'animateTo', '123, 1.04, 3.28, null'],
      ])
    }],
  ];
  var query2 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 211],
        [10, 'fadeIn', 212],
        [10, 'fadeIn', 213],
      ])
    }],
    [10, 'fadeIn', '2000'],
    [10, function () {
      runTog([
        [10, 'fadeIn', 222],
        [10, 'fadeIn', 221],
        [10, 'fadeIn', 223],
      ])
    }],
    [10, function () {
      runTog([
        [12, 'animateTo', '221, 1.63, 3.28, null'],
        [12, 'animateTo', '223, 1.04, 3.28, null'],
      ])
    }],
    [10, 'fadeIn', '2001'],
    [10, function () {
      runTog([
        [10, 'fadeIn', 231],
        [10, 'fadeIn', 232],
        [10, 'fadeIn', 233],
      ])
    }],
    [20, 'blink', '233, ["#fff", "#fff336", "#fff", "#fff336", "#fff"]'],
    [10, function () {
      runTog([
        [10, 'fadeOut', 232],
        [10, 'fadeOut', 233],
      ])
    }],
    [12, 'animateTo', '231, 1.35, 5.18, null'],
  ];
  var query3 = [
    [10, 'fadeIn', '311'],
    [10, 'fadeIn', '3000'],
    [10, 'fadeIn', '321'],
    [10, function () {
      runTog([
        [12, 'animateTo', '321, 1.04, 3.28, null'],
        [10, 'fadeIn', 322],
        [10, 'fadeIn', 323],
      ])
    }],
    [10, 'fadeIn', '3001'],
    [10, function () {
      runTog([
        [10, 'fadeIn', 331],
        [10, 'fadeIn', 332],
        [10, 'fadeIn', 333],
      ])
    }],
    [10, function () {
      runTog([
        [12, 'animateTo', '331, 1.63, 5.18, null'],
        [12, 'animateTo', '333, 1.04, 5.18, null'],
      ])
    }],
  ];
  var query4 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 410],
        [10, 'fadeIn', 411],
        [10, 'fadeIn', 412],
        [10, 'fadeIn', 413],
      ])
    }],
    [10, 'fadeIn', '4000'],
    [10, function () {
      runTog([
        [10, 'fadeIn', 420],
        [10, 'fadeIn', 421],
        [10, 'fadeIn', 422],
        [10, 'fadeIn', 423],
      ])
    }],
    [10, function () {
      runTog([
        [12, 'animateTo', '420, 1.04, 3.28, null'],
        [10, 'fadeOut', 421],
      ])
    }],
    [10, function () {
      runTog([
        [12, 'animateTo', '321, 1.04, 3.28, null'],
        [10, 'fadeIn', 422],
        [10, 'fadeIn', 423],
        [10, 'fadeOut', 420],
        [10, 'fadeIn', 424],
      ])
    }],
    [10, 'fadeIn', '4001'],
    [10, function () {
      runTog([
        [10, 'fadeIn', 431],
        [10, 'fadeIn', 432],
        [10, 'fadeIn', 433],
      ])
    }],
    [10, function () {
      runTog([
        [12, 'animateTo', '431, 1.63, 5.18, null'],
        [12, 'animateTo', '433, 1.04, 5.18, null'],
      ])
    }],
  ];


  var rq0 = $($('.z_animation_content')[0]).runQueryStep(
    query1
  );
  rq0.init();
  rq0.next();

  var rq1 = $($('.z_animation_content')[1]).runQueryStep(
    query2
  );
  rq1.init();
  rq1.next();

  var rq2 = $($('.z_animation_content')[2]).runQueryStep(
    query3
  );
  rq2.init();
  rq2.next();

  var rq3 = $($('.z_animation_content')[3]).runQueryStep(
    query4
  );
  rq3.init();
  rq3.next();

  $('.knowledge_ul li:eq(0)').bind('click', function () {
    rq0.init();
    rq0.next();
  });
  $('.knowledge_ul li:eq(1)').bind('click', function () {
    rq1.init();
    rq1.next();
  });
  $('.knowledge_ul li:eq(2)').bind('click', function () {
    rq2.init();
    rq2.next();
  });
  $('.knowledge_ul li:eq(3)').bind('click', function () {
    rq3.init();
    rq3.next();
  });

})
