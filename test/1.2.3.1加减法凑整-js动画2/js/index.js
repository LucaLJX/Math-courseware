$(function () {

  var query1 = [

    [10, 'fadeIn', '111'],
    [10, 'fadeIn', '112']

  ];

  var query2 = [

    [10, function () {
      runTog([
        [10, 'fadeIn', '120'],
        [10, 'fadeIn', '121'],
        [10, 'fadeIn', '122'],
        [10, 'fadeIn', '123'],
        [10, 'fadeIn', '124'],
        [10, 'fadeIn', '125'],
        [10, 'fadeIn', '126'],
        [10, 'fadeIn', '127'],
        [10, 'fadeIn', '128'],
        [10, 'fadeIn', '129'],
      ])
    }],
    [3, 'fadeOut', '121'],
    [3, 'fadeIn', '121'],
    [3, 'fadeOut', '121'],
    [3, 'fadeIn', '121'],
    [3, 'fadeOut', '121'],
    [10, function () {
      runTog([
        [10, 'fadeIn', '131'],
        [10, 'animateTo', '122, null, 1.90, null'],
        [10, 'animateTo', '123, null, 2.14, null'],
        [10, 'animateTo', '124, null, 2.75, null'],
        [10, 'animateTo', '125, null, 3.05, null'],
        [10, 'animateTo', '126, null, 3.85, null'],
        [10, 'animateTo', '127, null, 4.15, null'],
        [10, 'animateTo', '128, null, 5.06, null'],
        [10, 'animateTo', '129, null, 5.45, null'],
      ])
    }],
    [3, 'fadeOut', '123'],
    [3, 'fadeIn', '123'],
    [3, 'fadeOut', '123'],
    [3, 'fadeIn', '123'],
    [3, 'fadeOut', '123'],
    [10, function () {
      runTog([
        [10, 'fadeIn', '132'],
        [10, 'animateTo', '124, null, 3.30, null'],
        [10, 'animateTo', '125, null, 3.60, null'],
        [10, 'animateTo', '126, null, 4.35, null'],
        [10, 'animateTo', '127, null, 4.70, null'],
        [10, 'animateTo', '128, null, 5.61, null'],
        [10, 'animateTo', '129, null, 6.00, null'],
      ])
    }],
    [3, 'fadeOut', '125'],
    [3, 'fadeIn', '125'],
    [3, 'fadeOut', '125'],
    [3, 'fadeIn', '125'],
    [3, 'fadeOut', '125'],
    [10, function () {
      runTog([
        [10, 'fadeIn', '133'],
        [10, 'animateTo', '126, null, 4.84, null'],
        [10, 'animateTo', '127, null, 5.19, null'],
        [10, 'animateTo', '128, null, 6.10, null'],
        [10, 'animateTo', '129, null, 6.49, null'],
      ])
    }],
    [3, 'fadeOut', '127'],
    [3, 'fadeIn', '127'],
    [3, 'fadeOut', '127'],
    [3, 'fadeIn', '127'],
    [3, 'fadeOut', '127'],
    [10, function () {
      runTog([
        [10, 'fadeIn', '134'],
        [10, 'animateTo', '128, null, 6.58, null'],
        [10, 'animateTo', '129, null, 6.97, null'],
      ])
    }],
    [3, 'fadeOut', '129'],
    [3, 'fadeIn', '129'],
    [3, 'fadeOut', '129'],
    [3, 'fadeIn', '129'],
    [3, 'fadeOut', '129'],
    [10, 'fadeIn', '135'],
    [10, function () {
      runTog([
        [3, 'fadeOut', '122'],
        [3, 'fadeIn', '122'],
        [3, 'fadeOut', '122'],
        [3, 'fadeIn', '122'],
        [3, 'fadeOut', '124'],
        [3, 'fadeIn', '124'],
        [3, 'fadeOut', '124'],
        [3, 'fadeIn', '124'],
        [3, 'fadeOut', '126'],
        [3, 'fadeIn', '126'],
        [3, 'fadeOut', '126'],
        [3, 'fadeIn', '126'],
        [3, 'fadeOut', '128'],
        [3, 'fadeIn', '128'],
        [3, 'fadeOut', '128'],
        [3, 'fadeIn', '128'],
      ])
    }],

    [10, 'fadeOut', '1111'],
    [10, function () {
      runTog([
        [3, 'animateTo', '122, null, 1.60, null'],
        [3, 'animateTo', '132, null, 1.80, null'],
        [3, 'animateTo', '124, null, 2.70, null'],
        [3, 'animateTo', '133, null, 2.90, null'],
        [3, 'animateTo', '126, null, 3.93, null'],
        [3, 'animateTo', '134, null, 4.13, null'],
        [3, 'animateTo', '128, null, 5.30, null'],
        [3, 'animateTo', '135, null, 5.50, null'],
      ])
    }],
    [10, function () {
      $('.next-btn').show()
      $('.prev-btn').show()
    }]

  ];
  var q3 = [
    [10, 'fadeIn', '141']
  ];
  var q4 = [
    [10, 'fadeIn', '151']
  ];


  var rq0 = $($('.z_animation_content')[0]).runQueryStep(
    query1, query2, q3, q4
  );
  rq0.init()
  rq0.next()

  $('.knowledge_ul li:eq(0)').bind('click', function () {
    rq0.init()
    rq0.next()
    $('.next-btn').hide()
    $('.prev-btn').hide()
  });
  $('.zi_112').bind('click', function () {
    console.log(rq0.getStep());
    if ($(this).data("opened")) {
      //rq0.forceBack2step(0)
      if (rq0.back2step(0)) {
        $(this).removeClass("btn-change");
        $(this).data("opened", false);
        $('.next-btn').hide()
        $('.prev-btn').hide()
      }
    } else {
      $(this).addClass("btn-change");
      rq0.next()

      $(this).data("opened", true);
    }
  });

  $('.next-btn').hide()
  $('.prev-btn').hide()

  $('.next-btn').bind('click', function () {
    rq0.next();
  })
  $('.prev-btn').bind('click', function () {
    rq0.prev();
  })


  var query11 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', '211'],
        [10, 'fadeIn', '212'],
      ])
    }],
  ];

  var query12 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', '220'],
        [10, 'fadeIn', '221'],
        [10, 'fadeIn', '222'],
        [10, 'fadeIn', '223'],
        [10, 'fadeIn', '224'],
        [10, 'fadeIn', '225'],
        [10, 'fadeIn', '226'],
        [10, 'fadeIn', '227'],
        [10, 'fadeIn', '228'],
        [10, 'fadeIn', '2290'],
        [10, 'fadeIn', '2291'],
        [10, 'fadeIn', '2292'],
      ])
    }],
  ];

  var query13 = [
    [10, function () {
      runTog([
        [10, 'animateTo', '221, null, null, "blue"'],
        [10, 'animateTo', '224, null, null, "blue"'],
        [10, 'animateTo', '225, null, null, "blue"'],
      ])
    }],
  ];

  var query14 = [
    [10, function () {
      runTog([
        [10, 'animateTo', '222, null, null, "yellow"'],
        [10, 'animateTo', '223, null, null, "yellow"'],
        [10, 'animateTo', '2291, null, null, "yellow"'],
        [10, 'animateTo', '2292, null, null, "yellow"'],
      ])
    }],
  ];

  var query15 = [
    [10, function () {
      runTog([
        [10, 'animateTo', '226, null, null, "green"'],
        [10, 'animateTo', '227, null, null, "green"'],
        [10, 'animateTo', '228, null, null, "green"'],
        [10, 'animateTo', '2290, null, null, "green"'],
      ])
    }],
  ];

  var query16 = [
    [10, function () {
      runTog([
        [10, 'animateTo', '222, null, 2.20, null'],
        [10, 'animateTo', '223, null, 2.40, null'],
        [10, 'animateTo', '224, null, 1.40, null'],
        [10, 'animateTo', '225, null, 1.60, null'],
      ])
    }],
  ];

  var query17 = [
    [10, function () {
      runTog([
        [10, 'animateTo', '226, null, 3.80, null'],
        [10, 'animateTo', '227, null, 4.00, null'],
        [10, 'animateTo', '228, null, 4.60, null'],
        [10, 'animateTo', '2290, null, 4.80, null'],
        [10, 'animateTo', '2291, null, 3.00, null'],
        [10, 'animateTo', '2292, null, 3.20, null'],
      ])
    }],
  ];

  var query18 = [
    [3, 'fadeOut', '226'],
    [3, 'fadeIn', '226'],
    [3, 'fadeOut', '226'],
    [3, 'fadeIn', '226'],
    [10, function () {
      runTog([
        [10, 'animateTo', '227, null, 4.10'],
        [10, 'animateTo', '228, null, 4.70'],
        [10, 'animateTo', '2290, null, 4.90'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeIn', '2294'],
        [3, 'fadeIn', '2295'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeOut', '2294'],
        [3, 'fadeOut', '2295'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeIn', '2294'],
        [3, 'fadeIn', '2295'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeOut', '2294'],
        [3, 'fadeOut', '2295'],
      ])
    }],
    [3, function () {
      runTog([
        [3, 'fadeIn', '2294'],
        [3, 'fadeIn', '2295'],
      ])
    }],
    [3, 'fadeOut', '228'],
    [3, 'fadeIn', '228'],
    [3, 'fadeOut', '228'],
    [3, 'fadeIn', '228'],
    [3, 'fadeOut', '228'],
    [3, 'fadeIn', '2293'],
  ];

  var query19 = [
    [10, 'fadeIn', '231'],
  ];

  var query20 = [
    [10, 'fadeIn', '241'],
  ];

  /*runQuery(query11);展示问题2
   runQuery(query12);显示详细问题
   runQuery(query13);变蓝色
   runQuery(query14);变黄色
   runQuery(query15);变绿色
   runQuery(query16);第一次黄蓝调换位置
   runQuery(query17);第二次黄绿换位置
   runQuery(query18);右边合并，出现括号，减号变加号
   runQuery(query19);出现等式
   runQuery(query20);*/
  $('.knowledge_ul li:eq(1)').bind('click', function () {
    $('.zi_212').removeClass("btn-change");
    $('.zi_212').data("opened", false);
    runQueryController.init();
    runQuery(query11);
    $('.next-btn').hide()
    $('.prev-btn').hide()
  });

  var runQueryController = $($('.z_animation_content')[1]).runQueryStep(
    query12,
    query13,
    query14,
    query15,
    query16,
    query17,
    query18,
    query19,
    query20
  );

  $('.next-btn').bind('click', function () {
    runQueryController.next();
  })
  $('.prev-btn').bind('click', function () {
    runQueryController.prev();
  })

  $('.zi_212').bind('click', function () {
    console.log(rq0.getStep());
    if ($(this).data("opened")) {
      runQueryController.init()
      $(this).removeClass("btn-change");
      $('.next-btn').hide()
      $('.prev-btn').hide()
      $(this).data("opened", false);
    } else {
      runQueryController.next();
      $('.next-btn').show()
      $('.prev-btn').show()
      $(this).addClass("btn-change");
      $(this).data("opened", true);
    }
  });
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
   [24, 'fadeIn', '1'],
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


})
