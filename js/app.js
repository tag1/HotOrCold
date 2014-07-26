
$(document).ready(function() {

    var secretNumber;
    var countNumber;
    var guessCount;
    var guess = $("#userGuess").val();

    /* Secret Number generation */
    var secretFunction = function() {
        secretNumber = Math.floor(Math.random() * 101);
        console.log(secretNumber);
    }

    secretFunction();

    /* Guess count variable */
    var getCount = function() {
        countNumber = $("#count").val();
        guessCount = +countNumber;
    }

    getCount();

    /* Hot / Cold function */
    var hotColdLose = function(hotcold) {
        guess = $("#userGuess").val();
        $("#feedback").replaceWith("<h2 id='feedback'>" + hotcold + "</h2>");
        guessCount++;
        $("#count").replaceWith("<span id='count'>" + guessCount + "</span>");
        $("#guessList").append("<li>" + guess + "</li>");
    }


    /* Guess Feedback function */
    var buttonClick = $("#guessButton").click(function() {
        var guess = $("#userGuess").val();
        if (guess >= 1 && guess <= 100) {
            if (guess == secretNumber) {
                $(this).attr("disabled", true);
                $("#feedback").replaceWith("<h2 id='feedback'>" + "Push new game to start again!" + "</h2>");
                guessCount++;
                $("#count").replaceWith("<span id='count'>" + guessCount + "</span>");
                $("#guessList").prepend("<li style='display:block;'>" + "Victory! " + guess + " is the correct answer!" + "</li>");
            } else if (Math.abs(guess - secretNumber) >= 50) {
                hotColdLose("You are in the tundra!");
            } else if (Math.abs(guess - secretNumber) <= 50 && Math.abs(guess - secretNumber) >= 30) {
                hotColdLose("You are very cold!");
            } else if (Math.abs(guess - secretNumber) <= 30 && Math.abs(guess - secretNumber) >= 20) {
                hotColdLose("You are very warm!");
            } else if (Math.abs(guess - secretNumber) <= 20 && Math.abs(guess - secretNumber) >= 10) {
                hotColdLose("You are pretty hot!");
            } else if (Math.abs(guess - secretNumber) <= 10 && Math.abs(guess - secretNumber) >= 5) {
                hotColdLose("You're REALLY hot now!");
            } else if (Math.abs(guess - secretNumber) <= 5 && Math.abs(guess - secretNumber) >= 1) {
                hotColdLose("The sun is not as hot as you!");
            };
        } else {
            $("#feedback").replaceWith("<h2 id='feedback'>" + "That's not a valid entry." + "</h2>");
        };
    });

    /* New Game button */
    $(".new").click(function() {
        $("#userGuess").val("");
        $("#feedback").replaceWith("<h2 id='feedback'>" + "Make your guess!" + "</h2>");
        $("#guessList").empty();
        $("#count").replaceWith("<span id='count'>" + "0" + "</span>");
        $("#guessButton").attr('disabled', false);
        secretFunction();
        getCount();
    });


    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

});

