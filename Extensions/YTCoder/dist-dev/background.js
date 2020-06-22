chrome.webNavigation.onHistoryStateUpdated.addListener(function(data) {
	chrome.tabs.get(data.tabId, function(tab) {
		chrome.tabs.executeScript(data.tabId, {code: 'if (typeof AddcodeButton !== "undefined") { AddcodeButton(); }', runAt: 'document_start'});
	});
}, {url: [{hostSuffix: '.youtube.com'}]});
