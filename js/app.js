
$(document).ready(function(){
	

	/* Secret Number generation */
	var secretNumber = Math.floor(Math.random() * 101);
	console.log(secretNumber);

	/* Guess count variable */
	var countNumber = $("#count").val();
	var guessCount = +countNumber;
	console.log("Count is at " + guessCount)


	/* Guess Feedback function */
	var buttonClick = $("#guessButton").click(function() {
		var guess = $("#userGuess").val();
		if (guess == secretNumber) {
			$("#feedback").replaceWith( "<h2 id='feedback'>" + "You win!" + "</h2>");
			guessCount++;
			$("#count").replaceWith("<span id='count'>" + guessCount + "</span>");
			$("#guessList").prepend("<li style='display:block;'>" + "Victory! " + guess + " is the correct answer!" + "</li>");
			} else if 
				(guess > secretNumber) {
				 $("#feedback").replaceWith("<h2 id='feedback'>" + "You are too high!" + "</h2>");
				 guessCount++;
				 $("#count").replaceWith("<span id='count'>" + guessCount + "</span>");
				 $("#guessList").append("<li>" + guess + "</li>");
				}
					else if (guess < secretNumber) {
					 $("#feedback").replaceWith("<h2 id='feedback'>" + "You are too low!" + "</h2>");
					 guessCount++;
					 $("#count").replaceWith("<span id='count'>" + guessCount + "</span>");
					 $("#guessList").append("<li>" + guess + "</li>");
					};
	});

	/* New Game button */
	$(".new").click(function () {
		$("#userGuess").val("");
		var secretNumber = Math.floor(Math.random() * 101);
		console.log(secretNumber);
		$("count").replaceWith("0");	
	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


