$(function () {
  function initApp() {
    $('.z_white_line').each(function () {
      var $this = $(this);
      var line_width = $this.data('width')
      if (line_width) {
        $this.css('width', line_width + "rem");
      }
    });
  }

  initApp();

});

var runNextStep = function (code) {
  runNext(code, 0.6 * 1000);
}
var runNext = function (code, time) {
  setTimeout(code, time);
}

function runTog(query) {
  for (var i in query) {
    var r = query[i];
    var e = r[1] + '(' + r[2] + ',' + r[0] * 50 + ')';
    eval(e);
    console.log(e);
  }
}

function runQuery(q) {
  var query = q.concat();
  var tickCnt = -1, running;
  var tickClock = setInterval(function () {
    //console.log(tickCnt);
    if (running) {
      if (tickCnt == 0) {
        var r1 = running[1];
        if (typeof(r1) == "function") {
          console.log('run function:', r1);
          r1();
        } else {
          var e = running[1] + '(' + running[2] + ',' + running[0] * 50 + ')';
          eval(e);
          console.log(e);
        }
      }
      if (tickCnt == running[0]) {
        running = query.shift();
        tickCnt = -1;
      }
    } else {
      running = query.shift();
      if (!running) {
        return clearInterval(tickClock);
      }
    }
    tickCnt++;
  }, 50);
}

function animateTo(i, top, left, color, time) {
  var obj = $(".zi_" + i);
  if (color) {
    obj.css("color", color);
  }
  var ani = {};
  if (top) {
    ani.top = top + 'rem';
  }
  if (left) {
    ani.left = left + 'rem';
  }
  if (color) {
    ani.color = color;
  }
  if (!time) {
    time = 600;
  }
  obj.animate(ani, time);
}

// animate
function toggle(i, time) {
  if (!time) {
    time = 600;
  }
  $(".zi_" + i).toggle(time);
}
function fadeIn(i, time) {
  if (!time) {
    time = 600;
  }
  $(".zi_" + i).fadeIn(time)
}
function fadeOut(i, time) {
  if (!time) {
    time = 600;
  }
  $(".zi_" + i).fadeOut(time);
}
function show(i, time) {
  if (!time) {
    time = 600;
  }
  $(".zi_" + i).show(time)
}
function hide(i, time) {
  if (!time) {
    time = 600;
  }
  $(".zi_" + i).hide(time);
}
function slideUp(i, time) {
  if (!time) {
    time = 600;
  }
  $(".zi_" + i).slideUp(time)
}
function slideDown(i, time) {
  if (!time) {
    time = 600;
  }
  $(".zi_" + i).slideDown(time);
}
function ihide(i, time) {
  $(".zi_" + i).hide();
}
function ishow(i, time) {
  $(".zi_" + i).show();
}
