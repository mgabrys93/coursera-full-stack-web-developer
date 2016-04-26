
var colors, target_index, target, finished, guesses;

function do_game () {
	
	finished = false;
	guesses = 0;
	colors = ["black", "blue", "brown", "green", "orange", "red", "yellow"];
	target_index = Math.floor(Math.random() * colors.length);
	target = colors[target_index];

	while(!finished){
		guess_color = prompt("Choose one color from below:" + "\n\n"
			+ colors + "\n\n"
			+ "Guess the color:");
		guesses++;
		if(check_guess())
			finished = true;
	}

}

function check_guess () {
	if(colors.indexOf(guess_color) == -1){
		alert("I don't recognize that color!");
		return false;
	}else if(target < guess_color){
		alert("Your input is alphabetically higher than mine!");
		return false;
	}else if(target > guess_color){
		alert("Your input is alphabetically lower than mine!");
		return false;
	}

	my_body = document.getElementsByTagName("body")[0];
	my_body.style.background = target;
	alert("Congratulations!" + "\n"
		+ "You geuess after: " + guesses + " guesses");
	return true;
}