/* to further aid minification that doesn't seem to be happening in the automatic
 * minifiers i've tried, uncomment the below code and find/replace in the script
 * accordingly (e.g. s/document\.createElement/x/)
 *
 * pass this through a minifier like http://refresh-sf.com/ (optionally wrapped in
 * a function(){} to let it rewrite top-level variables/functions as well), then
 * paste into the address bar of some web page (primarily some "index of /blah")
 * prefixed by "javascript:"
 */
//function x(y) { return document.createElement(y); }

var newBody = document.createElement("body");
var newStyle = document.createElement("style");
newStyle.type="text/css";
newStyle.innerHTML="body { background-color: grey; }\ndiv { position: relative; float: left; padding: 2px; }\nimg { max-height: 200px; max-width: 400px; }\nspan { position: absolute; right: 2px; bottom: 2px; border: 1px dotted black; background: white; opacity: 0.7; font-family: sans-serif; font-size: smaller; }";
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
