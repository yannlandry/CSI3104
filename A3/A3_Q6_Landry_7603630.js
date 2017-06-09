var results = document.getElementById('piggize-results');

// convert word to pig & print
function printLatinWord(word) {
	results.innerHTML+= word.substring(1) + word[0] + 'ay ';
}

// convert sentence to pig
function piggize() {
	var input = document.getElementById('piggize-input');
	var words = input.value.split(' ');

	// print each word in pig latin
	words.forEach(printLatinWord);
	results.innerHTML+= "\n";
}

document.getElementById('piggize-button').onclick = function(e) {
	e.preventDefault();
	piggize();
}