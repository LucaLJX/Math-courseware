/*
 * 初中数学  
 * edge通用的js
 * @thinlong
 * v1.0 2016.9.18
 * 功能：备用
 * 
 * v1.1
 * 2016.10.9
 * 添加根据浏览器尺寸缩放功能
 */

 var myStyle = document.createElement("style");
 var html = "";
 html += "html{zoom:" +document.documentElement.clientWidth/1024 + "}";
 myStyle.innerHTML  = html;
 document.head.appendChild(myStyle);