# jsGallery
Client-side / browser-initiated / bookmarklet image gallery

## Usage
Remove all line breaks or pass this through a minifier like 
http://refresh-sf.com/ (optionally wrapped in a function(){} to let it rewrite
top-level variables/functions as well), then paste into the address bar of some
web page (primarily some "index of /blah") prefixed by "javascript:".

### Further Minification
To further aid minification that doesn't seem to be happening in the automatic
minifiers I've tried, create functions to hold long and commonly used native
methods (like document.getElementByTagName()).
