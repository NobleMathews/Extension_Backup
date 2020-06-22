'use strict';
// var codeKey = false;
var visible=false;

function Capturecode() {
var theatrec=document.getElementById("player-theater-container");
var button = document.querySelector(".ytp-size-button.ytp-button")
if(theatrec.innerHTML=="")
button.click();

	var element=document.getElementById("PowerCoder");
	if(typeof(element) != 'undefined' && element != null)
	{
		if(visible)
		element.style.display = "none";
		else
		element.style.display = "block";
		visible=!visible;
	}
	else{
		visible=!visible;
		// containerspawner();
	}

	var appendixTitle = "code.png";

	var title;

	var headerEls = document.querySelectorAll("h1.title");

	function SetTitle() {
		if (headerEls.length > 0) {
			title = headerEls[0].innerText.trim();
			return true;
		} else {
			return false;
		}
	}
	
	if (SetTitle() == false) {
		headerEls = document.querySelectorAll("h1.watch-title-container");

		if (SetTitle() == false)
			title = '';
	}

	var player = document.getElementsByClassName("video-stream")[0];

	var time = player.currentTime;

	title += " ";

	let minutes = Math.floor(time / 60)

	time = Math.floor(time - (minutes * 60));

	if (minutes > 60) {
		let hours = Math.floor(minutes / 60)
		minutes -= hours * 60;
		title += hours + "-";
	}

	title += minutes + "-" + time;

	title += " " + appendixTitle;

	var canvas = document.createElement("canvas");
	canvas.width = player.videoWidth;
	canvas.height = player.videoHeight;
	canvas.getContext('2d').drawImage(player, 0, 0, canvas.width, canvas.height);

	var imagefoo = document.createElement("img");
	imagefoo.src=canvas.toDataURL();
	imagefoo.style.width = canvas.width;
	imagefoo.style.height = canvas.height;
	imagefoo.style.display = "none";

	doOCRi(imagefoo);
}

function AddcodeButton() {
	var ytpRightControls = document.getElementsByClassName("ytp-right-controls")[0];
	if (ytpRightControls) {
		ytpRightControls.prepend(codeButton);
	}
	// startOCRengine();
}

var codeButton = document.createElement("button");
codeButton.className = "codeButton ytp-button";
codeButton.style.width = "auto";
codeButton.innerHTML = "Code";
codeButton.style.cssFloat = "left";
codeButton.onclick = Capturecode;

// chrome.storage.sync.get(['codeKey', 'codeFunctionality'], function(result) {
// 	codeKey = result.codeKey;
// 	if (result.codeFunctionality === undefined)
// 		codeFunctionality = 0;
// 	else
//     	codeFunctionality = result.codeFunctionality;
// });

// document.addEventListener('keydown', function(e) {
// 	if (document.activeElement.contentEditable === 'true' || document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA' || document.activeElement.contentEditable === 'plaintext')
// 		return true;

// 	if (codeKey && e.key === '.') {
// 		Capturecode();
// 		e.preventDefault();
// 		return false;
// 	}
// });

AddcodeButton();

window.onload = function(){
  $(document).ready(checkContainer);
  $(document).ready(finallyAppended);
function finallyAppended(){
  if($('#YTCoder').is(':visible')){ //if the container is visible on the page
    $('#YTCoder').height($(window).height() - ($('#YTCoder').offset().top - $(window).scrollTop())-20);
  } else {
    setTimeout(finallyAppended, 100); //wait 50 ms, then try again
  }
}
function checkContainer () {
  if($('#primary-inner #player').is(':visible')){ //if the container is visible on the page
    appendEditor(); 
  } else {
    setTimeout(checkContainer, 50); //wait 50 ms, then try again
  }
}
function appendEditor(){
  var topbar=document.getElementById("primary-inner");
  var player=document.querySelector("#primary-inner #player");

  console.log(topbar);
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", chrome.extension.getURL('../embeddable/embed.html')); 
  ifrm.style.width = "100%"; 
  ifrm.id="YTCoder";
  topbar.insertBefore(ifrm,player); 
}

}
if ($('#YTCoder').is(':visible')) {
  $('#YTCoder').height(Math.abs($(window).height() - ($('#YTCoder').offset().top - $(window).scrollTop())-20));
  };

