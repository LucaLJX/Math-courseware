var FONT_SIZE = $('html').css('font-size');
var REM_ZOOM = FONT_SIZE.substring(0, FONT_SIZE.length - 2)
var GRID_WIDTH = 2;//Math.floor(REM_ZOOM / Math.floor(FONT_SIZE / 10));

function px2rem(px, fixable, dig) {
  if (px.indexOf('px') == -1) {
    return toRem(px, fixable, dig);
  }
  px = px.substring(0, px.length - 2)
  return toRem(px, fixable, dig)
}

function toRem(px, fixable, dig) {
  var r = px / REM_ZOOM;
  var r100 = Math.floor(r * 100)

  var px_fl = Math.floor(r100 / 100);
  var point = (r100 % 100)
  point = Math.floor(point)
  if (fixable) {
    var l = r100 % 2
    if (l == 1) {
      r100++
    }
  }
  if (dig) {
    var r = px_fl + '.' + point
    if (point < 10) {
      r = px_fl + '.0' + point
    }
    return parseFloat(r)
  }
  var r = px_fl + '.' + point + 'rem'
  if (point < 10) {
    r = px_fl + '.0' + point + 'rem'
  }
  return r
}

function toRemFix(np) {
//将px转换成rem,保留两位小数,并保证位数为偶数
  var tmp = {
    left: toRem(np.left, true),
    top: toRem(np.top, true)
  }
  return tmp
}

function refreshZoom() {
  FONT_SIZE = $('html').css('font-size');
  REM_ZOOM = FONT_SIZE.substring(0, FONT_SIZE.length - 2)
}

function fixTop2Line(top) {
  var x = Math.round(top / GRID_WIDTH);
  return x * GRID_WIDTH;
}

function printPosition(ele) {
  // console.log(ele);
  var itemArr = $('.z_abs', ele);
  var exp = '';
  itemArr.each(function (index) {
    var $item = $(itemArr[index])
    var className = $item.attr('class');
    var classArr = className.split(' ');
    for (var index in classArr) {
      var cla = classArr[index];
      //只显示改动的对象.
      if (cla.indexOf('zi_') == 0 && $item.attr('style')) {
        exp += ('.' + cla + ' {' + $item.attr('style') + '}') + '\n'
      }
      //全部显示
      //if (cla.indexOf('zi_') == 0 && $item.attr('style')) {
      //  // exp += ('.' + cla + ' {' + $item.attr('style') + '}') + '\n'
      //  exp += ('.' + cla + ' {width: ' + px2rem($item.css('width')) + '; left: ' + px2rem($item.css('left')) + '; top: ' + px2rem($item.css('top')) +'}') + '\n'
      //} else if(cla.indexOf('zi_') == 0) {
      //  exp += ('.' + cla + ' {left: ' + px2rem($item.css('left')) + '; top: ' + px2rem($item.css('top')) +'}') + '\n'
      //}
    }
  });
  console.log(exp);
  var $cssExp = $('#css_export');
  if ($cssExp) {
    $cssExp.val(exp);
  }
  return exp;
}

function forceFixed2(value) {
  var value = Math.round(parseFloat(value) * 100) / 100;
  var xsd = value.toString().split(".");
  if (xsd.length == 1) {
    value = value.toString() + ".00";
    return value;
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = value.toString() + "0";
    }
    return value;
  }
}

(function ($) {
  $.fn.dragAble = function () {
    var ele = this;
    var $ele = $(ele);
    if ($ele.data('dragactive') == true) {
      console.log('init drag able active already.');
      return;
    }
    refreshZoom();
    var z_content_offset = $ele.offset()
    var dragTarget = null;
    var fix = {};
    $('.z_abs', ele).attr('draggable', true);
    $('.z_abs', ele).on('dragstart', function () {
      dragTarget = ($(this));
      fix = {
        x: dragTarget.width() / 2,
        y: dragTarget.height() / 2
      }
      // console.log(fix);
    })

    $ele.on('dragover', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var oe = e.originalEvent;
      var np = {
        left: fixTop2Line(oe.clientX - fix.x - z_content_offset.left),
        top: fixTop2Line(oe.clientY - fix.y - z_content_offset.top)
      }
      console.log(np)
      var res = toRemFix(np)
      // console.log(res)
      dragTarget.css(res)
    })
    $ele.on('dragenter', function (e) {
      e.preventDefault();
      e.stopPropagation();
    })
    $ele.on('drop', function (e) {
      var oe = e.originalEvent;
      var np = {
        left: fixTop2Line(oe.clientX - fix.x - z_content_offset.left),
        top: fixTop2Line(oe.clientY - fix.y - z_content_offset.top)
      }
      console.log(np)
      var res = toRemFix(np)
      // console.log(res)
      dragTarget.css(res)

      printPosition(ele)

    });
    $ele.data('dragactive', true);
    console.log('init drag able finished.');
  };

  //根据class zi_ 进行位置初始化
  $.fn.initPosition = function () {
    var line_height = 0.5;

    var ele = this;
    var line_store = {};//存储每行的已经使用的宽度
    getUsedWidth = function (l, str) {
      var w = line_store[l];
      if (!w) {
        if (str) {
          return '0.80';
        }
        return 0.80;
      }

      if (str) {
        return forceFixed2(w);
      }
      return w;
    };
    plusUsedWidth = function (l, nw) {
      line_store[l] = getUsedWidth(l, false) + nw + 0.1;
    };
    $('.z_abs', ele).each(function () {
      var $this = $(this);
      var className = $this.attr('class');
      var classArr = className.split(' ');
      for (var index in classArr) {
        var cla = classArr[index];
        if (cla.indexOf('zi_') == 0) {
          var line = (cla.substring(cla.length - 2, cla.length - 1));
          //var cloumn = (cla.substring(4, 5));
          var uw = getUsedWidth(line, true);
          var st = 'left: ' + uw + 'rem; top: ' + forceFixed2((line - 1) * line_height) + 'rem;';
          $this.attr('style', st)
          var wr = px2rem($this.width() + '', false, true);
          //console.log(wr)
          plusUsedWidth(line, wr);
        }
      }
    })
    printPosition(ele);
  };

  $('.z_animation_content').each(function () {
    if ($(this).parent().hasClass('canvas-box')) {
      console.log('ignore init animation drag able.');
      return;
    }
    $(this).dragAble();
    //$(this).initPosition();
  });

  //setTimeout(function() {
  //  location.reload();
  //}, 10000)
})(jQuery);

