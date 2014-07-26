
$(document).ready(function(){
	
	/* Secret Number generation */
	var numGeneration = function() {
	var secretNumber = Math.floor(Math.random() * 101);
	console.log(secretNumber);
	};


	/* New Game button */
	$(".new").click(function () {
		$("#userGuess").val("");
		numGeneration();
	});

	/* Guess Feedback function */
	$("#guessButton").click(function() {
		
	}



	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


