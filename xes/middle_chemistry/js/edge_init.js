/*
 * 初中化学
 * edge软件初始化js
 * @thinlong
 * v1.0 2016.9.21
 * 备注:先读取资源包，再读取网络包
 * v1.1 变更资源包网络地址
 */

var filePath = '../../xes/middle_chemistry/';

//判断资源读取的方式
function checkResMode()
{	
	var XMLHTTP;
	if (window.XMLHttpRequest) { 
		// code for IE7+, Firefox, Chrome, Opera, Safari
	    XMLHTTP = new XMLHttpRequest();
	} else { 
		// code for IE6, IE5
	    XMLHTTP = new ActiveXObject("Microsoft.XMLHTTP");
	}
	XMLHTTP.open("GET",filePath + 'js/edge_loader.js',true);
	XMLHTTP.send(null);
	
	XMLHTTP.onreadystatechange=function(){
	    if(XMLHTTP.readyState==4){
	    	
	        if(XMLHTTP.status==200){
	            console.log("edge资源包js");

	        }else if(XMLHTTP.status=="404"){
	            console.log("edge网络js")
	            filePath = 'http://kjds2.speiyou.com/courseware/xes/middle_chemistry/';
	        }
	        
	        //加载js
			var myjs = document.createElement('script');
			myjs.src = filePath + 'js/edge_loader.js';
			document.body.appendChild(myjs);
	    }
	}
}

checkResMode();
