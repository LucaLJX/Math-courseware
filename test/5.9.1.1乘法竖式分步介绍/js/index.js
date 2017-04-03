$(function(){
  $('.knowledge_ul li:eq(0)').bind('click', function() {
        init()
    show('z_next_btn_2')
    console.log('init()')
    })

    var currentStep=0;
    $(".z_next_btn").on("click",function(){
        currentStep++;
        nextTo(currentStep);
    });
    $(".z_pre_btn").on("click",function(){
    	currentStep--;
    	if(currentStep < 0){
    		currentStep = 0;
    	}
        backTo(currentStep);
    });

    var init = function() {
        currentStep = 0;
        ihide('z1')
        ihide('z11')
    	ihide('z21')
    	ihide('z22')
        ihide('z31')
        ihide('z32')
        ihide('z41')
        ihide('z42')
        ihide('z50')
        ihide('z51')
        ihide('z52')
        ihide('r11')
        ihide('r12')
    	ihide('r21')
        ihide('r22')
        ihide('r31')
        ihide('r32')
        ihide('zl1')
        ihide('zl2')
        ihide('zl3')
        ihide('button-left')
        show('z1')
        show('z11')
        ihide('z_line_group_1')
        ihide('z_line_group_2')
        ihide('z12')
    }
    init()

    function nextTo(step) {
    	if(step == 1){
			show('z21')
			show('z22')
            show('button-left')
    	}
    	if(step == 2){
    		show('z42')
            show('z41')
            show('zl3')
            show('zl2')
            show('zl1')
    	}
    	if(step == 3){
            show('z_line_group_1')
            animateTo('z22',null,null,'yellow')
            animateTo('z42',null,null,'yellow')
            show('r11')
            show('r12')
    	}
        if(step == 4){
            animateTo('zl2',2.6 + 'rem',null)
            show('z50')
            animateTo('z50',null,null,'green')
            animateTo('z22',null,null,'white')
            animateTo('z42',null,null,'white')
            show('z52')
            animateTo('z52',null,null,'yellow')
            animateTo('r12',null,null,'green')

        }
        if(step == 5){
            animateTo('z42',null,null,'white')
            animateTo('z42',null,null,'yellow')
            show('z_line_group_2')
            animateTo('z21',null,null,'yellow')
            show('r21')
            show('r22')
            show('z51')
            animateTo('z51',null,null,'yellow')

        }
        if(step == 6){
            show('r31')
            show('r32')
            animateTo('r32',null,null,'green')
            hide('z_line_group_1')
            hide('z_line_group_2')
            animateTo('z41',1.6 + 'rem',null)
            animateTo('z42',1.6 + 'rem',null)
            animateTo('zl1',2.0 + 'rem',null)
            animateTo('zl3',2.0 + 'rem',null)
            animateTo('zl2',2.1 + 'rem',null)
            animateTo('z50',1.7 + 'rem',null)
            animateTo('z51',2.1 + 'rem',null)
            animateTo('z52',2.1 + 'rem',null)
        }
        if(step == 7){
            ihide('z11')
            show('z12')
            hide('button-right')
          ihide('z_next_btn_2')
        }
    }

    function backTo(step) {
    	show('z21');
    	if(step == 0){
            hide('z21')
            hide('z22')
            hide('button-left')
    	}
    	if(step == 1){
            hide('z42')
            hide('z41')
            hide('zl3')
            hide('zl2')
            hide('zl1')
    	}
    	if(step == 2){
            hide('z_line_group_1')
            animateTo('z22',null,null,'white')
            animateTo('z42',null,null,'white')
            hide('r11')
            hide('r12')
    	}
        if(step == 3){
            animateTo('zl2',2.5 + 'rem',null)
            hide('z50')
            animateTo('z22',null,null,'yellow')
            animateTo('z42',null,null,'yellow')
            hide('z52')
            animateTo('r12',null,null,'white')
        }
        if(step == 4){
            animateTo('z42',null,null,'yellow')
            animateTo('z42',null,null,'white')
            hide('z_line_group_2')
            animateTo('z21',null,null,'white')
            hide('r21')
            hide('r22')
            hide('z51')
        }
        if(step == 5){
            hide('r31')
            hide('r32')
            show('z_line_group_1')
            show('z_line_group_2')
            animateTo('z41',2.1 + 'rem',null)
            animateTo('z42',2.1 + 'rem',null)
            animateTo('zl1',2.5 + 'rem',null)
            animateTo('zl3',2.5 + 'rem',null)
            animateTo('zl2',2.6 + 'rem',null)
            animateTo('z50',2.2 + 'rem',null)
            animateTo('z51',2.5 + 'rem',null)
            animateTo('z52',2.5 + 'rem',null)
        }
        if(step == 6){
            ihide('z12')
            show('z11')
            show('button-right')
          show('z_next_btn_2')
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
