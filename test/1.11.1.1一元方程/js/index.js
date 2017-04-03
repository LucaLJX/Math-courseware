$(function () {

  /*var query = [
    [20, 'fadeIn', '15' ],
    [12, 'animateTo', '15, 2, 3, null'],
    [12, 'fadeOut', '15'],
    [24, 'fadeIn', '15'],
  ];

  var query2 = [
    [20, 'fadeIn', '15' ],
    [12, 'animateTo', '15, 2, 3, null'],
    [12, 'fadeOut', '15'],
    [24, 'fadeIn', '15'],
  ];
  var query3 = [
    [20, 'fadeIn', '13' ],
    [12, 'animateTo', '13, 2, 3, null'],
    [12, 'fadeOut', '13'],
    [24, 'fadeIn', '13'],
  ];

  $('.knowledge_ul li:eq(2)').bind('click', function () {
    runQuery(query2);
    runQuery(query2);
  })*/

  var query1 = [
    
    
  ];

  /*$('.zi_31').bind('click', function () {
    runQuery(query1);
  })*/

  var query2 = [
    [20, 'fadeIn', '1111' ],
    [20, 'fadeIn', '9999' ],
    [20, 'fadeIn', '2222' ],
    [20, 'fadeOut', '4444' ],
    [20, 'fadeIn', '3333' ],
    [20, 'fadeIn', '5555' ],
    [20, 'fadeIn', '6666' ],
    [20, 'fadeIn', '7777' ],
    
  ];

  /*$('.next-btn').bind('click', function () {
    runQuery(query2);
  })*/

  var q1Ctrl = getAnimation(0).runQueryStep(query1,query2);
  q1Ctrl.bindSwitchBtn(31, 0);//绑定是否展开的btn以及所在的步骤数.
  //初始化相关参数.
  q1Ctrl.init();//初始化,1.绑定上下步骤按钮
  //结束

  q1Ctrl.next();
  var currentCtrl = q1Ctrl;
  $('.knowledge_ul li:eq(0)').bind('click', function () {
    q1Ctrl.init();
    q1Ctrl.next();
    currentCtrl = q1Ctrl;
  });

})
