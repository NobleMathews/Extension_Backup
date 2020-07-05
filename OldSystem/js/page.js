'use strict';
var codeKey = false;
var codeFunctionality = 0;
var visible=false;
// const { createWorker } = Tesseract;

// const startOCRengine = async () => {
//   const worker = createWorker({
//     workerPath: chrome.runtime.getURL('js/worker.min.js'),
//     langPath: chrome.runtime.getURL('traineddata'),
//     corePath: chrome.runtime.getURL('js/tesseract-core.wasm.js'),
//   });
// 	await worker.load();
// 	await worker.loadLanguage('eng');
// 	await worker.initialize('eng');
//   }

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
		containerspawner();
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

	doOCR(imagefoo);
	// var downloadLink = document.createElement("a");
	// downloadLink.download = title;

	// canvas.toBlob(async function (blob) {
	// 	if (codeFunctionality == 0 || codeFunctionality == 2) {
	// 		// download
	// 		downloadLink.href = URL.createObjectURL(blob);
	// 		downloadLink.click();
	// 	}

	// 	if (codeFunctionality == 1 || codeFunctionality == 2) {
	// 		// clipboard
	// 		const clipboardItemInput = new ClipboardItem({ "image/png": blob });
	// 		await navigator.clipboard.write([clipboardItemInput]);
	// 	}
	// }, 'image/png');
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

chrome.storage.sync.get(['codeKey', 'codeFunctionality'], function(result) {
	codeKey = result.codeKey;
	if (result.codeFunctionality === undefined)
		codeFunctionality = 0;
	else
    	codeFunctionality = result.codeFunctionality;
});

document.addEventListener('keydown', function(e) {
	if (document.activeElement.contentEditable === 'true' || document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA' || document.activeElement.contentEditable === 'plaintext')
		return true;

	if (codeKey && e.key === '.') {
		Capturecode();
		e.preventDefault();
		return false;
	}
});

AddcodeButton();
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
function containerspawner() {

var playerCont=document.getElementsByClassName("html5-video-player")[0];
var video = playerCont.getElementsByTagName("video")[0];
var topbar=document.getElementById("masthead-container"); 
// console.log(video.style.height,video.style.width,video.style.top,video.style.left,playerCont.offsetHeight,playerCont.clientHeight);

var div = document.createElement( 'div' );
// var btnForm = document.createElement( 'form' );
// var btn = document.createElement( 'input' );
var offsets=offset(playerCont);
//append all elements
document.body.appendChild( div );
// div.appendChild( btnForm );
// btnForm.appendChild( btn );
//set attributes for div
div.id = 'PowerCoder';
// console.log(playerCont.offsetTop+"px",(parseInt(window.innerWidth)-(playerCont.offsetLeft+playerCont.offsetWidth))+"px");
div.style.position = 'absolute';
div.style.top = offsets.top+"px";
div.style.left = (offsets.left+playerCont.offsetWidth)+"px";
div.style.width = ((parseInt(window.innerWidth)-(offsets.left+playerCont.offsetWidth))-15)+"px";   
div.style.height = playerCont.offsetHeight+"px";
div.style.backgroundColor = 'black';
div.style.zIndex=1500;
var ifrm = document.createElement("iframe");
ifrm.setAttribute("src", chrome.extension.getURL('../embeddable/embed.html')); 
ifrm.style.width = "100%"; 
ifrm.style.height = "100%"; 
div.appendChild(ifrm); 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// fetch(chrome.extension.getURL('../embeddable/embed.html'))
//     .then(response => response.text())
//     .then(data => {
//         div.innerHTML += data;
//         // other code
//         // eg update injected elements,
//         // add event listeners or logic to connect to other parts of the app
//     }).catch(err => {
//       console.log(err);
//         // handle error
//     });
// callangular();
// //set attributes for btnForm
// btnForm.action = '';

// //set attributes for btn
// //"btn.removeAttribute( 'style' );
// btn.type = 'button';
// btn.value = 'hello';
// btn.style.position = 'absolute';
// btn.style.top = '50%';
// btn.style.left = '50%';
};
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


const doOCR = async (image) => {
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

  