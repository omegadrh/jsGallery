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

//the onload stuff doesn't seem to be working out very well, hence trying alternatives like this, and currently just setting the code to log
//    newA.innerHTML="<img src=\"" + as[link].href + "\" alt=\"" + as[link].innerHTML + "\" onload=\"console.log('loaded " + as[link].innerHTML + "')\" />";

    var newImg = document.createElement("img");
    newImg.src=as[link].href;
    newImg.alt=as[link].innerHTML;
    newImg.onload=console.log(newImg.alt);

    newA.appendChild(newImg);
    newDiv.appendChild(newA);
    newBody.appendChild(newDiv);
  }
}

/* see comments above regarding onload functionality
newBody.onload = function () {
	var divs = document.getElementsByTagName("div");
	for (i in divs) {
		var div = divs[i];
		//div.removeChild(div.getElementsByTagName("span")[0]);
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
	if(numImgs == loaded) {
		//if this worked, we could put the code to add dimensions here
		console.log("done loading " + loaded + " images!");
	}
}

for (var i=0; i<imgs.length; i++) {
	numImgs++;
	imgs[i].onload=console.log("trying again for " + i);
}
for (var i=0; i<imgs.length; i++) {
	if(imgs[i].complete) {
		newLoad();
	} else {
		imgs[i].addEventListener('load', newLoad());
		//imgs[i].addEventListener('error', alert(i +' failed'));
	}
}
