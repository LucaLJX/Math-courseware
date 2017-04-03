/**
 * Created by hxsd on 2016/10/20.
 */
$(function(){
    var n=0;
    $(".next-btn").on("click",function(){
        n++;
        if(n==1){
            first();
            $(".prev-btn").css({"display":"block"});
        }else if(n==2){
            finish_one();
            second();
        }else if(n==3){
            finish_two();
            third();
        }else if(n==4){
            finish_three();
            fourth();
            $(".next-btn").css({"display":"none"});
        }
    });
    $(".prev-btn").on("click",function(){
        if (n == 1) {
            one();
            n = 0;
            $(".prev-btn").css({"display": "none"});
            //first();
        } else if (n === 2) {
            two();
            n = 1;
            //second();
        } else if (n == 3) {
            three();
            $(".ninet").text("9");
            n = 2;
            //third();
        } else if (n == 4) {
            $(".er").css({"opacity": 0, "left": "13.8em", "top": "6.3em"});
            $(".san").css({"opacity": 0, "left": "11em", "top": "6.3em"});
            $(".si").css({"opacity": 0, "left": "12em", "top": "6.4em"});
            four();
            $(".eight").text("+");
            $(".ninet").text("9");
            $(".sevent").text("4");
            n = 3;
            $(".next-btn").css({"display": "block"});
            //fourth();
        }
    });
    function first(){
        $(".prev-btn").attr("disabled",true);
        $(".tent").animate({"left":"2em","opacity":0},600,function(){
            $(".one").animate({"top":"11.5em"},600,function(){
                $(this).animate({"opacity":0},600,function(){
                    $(".prev-btn").attr("disabled",false);
                })
            });
            $(".two").animate({"top":"11em"},600,function(){
                $(this).animate({"opacity":0},600)
            });
            $(".three").animate({"top":"6.4em"},600);
            $(".four").animate({"top":"6.4em"},600);
            $(".five").animate({"top":"5.6em"},600);
            $(".six").animate({"top":"7.4em"},600);
            $(".seven").animate({"top":"7.5em"},600);
            $(".eight").animate({"top":"7.5em"},600);
            $(".nine").animate({"top":"7em"},600);
            $(".ten").animate({"top":"8.5em"},600);
            $(".onet").animate({"top":"8.6em"},600);
            $(".twot").animate({"top":"8.6em"},600);
            $(".threet").animate({"top":"8.2em"},600);
            $(".fourt").animate({"top":"9.7em"},600);
            $(".fivet").animate({"top":"9.3em"},600);
            $(".sevent").animate({"top":"7.2em"},600);
            $(".ninet").animate({"top":"5.6em"},600);
        })
    }
    function second(){
        $(".prev-btn").attr("disabled",true);
        $(".three").animate({"left":"16em"},600,function(){
            $(this).animate({"left":"13.6em","opacity":0},600,function(){
                $(".ninet").removeClass("ac").text("9").animate({"left":"13.7em"},1,function(){
                    $(".prev-btn").attr("disabled",false);
                });
                $(".sevent").removeClass("ac")
            });
            $(".ninet").addClass("ac");
            $(".sevent").addClass("ac");
        });
        $(".four").text("-").animate({"left":"15em"},600,function(){
            $(this).animate({"left":"13.6em","opacity":0},600,function(){
            });
        });
    }
    function third(){
        $(".prev-btn").attr("disabled",true);
        $(".five").animate({"top":"11em"},600,function(){
            $(this).animate({"opacity":0},600);
        });
        $(".six").animate({"top":"10.5em"},600,function(){
            $(this).animate({"opacity":0},600);
        });
        $(".seven").animate({"top":"6.4em"},600,function(){});
        $(".eight").animate({"top":"6.4em"},600);
        $(".nine").animate({"top":"5.6em"},600);
        $(".ten").animate({"top":"7.4em"},600);
        $(".onet").animate({"top":"7.4em"},600);
        $(".twot").animate({"top":"7.4em"},600);
        $(".threet").animate({"top":"7.1em"},600);
        $(".fourt").animate({"top":"8.6em"},600);
        $(".fivet").animate({"top":"8.2em"},600);
        $(".sevent").animate({"top":"5.6em"},600);
        $(".ninet").animate({"top":"7.2em"},600,function(){
            $(".seven").animate({"left":"16em"},600,function(){
                $(this).animate({"left":"14em","opacity":0},600,function(){
                    $(".ninet").removeClass("ac");
                    $(".sevent").removeClass("ac").text("4").animate({"left":"13.7em"},1,function(){
                        $(".prev-btn").attr("disabled",false);
                    });
                });
                $(".ninet").addClass("ac");
                $(".sevent").addClass("ac");
            });
            $(".eight").text("-").animate({"left":"15em"},600,function(){
                $(this).animate({"left":"14em","opacity":0},600)
            });
        })
    }
    function fourth(){
        $(".prev-btn").attr("disabled",true);
        $(".nine").animate({"top":"10em"},600,function(){
            $(this).animate({"opacity":0},600);
        });
        $(".ten").animate({"top":"9.5em"},600,function(){
            $(this).animate({"opacity":0},600);
        });
        $(".threet").animate({"top":"5.6em"},600);
        $(".onet").animate({"top":"6.3em"},600);
        $(".twot").animate({"top":"6.3em"},600);
        $(".fourt").animate({"top":"7.3em"},600);
        $(".fivet").animate({"top":"7.1em"},600,function(){
            $(".twot").text("-").animate({"left":"15em","top":"6.5em"},600);
            $(".threet").animate({"left":"16em"},600);
            $(".fourt").animate({"left":"15.9em","top":"7.4em"},600);
            $(this).animate({"left":"16em","top":"7.2em"},600);
            $(".onet").animate({"left":"11em"},600,function(){
                $(".twot").text("-").animate({"left":"13.6em","opacity":0},600);
                $(".threet").animate({"left":"13.6em","opacity":0},600);
                $(".fourt").animate({"left":"13.6em","opacity":0},600);
                $(".fivet").animate({"left":"13.6em","opacity":0},600,function(){
                    $(".ninet").removeClass("ac").text("8").animate({"top":"6.8em","opacity":0},600);
                    $(".sevent").removeClass("ac").animate({"top":"6.8em","opacity":0},600);
                    $(".eightt").animate({"opacity":0},600);
                    $(".er").animate({"opacity":1},600,function(){
                        $(this).animate({"left":"13.2em"},600,function(){
                            $(this).animate({"left":"10.1em","top":"15em"},600);
                            $(".san").css({"opacity":1}).animate({"left":"8em","top":"15em"},600);
                            $(".si").css({"opacity":1}).animate({"left":"9em","top":"15em"},600,function(){
                                $(".prev-btn").attr("disabled",false);
                            });
                            one();
                            $(".four").text("+");
                            $(".eight").text("+");
                            $(".twot").text("+");
                            $(".sevent").text("22");
                            $(".ninet").text("31");
                            $(".tent").css({"opacity":0});
                        })
                    })
                });
                $(".ninet").addClass("ac");
                $(".sevent").addClass("ac");
            })
        });
        $(".sevent").animate({"top":"7.2em"},800);
        $(".ninet").animate({"top":"5.6em"},800);
    }
    function one(){
        $(".one").css({"left":"7.3em","top":"5.6em","opacity":1});
        $(".two").css({"left":"4em","top":"7.4em","opacity":1});
        $(".three").css({"left":"4.5em","top":"7.7em","opacity":1});
        $(".four").css({"left":"5.1em","top":"7.7em","opacity":1});
        $(".five").css({"left":"8.2em","top":"7.2em","opacity":1});
        $(".six").css({"left":"6em","top":"8.7em","opacity":1});
        $(".seven").css({"left":"6.4em","top":"8.8em","opacity":1});
        $(".eight").css({"left":"7.1em","top":"8.8em","opacity":1});
        $(".nine").css({"left":"9.2em","top":"8.3em","opacity":1});
        $(".ten").css({"left":"8em","top":"9.8em","opacity":1});
        $(".onet").css({"left":"8.3em","top":"9.9em","opacity":1});
        $(".twot").css({"left":"9.2em","top":"9.9em","opacity":1});
        $(".threet").css({"left":"10.2em","top":"9.4em","opacity":1});
        $(".fourt").css({"left":"10em","top":"10.9em","opacity":1});
        $(".fivet").css({"left":"10.2em","top":"10.5em","opacity":1});
        $(".sixt").css({"left":"12em","top":"6.4em","opacity":1});
        $(".sevent").css({"left":"13.5em","top":"5.6em","opacity":1});
        $(".eightt").css({"left":"13.5em","top":"7.4em","opacity":1});
        $(".ninet").css({"left":"13.5em","top":"7.2em","opacity":1});
        $(".tent").css({"left":"7em","top":"14em","opacity":1});
    }
    function two(){
        one();
        $(".tent").css({"left":"2em","opacity":0});
        $(".one").css({"top":"11.5em","opacity":0});
        $(".two").css({"top":"11em","opacity":0});
        $(".three").css({"top":"6.4em"});
        $(".four").css({"top":"6.4em"}).text("+");
        $(".five").css({"top":"5.6em"});
        $(".six").css({"top":"7.4em"});
        $(".seven").css({"top":"7.5em"});
        $(".eight").css({"top":"7.5em"});
        $(".nine").css({"top":"7em"});
        $(".ten").css({"top":"8.5em"});
        $(".onet").css({"top":"8.6em"});
        $(".twot").css({"top":"8.6em"});
        $(".threet").css({"top":"8.2em"});
        $(".fourt").css({"top":"9.7em"});
        $(".fivet").css({"top":"9.3em"});
        $(".sevent").css({"top":"7.2em"});
        $(".ninet").css({"top":"5.6em"}).text("31");
    }
    function three(){
        two();
        $(".sevent").text("22");
        $(".three").css({"left":"13.6em","opacity":0});
        $(".ninet").css({"left":"13.7em"});
        $(".four").css({"left":"13.6em","opacity":0})
        $(".eight").text("+");
    }
    function four(){
        three();
        $(".five").css({"top":"11em","opacity":0});
        $(".six").css({"top":"10.5em","opacity":0});
        $(".seven").css({"left":"14em","opacity":0});
        $(".nine").css({"top":"5.6em"});
        $(".ten").css({"top":"7.4em"});
        $(".onet").css({"top":"7.4em"});
        $(".twot").css({"top":"7.4em"});
        $(".threet").css({"top":"7.1em"});
        $(".fourt").css({"top":"8.6em"});
        $(".fivet").css({"top":"8.2em"});
        $(".sevent").css({"left":"13.7em","top":"5.6em"}).text("22");
        $(".ninet").css({"top":"7.2em"});
        $(".eight").css({"left":"14em","opacity":0});
    }
    function finish_one(){
        $(".tent").stop(false,true).animate();
        $(".one").stop(false,true).animate();
        $(".two").stop(false,true).animate();
        $(".three").stop(false,true).animate();
        $(".four").stop(false,true).animate();
        $(".five").stop(false,true).animate();
        $(".six").stop(false,true).animate();
        $(".seven").stop(false,true).animate();
        $(".eight").stop(false,true).animate();
        $(".nine").stop(false,true).animate();
        $(".ten").stop(false,true).animate();
        $(".onet").stop(false,true).animate();
        $(".twot").stop(false,true).animate();
        $(".threet").stop(false,true).animate();
        $(".fourt").stop(false,true).animate();
        $(".fivet").stop(false,true).animate();
        $(".sevent").stop(false,true).animate();
        $(".ninet").stop(false,true).animate()
    }
    function finish_two(){
        $(".three").stop(false,true).animate();
        $(".ninet").stop(false,true).animate();
        $(".sevent").stop(false,true).animate();
        $(".four").stop(false,true).animate();
    }
    function finish_three(){
        $(".five").stop(false,true).animate();
        $(".six").stop(false,true).animate();
        $(".seven").stop(false,true).animate();
        $(".eight").stop(false,true).animate();
        $(".nine").stop(false,true).animate();
        $(".ten").stop(false,true).animate();
        $(".onet").stop(false,true).animate();
        $(".twot").stop(false,true).animate();
        $(".threet").stop(false,true).animate();
        $(".fourt").stop(false,true).animate();
        $(".fivet").stop(false,true).animate();
        $(".sevent").stop(false,true).animate();
        $(".ninet").stop(false,true).animate();
    }
});