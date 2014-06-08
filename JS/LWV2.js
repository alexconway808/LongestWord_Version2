(function(){

	var user_input = document.getElementById("user_input");
	var button = document.getElementById("find");
	var longest_word = 0;
	var	answer = 0;

	button.onclick = function (findlongest){
		var string = user_input.value;
		var string_split = string.split (" ");
	}


	function findlongest(string){	
		for (var i = 0; i < string_split.length; i++){
			if (longest_word < string_split[i].length){
				longest_word = string_split[i].length;
				answer = string_split[i];
			}
		}

			answer.innerHTML = "The longest word is " + (string_split);
	}

})();