/**
 * Created by Administrator on 2016/10/29.
 */
$(function(){
    var next_step=0;
    var animat_inner=null;
    var initial_inner=null;
    var prev_btn=$(".prev-btn");
    prev_btn.css({"display":"none"});
    $(".next-btn").on("click",function(){
        ++next_step;
        if(next_step==1){
            prev_btn.css({"display":"block"});
            next_step_one();
        }else if (next_step==2){
            next_step_two();
        }else if(next_step==3){
            next_step_three();
        }else if(next_step==4){
            next_step_four();
            $(".next-btn").css({"display":"none"})
        }
    });
    prev_btn.on("click",function(){
        --next_step;
        if(next_step==0){
            $(".prev-btn").css({"display":"none"});
            prev_step_one();
        }else if (next_step==1){
            prev_step_two()
        }else if(next_step==2){
            prev_step_three();
        }else if(next_step==3){
            $(".next-btn").css({"display":"block"});
            prev_step_four();
        }
    });
    function next_step_one(){
        $(".next-btn").attr({"disabled":true});
        $(".prev-btn").attr({"disabled":true});
        animat_inner=$(".initial .three").html();
        $(".initial-animat .three").addClass("color");
        $(".initial-animat .three-position").html(animat_inner).addClass("position_color").
        animate({
            "top":"2.8571em",
            "left":"-2.8571em"
        },600,function(){
                $(".initial-animat .three-position").css({
                    "height":"2.0571em"
                }).append("<div class='three-left inline left-rigth opacity'> = </div>");
                $(".left-rigth").animate({
                    "width":"0.7142em"
            },600,function(){
                    $(".initial-animat .three-position").append("<div class='three-rigth inline dot-top'>" +
                        " <div class='three-rigth-top rigth-top'>3</div>" +
                        " <div class='four rigth-top'>2 </div> " +
                        "</div>");
                    $(".initial-animat .dot-top").animate({
                        "opacity":1
                    },600,function(){
                            $(".three-position .opacity").animate({"opacity":0});
                            $(".dot-top").css({"position":"absolute"});
                            $(".dot-top").animate({
                                "top":"-2.8571em",
                                "left":"3.7142em"
                            },600,function(){
                                $(".initial-animat .three").html($(".dot-top").html()).removeClass("color").
                                    css({"padding":"0 0.9142em"});
                                $(".record-animat-two").html($(".initial-animat").html());
                                $(".next-btn").attr({"disabled":false});
                                $(".prev-btn").attr({"disabled":false});
                            });
                        })
                })
        });
    }
    function prev_step_one(){
        $(".prev-btn").attr({"disabled":true});
        animat_inner=$(".record-animat-one .three").html();
        $(".initial-animat .three").html(animat_inner).css({"padding":"0 0.2857em"});
        $(".prev-btn").attr({"disabled":false});
    }
    function next_step_two(){
        $(".next-btn").attr({"disabled":true});
        $(".prev-btn").attr({"disabled":true});
        animat_inner=$(".initial-animat .two-rigth").html();
        $(".initial-animat .two-rigth").addClass("color");
        $(".initial-animat .two-position").html(animat_inner).addClass("position_color").
        animate({
            "top": "4.2857em",
            "left": "-1.4285em"
        },600,function(){
                $(".initial-animat .two-position").css({"height":"2.0571em"}).
                    append("<div class='two-animat-position'><div class='two-left inline left-rigth opacity'> = </div></div>");
                $(".initial-animat .left-rigth").animate({
                    "width":"0.7142em"
                },600,function(){
                        $(".initial-animat .two-animat-position").append("<div class='two-animat-position-rigth'>"+animat_inner+"</div>");
                        $(".initial-animat .two-animat-position-rigth").animate({
                            "left":"0.7142em"
                        },600,function(){
                                $(".initial-animat .two-animat-position-rigth .two-rigth-top").css({"position":"relative"}).
                                    append("<div class='two-animat-position-rigth-top'>×&nbsp;2</div>" +
                                        "<div class='top-red-one animat-red'></div>");
                                $(".initial-animat .two-animat-position-rigth .three").css({"position":"relative"}).
                                    append("<div class='two-animat-position-rigth-dot'>×&nbsp;2</div>" +
                                        "<div class='dot-red-one animat-red'></div>" +
                                        "<div class='dot-red-two animat-red'></div>" +
                                        "<div class='dot-red-three animat-red'></div>");
                                $(".initial-animat .two-animat-position-rigth-top").animate({
                                    "left":"1.4285em"
                                },600);
                                $(".initial-animat .two-animat-position-rigth-dot").animate({
                                    "left":"1.4285em"
                                },600,function(){
                                        $(".initial-animat .dot-red-three").addClass("red").animate({
                                            "top": "1.5714em",
                                            "left": "0.6em"
                                        },600);
                                        $(".initial-animat .dot-red-two").addClass("red").animate({
                                            "top": "1.0571em",
                                            "left": "1.9142em"
                                        },600,function(){
                                            $(".initial-animat .top-red-one").addClass("red").animate({
                                                "top": "0.4857em",
                                                "left": "0.6em"
                                            },600);
                                            $(".initial-animat .dot-red-one").addClass("red").animate({
                                                "top": "0.4857em",
                                                "left": "0.6em"
                                            },600,function(){
                                                $(".initial-animat .two-animat-position-rigth").html("2").css({
                                                    "left":"2.9142em",
                                                    "top":"-0.3142em"
                                                }).animate({
                                                    "left":"0.7142em",
                                                    "top":"0.2em"
                                                },600,function(){
                                                        $(".initial-animat .two-position .three").addClass("opacity")
                                                        $(".initial-animat .two-position .opacity").animate({"opacity":0},600);
                                                        $(".initial-animat .two-animat-position-rigth").animate({
                                                            "left":"1.4em",
                                                            "top":"-3.9428em"
                                                    },600,function(){
                                                            $(".initial-animat .two-position").remove();
                                                            $(".initial-animat .two-rigth").html("2").
                                                                removeClass("color").css({
                                                                "padding":"0 0.9142em",
                                                                "overflow": "hidden",
                                                                "line-height": "2.3428em"
                                                            }).animate({
                                                                "padding":"0"
                                                            },600);
                                                            $(".initial-animat .one-rigth-top").animate({
                                                                "padding":"0 1em"
                                                            });

                                                            $(".record-animat-three").html($(".initial-animat").html());
                                                            $(".next-btn").attr({"disabled":false});
                                                            $(".prev-btn").attr({"disabled":false});
                                                    });
                                                })
                                            });
                                        });

                                    });
                            })
                    })
            })
    }
    function prev_step_two(){
        animat_inner=$(".record-animat-two").html();
        $(".initial-animat").html(animat_inner);
        $(".one-rigth-top").animate({
            "padding":"0 0 0 1.7142em"
        });
        $(".initial-animat .one-rigth").css({
            "overflow":""
        })
    }
    function next_step_three(){
        $(".next-btn").attr({"disabled":true});
        $(".prev-btn").attr({"disabled":true});
        $(".initial-animat .two").animate({
            "opacity":0
        },600,function(){
            $(".one-rigth").css({
               "overflow": "hidden"
            });
            $(".initial-animat .two").html("2").css({
                "padding":"0 1em",
                "line-height": "1em"

            }).animate({
                "opacity":1
            },600,function(){

                $(".initial-animat .two,.one-rigth-top").animate({
                    "padding":"0",
                });
                $(".record-animat-four").html($(".initial-animat").html());
                $(".next-btn").attr({"disabled":false});
                $(".prev-btn").attr({"disabled":false});
            })
        })
    }
    function prev_step_three(){
        animat_inner=$(".record-animat-three").html();
        $(".initial-animat").html(animat_inner);
        $(".initial-animat .one-rigth-top").animate({
            "padding":"0 0 0 1em"
        });
        $(".initial-animat .two-rigth").css({
            "padding": "0"
        });
        $(".initial-animat .one-rigth").css({
            "overflow":""
        })
    }
    function next_step_four(){
        $(".next-btn").attr({"disabled":true});
        $(".prev-btn").attr({"disabled":true});
        $(".initial-animat .one-left").animate({
            "opacity":0
        },600,function(){
                $(".initial-animat .one-left").html("<div class='three-rigth-top rigth-top'>12</div> " +
                    "<div class='four rigth-top six'>2 </div>" +
                    "<div class='seven'></div>").addClass("seven-maing").animate({
                "opacity":1
            },600,function(){
                    $(".initial-animat .one").css({
                        "position": "relative"
                    }).animate({
                        "opacity":0
                    },600,function(){
                        $(".initial-animat .one").html("<div class='one-rigth-position'><div class='three-rigth-top rigth-top'>7</div> " +
                            "<div class='four rigth-top'>2 </div></div>").animate({
                            "opacity":1
                        },600,function(){
                            animat_inner=$(".initial-animat .one").html();
                            initial_inner=$(".initial").html();
                            $(".initial-animat").html(initial_inner).append(animat_inner+"<div class='equal'>=</div>");
                            $(".one-rigth-top").css({
                                "padding":"0 0 0 1.7142em"
                            });
                            $(".initial-animat .equal").animate({
                                "width":"0.4571em"
                            });
                            $(".initial-animat .one-rigth-position").animate({
                                "left":"6.3em",
                                "top":"0px"
                            });
                            $(".prev-btn").attr({"disabled":false});
                        })
                    })
                })
        })
    }
    function prev_step_four(){
        $(".next-btn").attr({"disabled":true});
        animat_inner=$(".record-animat-four").html();
        $(".initial-animat").html(animat_inner);
        $(".initial-animat .one-rigth,.initial-animat .one-rigth-top,.initial-animat .two").css({
            "padding":"0"
        });
        $(".next-btn").attr({"disabled":false});
        $(".initial-animat .one-rigth").css({
            "overflow":"hidden"
        });
        //$(".initial-animat .two").html("4-2");
        //next_step_three();
    }
})