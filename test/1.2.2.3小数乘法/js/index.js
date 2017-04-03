$(function () {

  var query1 = [
    [10, 'fadeIn', '111' ],
    [10, 'fadeIn', '1111' ],
    [10, 'fadeIn', '2222' ],
    [10, 'fadeIn', '131' ],
    [10, 'fadeIn', '14' ],
    [2, 'animateTo', '1023, null, null, "#00deff"' ],
    [2, 'animateTo', '1023, null, null, "#fff"' ],
    [2, 'animateTo', '1023, null, null, "#00deff"' ],
    [2, 'animateTo', '1023, null, null, "#fff"' ],
    [10, 'fadeIn', '3333' ],
    [2, 'animateTo', '1021, null, null, "#00deff"' ],
    [2, 'animateTo', '1021, null, null, "#fff"' ],
    [2, 'animateTo', '1021, null, null, "#00deff"' ],
    [2, 'animateTo', '1021, null, null, "#fff"' ],
    [10, 'fadeIn', '4444' ],
    [10, 'fadeIn', '17' ],
    [10, 'fadeIn', '5555' ],
    [2, 'animateTo', '184, null, null, "#00deff"' ],
    [2, 'animateTo', '184, null, null, "#fff"' ],
    [2, 'animateTo', '184, null, null, "#00deff"' ],
    [2, 'animateTo', '184, null, null, "#fff"' ],
    [10, 'fadeIn', '187' ],
    [10, 'fadeIn', '112' ],
  ];

  var query2 = [
    [10, 'fadeIn', '211' ],
    [10, 'fadeIn', '1111' ],
    [10, 'fadeIn', '2222' ],
    [10, 'fadeIn', '231' ],
    [10, 'fadeIn', '24' ],
    [2, 'animateTo', '1023, null, null, "#00deff"' ],
    [2, 'animateTo', '1023, null, null, "#fff"' ],
    [2, 'animateTo', '1023, null, null, "#00deff"' ],
    [2, 'animateTo', '1023, null, null, "#fff"' ],
    [10, 'fadeIn', '3333' ],
    [2, 'animateTo', '1021, null, null, "#00deff"' ],
    [2, 'animateTo', '1021, null, null, "#fff"' ],
    [2, 'animateTo', '1021, null, null, "#00deff"' ],
    [2, 'animateTo', '1021, null, null, "#fff"' ],
    [10, 'fadeIn', '4444' ],
    [10, 'fadeIn', '27' ],
    [10, 'fadeIn', '5555' ],
    [2, 'animateTo', '6666, null, null, "#00deff"' ],
    [2, 'animateTo', '6666, null, null, "#fff"' ],
    [2, 'animateTo', '6666, null, null, "#00deff"' ],
    [2, 'animateTo', '6666, null, null, "#fff"' ],
    [10, 'fadeIn', '7777' ],
    [10, 'fadeIn', '286' ],
    [10, 'fadeIn', '212' ],
  ];

  var rq0 = $($('.z_animation_content')[0]).runQueryStep(query1);
  rq0.init();
  rq0.next();

  var rq1 = $($('.z_animation_content')[1]).runQueryStep(query2);
  rq1.init();
  rq1.next();

  $('.knowledge_ul li:eq(0)').bind('click', function () {
    rq0.init();
    rq0.next();
  });
  $('.knowledge_ul li:eq(1)').bind('click', function () {
    rq1.init();
    rq1.next();
  });

});
