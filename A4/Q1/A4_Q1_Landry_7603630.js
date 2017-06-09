// shuffles an array
function shuffle(t) {
	for(i = 0; i < t.length; ++i) {
		var swap = parseInt(Math.random() * 1000) % t.length;
		var temp = t[swap];
		t[swap] = t[i];
		t[i] = temp;
	}

	return t;
}

// swaps the classes on two tiles
function swap_tiles(a, b) {
	var tmp = a.className;
	a.className = b.className;
	b.className = tmp;
}

// selects a tile from the board
function get_tile(row, col) {
	return document	.getElementById('puzzle')
					.getElementsByTagName('tr')[row]
					.getElementsByTagName('td')[col];
}

// when the player clicks a tile
function tile_click() {
	// figure out col
	var tileSiblings = this.parentNode.getElementsByTagName('td');
	var col = 0;
	while(this !== tileSiblings[col] && col < tileSiblings.length) ++col;

	// figure out row
	var currentRow = this.parentNode;
	var rowSiblings = currentRow.parentNode.getElementsByTagName('tr');
	var row = 0;
	while(currentRow !== rowSiblings[row] && row < rowSiblings.length) ++row;

	// check surrounding tiles for empty tile aka possible move
	if(row < 3 && get_tile(row+1,col).className == 'tile_0') // row under
		swap_tiles(this, get_tile(row+1,col));
	else if(col < 3 && get_tile(row,col+1).className == 'tile_0') // slot to the right
		swap_tiles(this, get_tile(row,col+1));
	else if(row > 0 && get_tile(row-1,col).className == 'tile_0') // row over
		swap_tiles(this, get_tile(row-1,col));
	else if(col > 0 && get_tile(row,col-1).className == 'tile_0') // slot to the left
		swap_tiles(this, get_tile(row,col-1));
	else
		alert('Illegal move! Please click a tile adjacent to the empty slot.');
}

// initiates the gameboard
function init_puzzle() {
	// set tiles
	var tileOrder = shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
	//var tileOrder = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,0,15];
	var i = 0;

	var rows = document.getElementById('puzzle').getElementsByTagName('tr');
	for(r = 0; r < rows.length; ++r) {
		
		var tiles = rows[r].getElementsByTagName('td');
		for(t = 0; t < tiles.length; ++t) {
			tiles[t].className = 'tile_' + tileOrder[i++];
			tiles[t].onclick = tile_click;
		}
	}
}

init_puzzle();