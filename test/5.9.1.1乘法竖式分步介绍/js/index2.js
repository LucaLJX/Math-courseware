$(function(){

  $('.knowledge_ul li:eq(1)').bind('click', function() {
        init2()
    show('z_next_btn_2')
  })

    var currentStep=0;
    $(".z_next_btn_2").on("click",function(){
        currentStep++;
        nextTo(currentStep);
    });
    $(".z_pre_btn_2").on("click",function(){
      currentStep--;
      if(currentStep < 0){
        currentStep = 0;
      }
        backTo(currentStep);
    });

    var init2 = function() {
        currentStep = 0;
        ihide('a11')
        ihide('a12')
        ihide('a13')
        ihide('a21')
        ihide('a22')
        ihide('a31')
        ihide('a32')
        ihide('a33')
        ihide('a34')
        ihide('a41')
        ihide('a42')
        ihide('a43')
        ihide('a51')
        ihide('a52')
        ihide('a61')
        ihide('a62')
        ihide('a71')
        ihide('a81')
        ihide('a82')
        ihide('a83')
        ihide('s11')
        ihide('s12')
        ihide('s21')
        ihide('s22')
        ihide('s31')
        ihide('s32')
        ihide('button-left_2')
        ihide('z_line_group_3')
        ihide('z_line_group_4')
        ihide('z_line_group_5')
        ihide('z_line_group_6')
        show('a11')
        show('a12')

    }
    init2()

    function nextTo(step) {
      if(step == 1){
        show('a21')
        show('a22')
        show('a31')
        show('a32')
        show('a34')
        show('a41')
        show('a42')
        show('a43')
        show('button-left_2')
        animateTo('a32',null,null,'blue')

      }
      if(step == 2){
        show('z_line_group_5')
        show('z_line_group_6')
        show('a33')
        show('a51')
        show('a52')
        show('s11')
        show('s12')
        animateTo('s12',null,null,'green')
        animateTo('a42',2.5 + 'rem', null)


      }
      if(step == 3){
        hide('z_line_group_5')
        hide('z_line_group_6')
        show('z_line_group_4')
        show('a62')
      }
      if(step == 4){
        show('z_line_group_3')
        show('a61')
        show('s21')
        show('s22')
        animateTo('s22',null,null,'green')

      }
      if(step == 5){
        show('a71')
        show('a81')
        show('a82')
        show('a83')
        show('s31')
        show('s32')
        animateTo('s32',null,null,'green')

      }
      if(step == 6){
        hide('a12')
        show('a13')
        hide('button-right_2')
        hide('z_next_btn_2')

      }
      if(step == 7){



      }
    }

    function backTo(step) {
      show('z21');
      if(step == 0){
        hide('a21')
        hide('a22')
        hide('a31')
        hide('a32')
        hide('a34')
        hide('a41')
        hide('a42')
        hide('a43')
        hide('button-left_2')


      }
      if(step == 1){
        hide('z_line_group_5')
        hide('z_line_group_6')
        hide('a33')
        hide('a51')
        hide('a52')
        hide('s11')
        hide('s12')
        animateTo('a42',2.4 + 'rem', null)



      }
      if(step == 2){
        show('z_line_group_5')
        show('z_line_group_6')
        hide('z_line_group_4')
        hide('a62')



      }
        if(step == 3){
        hide('z_line_group_3')
        hide('a61')
        hide('s21')
        hide('s22')



        }
        if(step == 4){
        hide('a71')
        hide('a81')
        hide('a82')
        hide('a83')
        hide('s31')
        hide('s32')



        }
        if(step == 5){
        hide('a13')
        show('a12')
        show('button-right_2')

          show('z_next_btn_2')


        }
        if(step == 6){





        }

    }

    function animateTo(className, top, left, color) {
      var obj = $("." + className);
      if(color){
        obj.css( "color", color );
      }
      var ani = {};
      if(top){
      ani.top = top;
      }
      if(left){
        ani.left = left;
      }
      if(color){
        ani.color = color;
      }
      obj.animate(ani, 600);
    }
    function toggle(className) {
      $("." + className).toggle(600);
    }
    function show(className) {
      $("." + className).fadeIn(600)
    }
    function hide(className) {
      $("." + className).fadeOut(600);
    }
    function ihide(className) {
      $("." + className).hide();
    }
});
