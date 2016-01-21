/* to further aid minification that doesn't seem to be happening in the automatic
 * minifiers i've tried, uncomment the below code and find/replace in the script
 * accordingly (e.g. s/document\.createElement/x/)
 *
 * pass this through a minifier like http://refresh-sf.com/ (optionally wrapped in
 * a function(){} to let it rewrite top-level variables/functions as well), then
 * paste into the address bar of some web page (primarily some "index of /blah")
 * prefixed by "javascript:"
 *
 * 1.45 KB minified w/ YUI compressor
 * 1.41 KB minified w/ standard compressor
 * 1.38 KB minified w/ YUI and createElement substitution
 * 1.29 KB minified w/ YUI and function(){} wrapper
 * 1.21 KB minified w/ YUI and function(){} wrapper and substitution for createElement
 * 1.17 KB minified w/ YUI and function(){} wrapper and substitution for createElement and getElementsByTagName
 *
 * minified string to copy (make sure your browser doesn't delete the leading "javascript:"):
javascript:function n(i){return document.createElement(i)}function m(i){return document.getElementsByTagName(i)}var d=n("body");var g=n("style");g.type="text/css";g.innerHTML="body{background-color:grey}div{position:relative;float:left;padding:2px}img{max-height:200px;max-width:400px}span{position:absolute;right:2px;bottom:2px;border:1px dotted #000;background:#fff;opacity:.7;font:smaller sans-serif}";document.head.appendChild(g);var e=m("a");for(link in e){if(e[link].href!=null&&e[link].href.search(/(jpg|png|gif|bmp|jpeg)/i)>0){var c=n("div");var b=n("a");b.href=e[link].href;var f=n("img");f.src=e[link].href;f.alt=e[link].innerHTML;b.appendChild(f);c.appendChild(b);d.appendChild(c)}}document.body.parentNode.replaceChild(d,m("body")[0]);var l=m("img");var a=0;var k=0;function j(){k++;var o=this.parentNode.parentNode;var i=n("span");i.appendChild(document.createTextNode(this.naturalWidth+"x"+this.naturalHeight+"px"));o.appendChild(i);if(a==k){console.log("done loading "+k+" images!")}}for(var h=0;h<l.length;h++){a++}for(var h=0;h<l.length;h++){if(l[h].complete){j()}else{l[h].addEventListener("load",j);l[h].addEventListener("error",function(){alert(h+" failed")})}}
 */
//function x(y) { return document.createElement(y); }
//function y(z) { return document.getElementsByTagName(z); }

var newBody = document.createElement("body");
var newStyle = document.createElement("style");
newStyle.type="text/css";
//newStyle.innerHTML="body { background-color: grey; }\ndiv { position: relative; float: left; padding: 2px; }\nimg { max-height: 200px; max-width: 400px; }\nspan { position: absolute; right: 2px; bottom: 2px; border: 1px dotted black; background: white; opacity: 0.7; font-family: sans-serif; font-size: smaller; }";
//the above is minified as follows
newStyle.innerHTML="body{background-color:grey}div{position:relative;float:left;padding:2px}img{max-height:200px;max-width:400px}span{position:absolute;right:2px;bottom:2px;border:1px dotted #000;background:#fff;opacity:.7;font:smaller sans-serif}";
document.head.appendChild(newStyle);


var as = document.getElementsByTagName("a");
for (link in as) {
  if(as[link].href!=null && as[link].href.search(/(jpg|png|gif|bmp|jpeg)/i)>0 ) {
    var newDiv = document.createElement("div");
    var newA = document.createElement("a");
    newA.href=as[link].href;

    var newImg = document.createElement("img");
    newImg.src=as[link].href;
    newImg.alt=as[link].innerHTML;

    newA.appendChild(newImg);
    newDiv.appendChild(newA);
    newBody.appendChild(newDiv);
  }
}

/* I don't think we need this anymore
function addDimensions() {
	var divs = document.getElementsByTagName("div");
	for (var i=0; i<divs.length; i++) {
		var div = divs[i];
		var img = div.getElementsByTagName("img")[0];
		
		var newSpan = document.createElement("span");
	    newSpan.appendChild(document.createTextNode(img.naturalWidth + "x" + img.naturalHeight + "px"));
	    
	    div.appendChild(newSpan);
	}
}
*/

document.body.parentNode.replaceChild(newBody, document.getElementsByTagName("body")[0]);


var imgs = document.getElementsByTagName("img");

var numImgs = 0;
var loaded = 0;

function newLoad() {
	loaded++;
	
	var parentDiv = this.parentNode.parentNode;
	var newSpan = document.createElement("span");
	newSpan.appendChild(document.createTextNode(this.naturalWidth + "x" + this.naturalHeight + "px"));
	    
	parentDiv.appendChild(newSpan);
	
	if(numImgs == loaded) {
		console.log("done loading " + loaded + " images!");
	}
}

for (var i=0; i<imgs.length; i++) {
	numImgs++;
}
for (var i=0; i<imgs.length; i++) {
	if(imgs[i].complete) {
		newLoad();
	} else {
		imgs[i].addEventListener('load', newLoad);
		imgs[i].addEventListener('error', function(){alert(i +' failed')});
	}
}
