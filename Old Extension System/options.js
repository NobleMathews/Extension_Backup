'use strict';

var ScreenshotFunctionalityCheck = [false, false, false];

chrome.storage.sync.get(['screenshotKey', 'playbackSpeedButtons', 'screenshotFunctionality'], function(result) {
	ScreenshotKeyCheck.checked = result.screenshotKey;
	PlaybackSpeedButtonsCheck.checked = result.playbackSpeedButtons;
	PlaybackSpeedButtonsChange();

    if (result.screenshotFunctionality == undefined) {
        result.screenshotFunctionality = 0;
    }
    var radios = document.getElementsByName("ScreenshotFunctionalityCheck");
    for (var i = 0, length = radios.length; i < length; i++) {
        if (i == result.screenshotFunctionality) {
            radios[i].checked = true;
            break;
        }
    }
});

ScreenshotKeyCheck.oninput = function() {
	chrome.storage.sync.set({'screenshotKey': this.checked});
};

var ScreenshotFunctionalitySet = function(value) {
	chrome.storage.sync.set({ screenshotFunctionality: value });
};

SFCSave.oninput = function() {
	ScreenshotFunctionalitySet(parseInt(this.value));
};
SFCCopy.oninput = function() {
	ScreenshotFunctionalitySet(parseInt(this.value));
};
SFCBoth.oninput = function() {
	ScreenshotFunctionalitySet(parseInt(this.value));
};

PlaybackSpeedButtonsCheck.oninput = function() {
	chrome.storage.sync.set({'playbackSpeedButtons': this.checked});
	PlaybackSpeedButtonsChange();
};

function PlaybackSpeedButtonsChange() {
	PlaybackSpeedHelp.hidden = !PlaybackSpeedButtonsCheck.checked;
}