var tortoisePosition = 0;
var harePosition = 0;

// write something to the log
function log(message) {
	document.getElementById('console').innerHTML+= '<br />' + message;
}

// print the positions and such
function render() {
	var racetrack = document.getElementById('racetrack');
	var buffer = '    '; // space to fit the OUCH!!!

	for(i = 0; i < 70; ++i) {
		if(tortoisePosition == i && harePosition == tortoisePosition) {
			buffer = buffer.substring(0, buffer.length-4) + 'OUCH!!!';
			i+= 2;
		}
		else if(i == tortoisePosition)
			buffer+= 'T';
		else if(i == harePosition)
			buffer+= 'H';
		else
			buffer+= ' ';
	}

	racetrack.innerHTML = buffer; // send to screen
}

// here's the starting point
function start() {
	document.getElementById('launchQ5').disabled = true;

	tortoisePosition = 0;
	harePosition = 0;

	document.getElementById('console').innerHTML = '';
	document.getElementById('racetrack').innerHTML = ' ';

	log('ON YOUR MARK, GET SET');
	setTimeout(function() {
		log('BANG!!!');
		play();
		setTimeout(function() {
			log('AND THEY\'RE OFF!!!');
		}, 2000);
	}, 3000);
}

// the loop
// select random moves and adjust positions
function play() {
	var tortoiseMove = parseInt(Math.random() * 10);
	switch(tortoiseMove) {
		case 0: case 1: case 2: case 3: case 4:
			tortoisePosition = Math.min(tortoisePosition + 3, 69);
			break;
		case 5: case 6:
			tortoisePosition = Math.max(tortoisePosition - 6, 0);
			break;
		case 7: case 8: case 9:
			++tortoisePosition;
			break;
	}

	var hareMove = parseInt(Math.random() * 10);
	switch(hareMove) {
		case 2: case 3:
			harePosition = Math.min(harePosition + 9, 69);
			break;
		case 4:
			harePosition = Math.max(harePosition - 12, 0);
			break;
		case 5: case 6: case 7:
			++harePosition;
			break;
		case 8: case 9:
			harePosition = Math.max(harePosition - 1, 0);
	}

	// render to screen
	render();

	// at the end
	if(tortoisePosition >= 69 && harePosition >= 69)
		log('IT\'S A TIE.');
	else if(tortoisePosition >= 69)
		log('TORTOISE WINS!!! YAY!!!');
	else if(harePosition >= 69)
		log('HARE WINS. YUCK!');
	else {
		setTimeout(play, 1000);
		return;
	}

	document.getElementById('launchQ5').disabled = false;
}

document.getElementById('launchQ5').onclick = function(e) {
	e.preventDefault();
	start();
}