//initApp 初始化
var ezjs = {};

$(function () {
  function initApp() {
    //处理线宽
    $('.z_white_line').each(function () {
      var $this = $(this);
      var line_width = $this.data('width')
      if (line_width) {
        $this.css('width', line_width + "rem");
      }
    });

    //处理分数
    $('.z_fraction .Denominator').each(function () {
      var $this = $(this);
      $this.css({
        'margin-left': -($this.width() / 2)
      })
    })
    $('.z_fraction .molecular').each(function () {
      var $this = $(this);
      $this.css({
        'margin-left': -($this.width() / 2)
      })
    })
    $('.z_fraction .z_white_line').each(function () {
      var $this = $(this);
      var line_width = $this.data('width')
      if (line_width) {
        $this.css('width', line_width + "rem");
      }
      $this.css({
        'margin-left': -(line_width / 2) + "rem"
      })
    })

    //箭头
    $('.z_arrow .z_white_line').each(function () {
      var $this = $(this);
      $this.css({
        top: (pxVal($this.siblings('.z_arrow_top').css('border-top-width')) * 2 - $this.height() ) / 2
      });
    })
    $('.z_arrow').each(function () {
      var $this = $(this);
      var rotate = $this.data('rotate')
      if (rotate) {
        $this.css({
          transform: 'rotate(' + rotate + 'deg)',
          '-webkit-transform': 'rotate(' + rotate + 'deg)',
        });
      }

    });

    console.log('init app finishd.')
  }

  ezjs.initApp = initApp;

  initApp();
  $(window).resize(function () {
    initApp();
  });
  $(".knowledge_ul li").click(function () {
    initApp();
  });

  //弹窗预处理
  $('.z_pop_up_siblings').bind('click', function () {
    var $this = $(this);
    var index = $this.data('target');
    var pop;
    if (typeof(index) == 'undefined') {
      pop = $this.parent().siblings('.z_pop_up_content');
    } else {
      pop = $($this.parent().siblings('.z_pop_up_content')[index]);
    }
    pop.show()
    initApp();
    if ($.fn.dragAble) {
      setTimeout(function () {
        $('.z_animation_content', pop[0]).dragAble();
      }, 2000);
    }
  });

});

/*--------------------------------- 工具类 -----------------------------------*/
function pxVal(px) {
  px = px.substring(0, px.length - 2)
  return (px)
}
/*--------------------------------- 记录当前每个元素的位置(top,left)/颜色/是否显示(display) 信息(按需补充) -----------------------------------*/
var recordingState = function (ele) {
  var arr = [];
  $('.z_abs', ele).each(function () {
    var $this = $(this);
    var css = {
      top: $this.css('top'),
      left: $this.css('left'),
      color: $this.css('color'),
      display: $this.css('display'),
    }
    arr.push({
      $obj: $this,
      css: css,
      clazz: $this.attr('class')
    });
  })
  return arr;
};

// 根据记录参数进行恢复
var restoreByState = function (arr) {
  for (var i in arr) {
    var st = arr[i];
    st.$obj.css(st.css);
    st.$obj.attr('class', st.clazz);
  }
};

/*--------------------------------- 按步骤执行插件 -----------------------------------*/

function getAnimation(index) {
  return $($('.z_animation_content')[index]);
}

