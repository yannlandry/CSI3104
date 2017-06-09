// put everything in a function
// to limit the scope of variables
function question4() {
	var numbers = new Array;
	for(i = 0; i < 1000; ++i)
		numbers[i] = 1;
	// array is now full

	// let's have fun
	numbers[0] = 0;
	numbers[1] = 0;
	for(i = 2; i < 1000; ++i)
		if(numbers[i] == 1)
			for(j = 2*i; j < 1000; j+= i) // start w/ the first multiple of i (2*i) and switch all of them to 0
				numbers[j] = 0;

	// print 'em all!
	var primes = new Array;
	for(i = 0; i < 1000; ++i)
		if(numbers[i] == 1)
			primes[primes.length] = i; // just add all primes to an array

	document.getElementById('prime-indexes').innerHTML = 'Prime numbers: ' + primes.join(', ');
};

document.getElementById('launchQ4').onclick = function(e) {
	e.preventDefault();
	question4();
}