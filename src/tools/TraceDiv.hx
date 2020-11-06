package tools;

import js.html.DivElement;
import js.Browser;

class TraceDiv {
	var traceDiv:DivElement;
	var traceString:String = '';
	var textStyle0 = '<span style="font-size:12px; color:Silver">';
	var textStyle1 = '<span style="font-size:14px; color:Grey">';

	public function new(?right:Float = 500, ?d:DivElement) {
		divertTrace(right, d);
	}

	function divertTrace(right:Float, d:DivElement) {
		if (d == null) {
			var doc = Browser.document;
			traceDiv = doc.createDivElement();
			doc.body.appendChild(cast traceDiv);
			var dom = cast traceDiv;
			var style = dom.style;
			style.position = 'absolute';
			style.top = '0px';
			// style.left= Std.string(right) + 'px';
			style.right = '0px';
			style.height = '500px';
			style.width = '500px';
			style.zIndex = '99';
			style.overflow = 'auto';
			style.padding = '20px';
			style.background = 'RGBA(0,0,0,0.1)';
		} else {
			traceDiv = d;
		}

		haxe.Log.trace = myTrace;
	}

	function myTrace(v:Dynamic, ?inf:haxe.PosInfos) {
		if (Std.string(v) == '')
			return;
		traceString += textStyle0 + inf.className + '.' + inf.methodName + ' ( ' + Std.string(inf.lineNumber) + ' )' + '</span>' + '<br> - ' + textStyle1
			+ Std.string(v) + '</span>' + '<br>';
		traceDiv.innerHTML = traceString;
		/* notes on PosInfos
			var fileName : String;
			var lineNumber : Int;
			var className : String;
			var methodName : String;
			var customParams : Array<Dynamic>;
		 */
	}
}
