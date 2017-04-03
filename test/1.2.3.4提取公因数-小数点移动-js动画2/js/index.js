$(function () {

  

  var query11 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', '1101'],
        [10, 'fadeIn', '1102'],
        [10, 'fadeIn', '1103'],
        [10, 'fadeIn', '1104'],
        [10, 'fadeIn', '1105'],
        [10, 'fadeIn', '1106'],
        [10, 'fadeIn', '1107'],
        [10, 'fadeIn', '1108'],
        [10, 'fadeIn', '1109'],
        [10, 'fadeIn', '1110'],
        [10, 'fadeIn', '1111'],
        [10, 'fadeIn', '1112'],
        [10, 'fadeIn', '1113'],
        [10, 'fadeIn', '1114'],
        [10, 'fadeIn', '1115'],
        [10, 'fadeIn', '1116'],
      ])
    }],
  ];

  var query12 = [
    [3, function () {
      runTog([
        [3, 'fadeOut', '1110'],
        [3, 'fadeOut', '1116'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeIn', '1110'],
        [3, 'fadeIn', '1116'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeOut', '1110'],
        [3, 'fadeOut', '1116'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeIn', '1110'],
        [3, 'fadeIn', '1116'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeOut', '1110'],
        [3, 'fadeOut', '1116'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeIn', '1110'],
        [3, 'fadeIn', '1116'],
      ])
    }],
    /*下面是小数点移动位置，后续加图片一起移动位置*/
    /*1.两根食指的图片出现--begin*/
    [10, function () {
      runTog([
        [10, 'fadeIn', '1131'],
        [10, 'fadeIn', '1132'],
      ])
    }],
    /*1.两根食指的图片出现--end*/
    /*2.图片、数字、点三者一起移动位置--begin*/
    [10, function () {
      runTog([
        [10, 'animateTo', '1110, null, 3.40, null'],
        [10, 'animateTo', '1111, null, 3.20, null'],
        [10, 'animateTo', '1115, null, 4.40, null'],
        [10, 'animateTo', '1116, null, 4.20, null'],
        [10, 'animateTo', '1131, null, 3.30, null'],
        [10, 'animateTo', '1132, null, 4.10, null'],
      ])
    }],
    /*2.图片、数字、点三者一起移动位置--end*/
    /*3.两根食指的图片消失--begin*/
    [10, function () {
      runTog([
        [10, 'fadeOut', '1131'],
        [10, 'fadeOut', '1132'],
      ])
    }],
    /*3.两根食指的图片消失--end*/
    /*4.无用的0跟小数点消失--begin*/
    [10, function () {
      runTog([
        [10, 'fadeOut', '1115'],
        [10, 'fadeOut', '1116'],
        [10, 'fadeOut', '1109'],
        [10, 'fadeOut', '1131'],
        [10, 'fadeOut', '1132'],
      ])
    }],
    /*4.无用的0跟小数点消失--end*/
    [10, function () {
      runTog([
        [10, 'animateTo', '1111, null, 3.00, null'],
        [10, 'animateTo', '1110, null, 3.20, null'],
        [10, 'animateTo', '1112, null, 3.40, null'],
        [10, 'animateTo', '1113, null, 3.60, null'],
        [10, 'animateTo', '1114, null, 3.80, null'],
      ])
    }],
  ];

  var query13 = [
    /*出现手-张开*/
    [10, 'fadeIn', '1133'],
    /*下滑，手消失-张开，手出现-抓取*/
    [10, 'animateTo', '1133, 0.30, null, null'],
    [1, function(){
      ihide(1133)
      ishow(1134)
    }],
    /*手、数字一起上滑*/
    [10, function () {
      runTog([
        [10, 'animateTo', '1105, 0.30, null, null'],
        [10, 'animateTo', '1106, 0.30, null, null'],
        [10, 'animateTo', '1133, "0.00", null, null'],
        [10, 'animateTo', '1134, "0.00", null, null'],
      ])
    }],
    /*手、数字一起左滑*/
    [10, function () {
      runTog([
        [10, 'animateTo', '1133, null, 0.80, null'],
        [10, 'animateTo', '1134, null, 0.80, null'],
        [10, 'animateTo', '1105, null, 0.60, null'],
        [10, 'animateTo', '1106, null, 1.00, null'],
      ])
    }],
    /*手、数字一起下滑*/
    [10, function () {
      runTog([
        [10, 'animateTo', '1133, 0.30, null, null'],
        [10, 'animateTo', '1134, 0.30, null, null'],
        [10, 'animateTo', '1105, 0.60, null, null'],
        [10, 'animateTo', '1106, 0.60, null, null'],
        [10, 'fadeOut', '1105'],
        [10, 'fadeOut', '1106'],
      ])
    }],
    /*手释放(抓取-消失，张开出现)并且上升*/
    [1, function(){
      ihide(1134)
      ishow(1133)
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '1133, "0.00", null, null'],
        [10, 'animateTo', '1134, "0.00", null, null'],
      ])
    }],
    /*手右移*/
    [10, function () {
      runTog([
        [10, 'animateTo', '1133, null, 3.30, null'],
        [10, 'animateTo', '1134, null, 3.30, null'],
      ])
    }],
    /*手下降并且抓取*/
    [10, function () {
      runTog([
        [10, 'animateTo', '1133, 0.30, null, null'],
        [10, 'animateTo', '1134, 0.30, null, null'],
      ])
    }],
    [1, function(){
      ihide(1133)
      ishow(1134)
    }],
    /*手、数字一起上移*/
    [10, function () {
      runTog([
        [10, 'animateTo', '1133, "0.00", null, null'],
        [10, 'animateTo', '1134, "0.00", null, null'],
        [10, 'animateTo', '1110, 0.30, null, null'],
        [10, 'animateTo', '1111, 0.30, null, null'],
        [10, 'animateTo', '1112, 0.30, null, null'],
        [10, 'animateTo', '1113, 0.30, null, null'],
      ])
    }],
    /*手、数字一起左移*/
    [10, function () {
      runTog([
        [10, 'animateTo', '1133, null, 0.80, null'],
        [10, 'animateTo', '1134, null, 0.80, null'],
        [10, 'animateTo', '1111, null, 0.60, null'],
        [10, 'animateTo', '1110, null, 0.80, null'],
        [10, 'animateTo', '1112, null, 1.00, null'],
        [10, 'animateTo', '1113, null, 1.20, null'],
      ])
    }],
    /*手、数字一起下滑，数字消失*/
    [10, function () {
      runTog([
        [10, 'animateTo', '1133, 0.30, null, null'],
        [10, 'animateTo', '1134, 0.30, null, null'],
        [10, 'animateTo', '1111, 0.60, null, null'],
        [10, 'animateTo', '1110, 0.60, null, null'],
        [10, 'animateTo', '1112, 0.60, null, null'],
        [10, 'animateTo', '1113, 0.60, null, null'],
        [8, 'fadeOut', '1110'],
        [1, 'fadeOut', '1111'],
        [1, 'fadeOut', '1112'],
        [1, 'fadeOut', '1113'],
      ])
    }],
    /*手释放，上升并且消失*/
    [1, function(){
      ihide(1134)
      ishow(1133)
    }],
    [10, 'animateTo', '1133, "0.00", null, null'],
    [10, 'fadeOut', '1133'],
  ];

  var query14 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 1135],
        [10, 'fadeIn', 1136],
      ])
    }],
  ];

  var query15 = [
    [10, function () {
      runTog([
        /*左边*/
        [10, 'animateTo', '1135, null, 1.50, null'],
        [10, 'animateTo', '1103, null, 1.80, null'],
        [10, 'animateTo', '1104, null, 2.20, null'],
        /*右边*/
        [10, 'animateTo', '1136, null, 3.10, null'],
        [10, 'animateTo', '1114, null, 3.00, null'],
      ])
    }],
  ];

  var query16 = [
    [10, function () {
      runTog([
        [10, 'fadeOut', 1135],
        [10, 'fadeOut', 1136],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeIn', 1137],
        [10, 'fadeIn', 1138],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '1137, null, 1.20, null'],
        [10, 'animateTo', '1138, null, 2.80, null'],
        [10, 'animateTo', '1103, null, 1.40, null'],
        [10, 'animateTo', '1104, null, 1.80, null'],
        [10, 'animateTo', '1107, null, 2.00, null'],
        [10, 'animateTo', '1108, null, 2.40, null'],
        [10, 'animateTo', '1114, null, 2.60, null'],
      ])
    }],
  ];

  var query17 = [
    [10, 'fadeIn', 1121],
  ];

  var query18 = [
    [10, 'fadeIn', 1122],
  ];
  // query11--展示式子
  // query12--小数点变换、手动小数点
  // query13--7.8消除，需要用到手,手动作结束
  // query14--出现手掌
  // query15--手掌跟数字移动
  // query16--手掌消失，括号出来，移动
  // query17--出现式子2
  // query18--出现式子3
  var queryCtrl1 = $($('.z_animation_content')[0]).runQueryStep(query11, query12, query13, query14, query15, query16, query17, query18);
    queryCtrl1.init();
    queryCtrl1.next();

    $('.knowledge_ul li:eq(0)').bind('click', function () {
      queryCtrl1.init();
      queryCtrl1.next();
    });

  // query21--展示式子
  var query21 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 2101],
        [10, 'fadeIn', 2102],
        [10, 'fadeIn', 2103],
        [10, 'fadeIn', 2104],
        [10, 'fadeIn', 2105],
        [10, 'fadeIn', 2106],
        [10, 'fadeIn', 2107],
        [10, 'fadeIn', 2108],
        [10, 'fadeIn', 2109],
        [10, 'fadeIn', 2110],
        [10, 'fadeIn', 2111],
        [10, 'fadeIn', 2112],
        [10, 'fadeIn', 2113],
        [10, 'fadeIn', 2114],
        [10, 'fadeIn', 2115],
        [10, 'fadeIn', 2116],
        [10, 'fadeIn', 2117],
        [10, 'fadeIn', 2118],
        [10, 'fadeIn', 2119],
        [10, 'fadeIn', 2120],
        [10, 'fadeIn', 2121],
        [10, 'fadeIn', 2122],
        [10, 'fadeIn', 2123],
        [10, 'fadeIn', 2124],
        [10, 'fadeIn', 2125],
        [10, 'fadeIn', 2126],
        [10, 'fadeIn', 2127],
        [10, 'fadeIn', 2128],
        [10, 'fadeIn', 2129],
        [10, 'fadeIn', 2130],
        [10, 'fadeIn', 2131],
        [10, 'fadeIn', 2132],
      ])
    }],
  ];

  // query22--小数点闪动，食指出现
  var query22 = [
    [3, function () {
      runTog([
        [2, 'fadeOut', 2119],
        [2, 'fadeOut', 2122],
        [2, 'fadeOut', 2127],
        [2, 'fadeOut', 2131],
      ])
    }],
    [3, function () {
      runTog([
        [2, 'fadeIn', 2119],
        [2, 'fadeIn', 2122],
        [2, 'fadeIn', 2127],
        [2, 'fadeIn', 2131],
      ])
    }],
    [3, function () {
      runTog([
        [2, 'fadeOut', 2119],
        [2, 'fadeOut', 2122],
        [2, 'fadeOut', 2127],
        [2, 'fadeOut', 2131],
      ])
    }],
    [3, function () {
      runTog([
        [2, 'fadeIn', 2119],
        [2, 'fadeIn', 2122],
        [2, 'fadeIn', 2127],
        [2, 'fadeIn', 2131],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeIn', 2201],
        [10, 'fadeIn', 2202],
      ])
    }]
  ];
  // query23--第一次小数点移位
  var query23 = [
    [10, function () {
      runTog([
        [10, 'animateTo', '2201, null, 3.65, null'],
        [10, 'animateTo', '2202, null, 5.00, null'],
        [10, 'animateTo', '2117, null, 3.95, null'],
        [10, 'animateTo', '2118, null, 4.10, null'],
        [10, 'animateTo', '2119, null, 3.80, null'],
        [10, 'animateTo', '2122, null, 5.05, null'],
        [10, 'animateTo', '2123, null, 4.75, null'],
        [10, 'animateTo', '2124, null, 4.90, null'],
      ])
    }],
  ];

  var query24 = [
    [10, function () {
      runTog([
        [10, 'animateTo', '2201, null, 5.55, null'],
        [10, 'animateTo', '2202, null, 6.35, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '2201, null, 5.40, null'],
        [10, 'animateTo', '2202, null, 6.50, null'],
        [10, 'animateTo', '2126, null, 5.70, null'],
        [10, 'animateTo', '2127, null, 5.55, null'],
        [10, 'animateTo', '2131, null, 6.65, null'],
        [10, 'animateTo', '2132, null, 6.50, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeOut', 2201],
        [10, 'fadeOut', 2202],
      ])
    }],
  ];

  var query25 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 2133],
        [10, 'fadeIn', 2134],
        [10, 'animateTo', '2119, null, 3.95, null'],
        [10, 'animateTo', '2117, null, 4.10, null'],
        [10, 'animateTo', '2118, null, 4.25, null'],
        [10, 'animateTo', '2120, null, 4.50, null'],
        [10, 'fadeOut', 2121],
        [10, 'fadeOut', 2122],
        [10, 'animateTo', '2127, null, 5.70, null'],
        [10, 'animateTo', '2126, null, 5.85, null'],
        [10, 'animateTo', '2128, null, 6.00, null'],
        [10, 'animateTo', '2129, null, 6.25, null'],
        [10, 'animateTo', '2130, null, 6.50, null'],
        [10, 'animateTo', '2132, null, 6.65, null'],
        [10, 'fadeOut', 2131],

      ])
    }],
  ];

  var query26 = [
    [10, 'fadeIn', 2203],
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, 0.20, null, null'],
        [10, 'animateTo', '2204, 0.20, null, null'],
      ])
    }],
    [1, function(){
      ihide(2203)
      ishow(2204)
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, -0.10, null, null'],
        [10, 'animateTo', '2204, -0.10, null, null'],
        [10, 'animateTo', '2109, 0.30, null, null'],
        [10, 'animateTo', '2110, 0.30, null, null'],
        [10, 'animateTo', '2111, 0.30, null, null'],
        [10, 'animateTo', '2112, 0.30, null, null'],
        [10, 'animateTo', '2113, 0.30, null, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, null, 0.90, null'],
        [10, 'animateTo', '2204, null, 0.90, null'],
        [10, 'animateTo', '2109, null, 0.60, null'],
        [10, 'animateTo', '2110, null, 0.75, null'],
        [10, 'animateTo', '2111, null, 0.90, null'],
        [10, 'animateTo', '2112, null, 1.05, null'],
        [10, 'animateTo', '2113, null, 1.30, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, 0.20, null, null'],
        [10, 'animateTo', '2204, 0.20, null, null'],
        [10, 'animateTo', '2109, 0.60, null, null'],
        [10, 'animateTo', '2110, 0.60, null, null'],
        [10, 'animateTo', '2111, 0.60, null, null'],
        [10, 'animateTo', '2112, 0.60, null, null'],
        [10, 'animateTo', '2113, 0.60, null, null'],
      ])
    }],
    [1, function(){
      ihide(2204)
      ishow(2203)
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, -0.10, null, null'],
        [10, 'animateTo', '2204, -0.10, null, null'],
      ])
    }],
  ];

  var query27 = [
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, null, 4.10, null'],
        [10, 'animateTo', '2204, null, 4.10, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, 0.20, null, null'],
        [10, 'animateTo', '2204, 0.20, null, null'],
      ])
    }],
    [1, function(){
      ihide(2203)
      ishow(2204)
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, -0.10, null, null'],
        [10, 'animateTo', '2204, -0.10, null, null'],
        [10, 'animateTo', '2133, 0.30, null, null'],
        [10, 'animateTo', '2119, 0.30, null, null'],
        [10, 'animateTo', '2117, 0.30, null, null'],
        [10, 'animateTo', '2118, 0.30, null, null'],
        [10, 'animateTo', '2120, 0.30, null, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, null, 0.90, null'],
        [10, 'animateTo', '2204, null, 0.90, null'],
        [10, 'animateTo', '2133, null, 0.60, null'],
        [10, 'animateTo', '2119, null, 0.75, null'],
        [10, 'animateTo', '2117, null, 0.90, null'],
        [10, 'animateTo', '2118, null, 1.05, null'],
        [10, 'animateTo', '2120, null, 1.30, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, 0.20, null, null'],
        [10, 'animateTo', '2204, 0.20, null, null'],
        [10, 'animateTo', '2133, 0.60, null, null'],
        [10, 'animateTo', '2119, 0.60, null, null'],
        [10, 'animateTo', '2117, 0.60, null, null'],
        [10, 'animateTo', '2118, 0.60, null, null'],
        [10, 'animateTo', '2120, 0.60, null, null'],
      ])
    }],
    [1, function(){
      ihide(2204)
      ishow(2203)
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, -0.10, null, null'],
        [10, 'animateTo', '2204, -0.10, null, null'],
      ])
    }],
  ];

  var query28 = [
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, null, 5.85, null'],
        [10, 'animateTo', '2204, null, 5.85, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, 0.20, null, null'],
        [10, 'animateTo', '2204, 0.20, null, null'],
      ])
    }],
    [1, function(){
      ihide(2203)
      ishow(2204)
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, -0.10, null, null'],
        [10, 'animateTo', '2204, -0.10, null, null'],
        [10, 'animateTo', '2134, 0.30, null, null'],
        [10, 'animateTo', '2127, 0.30, null, null'],
        [10, 'animateTo', '2126, 0.30, null, null'],
        [10, 'animateTo', '2128, 0.30, null, null'],
        [10, 'animateTo', '2129, 0.30, null, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, null, 0.90, null'],
        [10, 'animateTo', '2204, null, 0.90, null'],
        [10, 'animateTo', '2134, null, 0.60, null'],
        [10, 'animateTo', '2127, null, 0.75, null'],
        [10, 'animateTo', '2126, null, 0.90, null'],
        [10, 'animateTo', '2128, null, 1.05, null'],
        [10, 'animateTo', '2129, null, 1.30, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, 0.20, null, null'],
        [10, 'animateTo', '2204, 0.20, null, null'],
        [10, 'animateTo', '2134, 0.60, null, null'],
        [10, 'animateTo', '2127, 0.60, null, null'],
        [10, 'animateTo', '2126, 0.60, null, null'],
        [10, 'animateTo', '2128, 0.60, null, null'],
        [10, 'animateTo', '2129, 0.60, null, null'],
      ])
    }],
    [1, function(){
      ihide(2204)
      ishow(2203)
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '2203, -0.10, null, null'],
        [10, 'fadeOut', 2203]
      ])
    }],
  ];

  var query29 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 2205],
        [10, 'fadeIn', 2206],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '2106, null, 2.70, null'],
        [10, 'animateTo', '2107, null, 2.85, null'],
        [10, 'animateTo', '2108, null, 3.10, null'],
        [10, 'animateTo', '2114, null, 3.40, null'],
        [10, 'animateTo', '2115, null, 3.55, null'],
        [10, 'animateTo', '2116, null, 3.80, null'],
        [10, 'animateTo', '2123, null, 4.05, null'],
        [10, 'animateTo', '2124, null, 4.20, null'],
        [10, 'animateTo', '2125, null, 4.45, null'],
        [10, 'animateTo', '2130, null, 4.70, null'],
        [10, 'animateTo', '2132, null, 4.85, null'],
        [10, 'animateTo', '2205, null, 2.65, null'],
        [10, 'animateTo', '2206, null, 4.80, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeOut', 2205],
        [10, 'fadeOut', 2206],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeIn', 2207],
        [10, 'fadeIn', 2208],
      ])
    }],
  ];

  var query30 = [
    [10, function () {
      runTog([
        [10, 'animateTo', '2207, null, 1.55, null'],
        [10, 'animateTo', '2106, null, 1.80, null'],
        [10, 'animateTo', '2107, null, 1.95, null'],
        [10, 'animateTo', '2108, null, 2.20, null'],
        [10, 'animateTo', '2114, null, 2.45, null'],
        [10, 'animateTo', '2115, null, 2.60, null'],
        [10, 'animateTo', '2116, null, 2.85, null'],
        [10, 'animateTo', '2123, null, 3.10, null'],
        [10, 'animateTo', '2124, null, 3.25, null'],
        [10, 'animateTo', '2125, null, 3.50, null'],
        [10, 'animateTo', '2130, null, 3.75, null'],
        [10, 'animateTo', '2132, null, 3.90, null'],
        [10, 'animateTo', '2208, null, 4.15, null'],
      ])
    }],
    [10, 'fadeIn', '2209'],
    [10, 'fadeIn', '2210'],
  ];
  // query21--展示式子
  // query22--食指出现
  // query23--第一次小数点移位
  // query24--食指平移,小数点移位,食指消失
  // query25--0出现,数字移动
  // query26--手掌出现，抓取，移动第一次
  // query27--抓取第二次
  // query28--抓取第三次
  // query29--手出现，向中间移动,手消失，括号出来
  // query30--式子整体左移
  
  var queryCtrl2 = $($('.z_animation_content')[1]).runQueryStep(query21, query22, query23, query24, query25, query26, query27, query28, query29, query30);

  $('.knowledge_ul li:eq(1)').bind('click', function () {
    queryCtrl2.init();
    queryCtrl2.next();
  });

    /*$('.knowledge_ul li:eq(1)').bind('click', function () {
      queryCtrl2.init();
      queryCtrl2.next();
    });*/

})
