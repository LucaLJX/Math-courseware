$(function () {
  //2
  var q21 = [
    [10, function () {
      runTog([
        [10, 'fadeIn', '211'],
        [10, 'fadeIn', '221'],
        [10, 'fadeIn', '231'],
      ])
    }],
  ];
  var q22 = [
    [10, 'fadeIn', 222],
    [10, function () {
      runTog([
        [10, 'fadeIn', 212],
        [10, 'fadeIn', 223],
        [10, 'fadeIn', 232],
      ])
    }],
    [10, 'fadeIn', 241],
    [5, 'fadeIn', 242],
  ];
  var q23 = [
    [10, 'fadeIn',251],
    [2, 'fadeIn', 261],
    [2, 'fadeIn', 262],
    [2, 'fadeIn', 263],
    [2, 'fadeIn', 264],
    [2, 'fadeIn', 265],
    [2, 'fadeIn', 266],
    [2, 'fadeIn', 267],
    [2, 'fadeIn', 268],
    [2, 'fadeIn', 269],
    [2, 'fadeIn', 270],
    [2, 'fadeIn', 271],
    [2, 'fadeIn', 272],
    [2, 'fadeIn', 273],
    [2, 'fadeIn', 274],
    [2, 'fadeIn', 275],
    [2, 'fadeIn', 276],
    [2, 'fadeIn', 277],
    [2, 'fadeIn', 278],
    [2, 'fadeIn', 279],
    [2, 'fadeIn', 280],
    [2, 'fadeIn', 281],
    [2, 'fadeIn', 282],
    [10, function () {
    }],
    [3, 'backColorTo', '266, "#96a983"'],
    [3, 'backColorTo', '267, "#96a983"'],
    [3, 'backColorTo', '268, "#96a983"'],
    [3, 'backColorTo', '269, "#96a983"'],
    [3, 'backColorTo', '270, "#96a983"'],
    [10, function () {
    }],
    [3, 'backColorTo', '271, "#d99690"'],
    [3, 'backColorTo', '272, "#d99690"'],
    [3, 'backColorTo', '273, "#d99690"'],
    [3, 'backColorTo', '274, "#d99690"'],
    [3, 'backColorTo', '275, "#d99690"'],
    [10, function () {
    }],
    [3, 'backColorTo', '276, "#93cddd"'],
    [3, 'backColorTo', '277, "#93cddd"'],
    [3, 'backColorTo', '278, "#93cddd"'],
    [3, 'backColorTo', '279, "#93cddd"'],
    [3, 'backColorTo', '280, "#93cddd"'],
    [10, function () {
    }],
    [3, 'backColorTo', '281, "#00b0f0"'],
    [3, 'backColorTo', '282, "#00b0f0"'],

    [10, 'fadeIn', 291],
    [10, 'fadeIn', 290],
    [10, 'fadeOut',290],
    [10, 'fadeOut',291],
    [10, 'fadeIn', 293],
    [10, 'fadeIn', 294],
    [10, 'fadeIn', 295],
    [10, 'fadeIn', 296],
    [10, 'fadeIn', 292],
    [20, function () {
    }],
    [10, function () {
      runTog([
        [10, 'fadeOut', 293],
        [10, 'fadeOut', 294],
        [10, 'fadeOut', 295],
        [10, 'fadeOut', 296],
        [10, 'fadeOut', 292],
      ])
    }],
    [10, 'fadeIn', 298],
    [10, 'fadeIn', 297],
    [10, function () {
      runTog([
        [10, 'fadeOut', 298],
        [10, 'fadeOut', 297],
      ])
    }],

    [10, 'fadeIn',2151],
    [2, 'fadeIn', 2161],
    [2, 'fadeIn', 2162],
    [2, 'fadeIn', 2163],
    [2, 'fadeIn', 2164],
    [2, 'fadeIn', 2165],
    [2, 'fadeIn', 2166],
    [2, 'fadeIn', 2167],
    [2, 'fadeIn', 2168],
    [2, 'fadeIn', 2169],
    [2, 'fadeIn', 2170],
    [2, 'fadeIn', 2171],
    [2, 'fadeIn', 2172],
    [2, 'fadeIn', 2173],
    [2, 'fadeIn', 2174],
    [2, 'fadeIn', 2175],
    [2, 'fadeIn', 2176],
    [10, function () {
    }],
    [3, 'backColorTo', '2166, "#96a983"'],
    [3, 'backColorTo', '2167, "#96a983"'],
    [3, 'backColorTo', '2168, "#96a983"'],
    [3, 'backColorTo', '2169, "#96a983"'],
    [3, 'backColorTo', '2170, "#96a983"'],
    [10, function () {
    }],
    [3, 'backColorTo', '2171, "#d99690"'],
    [3, 'backColorTo', '2172, "#d99690"'],
    [3, 'backColorTo', '2173, "#d99690"'],
    [3, 'backColorTo', '2174, "#d99690"'],
    [3, 'backColorTo', '2175, "#d99690"'],
    [10, function () {
    }],
    [3, 'backColorTo', '2176, "#00b0f0"'],


    [10, 'fadeIn', 2191],
    [10, 'fadeIn', 2190],
    [10, 'fadeOut',2190],
    [10, 'fadeOut',2191],
    [10, 'fadeIn', 2193],
    [10, 'fadeIn', 2194],
    [10, 'fadeIn', 2195],
    [10, 'fadeIn', 2192],
    [20, function () {
    }],
    [10, function () {
      runTog([
        [10, 'fadeOut', 2193],
        [10, 'fadeOut', 2194],
        [10, 'fadeOut', 2195],
        [10, 'fadeOut', 2192],
      ])
    }],
    [10, 'fadeIn', 2198],
    [10, 'fadeIn', 2197],
    [10, function () {
      runTog([
        [10, 'fadeOut', 2198],
        [10, 'fadeOut', 2197],
      ])
    }],


    [10, 'fadeIn', 2251],
    [10, function () {
      runTog([
        [10, 'ishow', 2261],
        [10, 'ishow', 2262],
        [10, 'ishow', 2263],
        [10, 'ishow', 2264],
        [10, 'ishow', 2265],
        [10, 'ishow', 2266],
        [10, 'ishow', 2267],
        [10, 'ishow', 2268],
        [10, 'ishow', 2269],
        [10, 'ishow', 2270],
        [10, 'ishow', 2271],
        [10, 'ishow', 2272],
        [10, 'ishow', 2273],
        [10, 'ishow', 2274],
        [10, 'ishow', 2275],
        [10, 'ishow', 2276],
        [10, 'ishow', 2277],
        [10, 'ishow', 2278],
        [10, 'ishow', 2279],
        [10, 'ishow', 2280],
        [10, 'ishow', 2281],
        [10, 'ishow', 2282],
        [10, 'ishow', 2361],
        [10, 'ishow', 2362],
        [10, 'ishow', 2363],
        [10, 'ishow', 2364],
        [10, 'ishow', 2365],
        [10, 'ishow', 2366],
        [10, 'ishow', 2367],
        [10, 'ishow', 2368],
        [10, 'ishow', 2369],
        [10, 'ishow', 2370],
        [10, 'ishow', 2371],
        [10, 'ishow', 2372],
        [10, 'ishow', 2373],
        [10, 'ishow', 2374],
        [10, 'ishow', 2375],
        [10, 'ishow', 2376],
      ])
    }],

    [02, 'fadeIn', 2461],
    [02, 'fadeIn', 2462],
    [02, 'fadeIn', 2463],
    [10, 'fadeIn', 2498],
    [10, 'fadeIn', 2497],
  ];
  var q2Ctrl = getAnimation(1).runQueryStep(q21, q22, q23);
  q2Ctrl.bindSwitchBtn(242, 1);
  q2Ctrl.bindSwitchTip(242, 241);
  $('.knowledge_ul li:eq(1)').bind('click', function () {
    q2Ctrl.init();
    q2Ctrl.next();
  });

})