(function ($) {
  $.fn.runQueryStep = function () {
    var $this = $(this), _this = this;
    var args = arguments;//query array
    var query_steps = [];
    for (var i in args) {
      var q = args[i];
      query_steps.push(q);
    }

    var init_state = null;//初始化状态
    var current_step = -1;// 初始化为-1, 第一步对应数组下标0
    var total_step = query_steps.length;//动作的总步骤
    var state_store = [];//状态暂存器, 用于存放每一步执行完成后的状态.
    var is_running = false;
    var current_interval = null;

    function getNextStep(current_step) {
      var s = query_steps[current_step + 1];//当前步数+1
      if (s.concat) {
        return s.concat();
      }
      return s;
    }

    function _stopInterval() {
      if (current_interval) {
        clearInterval(current_interval);
        current_interval = null;
        is_running = false;
      }
    }

    return {
      //初始化, 即无论当前在哪一步,直接回到初始化状态
      init: function () {
        if (is_running) {
          console.log('跑着呢, 别着急');
          return;
        }
        if (current_step == -1) {
          console.log('就是初始化状态,啥都没动');
          return;
        }
        if (!init_state) {
          console.log('就是初始化状态,啥都没动');
          return;
        }
        is_running = true;
        console.log('run query step method: init');
        restoreByState(init_state);
        current_step = -1;
        is_running = false;
      },
      //回到指定步骤上.
      forceBack2step: function (step) {
        this.forceStop();
        var _this = this;
        setTimeout(function () {
          _this.back2step(step)
        }, 400)

      },
      back2step: function (step) {
        if (is_running) {
          console.log('跑着呢, 别着急');
          return false;
        }
        if (typeof (step) == 'undefined') {
          return false;
        }
        if (step > current_step) {
          return false;
        }
        is_running = true;
        console.log('回到步骤:' + step);
        var store = state_store[step];
        restoreByState(store);
        current_step = step;

        is_running = false;
        return true;
      },
      //强制结束当前动作,返回上一步
      forceStop: function () {
        if (is_running) {
          _stopInterval();
        }
      },
      getStep: function () {
        return current_step;
      },
      isRunning: function () {
        return is_running;
      },
      //执行下一步,执行各种动效
      next: function () {
        if (is_running) {
          console.log('跑着呢, 别着急');
          return;
        }
        is_running = true;
        console.log('run query step method: next');
        if (init_state == null) {
          init_state = recordingState(_this);
          //console.log(init_state);
        }
        if (current_step == total_step - 1) {//current_step为数组下标, 比长度小1
          console.log('已经没有下一步了');
          is_running = false;
          return; //当前已经是最后一步了, 那就没有下一步了, 啥都不做.
        }
        //执行下一步动作之前, 需要先把当前步骤的状态保存下来.
        if (!state_store[current_step]) {
          state_store[current_step] = recordingState(_this);
        }

        var to_run_query = getNextStep(current_step);
        current_interval = runQuery(to_run_query, function () {
          //执行完成后,释放
          is_running = false;
          current_interval = null;
          current_step++;//下一步执行完成
        });
      },
      //回到上一步的状态
      prev: function () {
        if (is_running) {
          console.log('跑着呢, 别着急');
          return;
        }
        is_running = true;
        console.log('run query step method: prev');
        if (current_step == -1) {
          console.log('已经是初始状态了,还想去哪儿');
          is_running = false;
          return;
        }
        var store = state_store[current_step - 1];
        restoreByState(store);
        current_step--;
        is_running = false;
      }
    };

  };

})(jQuery);


/*--------------------------------- 在0.6s后执行指定代码 -----------------------------------*/
var runNextStep = function (code) {
  runNext(code, 0.6 * 1000);
}
var runNext = function (code, time) {
  setTimeout(code, time);
}

/*--------------------------------- 同时执行 / 异步执行 -----------------------------------*/
function runTog(query) {
  for (var i in query) {
    var r = query[i];
    var e = r[1] + '(' + r[2] + ',' + r[0] * 50 + ')';
    eval(e);
    //console.log(e);
  }
}

function runQuery(q, cb) {//全部跑完了,执行回调
  var query = q.concat();
  var tickCnt = -1, running;
  var tickClock = setInterval(function () {
    //console.log(tickCnt);
    if (running) {
      if (tickCnt == 0) {
        var r1 = running[1];
        if (typeof(r1) == "function") {
          r1();
          console.log('run function: ...');
        } else {
          var e = running[1] + '(' + running[2] + ',' + running[0] * 50 + ')';
          eval(e);
          //console.log(e);
        }
      }
      if (tickCnt == running[0]) {
        running = query.shift();
        tickCnt = -1;
      }
    } else {
      running = query.shift();
      if (!running) {
        cb && cb();//全部跑完了,执行回调
        return clearInterval(tickClock);
      }
    }
    tickCnt++;
  }, 50);
  return tickClock;
}


/*--------------------------------- 各种动效 -----------------------------------*/
function blink(i, colors, time) {
  var each = 200;
  if (!time) {
    time = each * colors.length;
  } else {
    each = time / colors.length;
  }
  var ca = colors.concat();
  var c = ca.shift();
  if (c) {
    var obj = $(".zi_" + i);
    obj.css("color", c);
    console.log(c);
    setTimeout(function () {
      blink(i, ca, time - each);
    }, each);
  }
}

function colorTo(i, color) {
  if (color) {
    var obj = $(".zi_" + i);
    obj.css("color", color);
  }
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
