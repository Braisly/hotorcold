$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Create a new game ---*/
  	$("a.new").click(function(event){
  		location.reload();
  	});
  	/*--- Random number chosen by computer ---*/
	var computerNumber = Math.floor((Math.random() * 100) + 1);
	console.log(computerNumber);

	/*--- Setting guessCount ---*/
	userGuessCount = 0;

	/*--- Hot Cold Game ---*/
	function hotColdGame(userNumber) {
		var compare = Math.abs(userNumber - computerNumber);
		var feedback = $("#feedback");
		if(compare === 0){
			feedback.text("You Win! Click New Game to replay!");
		}
		else if(compare < 5){
			feedback.text("Super Hot!");
		}
		else if(compare < 10){
			feedback.text("Hot!");
		}
		else if(compare < 20){
			feedback.text("Very Warm!");
		}
		else if(compare < 30){
			feedback.text("Warm");
		}
		else if(compare < 35){
			feedback.text("A little warm!");
		}
		else{
			feedback.text("Keep Guessing!");
		}
	}

	/*--- Checking and appending userNumber---*/
	$("#guessButton").click(function(event){
		event.preventDefault();
		var userNumber = $("input#userGuess").val();
		if(userNumber == " "){
			alert("Please enter a number!");
		}
		else if(isNaN(userNumber)) {
			alert("You cannot enter a letter or word!");
		}
		else if(userNumber < 1){
			alert("Please enter a number between 1 and 100!");
		}
		else if(userNumber > 100){
			alert("The number must be under 100!");
		} else {
			userNumber = (+ userNumber);
			$("ul#guessList").append("<li>" + userNumber + "</li>");
			hotColdGame(userNumber);
			feedback;
			userGuessCount++;
		}
		$("span#count").text(userGuessCount);
	})
});
