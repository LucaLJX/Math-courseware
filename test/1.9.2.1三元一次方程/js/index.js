$(function () {

  /*var query = [
    [1, function () {
      runTog([
        [10, 'ishow', 1],
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

  var query2 = [
    [20, 'fadeIn', '15'],
    [12, 'animateTo', '15, 2, 3, null'],
    [12, 'fadeOut', '15'],
    [24, 'fadeIn', '15'],
  ];
  var query3 = [
    [20, 'fadeIn', '13'],
    [12, 'animateTo', '13, 2, 3, null'],
    [12, 'fadeOut', '13'],
    [24, 'fadeIn', '13'],
  ];

  runQuery(query);

  $('.knowledge_ul li:eq(2)').bind('click', function () {
    runQuery(query2);
    runQuery(query3);
  });

  $('.knowledge_ul li:eq(0)').bind('click', function () {
    console.log(22)
    runQuery(query);
  });*/


  var query11 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', '111'],
        [10, 'fadeIn', '112'],
        [10, 'fadeIn', '113'],
        [10, 'fadeIn', '114'],
        [10, 'fadeIn', '115'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeIn', '121'],
        [10, 'fadeIn', '122'],
        [10, 'fadeIn', '123'],
        [10, 'fadeIn', '124'],
        [10, 'fadeIn', '125'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeIn', '131'],
        [10, 'fadeIn', '132'],
        [10, 'fadeIn', '133'],
        [10, 'fadeIn', '134'],
        [10, 'fadeIn', '135'],
      ])
    }],
    [10, 'fadeIn', '2333'],
  ];

  var query12 = [
    [10, function () {
      runTog([
        [10, 'animateTo', '114, null, 2.00, null'],
        [10, 'animateTo', '115, null, 2.30, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '121, null, 1.10, null'],
        [10, 'animateTo', '122, null, 1.40, null'],
        [10, 'animateTo', '123, null, 1.70, null'],
        [10, 'animateTo', '124, null, 2.00, null'],
        [10, 'animateTo', '125, null, 2.30, null'],

      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '132, null, 1.40, null'],
        [10, 'animateTo', '133, null, 1.70, null'],
        [10, 'animateTo', '134, null, 2.00, null'],
        [10, 'animateTo', '135, null, 2.30, null'],

      ])
    }],
  ];

  var query13 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', '161'],
        [10, 'fadeIn', '162'],
        [10, 'fadeIn', '163'],
      ])
    }],
  ];

  var query14 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', '141'],
        [10, 'fadeIn', '142'],
        [10, 'fadeIn', '143'],
        [10, 'fadeIn', '144'],
        [10, 'fadeIn', '145'],
        [10, 'fadeIn', '146'],
        [10, 'fadeIn', '147'],
        [10, 'fadeIn', '171'],
        [10, 'fadeIn', '172'],
        [10, 'fadeIn', '173'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeOut', '171'],
        [10, 'fadeOut', '172'],
        [10, 'fadeOut', '173'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeIn', '174'],
        [10, 'fadeIn', '175'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeOut', '161'],
        [10, 'fadeOut', '162'],
        [10, 'fadeOut', '163'],
      ])
    }],
  ];

  var query15 = [
    [3, function () {
      runTog([
        [3, 'fadeOut', '111'],
        [3, 'fadeOut', '112'],
        [3, 'fadeOut', '113'],
        [3, 'fadeOut', '141'],
        [3, 'fadeOut', '142'],
        [3, 'fadeOut', '143'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeIn', '111'],
        [3, 'fadeIn', '112'],
        [3, 'fadeIn', '113'],
        [3, 'fadeIn', '141'],
        [3, 'fadeIn', '142'],
        [3, 'fadeIn', '143'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeOut', '111'],
        [3, 'fadeOut', '112'],
        [3, 'fadeOut', '113'],
        [3, 'fadeOut', '141'],
        [3, 'fadeOut', '142'],
        [3, 'fadeOut', '143'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeIn', '111'],
        [3, 'fadeIn', '112'],
        [3, 'fadeIn', '113'],
        [3, 'fadeIn', '141'],
        [3, 'fadeIn', '142'],
        [3, 'fadeIn', '143'],
      ])
    }],
    [10, 'fadeIn', '151'],
  ];

  var query16 = [
    [3, function () {
      runTog([
        [3, 'fadeOut', '121'],
        [3, 'fadeOut', '122'],
        [3, 'fadeOut', '123'],
        [3, 'fadeOut', '143'],
        [3, 'fadeOut', '144'],
        [3, 'fadeOut', '145'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeIn', '121'],
        [3, 'fadeIn', '122'],
        [3, 'fadeIn', '123'],
        [3, 'fadeIn', '143'],
        [3, 'fadeIn', '144'],
        [3, 'fadeIn', '145'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeOut', '121'],
        [3, 'fadeOut', '122'],
        [3, 'fadeOut', '123'],
        [3, 'fadeOut', '143'],
        [3, 'fadeOut', '144'],
        [3, 'fadeOut', '145'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeIn', '121'],
        [3, 'fadeIn', '122'],
        [3, 'fadeIn', '123'],
        [3, 'fadeIn', '143'],
        [3, 'fadeIn', '144'],
        [3, 'fadeIn', '145'],
      ])
    }],
    [10, 'fadeIn', '152'],
  ];

  var query17 = [
    [3, function () {
      runTog([
        [3, 'fadeOut', '131'],
        [3, 'fadeOut', '132'],
        [3, 'fadeOut', '133'],
        [3, 'fadeOut', '141'],
        [3, 'fadeOut', '144'],
        [3, 'fadeOut', '145'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeIn', '131'],
        [3, 'fadeIn', '132'],
        [3, 'fadeIn', '133'],
        [3, 'fadeIn', '141'],
        [3, 'fadeIn', '144'],
        [3, 'fadeIn', '145'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeOut', '131'],
        [3, 'fadeOut', '132'],
        [3, 'fadeOut', '133'],
        [3, 'fadeOut', '141'],
        [3, 'fadeOut', '144'],
        [3, 'fadeOut', '145'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeIn', '131'],
        [3, 'fadeIn', '132'],
        [3, 'fadeIn', '133'],
        [3, 'fadeIn', '141'],
        [3, 'fadeIn', '144'],
        [3, 'fadeIn', '145'],
      ])
    }],
    [10, 'fadeIn', '153'],
  ];
  // query11:展示左边的方程组
  // query12:向右移动
  // query13:显示方框
  // query14:显示全的式子,并且变换，隐藏方框
  // query15:x+y闪烁
  // query16:y+z闪烁
  // query17:x+z闪烁

  var rq1 = $($('.z_animation_content')[0]).runQueryStep(query11, query12, query13, query14, query15, query16, query17);
  rq1.init();
  rq1.next();

  $('.knowledge_ul li:eq(0)').bind('click', function () {
    rq1.init();
    rq1.next();
  });

  var query21 = [
    [10, 'fadeIn', '211'],
    [10, 'fadeIn', '212'],
    [10, 'fadeIn', '213'],
    [10, 'fadeIn', '221'],
    [10, 'fadeIn', '222'],
    [10, 'fadeIn', '223'],
    [10, 'fadeIn', '241'],
  ];

  var query22 = [
    [10, 'fadeIn', '2301'],
  ];

  var query23 = [
    [10, 'fadeIn', '2302'],
  ];

  var query24 = [
    [10, 'fadeIn', '2303'],
  ];

  var query25 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', '2304'],
        [10, 'fadeIn', '2305'],
        [10, 'fadeIn', '242'],
      ])
    }],
  ];

  var query26 = [
    [10, 'fadeIn', '2306'],
  ];

  var query27 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', '2307'],
        [10, 'fadeIn', '2308'],
        [10, 'fadeIn', '243'],
      ])
    }],
  ];

  var query28 = [
    [10, 'fadeIn', '2309'],
  ];

  var query29 = [
    [10, 'fadeIn', '2310'],
    [10, function () {
      runTog([
        [10, 'fadeIn', '2311'],
        [10, 'fadeIn', '2312'],
        [10, 'fadeIn', '2313'],
        [10, 'fadeIn', '244'],
      ])
    }],
  ];

  // query21:显示方程组跟花括号，还有编号
  // query22:显示右边式子1
  // query23:显示右边式子2
  // query24:显示右边式子3
  // query25:显示右边式子4
  // query26:显示右边式子5
  // query27:显示右边式子6
  // query28:显示右边式子7
  // query29:显示右边式子8
  var rq2 = $($('.z_animation_content')[1]).runQueryStep(query21, query22, query23, query24, query25, query26, query27, query28, query29);

  $('.knowledge_ul li:eq(1)').bind('click', function () {
    rq2.init();
    rq2.next();
  });  
})