$(window).trigger('resize');
function callangular(){
	angular.module('app', ['ui.ace'])
.controller('ctrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
  
   var themes = [
    "chrome",
    "clouds",
    "crimson_editor",
    "dawn",
    "dreamweaver",
    "eclipse",
    "github",
    "solarized_light",
    "textmate",
    "tomorrow",
    "xcode",
    "kuroir",
    "katzenmilch",
    "ambiance",
    "chaos",
    "clouds_midnight",
    "cobalt",
    "idle_fingers",
    "kr_theme",
    "merbivore",
    "merbivore_soft",
    "mono_industrial",
    "monokai",
    "pastel_on_dark",
    "solarized_dark",
    "terminal",
    "tomorrow_night",
    "tomorrow_night_blue",
    "tomorrow_night_bright",
    "tomorrow_night_eighties",
    "twilight",
    "vibrant_ink"
  ];
  $scope.currentTheme = 14;
  
  var modes = [
    'abap',
    'actionscript',
    'ada',
    'apache_conf',
    'asciidoc',
    'assembly_x86',
    'autohotkey',
    'batchfile',
    'c9search',
    'c_cpp',
    'cirru',
    'clojure',
    'cobol',
    'coffee',
    'coldfusion',
    'csharp',
    'css',
    'curly',
    'd',
    'dart',
    'diff',
    'dockerfile',
    'dot',
    'dummy',
    'dummysyntax',
    'eiffel',
    'ejs',
    'elixir',
    'elm',
    'erlang',
    'forth',
    'ftl',
    'gcode',
    'gherkin',
    'gitignore',
    'glsl',
    'golang',
    'groovy',
    'haml',
    'handlebars',
    'haskell',
    'haxe',
    'html',
    'html_ruby',
    'ini',
    'io',
    'jack',
    'jade',
    'java',
    'javascript',
    'json',
    'jsoniq',
    'jsp',
    'jsx',
    'julia',
    'latex',
    'less',
    'liquid',
    'lisp',
    'livescript',
    'logiql',
    'lsl',
    'lua',
    'luapage',
    'lucene',
    'makefile',
    'markdown',
    'matlab',
    'mel',
    'mushcode',
    'mysql',
    'nix',
    'objectivec',
    'ocaml',
    'pascal',
    'perl',
    'pgsql',
    'php',
    'powershell',
    'praat',
    'prolog',
    'properties',
    'protobuf',
    'python',
    'r',
    'rdoc',
    'rhtml',
    'ruby',
    'rust',
    'sass',
    'scad',
    'scala',
    'scheme',
    'scss',
    'sh',
    'sjs',
    'smarty',
    'snippets',
    'soy_template',
    'space',
    'sql',
    'stylus',
    'svg',
    'tcl',
    'tex',
    'text',
    'textile',
    'toml',
    'twig',
    'typescript',
    'vala',
    'vbscript',
    'velocity',
    'verilog',
    'vhdl',
    'xml',
    'xquery',
    'yaml',
];
  
  $scope.value = '<html>';
  $http.get('https://rawgit.com/mrdoob/three.js/master/examples/webgl_lines_dashed.html').
  success(function(data, status, headers, config) {
    $scope.value = data;
  }).
  error(function(data, status, headers, config) {
    $scope.value = data;
  });
  
  $scope.aceLoaded = function (_editor) {
    
    _editor.setFontSize(14);
    
  }
  
  $scope.aceChanged = function (_editor) {
    
  }
  
  var editor = function() {
    this.theme = themes[$scope.currentTheme];
    this.mode = 'html';
    this.opacity = 65;
    this.useWrapMode = true;
    this.gutter = true;
    this.splitMode = false;
    this.themeCycle = true;
  };

  $scope.editor = new editor();
  var gui = new dat.GUI();
  
  var opacityCtrl = gui.add($scope.editor, 'opacity', 0, 100);
  opacityCtrl.onChange(function(value) {
    $scope.$apply();
  });
  
  var themeCycle = gui.add($scope.editor, 'themeCycle', true);
  themeCycle.onChange(function(value) {
    $scope.$apply();
  });
  
  var themeController = gui.add($scope.editor, 'theme', themes).listen();
  themeController.onChange(function(value) {
    $scope.$apply();
  });
  
  var modeController = gui.add($scope.editor, 'mode', modes);
  modeController.onChange(function(value) {
    $scope.$apply();
  });
  
  var useWrapModeCtrl = gui.add($scope.editor, 'useWrapMode', true);
  useWrapModeCtrl.onChange(function(value) {
    $scope.$apply();
  });
  
  var gutterCtrl = gui.add($scope.editor, 'gutter', false);
  gutterCtrl.onChange(function(value) {
    $scope.$apply();
  });
  
  var splitMode = gui.add($scope.editor, 'splitMode', false);
  splitMode.onChange(function(value) {
    $scope.$apply();
  });
  
  var themeCycle = function() {
      $timeout(function(){
        if($scope.editor.themeCycle) {
          $scope.currentTheme = $scope.currentTheme + 1;
          if($scope.currentTheme < themes.length) {
            $scope.editor.theme = themes[$scope.currentTheme];
          } else {
            $scope.currentTheme = 0;
            $scope.editor.theme = themes[$scope.currentTheme];
          }
        }
        themeCycle();
      }, 500);
  }
 // themeCycle();
  
  
}]);
}


const doOCRi = async (image) => {
  const { createWorker } = Tesseract;
  const worker = createWorker({
    workerPath: chrome.runtime.getURL('js/worker.min.js'),
    langPath: chrome.runtime.getURL('traineddata'),
    corePath: chrome.runtime.getURL('js/tesseract-core.wasm.js'),
  });
	await worker.load();
	await worker.loadLanguage('eng');
	await worker.initialize('eng');
	const { data: { text } } = await worker.recognize(image);
  console.log(text);
  await worker.terminate();
  }

const doOCR = async () => {
  const image = document.getElementById('image');
  const result = document.getElementById('result');

  const { createWorker } = Tesseract;
  const worker = createWorker({
    workerPath: chrome.runtime.getURL('js/worker.min.js'),
    langPath: chrome.runtime.getURL('traineddata'),
    corePath: chrome.runtime.getURL('js/tesseract-core.wasm.js'),
  });
  
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(image);
  console.log(text);
  result.innerHTML = `<p>OCR Result:</p><p>${text}</p>`;
  await worker.terminate();
}
// const startBtn = document.getElementById('start-btn');
// startBtn.onclick = doOCR;

// TODO only inject if setting enabled


var s = document.createElement("script");
s.src = chrome.runtime.getURL("inject.js");
(document.head || document.documentElement).appendChild(s);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.data === "reset-divider") {
    const resetDividerEvent = new CustomEvent("reset-divider-event");
    window.dispatchEvent(resetDividerEvent);
  }
  sendResponse();
});
