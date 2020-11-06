package;

import haxe.Json;
import js.html.Element;
import tools.TraceDiv;
import global.neutralino.*;
import global.neutralino.Debug;
import global.neutralino.Os;
import appcore.AppLib;
import global.IndexGlobal.*;
import global.Neutralino;
import js.Browser.*;

class Main {
	public function new() {
		console.log('Main');

		#if (state)
		init();
		#else
		var appLib = new AppLib();
		Neutralino.init({
			load: function() {
				this.init();
				// this.myfunction();
				// this.getUserName();
				// appLib.showSettings();
				// Dom.body().appendChild(Dom.html('xxxxx'));
			},
			pingSuccessCallback: function() {},
			pingFailCallback: function() {}
		});
		#end
	}

	function init() {
		trace('init - before custom trace');

		customizeTrace();
		initButton();
		getSettings();
		// getUserName();
		// getLog();
		// writeFile();
		// readFile();
		// dialogOpen();
		// dialogSave();

		trace('init - after custom trace');
	}

	function customizeTrace() {
		trace('customizeTrace - no set');
		// var traceDiv = new TraceDiv();
		var log = new Log();
		trace('customizeTrace - set');
	}

	function initButton() {
		var fullscreenBtn = document.getElementById('fullscreen-btn');
		fullscreenBtn.onclick = () -> {
			trace('fullscreenBtn - onclick');
		}
		var dialogOpenBtn = document.getElementById('dialog-open-btn');
		dialogOpenBtn.onclick = () -> {
			trace('dialogOpenBtn - onclick');
			dialogOpen();
		}
		var dialogSaveBtn = document.getElementById('dialog-save-btn');
		dialogSaveBtn.onclick = () -> {
			trace('dialogSaveBtn - onclick');
			dialogSave();
		}
		var writeFileBtn = document.getElementById('write-file-btn');
		writeFileBtn.onclick = () -> {
			trace('writeFileBtn - onclick');
			writeFile();
		}
		var readFileBtn = document.getElementById('read-file-btn');
		readFileBtn.onclick = () -> {
			trace('readFileBtn - onclick');
			readFile();
		}
		var putDataBtn = document.getElementById('put-data-btn');
		putDataBtn.onclick = () -> {
			trace('putDataBtn - onclick');
			putData();
		}
		var getDataBtn = document.getElementById('get-data-btn');
		getDataBtn.onclick = () -> {
			trace('getDataBtn - onclick');
			getData();
		}
	}

	function putData() {
		trace('putData()');
		// Javascript Object to be stored as JSON
		var data = {
			key: 'test',
			bucket: 'test',
			content: {
				item: 10
			}
		}

		// stores the data into JSON based data store.
		Storage.putData(data, function() {
			// executes on successful storage of data
			trace('Data saved to storage/test.json');
		}, function() {
			// executes if an error occurs
			trace('An error occured while saving the Data');
		});
	}

	function getData() {
		trace('getData()');
		// The stored data is being retrieved from the JSON based data store.
		Storage.getData('test', function(content) {
			// executes when data is successfully retrieved.
			trace('The data you requested for \n');
			// the data that has been retrieved.
			trace(content);
		}, function() {
			// executes if an error occurs
			trace('An error occured while retrieving the data.');
		});
	}

	function dialogOpen() {
		trace('dialogOpen()');
		Os.dialogOpen('Open a file..', function(data) {
			trace(data);
		}, function() {
			trace('error');
		});
	}

	function dialogSave() {
		trace('dialogSave()');
		Os.dialogSave('Save as a file..', function(data) {
			trace(data);
		}, function() {
			trace('error');
		});
	}

	function writeFile() {
		trace('writeFile()');
		var str = 'hello world ${Date.now().getTime()}';
		Filesystem.writeFile('file1.txt', str, function(data) {
			// console.log(data);
			trace(data);
		}, function() {
			// console.error('error');
			trace('error');
		});
	}

	function readFile() {
		trace('readFile()');
		Filesystem.readFile('file1.txt', function(data) {
			// console.log(data);
			trace(data);
		}, function() {
			// console.error('error');
			trace('error');
		});
	}

	function getSettings() {
		trace('getSettings()');
		Settings.getSettings((data) -> {
			trace(data);
			var pre:Element = document.getElementById('settings');
			pre.innerHTML = Json.stringify(data);
		}, () -> {});
	}

	function getUserName() {
		trace('getUserName()');
		var key = NL_OS == 'Windows' ? 'USERNAME' : 'USER';
		// trace(key);
		Os.getEnvar(key, function(data) {
			// document.getElementById('name').innerText = data.value;
			trace(data.value);
		}, function() {
			// handle error
			trace('error');
		});
	}

	function getLog() {
		Debug.log('INFO', 'This is a log message', function(data) {
			// console.log(data);
			trace(data);
		}, function() {
			trace('error');
		});
	}

	function myfunction() {
		trace('myfunction');
		// document.getElementById('info')
		// 	.innerHTML = "Hx Neutralino lite - " + NL_NAME + " is running on port " + NL_PORT + " inside " + NL_OS + "<br/><br/>" + "<span>v" + NL_VERSION
		// 		+ "</span>";

		Dom.body().appendChild(Dom.html('<h1>Welcome to Webpack + haxe</h1>'));

		// var foo = new com.Foo();
		// Dom.body().appendChild(foo.view);
	}

	static public function main() {
		var app = new Main();
	}
}
