/**
 * Created by hxsd on 2016/10/20.
 */
$(function(){
    if($(window).width()<409){
    }
    var n = 0;
    $(".prev-btn").css({ "display": "none" });
    $(".next-btn").on("click",function(){
        n++;
        if (n == 1) {
            $(".prev-btn").css({ "display": "block" });
            first();
        } else if (n == 2) {
            finish_one();
            secend();
        } else if (n == 3) {
            finish_two();
            third();
        } else if (n == 4) {
            finish_three();
            fourth();
        } else if (n == 5) {
            finish_four();
            fiveth();
            $(this).css({ "display": "none" })
        }
    });
    $(".prev-btn").on("click", function () {
        $(".next-btn").css({ "display": "block" })
        if (n == 1) {
            $(".prev-btn").css({ "display": "none" })
            one();
            $(".ex").text("2");
            n=0;
        } else if (n == 2) {
            two();
            $(".content .five .left_top").css({ "opacity": 0 })
            $(".content .five .right_top").css({ "opacity": 0 })
            $(".content .five .left_bottom").css({ "opacity": 0 })
            $(".content .five .right_bottom").css({ "opacity": 0 })
            $(".content .eightr .left_top").css({ "opacity": 0 })
            $(".content .eightr .right_top").css({ "opacity": 0 })
            $(".content .eightr .left_bottom").css({ "opacity": 0 })
            $(".content .eightr .right_bottom").css({ "opacity": 0 })
            $(".skew_r").css({ "opacity": 0 })
            $(".skew_l").css({ "opacity": 0 })
            $(".like").css({ "opacity": 0 })
            n=1;
        } else if (n == 3) {
            three();
            n=2;
        } else if (n == 4) {
            four();
            n=3;
        } else if (n == 5) {
            five();
            n=4;
        }
    });
    function first() {
        $(".prev-btn").attr("disabled", true);
        $(".ex").animate({"top":"11.8em"},500);
        $(".specil").animate({"opacity":1});
        $(".content>.five").animate({ "top": "11.4em" }, 500);
        $(".four").animate({ "top": "11.8em" }, 500, function () {
            $(".ex").animate({ "opacity": 0 }, 500, function () {
                $(".ex").animate({ "opacity": 1 }, 500).text("1");
            })
            $(".content>.five").animate({ "left": "4.2em" }, 500, function () {
                $(".content>.five>.six").animate({"opacity":1},function(){
                    $(".content>.five>.seven").animate({"opacity":1},function(){
                        $(".content>.five").animate({ "top": "6.4em" }, 500);
                        $(".ex").animate({ "top": "6.8em" }, 500);
                        $(".four").animate({ "top": "6.8em" }, 500);
                        $(".specil").animate({ "opacity": "0" }, 500, function () {
                            $(".prev-btn").attr("disabled", false);
                        });
                    });
                });
            });
        });
    }
    function secend() {
        $(".prev-btn").attr("disabled", true);
        $(".content>.five>.left_top").animate({"width":"7em","opacity":1},500,function(){
            $(".content>.five>.right_top").animate({"height":"4.9em","opacity":1},500,function(){
                $(".content>.five>.right_bottom").animate({"width":"7em","right":0,"opacity":1},500,function(){
                    $(".content>.five>.left_bottom").animate({"height":"4.9em","top":0,"opacity":1},500,function(){
                        $(".content>.eightr>.left_top").animate({"width":"7.1em","opacity":1},500,function(){
                            $(".content>.eightr>.right_top").animate({"height":"4.9em","opacity":1},500,function(){
                                $(".content>.eightr>.right_bottom").animate({"width":"7.1em","right":0,"opacity":1},500,function(){
                                    $(".content>.eightr>.left_bottom").animate({"height":"4.9em","top":0,"opacity":1},500,function(){
                                        $(".skew_r").animate({ "opacity": 1 }, 500);
                                        $(".skew_l").animate({ "opacity": 1 }, 500, function () {
                                            $(".like").animate({ "opacity": 1 }, 500, function () {
                                                $(".prev-btn").attr("disabled", false);
                                            });
                                        })
                                    });
                                })
                            })
                        })
                    });
                })
            })
        })
    }
    function third() {
        $(".prev-btn").attr("disabled", true);
        $(".five").addClass("dc");
        $(".eightr").addClass("dc");
        $(".skew_r").animate({"opacity":0},1);
        $(".skew_l").animate({"opacity":0},1,function(){
            $(".five").animate({"opacity":0},500);
            $(".eightr").animate({"opacity":0},500);
            $(".oney").animate({"opacity":1},500);
            $(".twoy").animate({"opacity":1},500,function(){
                $(".like").animate({"opacity":0});
                $(".one").animate({ "left": "10.3em" }, 500);
                $(".two").animate({ "width": "3em", "left": "9em" }, 500);
                $(".ex").animate({ "left": "9.2em" }, 500);
                $(".four").animate({ "left": "10.2em" }, 500);
                $(".oney").animate({ "left": "11.5em", "top": "6.8em" }, 500);
                $(".twor").animate({ "left": "15.7em" }, 500);
                $(".threer").animate({ "width": "3em", "left": "14.5em", "top": "6.3em" }, 500);
                $(".fourr").animate({ "left": "14.7em" }, 500);
                $(".fiver").animate({ "left": "15.2em" }, 500);
                $(".sevenr").animate({ "width": "1.5em", "left": "16em" }, 500);
                $(".sixr").animate({ "left": "16.5em" }, 500);
                $(".twoy").animate({ "left": "16.5em", "top": "7.1em" }, 500, function () {
                    $(".prev-btn").attr("disabled", false);
                });
            });
        });
    }
    function fourth() {
        $(".prev-btn").attr("disabled", true);
        $(".threey").animate({ "opacity": 1 }, 500);
        $(".foury").css({ "opacity": 1 }).animate({ "top": "8.5em" }, 500);
        $(".fivey").css({ "opacity": 1 }).animate({ "top": "9.8em" }, 500);
        $(".sixy").css({ "opacity": 1 }).animate({ "top": "10.3em" }, 500);
        $(".seveny").css({ "opacity": 1 }).animate({ "top": "10.3em" }, 500);
        $(".eighty").css({ "opacity": 1 }).animate({ "top": "10.3em" }, 500);
        $(".niney").css({ "opacity": 1 }).animate({ "top": "9.1em" }, 500);
        $(".teny").css({ "opacity": 1 }).animate({ "top": "8.5em" }, 500);
        $(".oneu").css({ "opacity": 1 }).animate({ "top": "9.8em" }, 500);
        $(".twou").css({ "opacity": 1 }).animate({ "top": "10.2em" }, 500);
        $(".threeu").css({ "opacity": 1 }).animate({ "top": "10.2em" }, 500);
        $(".fouru").css({ "opacity": 1 }).animate({ "top": "9.7em" }, 500);
        $(".fiveu").css({ "opacity": 1 }).animate({ "top": "10.8em" }, 500);
        $(".sixu").css({ "opacity": 1 }).animate({ "top": "10.6em" }, 500, function () {
            $(".sevenu").animate({ "opacity": 1 }, 500);
            $(".eightu").animate({ "opacity": 1 }, 500);
            $(".nineu").animate({ "opacity": 1 }, 500);
            $(".tenu").animate({ "opacity": 1 }, 500);
            $(".onei").animate({ "opacity": 1 }, 500);
            $(".twoi").animate({ "opacity": 1 }, 500, function () {
                $(".sevenu").animate({"left":"15.7em","opacity":0},500);
                $(".eightu").animate({"left":"15.7em","opacity":0},500);
                $(".nineu").animate({"left":"15.7em","opacity":0},500);
                $(".tenu").animate({"left":"15.7em","opacity":0},500);
                $(".onei").animate({"left":"15.7em","opacity":0},500);
                $(this).animate({"left":"15.7em","opacity":0},500,function(){
                    $(".teny").html("<i>x</i>");
                    $(".twou").html("<i>x</i>");
                    $(".fouru").animate({"top":"10.2em"},500);
                    $(".fiveu").animate({"top":"10.8em","opacity":0},500);
                    $(".sixu").animate({"top":"10.8em","opacity":0},500);
                    $(".threeu").animate({ "left": "15.5em" }, 1, function () {
                        $(".prev-btn").attr("disabled", false);
                    });
                });
            });
        })
    }
    function fiveth() {
        $(".prev-btn").attr("disabled", true);
        $(".threei").animate({ "opacity": 1 }, 500, function () {
            $(".fouri").animate({ "opacity": 1 }, 500, function () {
                $(".prev-btn").attr("disabled", false);
            });
        })
    }
    function one() {
        $(".content .one").css({ "left": "6em", "top": "5em" });
        $(".content .like").css({ "left": "3.8rem", "top": "3.8rem" });
        $(".content .two").css({ "left": "2.1em", "top": "6.3em", "width": "8em","height":"2px"});
        $(".content .three").css({ "left": "2.2em", "top": "6.8em", "opacity": 0 });
        $(".content .four").css({ "left": "3.4em", "top": "6.8em" });
        $(".content .ex").css({ "left": "2.5em", "top": "6.8em" });
        $(".content .five").css({ "left": "3.1em", "top": "6.4em", "width": "7em", "height": "5em" });
        $(".content .five .six").css({ "left": "0", "top": ".4em", "opacity": 0 });
        $(".content .five .seven").css({ "left": ".6em", "top": ".4em", "opacity": 0 });
        $(".content .five .eight").css({ "left": "3.6em", "top": " -.2em" });
        $(".content .five .nine").css({ "left": "1.5em", "top": "1em", "width": "5.5em", "height": "2px" });
        $(".content .five .ten").css({ "left": "1.5em", "top": "1.5em" });
        $(".content .five .onet").css({ "left": "2.2em", "top": "1.5em" });
        $(".content .five .twot").css({ "left": "4.4em", "top": ".9em" });
        $(".content .five .threet").css({ "left": "3em", "top": "2.1em", "width": "4em", "height": "2px" });
        $(".content .five .fourt").css({ "left": "3em", "top": "2.5em" });
        $(".content .five .fivet").css({ "left": "3.7em", "top": "2.5em" });
        $(".content .five .sixt").css({ "left": "5.4em", "top": "2em" });
        $(".content .five .sevent").css({ "left": "4.5em", "top": "3.1em", "width": "2.5em", "height": "2px" });
        $(".content .five .eightt").css({ "left": "4.3em", "top": "2.8em" });
        $(".content .five .ninet").css({ "left": "1.1em", "top": "top: .3em" });
        $(".content .five .tentt").css({ "left": "9.7em", "top": "5.1em" });
        $(".content .five .right_top").css({ "width": ".05em","height":"2px", "opacity": 0 });
        $(".content .five .left_bottom").css({ "width": ".05em", "height": "2px", "opacity": 0 })
        $(".content .five .right_bottom").css({ "width": ".05em", "height": "2px", "opacity": 0 })
        $(".content .five .left_top").css({ "width": ".05em", "height": "2px", "opacity": 0 })
        $(".skew_r").css({ "width": "2px", "height": "4em", "opacity": 0, "right": "-2em", "top": "4.9em", "opacity": 0 })
        $(".content .oner").css({ "left": "13em", "top": "5.6em" })
        $(".content .twor").css({ "left": "21.1em", "top": "5em" })
        $(".content .threer").css({ "left": "16.5em", "top": "6.2em", "width": "10em","height":"2px"})
        $(".content .fourr").css({ "left": "17em", "top": "6.7em" })
        $(".content .fiver").css({ "left": "17.8em", "top": "6.7em" })
        $(".content .sixr").css({ "left": "22em", "top": "6.2em" })
        $(".content .sevenr").css({ "left": "18.9em", "top": "7.3em", "width": "7.6em", "height": "2px" })
        $(".content .eightr").css({ "left": "19.5em", "top": "7.4em", "width": "7.1em", "height": "5em" })
        $(".content .eightr .six").css({ "left": 0, "top": ".4em" })
        $(".content .eightr .seven").css({ "left": ".6em", "top": ".4em" })
        $(".content .eightr .eight").css({ "left": "3.6em", "top": "-.2em" })
        $(".content .eightr .nine").css({ "left": "1.5em", "top": "1em", "width": "5.5em", "height": "2px" })
        $(".content .eightr .ten").css({ "left": "1.5em", "top": "1.5em" })
        $(".content .eightr .onet").css({ "left": "2.2em", "top": "1.5em" })
        $(".content .eightr .twot").css({ "left": "4.4em", "top": ".9em" })
        $(".content .eightr .threet").css({ "left": "3em", "top": "2.1em", "width": "4em", "height": "2px" })
        $(".content .eightr .fourt").css({ "left": "3em", "top": "2.5em" })
        $(".content .eightr .fivet").css({ "left": "3.7em", "top": "2.5em" })
        $(".content .eightr .sixt").css({ "left": "5.4em", "top": "2em" })
        $(".content .eightr .sevent").css({ "left": "4.5em", "top": "3.1em", "width": "2.5em", "height": "2px" })
        $(".content .eightr .eightt").css({ "left": "4.3em", "top": "3em" })
        $(".content .eightr .ninet").css({ "left": "1.1em", "top": ".3em" })
        $(".content .eightr .tentt").css({ "left": "9.7em", "top": "5.1em" })
        $(".content .specil").css({ "opacity": 0, "width": "7em", "height": "5em" });
        $(".content .specil .four_two").css({ "left": "3.4em", "top": "6.8em" });
        $(".content .specil .ex_two").css({ "left": "2.5em", "top": "6.8em" });
        $(".content .specil .five").css({ "left": "3.1em", "top": "6.4em", "width": "7em", "height": "5em" });
        $(".content .specil .five .six").css({ "left": 0, "top": ".4em", "opacity": 0 });
        $(".content .specil .five .seven").css({ "left": ".6em", "top": ".4em", "opacity": 0 });
        $(".content .specil .five .eight").css({ "left": "3.6em", "top": "-.2em" });
        $(".content .specil .five .nine").css({ "left": "1.5em", "top": "1em", "width": "5.5em", "height": "2px" });
        $(".content .specil .five .ten").css({ "left": "1.5em", "top": "1.5em" });
        $(".content .specil .five .onet").css({ "left": "2.2em", "top": "1.5em" });
        $(".content .specil .five .twot").css({ "left": "4.4em", "top": ".9em" });
        $(".content .specil .five .threet").css({ "left": "3em", "top": "2.1em", "width": "4em", "height": "2px" });
        $(".content .specil .five .fourt").css({ "left": "3em", "top": "2.5em" });
        $(".content .specil .five .fivet").css({ "left": "3.7em", "top": "2.5em" });
        $(".content .specil .five .sixt").css({ "left": "5.4em", "top": "2em" });
        $(".content .specil .five .sevent").css({ "left": "4.5em", "top": "3.1em", "width": "2.5em", "height": "2px" });
        $(".content .specil .five .eightt").css({ "left": "4.3em", "top": "2.8em" });
        $(".content .specil .five .ninet").css({ "left": "1.1em", "top": ".3em" });
        $(".content .specil .five .tentt").css({ "left": "9.7em", "top": "5.1em" });
        $(".content .eightr .left_top").css({ "width": ".05em", "height": "2px", "opacity": 0 });
        $(".content .eightr .right_top").css({ "width": ".05em", "height": "2px", "opacity": 0 })
        $(".content .eightr .left_bottom").css({ "width": ".05em", "height": "2px", "opacity": 0 })
        $(".content .eightr .right_bottom").css({ "width": ".05em", "height": "2px", "opacity": 0 })
        $(".content .eightr .skew_l").css({ "width": "2px", "height": "3em", "opacity": 0, "right": "-1.5em", "top": "4.9em", "opacity": 0 })
        $(".content .oney").css({ "left": "7.5em", "top": "8.3em", "opacity": 0 });
        $(".content .twoy").css({ "left": "22.8em", "top": "9.2em", "opacity": 0 });
        $(".content .threey").css({ "left": "7em", "top": "9.7em", "opacity": 0 });
        $(".content .foury").css({ "left": "10.3em", "top": "5em", "opacity": 0 });
        $(".content .fivey").css({ "left": "9em", "top": "8.3em", "opacity": 0, "width": "3em","height":"2px"});
        $(".content .sixy").css({ "left": "9.2em", "top": "6.8em", "opacity": 0 });
        $(".content .seveny").css({ "left": "10.2em", "top": "6.8em", "opacity": 0 });
        $(".content .eighty").css({ "left": "11.5em", "top": "6.8em", "opacity": 0 });
        $(".content .niney").css({ "left": "13em", "top": "5.6em", "opacity": 0 });
        $(".content .teny").css({ "left": "15.7em", "top": "5em", "opacity": 0 });
        $(".content .oneu").css({ "left": "14.5em", "top": "6.3em", "opacity": 0, "width": "3em", "height": "2px" });
        $(".content .twou").css({ "left": "14.7em", "top": "6.7em", "opacity": 0 });
        $(".content .threeu").css({ "left": "15.2em", "top": "6.7em", "opacity": 0 });
        $(".content .fouru").css({ "left": "16.5em", "top": "6.2em", "opacity": 0 });
        $(".content .fiveu").css({ "left": "16em", "top": "7.3em", "opacity": 0, "width": "1.5em", "height": "2px" });
        $(".content .sixu").css({ "left": "16.5em", "top": "7.1em", "opacity": 0 });
        $(".content .sevenu").css({ "left": "16.5em", "top": "8.4em", "opacity": 0 });
        $(".content .eightu").css({ "left": "17.5em", "top": "8.4em", "opacity": 0 });
        $(".content .nineu").css({ "left": "14.3em", "top": "10.2em", "opacity": 0 });
        $(".content .tenu").css({ "left": "17.5em", "top": "10.2em", "opacity": 0 });
        $(".content .onei").css({ "left": "18em", "top": "10.2em", "opacity": 0 });
        $(".content .twoi").css({ "left": "18.8em", "top": "10.2em", "opacity": 0 });
        $(".content .threei").css({ "left": "7em", "top": "13em", "opacity": 0 });
        $(".content .fouri").css({ "left": "9em", "top": "13em", "opacity": 0 });
    }
    function two() {
        one();
        $(".ex").css({ "top": "6.8em" }).text("1");
        $(".specil").css({ "opacity": "0" });
        $(".content>.five").css({ "left": "4.2em", "top": "6.4em" });
        $(".four").css({ "top": "6.8em" });
        $(".content>.five>.six").css({ "opacity": 1 });
        $(".content>.five>.seven").css({ "opacity": 1 });
    }
    function three() {
        two();
        $(".content .five").removeClass("dc").css({ "opacity": 1 });
        $(".content .eightr").removeClass("dc").css({ "opacity": 1 });
        $(".content>.five>.left_top").css({ "width": "7em", "opacity": 1 });
        $(".content>.five>.right_top").css({ "height": "4.9em", "opacity": 1 });
        $(".content>.five>.right_bottom").css({ "width": "7em", "right": 0, "opacity": 1 });
        $(".content>.five>.left_bottom").css({ "height": "4.9em", "top": 0, "opacity": 1 });
        $(".content>.eightr>.left_top").css({ "width": "7em", "opacity": 1 });
        $(".content>.eightr>.right_top").css({ "height": "4.9em", "opacity": 1 });
        $(".content>.eightr>.right_bottom").css({ "width": "7em", "right": 0, "opacity": 1 });
        $(".content>.eightr>.left_bottom").css({ "height": "4.9em", "top": 0, "opacity": 1 });
        $(".skew_r").css({ "opacity": 1 });
        $(".skew_l").css({ "opacity": 1 });
        $(".like").css({ "opacity": 1 });
    }
    function four() {
        three();
        $(".five").css({ "opacity": 0 });
        $(".eightr").css({ "opacity": 0 });
        $(".skew_r").css({ "opacity": 0 });
        $(".skew_l").css({ "opacity": 0 });
        $(".oney").css({ "opacity": 1, "left": "11.5em", "top": "6.8em" });
        $(".like").css({ "opacity": 0 });
        $(".one").css({ "left": "10.3em" });
        $(".two").css({ "width": "3em", "left": "9em" });
        $(".ex").css({ "left": "9.2em" });
        $(".four").css({ "left": "10.2em" });
        $(".twor").css({ "left": "15.7em" });
        $(".threer").css({ "width": "3em", "left": "14.5em", "top": "6.3em" });
        $(".fourr").css({ "left": "14.7em" });
        $(".fiver").css({ "left": "15.2em" });
        $(".sevenr").css({ "width": "1.5em", "left": "16em" });
        $(".sixr").css({ "left": "16.5em" });
        $(".twoy").css({ "left": "16.5em", "top": "7.1em", "opacity": 1 });
    }
    function five() {
        four();
        $(".threey").css({ "opacity": 1 });
        $(".foury").css({ "opacity": 1, "top": "8.5em" });
        $(".fivey").css({ "opacity": 1, "top": "9.8em" });
        $(".sixy").css({ "opacity": 1, "top": "10.3em" });
        $(".seveny").css({ "opacity": 1, "top": "10.3em" });
        $(".eighty").css({ "opacity": 1, "top": "10.3em" });
        $(".niney").css({ "opacity": 1, "top": "9.1em" });
        $(".teny").css({ "opacity": 1, "top": "8.5em" }).html("<i>x</>");
        $(".oneu").css({ "opacity": 1, "top": "9.8em" });
        $(".twou").css({ "opacity": 1, "top": "10.2em" }).html("<i>x</>");
        $(".threeu").css({ "opacity": 1, "top": "10.2em", "left": "15.5em" });
        $(".fouru").css({ "opacity": 1, "top": "10.2em" });
        $(".fiveu").css({ "opacity": 0, "top": "10.8em" });
        $(".sixu").css({ "opacity": 0, "top": "10.6em" });
        $(".sevenu").css({ "opacity": 0, "left": "15.7em" });
        $(".eightu").css({ "opacity": 0, "left": "15.7em" });
        $(".nineu").css({ "opacity": 0, "left": "15.7em" });
        $(".tenu").css({ "opacity": 0, "left": "15.7em" });
        $(".onei").css({ "opacity": 0 });
    }
    function finish_one() {
        $(".ex").stop(true, true);
        $(".specil").stop(true, true);
        $(".content>.five").stop(true, true);
        $(".four").stop(true, true);
    }
    function finish_two() {
        $(".content>.five>.left_top").stop(true, true);
    }
    function finish_three() {
        $(".five").stop(true, true);
        $(".eightr").stop(true, true);
        $(".skew_r").stop(true, true);
        $(".skew_l").stop(true, true);
    }
    function finish_four() {
        $(".threey").stop(true, true);
        $(".foury").stop(true, true);
        $(".fivey").stop(true, true);
        $(".sixy").stop(true, true);
        $(".seveny").stop(true, true);
        $(".eighty").stop(true, true);
        $(".niney").stop(true, true);
        $(".teny").stop(true, true);
        $(".oneu").stop(true, true);
        $(".twou").stop(true, true);
        $(".threeu").stop(true, true);
        $(".fouru").stop(true, true);
        $(".fiveu").stop(true, true);
        $(".sixu").stop(true, true);
    }
    function finish_five() {
        $(".threei").stop(true, true);
    }
});