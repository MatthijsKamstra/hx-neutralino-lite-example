// Generated by Haxe 4.1.4
(function ($global) { "use strict";
var Log = function() {
	haxe_Log.trace = function(v,infos) {
		var str = infos.fileName + ":" + infos.lineNumber + ": " + Std.string(v);
		Neutralino.debug.log("INFO",str,function(data) {
			$global.console.log(data);
		},function() {
			$global.console.error("error");
		});
	};
};
Log.__name__ = true;
var Main = function() {
	var _gthis = this;
	$global.console.log("Main");
	var appLib = new appcore_AppLib();
	Neutralino.init({ load : function() {
		_gthis.init();
	}, pingSuccessCallback : function() {
	}, pingFailCallback : function() {
	}});
};
Main.__name__ = true;
Main.main = function() {
	var app = new Main();
};
Main.prototype = {
	init: function() {
		haxe_Log.trace("init - before custom trace",{ fileName : "src/Main.hx", lineNumber : 37, className : "Main", methodName : "init"});
		this.customizeTrace();
		this.initButton();
		this.getSettings();
		haxe_Log.trace("init - after custom trace",{ fileName : "src/Main.hx", lineNumber : 49, className : "Main", methodName : "init"});
	}
	,customizeTrace: function() {
		haxe_Log.trace("customizeTrace - no set",{ fileName : "src/Main.hx", lineNumber : 53, className : "Main", methodName : "customizeTrace"});
		var log = new Log();
		haxe_Log.trace("customizeTrace - set",{ fileName : "src/Main.hx", lineNumber : 56, className : "Main", methodName : "customizeTrace"});
	}
	,initButton: function() {
		var _gthis = this;
		var fullscreenBtn = window.document.getElementById("fullscreen-btn");
		fullscreenBtn.onclick = function() {
			haxe_Log.trace("fullscreenBtn - onclick",{ fileName : "src/Main.hx", lineNumber : 62, className : "Main", methodName : "initButton"});
		};
		var dialogOpenBtn = window.document.getElementById("dialog-open-btn");
		dialogOpenBtn.onclick = function() {
			haxe_Log.trace("dialogOpenBtn - onclick",{ fileName : "src/Main.hx", lineNumber : 66, className : "Main", methodName : "initButton"});
			_gthis.dialogOpen();
		};
		var dialogSaveBtn = window.document.getElementById("dialog-save-btn");
		dialogSaveBtn.onclick = function() {
			haxe_Log.trace("dialogSaveBtn - onclick",{ fileName : "src/Main.hx", lineNumber : 71, className : "Main", methodName : "initButton"});
			_gthis.dialogSave();
		};
		var writeFileBtn = window.document.getElementById("write-file-btn");
		writeFileBtn.onclick = function() {
			haxe_Log.trace("writeFileBtn - onclick",{ fileName : "src/Main.hx", lineNumber : 76, className : "Main", methodName : "initButton"});
			_gthis.writeFile();
		};
		var readFileBtn = window.document.getElementById("read-file-btn");
		readFileBtn.onclick = function() {
			haxe_Log.trace("readFileBtn - onclick",{ fileName : "src/Main.hx", lineNumber : 81, className : "Main", methodName : "initButton"});
			_gthis.readFile();
		};
		var putDataBtn = window.document.getElementById("put-data-btn");
		putDataBtn.onclick = function() {
			haxe_Log.trace("putDataBtn - onclick",{ fileName : "src/Main.hx", lineNumber : 86, className : "Main", methodName : "initButton"});
			_gthis.putData();
		};
		var getDataBtn = window.document.getElementById("get-data-btn");
		getDataBtn.onclick = function() {
			haxe_Log.trace("getDataBtn - onclick",{ fileName : "src/Main.hx", lineNumber : 91, className : "Main", methodName : "initButton"});
			_gthis.getData();
		};
	}
	,putData: function() {
		haxe_Log.trace("putData()",{ fileName : "src/Main.hx", lineNumber : 97, className : "Main", methodName : "putData"});
		var data = { key : "test", bucket : "test", content : { item : 10}};
		Neutralino.storage.putData(data,function() {
			haxe_Log.trace("Data saved to storage/test.json",{ fileName : "src/Main.hx", lineNumber : 110, className : "Main", methodName : "putData"});
		},function() {
			haxe_Log.trace("An error occured while saving the Data",{ fileName : "src/Main.hx", lineNumber : 113, className : "Main", methodName : "putData"});
		});
	}
	,getData: function() {
		haxe_Log.trace("getData()",{ fileName : "src/Main.hx", lineNumber : 118, className : "Main", methodName : "getData"});
		Neutralino.storage.getData("test",function(content) {
			haxe_Log.trace("The data you requested for \n",{ fileName : "src/Main.hx", lineNumber : 122, className : "Main", methodName : "getData"});
			haxe_Log.trace(content,{ fileName : "src/Main.hx", lineNumber : 124, className : "Main", methodName : "getData"});
		},function() {
			haxe_Log.trace("An error occured while retrieving the data.",{ fileName : "src/Main.hx", lineNumber : 127, className : "Main", methodName : "getData"});
		});
	}
	,dialogOpen: function() {
		haxe_Log.trace("dialogOpen()",{ fileName : "src/Main.hx", lineNumber : 132, className : "Main", methodName : "dialogOpen"});
		Neutralino.os.dialogOpen("Open a file..",function(data) {
			haxe_Log.trace(data,{ fileName : "src/Main.hx", lineNumber : 134, className : "Main", methodName : "dialogOpen"});
		},function() {
			haxe_Log.trace("error",{ fileName : "src/Main.hx", lineNumber : 136, className : "Main", methodName : "dialogOpen"});
		});
	}
	,dialogSave: function() {
		haxe_Log.trace("dialogSave()",{ fileName : "src/Main.hx", lineNumber : 141, className : "Main", methodName : "dialogSave"});
		Neutralino.os.dialogSave("Save as a file..",function(data) {
			haxe_Log.trace(data,{ fileName : "src/Main.hx", lineNumber : 143, className : "Main", methodName : "dialogSave"});
		},function() {
			haxe_Log.trace("error",{ fileName : "src/Main.hx", lineNumber : 145, className : "Main", methodName : "dialogSave"});
		});
	}
	,writeFile: function() {
		haxe_Log.trace("writeFile()",{ fileName : "src/Main.hx", lineNumber : 150, className : "Main", methodName : "writeFile"});
		var str = "hello world " + new Date().getTime();
		Neutralino.filesystem.writeFile("file1.txt",str,function(data) {
			haxe_Log.trace(data,{ fileName : "src/Main.hx", lineNumber : 154, className : "Main", methodName : "writeFile"});
		},function() {
			haxe_Log.trace("error",{ fileName : "src/Main.hx", lineNumber : 157, className : "Main", methodName : "writeFile"});
		});
	}
	,readFile: function() {
		haxe_Log.trace("readFile()",{ fileName : "src/Main.hx", lineNumber : 162, className : "Main", methodName : "readFile"});
		Neutralino.filesystem.readFile("file1.txt",function(data) {
			haxe_Log.trace(data,{ fileName : "src/Main.hx", lineNumber : 165, className : "Main", methodName : "readFile"});
		},function() {
			haxe_Log.trace("error",{ fileName : "src/Main.hx", lineNumber : 168, className : "Main", methodName : "readFile"});
		});
	}
	,getSettings: function() {
		haxe_Log.trace("getSettings()",{ fileName : "src/Main.hx", lineNumber : 173, className : "Main", methodName : "getSettings"});
		Neutralino.settings.getSettings(function(data) {
			haxe_Log.trace(data,{ fileName : "src/Main.hx", lineNumber : 175, className : "Main", methodName : "getSettings"});
			var pre = window.document.getElementById("settings");
			pre.innerHTML = JSON.stringify(data);
		},function() {
		});
	}
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var appcore_AppLib = function() {
};
appcore_AppLib.__name__ = true;
var haxe_Log = function() { };
haxe_Log.__name__ = true;
haxe_Log.formatOutput = function(v,infos) {
	var str = Std.string(v);
	if(infos == null) {
		return str;
	}
	var pstr = infos.fileName + ":" + infos.lineNumber;
	if(infos.customParams != null) {
		var _g = 0;
		var _g1 = infos.customParams;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			str += ", " + Std.string(v);
		}
	}
	return pstr + ": " + str;
};
haxe_Log.trace = function(v,infos) {
	var str = haxe_Log.formatOutput(v,infos);
	if(typeof(console) != "undefined" && console.log != null) {
		console.log(str);
	}
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
String.__name__ = true;
Array.__name__ = true;
Date.__name__ = "Date";
js_Boot.__toStr = ({ }).toString;
Main.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
