function init() {
	var clickables = document.getElementsByClassName('clickable');

	for(i = 0; i < clickables.length; ++i) {
		clickables[i].onclick = function(event) {
			event.preventDefault();
			event.stopPropagation();

			if(event.shiftKey)
				alert("Event name: "+event);

			else if(event.ctrlKey)
				alert("Tag name: "+this.tagName);
		};
	} // end for
}

init();