/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 138);
/******/ })
/************************************************************************/
/******/ ({

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var visible = false;
function Capturecode() {
  var theatrec = document.getElementById("player-theater-container");
  var button = document.querySelector(".ytp-size-button.ytp-button");
  if (theatrec.innerHTML != "") button.click();

  var element = document.getElementById("PowerCoder");
  if (typeof element != 'undefined' && element != null) {
    if (visible) element.style.display = "none";else element.style.display = "block";
    visible = !visible;
  } else {
    visible = !visible;
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

    if (SetTitle() == false) title = '';
  }

  var player = document.getElementsByClassName("video-stream")[0];

  var time = player.currentTime;

  title += " ";

  var minutes = Math.floor(time / 60);

  time = Math.floor(time - minutes * 60);

  if (minutes > 60) {
    var hours = Math.floor(minutes / 60);
    minutes -= hours * 60;
    title += hours + "-";
  }

  title += minutes + "-" + time;

  title += " " + appendixTitle;

  var canvas = document.createElement("canvas");
  canvas.width = player.videoWidth;
  canvas.height = player.videoHeight;
  canvas.getContext('2d').drawImage(player, 0, 0, canvas.width, canvas.height);
  var basic = $('#cropengine').croppie({
    viewport: {
      width: 512,
      height: 288
    }
  });
  $("#cropComp").show();
  basic.croppie('bind', {
    url: canvas.toDataURL(),
    points: [0, 0, 0, 0]
  });
  //,{type:'base64',size:{width:imgsize[0],height:imgsize[1]},format:'png'}
  // $('#cropresult').html(JSON.stringify(d));
  $('#cropx').click(function () {
    try {
      basic.croppie('result').then(function (r) {
        var imagefoo = document.createElement("img");
        imagefoo.src = r;
        imagefoo.style.width = canvas.width;
        imagefoo.style.height = canvas.height;
        imagefoo.style.display = "none";

        doOCRi(imagefoo);
      });
    } catch (err) {}
    basic.croppie('destroy');
    $("#cropComp").hide();
  });
}

function AddcodeButton() {
  var ytpRightControls = document.getElementsByClassName("ytp-right-controls")[0];
  if (ytpRightControls) {
    ytpRightControls.prepend(codeButton);
  }
  // startOCRengine();
  var html = '<h1>Select region with code to extract</h1><p><span>Scroll and drag to select area</span><br/><br/>   <input type="button" id="cropx" value="Process Selected Region" /></p><div id="cropengine" style="width:80vw; height:70vh;"></div>';
  var wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  wrapper.id = "cropComp";
  document.body.appendChild(wrapper);
  $("#cropComp").hide();
}

var codeButton = document.createElement("button");
codeButton.className = "codeButton ytp-button";
codeButton.style.width = "auto";
codeButton.innerHTML = "Code";
codeButton.style.cssFloat = "left";
codeButton.onclick = Capturecode;

AddcodeButton();

window.onload = function () {
  $(document).ready(checkContainer);
  $(document).ready(finallyAppended);
  function finallyAppended() {
    if ($('#YTCoder').is(':visible')) {
      //if the container is visible on the page
      $('#YTCoder').height($(window).height() - ($('#YTCoder').offset().top - $(window).scrollTop()) - 20);
    } else {
      setTimeout(finallyAppended, 100); //wait 50 ms, then try again
    }
  }
  function checkContainer() {
    if ($('#primary-inner #player').is(':visible')) {
      //if the container is visible on the page
      appendEditor();
    } else {
      setTimeout(checkContainer, 50); //wait 50 ms, then try again
    }
  }
  function appendEditor() {
    var topbar = document.getElementById("primary-inner");
    var player = document.querySelector("#primary-inner #player");
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", chrome.extension.getURL('../embeddable/embed.html'));
    ifrm.style.width = "100%";
    ifrm.id = "YTCoder";
    topbar.insertBefore(ifrm, player);
    var temp = document.createElement('div');
    temp.id = "croptemppar";
    var tempp = document.createElement('textarea');
    tempp.id = "croptemp";
    tempp.style = "resize:none; width:100%; padding:10px; height:150px;";
    tempp.className = "card card-4";
    var copier = document.createElement("div");
    copier.id = "copyToClipboard-a";
    copier.className = "clipboard icon";
    temp.appendChild(copier);
    temp.appendChild(tempp);
    topbar.insertBefore(temp, player);
    $("#croptemppar").hide();
    document.getElementById('copyToClipboard-a').addEventListener('click', function () {

      var text = document.getElementById('croptemp');
      text.select();
      document.execCommand('copy');
      $('#croptemp').val('');
      $("#croptemppar").hide();
    });
  }
};
if ($('#YTCoder').is(':visible')) {
  $('#YTCoder').height(Math.abs($(window).height() - ($('#YTCoder').offset().top - $(window).scrollTop()) - 20));
};

$(window).trigger('resize');

var doOCRi = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(image) {
    var _Tesseract, createWorker, worker, _ref2, text;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _Tesseract = Tesseract, createWorker = _Tesseract.createWorker;
            worker = createWorker({
              workerPath: chrome.runtime.getURL('js/worker.min.js'),
              langPath: chrome.runtime.getURL('traineddata'),
              corePath: chrome.runtime.getURL('js/tesseract-core.wasm.js')
            });
            _context.next = 4;
            return worker.load();

          case 4:
            _context.next = 6;
            return worker.loadLanguage('eng');

          case 6:
            _context.next = 8;
            return worker.initialize('eng');

          case 8:
            _context.next = 10;
            return worker.recognize(image);

          case 10:
            _ref2 = _context.sent;
            text = _ref2.data.text;


            $("#croptemp").append(text);
            $("#croptemppar").show();
            _context.next = 16;
            return worker.terminate();

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function doOCRi(_x) {
    return _ref.apply(this, arguments);
  };
}();

var s = document.createElement("script");
s.src = chrome.runtime.getURL("inject.js");
(document.head || document.documentElement).appendChild(s);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.data === "reset-divider") {
    var resetDividerEvent = new CustomEvent("reset-divider-event");
    window.dispatchEvent(resetDividerEvent);
  }
  sendResponse();
});

/***/ })

/******/ });