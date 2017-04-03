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
    $('.z_fraction_cus .z_white_line').each(function () {
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
    var query_handler = null;
    var switch_btns = [];//切换按钮, 用于隐藏后续的步骤
    var ctrl_btn = {
      prev: null,
      next: null,
      container: null
    };

    function getNextStep(current_step) {
      var s = query_steps[current_step + 1];//当前步数+1
      if (s.concat) {
        return s.concat();
      }
      return s;
    }

    function _stopRunningQuery() {
      if (query_handler) {
        query_handler.stopRunning();
        is_running = false;
      }
    }

    function _hideAllChildren() {//隐藏所有子节点
      $this.children().hide();
    }

    var _bindCtrlBtn = function (ele) {//绑定上下步骤控制按钮. 参数主要服务于弹窗环境.初始化时调用.以后只能控制显示/隐藏
      var random = Math.floor(Math.random() * 1000);
      var prev = "z_prev_btn_" + random;
      var next = "z_next_btn_" + random;
      if (!ele) {
        ele = '.bottom-bar';
      }
      ctrl_btn.container = $(ele);
      ctrl_btn.container.empty();
      var content =
        '<div class="next-btn ' + next + '"></div>' +
        '<div class="prev-btn ' + prev + '"></div>';
      ctrl_btn.container.html(content);
      ctrl_btn.prev = $('.' + prev);
      ctrl_btn.next = $('.' + next);

      ctrl_btn.prev.click(function () {
        ctrl.prev();
      });
      ctrl_btn.next.click(function () {
        ctrl.next();
      });
    };

    var ctrlHandler = {
      hideAll: function () {
        ctrl_btn.prev.hide();
        ctrl_btn.next.hide();
      },
      showAll: function () {
        ctrl_btn.prev.show();
        ctrl_btn.next.show();
      },
      showNext: function () {
        ctrl_btn.prev.hide();
        ctrl_btn.next.show();
      },
      showPrev: function () {
        ctrl_btn.prev.show();
        ctrl_btn.next.hide();
      }
    };

    //处理控制按钮.
    function _handleCtrlBtn() {
      console.log('_handleCtrlBtn');
      for (var key in switch_btns) {
        var val = switch_btns[key];
        if (current_step == key - 1 || current_step == total_step - 2) {
          ctrlHandler.hideAll();
          return
        } else if (current_step == key) {
          ctrlHandler.showNext();
        }
      }
      //console.log(current_step); //
      //console.log(total_step)
      if (current_step == total_step - 2) {
        ctrlHandler.showPrev();//隐藏下一步
      }
    }

    var ctrl = {
      //初始化, 即无论当前在哪一步,直接回到初始化状态
      init: function () {
        _bindCtrlBtn();
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
        ctrl.forceStop();
        setTimeout(function () {
          ctrl.back2step(step)
        }, 10)
        return true;

      },
      //强制结束当前动作,返回上一步
      forceStop: function () {
        if (is_running) {
          _stopRunningQuery();
        }
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
      getStep: function () {
        return current_step;
      },
      isRunning: function () {
        return is_running;
      },
      bindSwitchBtn: function (i, step) {//对编号进行步骤数绑定.
        var ele = $('.zi_' + i);
        switch_btns[step] = {
          ele: ele
        };
        ele.bind('click', function () {
          if ($(this).data("opened")) {//关闭,回到指定步骤
            if (ctrl.forceBack2step(step)) {
              ctrlHandler.hideAll();
              $(this).removeClass("btn-change");
              $(this).data("opened", false);
            }
          } else {//打开,继续执行.
            ctrl.next();
            $(this).addClass("btn-change");
            $(this).data("opened", true);
          }
        });
      },
      bindSwitchTip: function (i_arrow, i_tip) {//给"动画演示"文字绑定点击事件
        var ele = $('.zi_' + i_tip);
        ele.css('cursor', 'pointer');
        ele.bind('click', function () {
          var arrow = $('.zi_' + i_arrow);
          arrow.trigger('click');
        })
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
        query_handler = runQuery(to_run_query, function () {
          //执行完成后,释放
          is_running = false;
          query_handler = null;
          _handleCtrlBtn();
          current_step++;//下一步执行完成
        }, function () {
          is_running = false;
          query_handler = null;
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
        _handleCtrlBtn();
        is_running = false;
      }
    };

    return ctrl;
  };

})(jQuery);

/*--------------------------------- 同时执行 / 异步执行 -----------------------------------*/
function runTog(query) {
  for (var i in query) {
    var r = query[i];
    var e = r[1] + '(' + r[2] + ',' + r[0] * 50 + ')';
    eval(e);
    //console.log(e);
  }
}

function runQuery(q, cb, failCb) {//全部跑完了,执行回调
  var query = q.concat();
  var tickCnt = -1, runningEvent;
  var allowRunning = true;//TODO:允许继续执行
  var tickClock = setInterval(function () {
    //console.log(tickCnt);
    if (runningEvent) {
      if (!allowRunning) {
        failCb && failCb();//执行回调
        clearInterval(tickClock);
        return;
      }
      var timeCnt = runningEvent[0];//多少个时间单位
      if (tickCnt == 0) {
        var fun = runningEvent[1];// function
        var args = runningEvent[2];
        if (typeof(fun) == "function") {
          fun();
          console.log('run function: ...');
        } else {
          var e = fun + '(' + args + ',' + timeCnt * 50 + ')';
          eval(e);
          //console.log(e);
        }
      }
      if (tickCnt == timeCnt) {
        runningEvent = query.shift();
        tickCnt = -1;
      }
    } else {
      runningEvent = query.shift();
      if (!runningEvent) {
        cb && cb();//全部跑完了,执行回调
        return clearInterval(tickClock);
      }
    }
    tickCnt++;
  }, 50);
  return {
    stopRunning: function () {
      allowRunning = false;
    }
  };
}


/*--------------------------------- 各种动效, 编号i均不可重复. -----------------------------------*/
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
function backColorTo(i, color) {
  if (color) {
    var obj = $(".zi_" + i);
    obj.css("background-color", color);
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
function rotate(i, deg, time) {
  if (!time) {
    time = 600;
  }
  var timeIndex = 0;

  function rotating() {
    if (timeIndex == time + 1) {
      return;
    }
    //console.log(time + '---' + timeIndex);
    //console.log((deg / time * timeIndex) + '---' + timeIndex);
    $(".zi_" + i).css('transform', 'rotate(' + (deg / time * timeIndex) + 'deg)')

    timeIndex++;
    setTimeout(rotating, 1);
  }

  rotating();

}
