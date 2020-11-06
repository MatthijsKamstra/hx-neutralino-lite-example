// Generated by Haxe 4.1.4
(function ($global) { "use strict";
var Main = function() {
	$global.console.log("Main");
	this.init();
};
Main.main = function() {
	var app = new Main();
};
Main.prototype = {
	init: function() {
		console.log("src/Main.hx:37:","init");
		Neutralino.debug.log("INFO","init",function(data) {
			$global.console.log(data);
		},function() {
			$global.console.error("error");
		});
		this.initButton();
		this.getSettings();
		Neutralino.debug.log("INFO","init",function(data) {
			$global.console.log(data);
		},function() {
			$global.console.error("error");
		});
	}
	,initButton: function() {
		var fullscreenBtn = window.document.getElementById("fullscreen-btn");
		fullscreenBtn.onclick = function() {
			console.log("src/Main.hx:67:","fullscreenBtn");
		};
		var dialogOpenBtn = window.document.getElementById("dialog-open-btn");
		dialogOpenBtn.onclick = function() {
			console.log("src/Main.hx:71:","dialogOpenBtn");
		};
		var dialogSaveBtn = window.document.getElementById("dialog-save-btn");
		dialogSaveBtn.onclick = function() {
			console.log("src/Main.hx:75:","dialogSaveBtn");
		};
		var writeFileBtn = window.document.getElementById("write-file-btn");
		writeFileBtn.onclick = function() {
			console.log("src/Main.hx:79:","writeFileBtn");
		};
		var readFileBtn = window.document.getElementById("read-file-btn");
		readFileBtn.onclick = function() {
			console.log("src/Main.hx:83:","readFileBtn");
		};
	}
	,getSettings: function() {
		Neutralino.settings.getSettings(function(data) {
			console.log("src/Main.hx:131:",data);
			var pre = window.document.getElementById("settings");
			pre.innerHTML = JSON.stringify(data);
		},function() {
		});
	}
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
Main.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);