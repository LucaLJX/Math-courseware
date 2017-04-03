$(function () {

  var q11 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', '111'],
        [10, 'fadeIn', '121'],
        [10, 'fadeIn', '131'],
      ])
    }],
  ];
  var q12 = [
    [10, 'fadeIn', 122],
    [10, function () {
      runTog([
        [10, 'fadeIn', 112],
        [10, 'fadeIn', 123],
        [10, 'fadeIn', 132],
      ])
    }],
    [10, 'fadeIn', 141],
    [5, 'fadeIn', 142],
  ];
  var q13 = [
    [10, 'fadeIn', 151],
    [2, 'fadeIn', 161],
    [2, 'fadeIn', 162],
    [2, 'fadeIn', 163],
    [2, 'fadeIn', 164],
    [2, 'fadeIn', 165],
    [2, 'fadeIn', 166],
    [2, 'fadeIn', 167],
    [2, 'fadeIn', 168],
    [2, 'fadeIn', 169],
    [2, 'fadeIn', 170],
    [2, 'fadeIn', 171],
    [2, 'fadeIn', 172],
    [2, 'fadeIn', 173],
    [2, 'fadeIn', 174],
    [2, 'fadeIn', 175],
    [2, 'fadeIn', 176],
    [2, 'fadeIn', 177],
    [2, 'fadeIn', 178],
    [2, 'fadeIn', 179],
    [2, 'fadeIn', 180],
    [2, 'fadeIn', 181],
    [2, 'fadeIn', 182],
    [10, function () {
    }],
    [3, 'backColorTo', '166, "#96a983"'],
    [3, 'backColorTo', '167, "#96a983"'],
    [3, 'backColorTo', '168, "#96a983"'],
    [3, 'backColorTo', '169, "#96a983"'],
    [3, 'backColorTo', '170, "#96a983"'],
    [10, function () {
    }],
    [3, 'backColorTo', '171, "#d99690"'],
    [3, 'backColorTo', '172, "#d99690"'],
    [3, 'backColorTo', '173, "#d99690"'],
    [3, 'backColorTo', '174, "#d99690"'],
    [3, 'backColorTo', '175, "#d99690"'],
    [10, function () {
    }],
    [3, 'backColorTo', '176, "#93cddd"'],
    [3, 'backColorTo', '177, "#93cddd"'],
    [3, 'backColorTo', '178, "#93cddd"'],
    [3, 'backColorTo', '179, "#93cddd"'],
    [3, 'backColorTo', '180, "#93cddd"'],
    [10, function () {
    }],
    [3, 'backColorTo', '181, "#00b0f0"'],
    [3, 'backColorTo', '182, "#00b0f0"'],

    [10, 'fadeIn', 191],
    [10, 'fadeIn', 190],
    [10, 'fadeOut', 190],
    [10, 'fadeOut', 191],

    [10, 'fadeIn', 193],
    [10, 'fadeIn', 194],
    [10, 'fadeIn', 195],
    [10, 'fadeIn', 196],
    [10, 'fadeIn', 192],
    [20, function () {
    }],
    [10, function () {
      runTog([
        [10, 'fadeOut', 193],
        [10, 'fadeOut', 194],
        [10, 'fadeOut', 195],
        [10, 'fadeOut', 196],
        [10, 'fadeOut', 192],
      ])
    }],
    [10, 'fadeIn', 198],
    [10, 'fadeIn', 197],
    [10, function () {
      runTog([
        [10, 'fadeOut', 198],
        [10, 'fadeOut', 197],
      ])
    }],

    [10, 'fadeIn', 1151],
    [2, 'fadeIn', 1161],
    [2, 'fadeIn', 1162],
    [2, 'fadeIn', 1163],
    [2, 'fadeIn', 1164],
    [2, 'fadeIn', 1165],
    [2, 'fadeIn', 1166],
    [2, 'fadeIn', 1167],
    [2, 'fadeIn', 1168],
    [2, 'fadeIn', 1169],
    [2, 'fadeIn', 1170],
    [2, 'fadeIn', 1171],
    [2, 'fadeIn', 1172],
    [2, 'fadeIn', 1173],
    [2, 'fadeIn', 1174],
    [2, 'fadeIn', 1175],
    [2, 'fadeIn', 1176],
    [10, function () {
    }],
    [3, 'backColorTo', '1166, "#96a983"'],
    [3, 'backColorTo', '1167, "#96a983"'],
    [3, 'backColorTo', '1168, "#96a983"'],
    [3, 'backColorTo', '1169, "#96a983"'],
    [3, 'backColorTo', '1170, "#96a983"'],
    [10, function () {
    }],
    [3, 'backColorTo', '1171, "#d99690"'],
    [3, 'backColorTo', '1172, "#d99690"'],
    [3, 'backColorTo', '1173, "#d99690"'],
    [3, 'backColorTo', '1174, "#d99690"'],
    [3, 'backColorTo', '1175, "#d99690"'],
    [10, function () {
    }],
    [3, 'backColorTo', '1176, "#00b0f0"'],


    [10, 'fadeIn', 1191],
    [10, 'fadeIn', 1190],
    [10, 'fadeOut', 1190],
    [10, 'fadeOut', 1191],

    [10, 'fadeIn', 1193],
    [10, 'fadeIn', 1194],
    [10, 'fadeIn', 1195],
    [10, 'fadeIn', 1192],
    [20, function () {
    }],
    [10, function () {
      runTog([
        [10, 'fadeOut', 1193],
        [10, 'fadeOut', 1194],
        [10, 'fadeOut', 1195],
        [10, 'fadeOut', 1192],
      ])
    }],
    [10, 'fadeIn', 1198],
    [10, 'fadeIn', 1197],
    [10, function () {
      runTog([
        [10, 'fadeOut', 1198],
        [10, 'fadeOut', 1197],
      ])
    }],


    [10, 'fadeIn', 1251],
    [10, function () {
      runTog([
        [10, 'ishow', 1261],
        [10, 'ishow', 1262],
        [10, 'ishow', 1263],
        [10, 'ishow', 1264],
        [10, 'ishow', 1265],
        [10, 'ishow', 1266],
        [10, 'ishow', 1267],
        [10, 'ishow', 1268],
        [10, 'ishow', 1269],
        [10, 'ishow', 1270],
        [10, 'ishow', 1271],
        [10, 'ishow', 1272],
        [10, 'ishow', 1273],
        [10, 'ishow', 1274],
        [10, 'ishow', 1275],
        [10, 'ishow', 1276],
        [10, 'ishow', 1277],
        [10, 'ishow', 1278],
        [10, 'ishow', 1279],
        [10, 'ishow', 1280],
        [10, 'ishow', 1281],
        [10, 'ishow', 1282],
        [10, 'ishow', 1361],
        [10, 'ishow', 1362],
        [10, 'ishow', 1363],
        [10, 'ishow', 1364],
        [10, 'ishow', 1365],
        [10, 'ishow', 1366],
        [10, 'ishow', 1367],
        [10, 'ishow', 1368],
        [10, 'ishow', 1369],
        [10, 'ishow', 1370],
        [10, 'ishow', 1371],
        [10, 'ishow', 1372],
        [10, 'ishow', 1373],
        [10, 'ishow', 1374],
        [10, 'ishow', 1375],
        [10, 'ishow', 1376],
      ])
    }],

    [2, 'fadeIn', 1461],
    [2, 'fadeIn', 1462],
    [2, 'fadeIn', 1463],

    [10, 'fadeIn', 1498],
    [10, 'fadeIn', 1497],
  ];
  var q1Ctrl = getAnimation(0).runQueryStep(q11, q12, q13);
  q1Ctrl.bindSwitchBtn(142, 1);//绑定是否展开的btn以及所在的步骤数.
  q1Ctrl.bindSwitchTip(142, 141);//将'动画演示'四个字 和 右侧的箭头进行绑定,两个点击事件相同.
  //初始化相关参数.
  q1Ctrl.init();//初始化,1.绑定上下步骤按钮
  //结束初始化

  q1Ctrl.next();
  $('.knowledge_ul li:eq(0)').bind('click', function () {
    q1Ctrl.init();
    q1Ctrl.next();
  });


  //4
  var q40 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', '411'],
        [10, 'fadeIn', '422'],
        [10, 'fadeIn', '423'],
      ])
    }],
  ];
  var q41 = [
    [5, 'fadeIn', 424],
    [5, function () {
      runTog([
        [5, 'fadeIn', 431],
      ])
    }],
    [5, 'fadeIn', 441],
    [05, 'fadeIn', 442],
  ];

  var q42 = [
    [10, 'fadeIn', 880101],
    [4, function () {
      runTog([
        [4, 'fadeIn', 880201],
        [4, 'fadeIn', 880202],
        [4, 'fadeIn', 880203],
        [4, 'fadeIn', 880204],
      ])
    }],
    [4, function () {
      runTog([
        [4, 'fadeIn', 880301],
        [4, 'fadeIn', 880302],
        [4, 'fadeIn', 880303],
        [4, 'fadeIn', 880304],
        [4, 'fadeIn', 880305],
        [4, 'fadeIn', 880306],
        [4, 'fadeIn', 880307],
        [4, 'fadeIn', 880308],
        [4, 'fadeIn', 880309],
        [4, 'fadeIn', 880310],
        [4, 'fadeIn', 880311],
      ])
    }],
    [4, function () {
      runTog([
        [4, 'fadeIn', 880401],
        [4, 'fadeIn', 880402],
        [4, 'fadeIn', 880403],
        [4, 'fadeIn', 880404],
        [4, 'fadeIn', 880405],
        [4, 'fadeIn', 880406],
        [4, 'fadeIn', 880407],
        [4, 'fadeIn', 880408],
        [4, 'fadeIn', 880409],
        [4, 'fadeIn', 880410],
        [4, 'fadeIn', 880411],
      ])
    }],
    [4, function () {
      runTog([
        [4, 'fadeIn', 880501],
        [4, 'fadeIn', 880502],
        [4, 'fadeIn', 880503],
        [4, 'fadeIn', 880504],
        [4, 'fadeIn', 880505],
        [4, 'fadeIn', 880506],
        [4, 'fadeIn', 880507],
        [4, 'fadeIn', 880508],
        [4, 'fadeIn', 880509],
        [4, 'fadeIn', 880510],
        [4, 'fadeIn', 880511],
      ])
    }],
    [4, function () {
      runTog([
        [4, 'fadeIn', 880601],
        [4, 'fadeIn', 880602],
        [4, 'fadeIn', 880603],
        [4, 'fadeIn', 880604],
        [4, 'fadeIn', 880605],
        [4, 'fadeIn', 880606],
        [4, 'fadeIn', 880607],
        [4, 'fadeIn', 880608],
        [4, 'fadeIn', 880609],
        [4, 'fadeIn', 880610],
        [4, 'fadeIn', 880611],
      ])
    }],
    [5, function () {
    }],
    [10, 'fadeIn', 888888]
  ];
  var q4Ctrl = getAnimation(3).runQueryStep(q40, q41, q42);
  $('.zi_423').css('cursor', 'pointer');
  $('.zi_423').click(function () {
    q4Ctrl.next();
  })
  q4Ctrl.bindSwitchBtn(442, 0);
  q4Ctrl.bindSwitchTip(442, 441);
  $('.knowledge_ul li:eq(3)').bind('click', function () {
    q4Ctrl.init();
    q4Ctrl.next();
  });
  $('.zi_423').click(function () {
    q4Ctrl.next();
  })


})
