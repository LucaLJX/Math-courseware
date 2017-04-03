$(function () {

  var query11 = [
    [10, 'fadeIn', '0']
  ];

  var query12 = [
    [35, 'blink', '1, ["#fff", "green", "#fff", "green", "#fff", "green", "#fff"]'], //闪烁,建议每个颜色需要4个时间单位
    [10, function () {
      runTog([
        [10, 'fadeIn', '1201'],
        [10, 'fadeIn', '121'],
        [10, 'colorTo', '121, "green"'],
      ])
    }],
  ];

  var query13 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', '123'],
        [10, 'fadeIn', '125'],
        [10, 'fadeIn', '127'],
      ])
    }],
  ];

  var query14 = [
    [10, function () {
      runTog([
        [10, 'animateTo', '123, null, 1.60, null'],
        [10, 'animateTo', '125, null, 2.40, null'],
        [10, 'animateTo', '127, null, 3.20, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeIn', '124'],
        [10, 'fadeIn', '126'],
        [10, 'fadeIn', '128'],
        [10, 'fadeIn', '129'],
      ])
    }],
    [10, 'fadeIn', '122']
  ];

  var query15 = [
    [10, function () {
      runTog([
        [10, 'fadeOut', '123'],
        [10, 'fadeOut', '124'],
        [10, 'fadeOut', '125'],
        [10, 'fadeOut', '126'],
        [10, 'fadeOut', '127'],
        [10, 'fadeOut', '128'],
        [10, 'fadeOut', '129'],
      ])
    }],
    [10, 'fadeIn', '120'],
    [10, 'animateTo', '120, null, 1.45, null']
  ];

  var query16 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', '131'],
        [10, 'fadeIn', '132'],
      ])
    }],
  ];

  //query11:展示式子1
  //query12:式子一中2.5闪烁，式子二出现的时候2.5为绿色
  //query13:展示提取的三个数字
  //query14:式子2中数字移动，出现括号和乘号
  //query15:式子2中三个数字消失，出现4 ，并且移动
  //query16:展示式子3
  var queryCtrl1 = $($('.z_animation_content')[0]).runQueryStep(query11, query12, query13, query14, query15, query16);
  queryCtrl1.init();
  queryCtrl1.next();

  $('.knowledge_ul li:eq(0)').bind('click', function () {
    queryCtrl1.init();
    queryCtrl1.next();
  });


  var query21 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', '2101'],
        [10, 'fadeIn', '2102'],
        [10, 'fadeIn', '2103'],
        [10, 'fadeIn', '2104'],
        [10, 'fadeIn', '2105'],
        [10, 'fadeIn', '2106'],
        [10, 'fadeIn', '2107'],
        [10, 'fadeIn', '2108'],
        [10, 'fadeIn', '2109'],
        [10, 'fadeIn', '2110'],
        [10, 'fadeIn', '2111'],
      ])
    }],
  ];

  var query22 = [
    [35, 'blink', '91, ["#fff", "green", "#fff", "green", "#fff", "green", "#fff"]'], //闪烁,建议每个颜色需要4个时间单位
    [10, function () {
      runTog([
        [10, 'fadeIn', '2201'],
        [10, 'fadeIn', '2314'],
        [10, 'colorTo', '2201, "green"'],
      ])
    }],
  ];

  var query23 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', '2203'],
        [10, 'fadeIn', '2204'],
        [10, 'fadeIn', '2207'],
        [10, 'fadeIn', '2208'],
        [10, 'fadeIn', '2211'],
      ])
    }],
  ];

  var query24 = [
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, null, 2.80, null'],
        [10, 'animateTo', '2204, null, 3.40, null'],
        [10, 'animateTo', '2211, null, 4.40, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeIn', '2311'],
        [10, 'fadeIn', '2312'],
      ])
    }],
    [10, 'fadeIn', '2202'],
  ];

  var query25 = [
    [10, function () {
      runTog([
        [10, 'fadeOut', '2311'],
        [10, 'fadeOut', '2312'],
        [10, 'fadeOut', '2203'],
        [10, 'fadeOut', '2204'],
        [10, 'fadeOut', '2207'],
        [10, 'fadeOut', '2208'],
        [10, 'fadeOut', '2211'],
      ])
    }],
    [10, 'fadeIn', '2313'],
    [10, 'animateTo', '2313, null, 2.00, null'],
    /*[10, 'fadeIn', '2202'],*/
  ];

  var query26 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', '2411'],
        [10, 'fadeIn', '2412'],
        [10, 'fadeIn', '2413'],
        [10, 'fadeIn', '2414'],
      ])
    }],
    [35, 'blink', '92, ["#fff", "green", "#fff", "green", "#fff", "green", "#fff"]'],
    [10, 'fadeOut', '92'],
    [10, 'fadeIn', '2415'],
    [10, 'animateTo', '2415, null, 1.20, null'],
  ];



  //query21:展示式子1
  //query22:式子一中12.5闪烁，式子二出现的时候12.5为绿色
  //query23:展示提取的三个数字
  //query24:式子2中数字移动，出现括号和乘号
  //query25:式子2中三个数字消失，出现4 ，并且移动
  //query26:展示式子3
  var queryCtrl2 = $($('.z_animation_content')[1]).runQueryStep(query21, query22, query23, query24, query25, query26);

  $('.knowledge_ul li:eq(1)').bind('click', function () {
    queryCtrl2.init();
    queryCtrl2.next();
  });



})
