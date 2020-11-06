package;

import global.neutralino.*;
import js.Browser.*;

class Log {
	public function new() {
		// write your own trace function suitable for Unity
		haxe.Log.trace = function(v:Dynamic, ?infos:haxe.PosInfos) {
			var str = infos.fileName + ":" + infos.lineNumber + ": " + v;

			#if (state)
			console.log(str);
			#else
			Debug.log('INFO', str, function(data) {
				console.log(data);
				// trace(data);
			}, function() {
				console.error('error');
			});
			#end
		}
	}
}
