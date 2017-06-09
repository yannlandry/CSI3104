function init() {

	var canvas = document.getElementById('shape');
	var context = canvas.getContext('2d');

	// make gradient
	var gradient = context.createLinearGradient(100, 100, 100, 500);
	gradient.addColorStop(0, 'green');
	gradient.addColorStop(0.5, 'white');
	gradient.addColorStop(1, 'red');

	// draw path
	context.beginPath();
	context.moveTo(300, 100);
	context.lineTo(100, 500);
	context.lineTo(500, 500);

	// fill path
	context.fillStyle = gradient;
	context.fill();

}

init();