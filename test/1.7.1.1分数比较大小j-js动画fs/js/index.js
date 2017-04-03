$(function () {

  function bindTrigger(i_arrow, i_tip) {
    var ele = $('.zi_' + i_tip);
    ele.css('cursor', 'pointer');
    ele.bind('click', function () {
      var arrow = $('.zi_' + i_arrow);
      arrow.trigger('click');
    })
  }


  //第1个li 通分
  var query11 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 1113],
        [10, 'fadeIn', 1114],
        [10, 'fadeIn', 1115],
      ])
    }],
  ];
  var query12 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 1123],
        [10, 'fadeIn', 1124],
        [10, 'fadeIn', 1125],
      ])
    }],
  ];
  var query13 = [
    [10, 'fadeIn', '1133'],
  ];

  var rq11 = $('.z_animation_content_11').runQueryStep(query11);
  rq11.init('.bottom-bar-none');
  var rq12 = $('.z_animation_content_11').runQueryStep(query12);
  rq12.init('.bottom-bar-none');
  var rq13 = $('.z_animation_content_11').runQueryStep(query13);
  rq13.init('.bottom-bar-none');
  $('.knowledge_ul li:eq(0)').bind('click', function () {
    rq11.init('.bottom-bar-none');
    rq12.init('.bottom-bar-none');
    rq13.init('.bottom-bar-none');
  });
  bindTrigger(1115, 1114);
  bindTrigger(1125, 1124);
  $('.zi_1112').bind('click', function () {
    rq11.init('.bottom-bar-none');
    rq11.next();
  });
  bindTrigger(1112, 1111);
  $('.zi_1122').bind('click', function () {
    rq12.init('.bottom-bar-none');
    rq12.next();
  });
  bindTrigger(1122, 1121);
  $('.zi_1132').bind('click', function () {
    rq13.init('.bottom-bar-none');
    rq13.next();
  });
  bindTrigger(1132, 1131);
  /*popup1*/
  var query112 = [ //第2列出现
    [10, function () {
      runTog([
        [10, 'fadeIn', 11101],
        [10, 'fadeIn', 11102],
        [10, 'fadeIn', 11103],
      ])
    }],
    [10, function () {
      runTog([
        [12, 'animateTo', '11101, 1.30, 1.73, null'],
        [12, 'animateTo', '11102, 1.30, 3.45, null'],
        [12, 'animateTo', '11103, 1.30, 5.15, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeOut', 11101],
        [10, 'fadeOut', 11102],
        [10, 'fadeOut', 11103],
        [10, 'fadeIn', 11121],
        [10, 'fadeIn', 11122],
        [10, 'fadeIn', 11123],
      ])
    }],
  ];
  var query113 = [ //第3列出现
    [10, function () {
      runTog([
        [1, 'fadeIn', 11131],
        [1, 'fadeIn', 11132],
        [1, 'fadeIn', 11133],
        [10, 'animateTo', '11131, 2.10, 1.92, null'],
        [10, 'animateTo', '11132, 2.10, 3.66, null'],
        [10, 'animateTo', '11133, 2.10, 5.38, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeIn', 11134],
        [10, 'fadeIn', 11135],
      ])
    }],
  ];
  var query114 = [ //第4列出现
    [10, function () {
      runTog([
        [1, 'fadeIn', 11141],
        [1, 'fadeIn', 11142],
        [1, 'fadeIn', 11143],
        [10, 'animateTo', '11141, 2.90, 1.92, null'],
        [10, 'animateTo', '11142, 2.90, 3.66  , null'],
        [10, 'animateTo', '11143, 2.90, 5.38, null'],
        [1, 'fadeIn', 11144],
        [1, 'fadeIn', 11145],
        [10, 'animateTo', '11144, 3.04, 2.58, null'],
        [10, 'animateTo', '11145, 3.04, 4.39, null'],
      ])
    }],
  ];

  var rq111 = $('.z_animation_content_12').runQueryStep(query112, query113, query114);
  $('.zi_1115').bind('click', function () {
    rq111.init('.bottom-bar-none');
  })
  $('.zi_10011').bind('click', function () {
    rq111.next();
  })
  $('.zi_10010').bind('click', function () {
    rq111.prev();
  })
  /*popup2*/
  var query212 = [ //第2列出现
    [10, function () {
      runTog([
        [10, 'fadeIn', 11201],
        [10, 'fadeIn', 11202],
        [10, 'fadeIn', 11203],
      ])
    }],
    [10, function () {
      runTog([
        [12, 'animateTo', '11201, 1.30, 1.73, null'],
        [12, 'animateTo', '11202, 1.30, 3.45, null'],
        [12, 'animateTo', '11203, 1.30, 5.15, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeOut', 11201],
        [10, 'fadeOut', 11202],
        [10, 'fadeOut', 11203],
        [10, 'fadeIn', 11221],
        [10, 'fadeIn', 11222],
        [10, 'fadeIn', 11223],
      ])
    }],
  ];
  var query213 = [ //第3列出现
    [10, function () {
      runTog([
        [1, 'fadeIn', 11231],
        [1, 'fadeIn', 11232],
        [1, 'fadeIn', 11233],
        [10, 'animateTo', '11231, 2.10, 1.92, null'],
        [10, 'animateTo', '11232, 2.10, 3.66, null'],
        [10, 'animateTo', '11233, 2.10, 5.38, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeIn', 11234],
        [10, 'fadeIn', 11235],
      ])
    }],
  ];
  var query214 = [ //第4列出现
    [10, function () {
      runTog([
        [1, 'fadeIn', 11241],
        [1, 'fadeIn', 11242],
        [1, 'fadeIn', 11243],
        [10, 'animateTo', '11241, 3.04, 1.92, null'],
        [10, 'animateTo', '11242, 3.04, 3.66, null'],
        [10, 'animateTo', '11243, 3.04, 5.38, null'],
        [1, 'fadeIn', 11244],
        [1, 'fadeIn', 11245],
        [10, 'animateTo', '11244, 3.04, 2.58, null'],
        [10, 'animateTo', '11245, 3.04, 4.39, null'],
      ])
    }],
  ];

  var rq112 = $('.z_animation_content_13').runQueryStep(query212, query213, query214);
  $('.zi_1125').bind('click', function () {
    rq112.init('.bottom-bar-none');
  })
  $('.zi_10021').bind('click', function () {
    rq112.next();
  })
  $('.zi_10020').bind('click', function () {
    rq112.prev();
  });

  //第2个li 分数化小数
  var query22 = [ //第2列出现
    [1, function () {
      runTog([
        [1, 'fadeIn', 2121],
        [1, 'fadeIn', 2122],
      ])
    }],
  ];
  var query23 = [ //第3列出现
    [1, function () {
      runTog([
        [1, 'fadeIn', 2131],
        [1, 'fadeIn', 2132],
        [1, 'fadeIn', 2133],
        [1, 'fadeIn', 2134],
      ])
    }],
  ];
  var query24 = [ //第4列出现
    [5, function () {
      runTog([
        [5, 'fadeIn', 2141],
        [5, 'animateTo', '2141, 1.50, "0.00", null'],
      ])
    }],
    [12, 'fadeIn', '2142'],
    [10, 'fadeIn', '2143'],
  ];
  var query25 = [ //第5列出现
    [10, function () {
      runTog([
        [10, 'fadeIn', 2151],
        [10, 'animateTo', '2151, 1.85, 0.20, null'],
      ])
    }],
    [10, 'fadeIn', '2152'],
    [10, function () {
      runTog([
        [10, 'fadeIn', 2153],
        [10, 'animateTo', '2153, 2.00, 0.80, null'],
      ])
    }],
    [10, 'fadeIn', '2154'],
    [10, function () {
      runTog([
        [10, 'fadeIn', 2155],
        [10, 'animateTo', '2155, 2.00, 1.62, null'],
      ])
    }],
    [10, 'fadeIn', '2156'],
    [10, 'fadeIn', '2157'],
  ];
  var query26 = [ //第6列出现
     [10, function () {
       runTog([
         [5, 'fadeIn', 2161],
         [5, 'animateTo', '2161, 2.45, 0.25, null'],
       ])
     }],
    [10, 'fadeIn', '2162'],
    [10, function () {
      runTog([
        [5, 'fadeIn', 2163],
        [5, 'animateTo', '2163, 2.60, 0.87, null'],
      ])
    }],
    [10, 'fadeIn', '2164'],
    [10, function () {
      runTog([
        [5, 'fadeIn', 2165],
        [5, 'animateTo', '2165, 2.60, 1.71, null'],
      ])
    }],
    [10, 'fadeIn', '2166'],
    [10, 'fadeIn', '2167'],
  ];
  var query27 = [ //第7列出现
    [10, function () {
      runTog([
        [5, 'fadeIn', 2171],
        [5, 'animateTo', '2171, 3.10, 0.15, null'],
      ])
    }],
    [10, 'fadeIn', '2172'],
    [10, 'fadeIn', '2173'],
  ];
  var query28 = [ //第8列出现
    [5, function () {
      runTog([
        [5, 'fadeIn', 2181],
        [5, 'animateTo', '2181, 3.50, "0.00", null'],
      ])
    }],
    [10, 'fadeIn', '2185'],
    [5, function () {
      runTog([
        [5, 'fadeIn', 2182],
        [5, 'animateTo', '2182, 3.50, 1.00, null'],
      ])
    }],
    [10, 'fadeIn', '2186'],
    [5, function () {
      runTog([
        [5, 'fadeIn', 2183],
        [5, 'animateTo', '2183, 3.50, 3.10, null'],
      ])
    }],
    [10, 'fadeIn', '2187'],
    [5, function () {
      runTog([
        [5, 'fadeIn', 2184],
        [5, 'animateTo', '2184, 3.50, 5.48, null'],
      ])
    }],
  ];
  var query29 = [ //第9列出现
    [5, function () {
      runTog([
        [5, 'fadeIn', 21101],
        [5, 'animateTo', '21101, 4.00, "0.00", null'],
      ])
      }],
    [3, function () {
      runTog([
        [5, 'fadeOut', 21101],
        [5, 'fadeIn', 2191],
      ])
    }],
    [10, 'fadeIn', '2195'],
    [5, function () {
      runTog([
        [5, 'fadeIn', 21102],
        [5, 'animateTo', '21102, 4.00, 1.00, null'],
      ])
    }],
    [3, function () {
      runTog([
        [5, 'fadeOut', 21102],
        [5, 'fadeIn', 2192],
      ])
    }],
    [10, 'fadeIn', '2196'],
    [5, function () {
      runTog([
        [5, 'fadeIn', 21103],
        [5, 'animateTo', '21103, 4.00, 3.10, null'],
      ])
    }],
    [3, function () {
    runTog([
        [5, 'fadeOut', 21103],
        [5, 'fadeIn', 2193],
      ])
    }],
    [10, 'fadeIn', '2197'],
    [5, function () {
      runTog([
        [5, 'fadeIn', 21104],
        [5, 'animateTo', '21104, 4.00, 5.48, null'],
      ])
    }],
    [3, function () {
      runTog([
        [5, 'fadeOut', 21104],
        [5, 'fadeIn', 2194],
      ])
    }],
  ];
  var rq21 = $('.z_animation_content_21').runQueryStep(query22 ,query23, query24, query25, query26, query27, query28, query29);
  rq21.bindSwitchBtn(2122, 0);//绑定是否展开的btn以及所在的步骤数.
  rq21.bindSwitchTip(2122, 2121);
  $('.knowledge_ul li:eq(1)').bind('click', function () {
    rq21.init();
    rq21.next();
  });

  //第3个li 基准数法
  var query312 = [ //第1、2列出现
    [1, function () {
      runTog([
        [1, 'fadeIn', 3111],
        [1, 'fadeIn', 3121],
        [1, 'fadeIn', 3122],
      ])
    }],
  ];
  var query33 = [ //第3列出现
    [1, function () {
      runTog([
        [1, 'fadeIn', 3131],
        [1, 'fadeIn', 3132],
      ])
    }],
  ];
  var query34 = [ //第4列出现
    [5, function () {
      runTog([
        [5, 'fadeIn', 3141],
        [5, 'animateTo', '3141, 1.80, 1.30, null'],
      ])
    }],
    [10, 'fadeIn', '3143'],
    [10, 'fadeIn', '3142'],
    [5, function () {
      runTog([
        [5, 'fadeIn', 3144],
        [5, 'fadeIn', 3145],
        [5, 'fadeIn', 3146],
        [5, 'animateTo', '3144, 1.80, 3.30, null'],
        [5, 'animateTo', '3145, 1.80, 4.20, null'],
        [5, 'animateTo', '3146, 1.95, 3.65, null'],
      ])
    }],
    [10, function () {
      runTog([
        [8, 'fadeOut', 3145],
        [8, 'fadeIn', 3147],
        [8, 'fadeIn', 3148],
        [8, 'fadeIn', 3149],
      ])
    }],
  ];
  var query35 = [ //第5列出现
    [5, function () {
      runTog([
        [5, 'fadeIn', 3151],
        [5, 'animateTo', '3151, 2.60, 1.30, null'],
      ])
    }],
    [10, 'fadeIn', '3153'],
    [10, 'fadeIn', '3152'],
    [5, function () {
      runTog([
        [5, 'fadeIn', 3154],
        [5, 'fadeIn', 3155],
        [5, 'fadeIn', 3156],
        [5, 'animateTo', '3154, 2.60, 3.30, null'],
        [5, 'animateTo', '3155, 2.60, 4.20, null'],
        [5, 'animateTo', '3156, 2.75, 3.65, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeOut', 3155],
        [10, 'fadeIn', 3157],
        [8, 'fadeIn', 3158],
        [8, 'fadeIn', 3159],
      ])
    }],
  ];
  var query36 = [ //第6列出现
    [10, function () {
      runTog([
        [10, 'fadeIn', 3163],
        [10, 'animateTo', '3163, 3.55, 2.60, null'],
        [10, 'fadeIn', 3164],
        [10, 'animateTo', '3164, 3.55, 2.60, null'],
      ])
    }],
    [5, function () {
      runTog([
        [5, 'fadeIn', 3161],
        [5, 'animateTo', '3161, 3.40, 1.30, null'],
      ])
    }],
    [5, function () {
      runTog([
        [5, 'fadeIn', 3162],
        [5, 'animateTo', '3162, 3.40, 4.00, null'],
      ])
    }],
    [5, function () {
      runTog([
        [5, 'fadeIn', 3165],
        [5, 'fadeIn', 3166],
      ])
    }],
  ];
  var rq31 = $('.z_animation_content_31').runQueryStep(query312, query33, query34, query35, query36);
  rq31.bindSwitchBtn(3122, 0);//绑定是否展开的btn以及所在的步骤数.
  rq31.bindSwitchTip(3122, 3121);
  $('.knowledge_ul li:eq(2)').bind('click', function () {
    rq31.init();
    rq31.next();
  });

  //第4个li 比倒数
  var query412 = [ //第1、2列出现
    [1, function () {
      runTog([
        [1, 'fadeIn', 4111],
        [1, 'fadeIn', 4121],
        [1, 'fadeIn', 4122],
      ])
    }],
  ];

  var query43 = [ //第3列出现
    [1, function () {
      runTog([
        [1, 'fadeIn', 4131],
        [1, 'fadeIn', 4132],
      ])
    }],
  ];

  var query44 = [ //第4列出现
    [17, function () {
      runTog([
        [10, 'fadeIn', 41401],
        [10, 'fadeIn', 41402],
        [10, 'animateTo', '41401, 1.80, 1.30, null'],
        [10, 'animateTo', '41402, 1.80, 4.00, null'],
        [1, 'fadeOut', 41401],
        [1, 'fadeOut', 41402],
      ])
    }],
    [1, function () {
      runTog([
        [1, 'ishow', 41411],
        [1, 'ishow', 41412],
        [1, 'ishow', 41413],
        [1, 'ishow', 41421],
        [1, 'ishow', 41422],
        [1, 'ishow', 41423],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '41411, 2.10, 1.15, null'],
        [10, 'animateTo', '41412, 1.80, 1.10, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '41421, 2.10, 3.80, null'],
        [10, 'animateTo', '41422, 1.80, 3.72, null'],
      ])
    }],
  ];

  var query45 = [ //第5列出现
    [10, function () {
      runTog([
        [1, 'fadeIn', 41511],
        [10, 'animateTo', '41511, 2.50, 1.10, null'],
        [1, 'fadeIn', 41512],
        [10, 'animateTo', '41512, 2.80, 1.15, null'],
        [1, 'fadeIn', 41513],
        [10, 'animateTo', '41513, 2.89, 1.05, null'],
        [1, 'fadeIn', 41521],
        [10, 'animateTo', '41521, 2.50, 3.72, null'],
        [1, 'fadeIn', 41522],
        [10, 'animateTo', '41522, 2.80, 3.78, null'],
        [1, 'fadeIn', 41523],
        [10, 'animateTo', '41523, 2.89, 3.75, null'],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'fadeOut', 41511],
        [10, 'fadeOut', 41521],
        [10, 'fadeIn', 41514],
        [10, 'fadeIn', 41515],
        [10, 'animateTo', '41515, 2.65, 0.70, null'],
        [10, 'fadeIn', 41524],
        [10, 'fadeIn', 41525],
        [10, 'animateTo', '41525, 2.65, 3.40, null'],
      ])
    }],
  ];
  var query452 = [ //第5列>出现
    [10, 'fadeIn', '4153'],
  ];

  var query46 = [ //第6列出现
    [10, function () {
      runTog([
        [1, 'fadeIn', 41614],
        [10, 'animateTo', '41614, 3.30, 1.20, null'],
        [1, 'fadeIn', 41612],
        [10, 'animateTo', '41612, 3.60, 1.15, null'],
        [1, 'fadeIn', 41613],
        [10, 'animateTo', '41613, 3.69, 1.05, null'],
        [1, 'fadeIn', 41615],
        [10, 'animateTo', '41615, 3.45, 0.70, null'],
      ])
    }],
    [12, function () {
      runTog([
        [8, 'animateTo', '41615, 3.30, 1.15, null'],
        [1, 'fadeOut', 41615],
        [1, 'fadeOut', 41614],
        [10, 'fadeIn', 41611],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '41611, 3.60, 1.10, null'],
        [10, 'animateTo', '41612, 3.30, 1.15, null'],
      ])
    }],
    [10, function () {
      runTog([
        [1, 'fadeIn', 41624],
        [10, 'animateTo', '41624, 3.30, 3.92, null'],
        [1, 'fadeIn', 41622],
        [10, 'animateTo', '41622, 3.60, 3.78, null'],
        [1, 'fadeIn', 41623],
        [10, 'animateTo', '41623, 3.69, 3.75, null'],
        [1, 'fadeIn', 41625],
        [10, 'animateTo', '41625, 3.45, 3.40, null'],
      ])
    }],
    [12, function () {
      runTog([
        [8, 'animateTo', '41625, 3.30, 3.85, null'],
        [1, 'fadeOut', 41625],
        [1, 'fadeOut', 41624],
        [10, 'fadeIn', 41621],
      ])
    }],
    [10, function () {
      runTog([
        [10, 'animateTo', '41621, 3.60, 3.72, null'],
        [10, 'animateTo', '41622, 3.30, 3.78, null'],
      ])
    }],
    [10, function () {
      runTog([
        [1, 'fadeIn', 4163],
      ])
    }],
    [10, function () {
      runTog([
        [1, 'rotate', '4163,180'],
      ])
    }],
  ];

  var rq41 = $('.z_animation_content_41').runQueryStep(query412,query43,query44,query45,query452,query46);
  rq41.bindSwitchBtn(4122, 0);//绑定是否展开的btn以及所在的步骤数.
  rq41.bindSwitchTip(4122, 4121);
  $('.knowledge_ul li:eq(3)').bind('click', function () {
    rq41.init();
    rq41.next();
  });

  //第5个li 交叉相乘
  var query51 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 5111],
        [10, 'fadeIn', 5112],
        [10, 'fadeIn', 5113],
        [10, 'fadeIn', 5114],
        [10, 'fadeIn', 5115],
        [10, 'fadeIn', 5121],
        [10, 'fadeIn', 5122],
      ])
    }],
  ];

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
    [10, 'animateTo', '170901, 1.46, 3.50, null'],
  ];

  /*var ljx_queryCtrl1 = $('.z_animation_content_51').runQueryStep();
  rq41.bindSwitchBtn(5122, 0);//绑定是否展开的btn以及所在的步骤数.
  $('.knowledge_ul li:eq(4)').bind('click', function () {
    ljx_queryCtrl1.init();
    ljx_queryCtrl1.next();
  });*/
  var rq51 = $('.z_animation_content_51').runQueryStep(query51,ljxq1, ljxq2, ljxq3, ljxq4, ljxq5, ljxq6);
  rq51.bindSwitchBtn(5122, 0);//绑定是否展开的btn以及所在的步骤数.
  rq51.bindSwitchTip(5122, 5121);
  $('.knowledge_ul li:eq(4)').bind('click', function () {
    rq51.init();
    rq51.next();
  });

  /*ljx_queryCtrl1.init();
  ljx_queryCtrl1.next();

  $('.knowledge_ul li:eq(4)').bind('click', function () {
    ljx_queryCtrl1.init();
    ljx_queryCtrl1.next();
  });*/

  //第6个li 作除法
  var query61 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 6111],
        [10, 'fadeIn', 6112],
        [10, 'fadeIn', 6113],
        [10, 'fadeIn', 6114],
        [10, 'fadeIn', 6115],
        [10, 'fadeIn', 6116],
        [10, 'fadeIn', 6117],
        [10, 'fadeIn', 6118],
      ])
    }],
  ];
  var rq61 = $('.z_animation_content_61').runQueryStep(query61);
  rq61.bindSwitchBtn(6122, 0);//绑定是否展开的btn以及所在的步骤数.
  $('.knowledge_ul li:eq(5)').bind('click', function () {
    rq61.init();
    rq61.next();
  });

  //第7个li 作减法
  var query71 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', 7111],
        [10, 'fadeIn', 7112],
        [10, 'fadeIn', 7113],
        [10, 'fadeIn', 7114],
        [10, 'fadeIn', 7115],
        [10, 'fadeIn', 7116],
        [10, 'fadeIn', 7117],
        [10, 'fadeIn', 7118],
      ])
    }],
  ];
  var rq71 = $('.z_animation_content_71').runQueryStep(query71);
  rq71.bindSwitchBtn(7122, 0);//绑定是否展开的btn以及所在的步骤数.
  $('.knowledge_ul li:eq(6)').bind('click', function () {
    rq71.init();
    rq71.next();
  });


})
