'use strict';
var visible=false;
function Capturecode() {
var theatrec=document.getElementById("player-theater-container");
var button = document.querySelector(".ytp-size-button.ytp-button")
if(theatrec.innerHTML!="")
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
  var basic = $('#cropengine').croppie({
    viewport: {
        width: 512,
        height: 288
    }
  });
  $("#cropComp").show();
  basic.croppie('bind', {
    url: canvas.toDataURL(),
    points: [0,0,0,0]
  });
  //,{type:'base64',size:{width:imgsize[0],height:imgsize[1]},format:'png'}
  // $('#cropresult').html(JSON.stringify(d));
  $('#cropx').click(function(){
  try{
  basic.croppie('result').then(function(r) { 
    var imagefoo = document.createElement("img");
    imagefoo.src=r;
    imagefoo.style.width = canvas.width;
    imagefoo.style.height = canvas.height;
    imagefoo.style.display = "none";
  
    doOCRi(imagefoo);
  });
}
catch(err){

}
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
var wrapper= document.createElement('div');
wrapper.innerHTML= html;
wrapper.id="cropComp";
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
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", chrome.extension.getURL('../embeddable/embed.html')); 
  ifrm.style.width = "100%"; 
  ifrm.id="YTCoder";
  topbar.insertBefore(ifrm,player); 
  var temp= document.createElement('div');
  temp.id="croptemppar";
  let tempp= document.createElement('textarea');
  tempp.id="croptemp";
  tempp.style="resize:none; width:100%; padding:10px; height:150px;";
  tempp.className ="card card-4";
  var copier=document.createElement("div");
  copier.id="copyToClipboard-a";
  copier.className="clipboard icon";
  temp.appendChild(copier);
  temp.appendChild(tempp);
  topbar.insertBefore(temp,player); 
  $("#croptemppar").hide();
  document.getElementById('copyToClipboard-a').addEventListener('click', function() {
  
    var text = document.getElementById('croptemp');
    text.select();
    document.execCommand('copy');
    $('#croptemp').val('')
    $("#croptemppar").hide();
  
  })
}

}
if ($('#YTCoder').is(':visible')) {
  $('#YTCoder').height(Math.abs($(window).height() - ($('#YTCoder').offset().top - $(window).scrollTop())-20));
  };

$(window).trigger('resize');

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

  $("#croptemp").append(text);
  $("#croptemppar").show();
  await worker.terminate();
  }

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
