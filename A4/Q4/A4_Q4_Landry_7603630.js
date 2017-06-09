function init() {
	
	var image = document.getElementsByTagName('img')[0];
	image.dragged = false;

	// when mouse is down, enable dragging and set xy shift
	image.onmousedown = function(event) {
		rect = image.getBoundingClientRect();
		image.dragged = true;
		image.shiftX = rect.left - event.clientX;
		image.shiftY = rect.top - event.clientY;
	};

	// when dragging is enabled, make image follow mouse
	image.onmousemove = function(event) {
		if(image.dragged) {
			image.style.left = '' + (event.clientX + image.shiftX) + 'px';
			image.style.top = '' + (event.clientY + image.shiftY) + 'px';
		}
	}

	// when mouse is up, disable dragging
	image.onmouseup = function() {
		image.dragged = false;
	}

	// block default drag
	image.ondragstart = function(event) {
		event.preventDefault();
	}

}

init();