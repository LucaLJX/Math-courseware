var FONT_SIZE = $('html').css('font-size');
var REM_ZOOM = FONT_SIZE.substring(0, FONT_SIZE.length - 2)
var GRID_WIDTH = 2;//Math.floor(REM_ZOOM / Math.floor(FONT_SIZE / 10));

function px2rem(px) {
  px = px.substring(0, px.length - 2)
  return toRem(px)
}

function toRem(px, fixable) {
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

(function ($) {
  $.fn.dragAble = function () {
    var ele = this;
    refreshZoom();
    var z_content_offset = $('.z_animation_content').offset()
    var dragTarget = null;
    var fix = {};
    var $ele = $(ele);
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
      var res = toRemFix(np)
      // console.log(res)
      dragTarget.css(res)

      // console.log(ele);
      var itemArr = $('.z_abs', ele);
      // itemArr.sort(function (c, d) {
      //   var a = $(c), b = $(d)
      //   if (a.offset().top == b.offset().top) {
      //     return a.offset().left > b.offset().left
      //   }
      //   return a.offset().top > b.offset().top

      // });
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
      })
      console.log(exp)

    });
  };

  $('.z_animation_content').each(function () {
    $(this).dragAble();
  })
})(jQuery);

