/**
 * 每个切片特有的js
 * 小学数学
 */

//通用文件
var cfiles = [
	'css/preload.min.css',
	'css/primary_math.css',
	'css/knowledge.css',
	'css/canvasController.css',
	'css/videoControl.css',
	'js/jquery.min.js',
	'js/primary_math.js',
	'js/preload.min.js',
	'js/easeljs-0.8.1.min.js',
	'js/tweenjs-0.6.1.min.js',
	'js/movieclip-0.8.1.min.js',
	'js/preloadjs-0.6.1.min.js',
	'js/videoControls.js',
	'js/RemConversion.js',
	'js/animaCreateJs.js',
	'js/animaCreateJsContrl.js',
	'js/knowledge.js',
];
//私有文件
var pfiles = [
  '../ezjs.css',
  '../ezjs.js',

  '../ezjs_dev.css',
  '../ezjs_dev.js',

  'css/index.css',
  'js/index.js',];

var loader = new loader_common();
loader.addCommonFiles(cfiles);
loader.addPrivateFiles(pfiles);
loader.load();
