$(function () {

  var ljxq1 = [
    [10, function () {
      runTog([
        [2, 'fadeIn', 170101],
        [2, 'fadeIn', 170102],
        [2, 'fadeIn', 170201],
        [2, 'fadeIn', 170202],
        [2, 'fadeIn', 170301],
        [2, 'fadeIn', 170302],
      ])
    }],
  ];

  var ljxq2 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 170401],
        [10, 'fadeIn', 170501],
        [10, 'fadeIn', 170601],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeIn', 170402],
        [10, 'fadeIn', 170502],
        [10, 'fadeIn', 170602],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeIn', 170403],
        [10, 'fadeIn', 170503],
        [10, 'fadeIn', 170603],
      ])
    }],
  ];

  var ljxq3 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 170404],
        [10, 'fadeIn', 170504],
        [10, 'fadeIn', 170606],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeIn', 170405],
        [10, 'fadeIn', 170505],
        [10, 'fadeIn', 170605],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeIn', 170406],
        [10, 'fadeIn', 170506],
        [10, 'fadeIn', 170604],
        [10, 'animateTo', '170605, null, 5.20, null'],
        [10, 'animateTo', '170606, null, 5.45, null'],
      ])
    }],
  ];

  var ljxq4 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 170701],
        [10, 'fadeIn', 170702],
        [10, 'fadeIn', 170703],
        [10, 'fadeIn', 170706],
        [10, 'fadeIn', 170707],
        [10, 'fadeIn', 170708],
      ])
    }],
  ];

  var ljxq5 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 170704],
        [10, 'fadeIn', 170709],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeIn', 170705],
        [10, 'fadeIn', 170710],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeIn', 170801],
        [10, 'fadeIn', 170802],
      ])
    }],
  ];

  var ljxq6 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 170901],
        [10, 'fadeIn', 170902],
      ])
    }],
    [10, 'animateTo', '170901, 0.46, 3.50, null'],
  ];

  //query11:展示式子1
  //query12:式子一中2.5闪烁，式子二出现的时候2.5为绿色
  //query13:展示提取的三个数字
  //query14:式子2中数字移动，出现括号和乘号
  //query15:式子2中三个数字消失，出现4 ，并且移动
  //query16:展示式子3
  var ljx_queryCtrl1 = $($('.z_animation_content')[0]).runQueryStep(ljxq1, ljxq2, ljxq3, ljxq4, ljxq5, ljxq6);
  ljx_queryCtrl1.init();
  ljx_queryCtrl1.next();

  $('.knowledge_ul li:eq(0)').bind('click', function () {
    ljx_queryCtrl1.init();
    ljx_queryCtrl1.next();
  });


  
  var queryCtrl2 = $($('.z_animation_content')[1]).runQueryStep();

  $('.knowledge_ul li:eq(1)').bind('click', function () {
    queryCtrl2.init();
    queryCtrl2.next();
  });



})
