//variable used to keep track of wuestion and answer;
var index = 0;
// //variable for tick sound;
var audio = new Audio("assets/sound/tick-tock (mp3cut.net).mp3");
//variable used to set time for each question;
var time = 20;
//variable used to set interval pace;
var intervalId;
//Bool used to keep track if the clock is on or off
var clockRunning = false;
//stores the users answers
var userAnswers = [];
//used to display text on the button/used for changing the text at the end.
var btnText = "Next";
//creates variable for the submit button;
var submitBtn = $("#but").append("<button class='btn btn-primary btn-xl center-block' id='submit' type='submit' name='answer' onclick='submit(index);'></button>");
//Counts number of correct answers
var correct = 0;
//variable to keep track of max questions
var maxIndex = 10;

//Movie image array
var movie = {
	
	images: ["assets/images/gotOne.jpeg", 
			 "assets/images/step-brothers.jpg", 
			 "assets/images/wizard-of-oz.jpg", 
			 "assets/images/lord-of-the-rings.jpg", 
			 "assets/images/the-godfather.jpg",
			 "assets/images/james-bond.jpg",
			 "assets/images/sandlot.jpg",
			 "assets/images/star-wars.jpg",
			 "assets/images/harry-potter.jpg",
			 "assets/images/princess-bride.jpg"],
	
	questions: ["Goerge RR. Martin, the writer of Game of Thrones, also wrote which classic 1990's movie...", 
				"Will Ferrell and John C. Reilly, the main characters in Step Brothers, also appear in which movie together?", 
				"What color were the slippers in the original Wizard of Oz?", 
				"Three movies are tied for the most oscars ever recieved: \"Ben-Hur\" (1959), \"Titanic\" (1997), and \"The Lord of the Rings: The Return of the King\" (2003). How many oscars did these films recieve?", 
				"In \"The Godfather,\" what does Jack Wolz find in his bed when he wakes up?",
				"Which of these men have not played James Bond?",
				"What is Mr. Mertles dog's name?",
				"In the movie series Star Wars, what bounty hunter did Obi-Wan impersonate to prevent an assassination?",
				"Which Harry Potter book was made into two movies?",
				"Finish this line from \"The Princess Bride\": \"Hello. My name is Inigo Montoya...\""],
	
	answers: [[" Jurassic Park", " The Lion King", " Goodfellas", " Beauty and the Beast"],
			  ["Anchorman 2", "Talladega Nights: The Ballads of Ricky Bobby", "Holmes and Watson", "All of the above"],
			  ["Red", "Blue", "Silver", "White"],
			  ["9", "11", "4", "2"],
			  ["A Horse Head", "A Dog Head", "A Cow Head", "A Cat Head"],
			  ["Pierce Brosnan", "Sean Connery", "Sean Bean", "Roger Moore"],
			  ["Goliath", "The Beast", "Hercules", "Hulk"],
			  ["Rako Hardeen", "Zam Wesell", "Jango Fett", "Boba Fett"],
			  ["Harry Potter and the Half Blood Prince", "Harry Potter and the Goblet of Fire", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Deathly Hallows"],
			  ["\"You seem a decent fellow. I hate to kill you.\"", "\"You killed my father. Prepare to die.\"", "\"I\'ll Probably kill you in the morning.\"", "\"We are men of action. Lies do not become us.\""]],

	key: ["d", "d", "c", "b", "a", "c", "c", "a", "d", "b"]

};

window.onload = function(){ 

	$("#picture").css('background-image', 'url(' + movie.images[index] + ')'); 
	$("#question").html("<h1>" + movie.questions[index] + "</h1>");
	$("label[for*='q1a']").html(movie.answers[index][0]);
	$("label[for*='q1b']").html(movie.answers[index][1]);
	$("label[for*='q1c']").html(movie.answers[index][2]);
	$("label[for*='q1d']").html(movie.answers[index][3]);
	$("#show-number").html("<span>" + timeConverter(time) + "</span>");
	$("#submit").text("Next");

};

function animateClock(span) {

		span.className = "turn";

		setTimeout(function() {

			span.className = "";

		}, 700);
}

 function reset() {

     time = timeConverter(20);

    $("#show-number").html('<span>' + time + '</span>');
}


function run() {
	if(!clockRunning) {
		intervalId = setInterval(decrement, 1000);
	}

}

function decrement() {

	audio.play();
	time--;

	var current = timeConverter(time);

	var clock = document.getElementById("show-number");

	clock.innerHTML = '<span>' + current + '</span>';

	var spans = clock.getElementsByTagName("span");

	animateClock(spans);


	if (time === 0) {

		if(index < maxIndex) {
		//Timer control
        stop();
        alert("Time Up!");

        reset();
        userAnswers[index] = "none";
        //update index;
        index++;
        //Load next questions,answers and image;

        loadNext();
        //run clock again;
        run();
    	}
    	else {
    		stop();
    		results();
    	}

    }
}

//stops the clock 
function stop() {
      clearInterval(intervalId);
      clockRunning = false;

}

function loadNext() {

	if(index < maxIndex) {
		$("#picture").css('background-image', 'url(' + movie.images[index] + ')'); 
		$("#question").html("<h1>" + movie.questions[index] + "</h1>");
		$("label[for*='q1a']").html(movie.answers[index][0]);
		$("label[for*='q1b']").html(movie.answers[index][1]);
		$("label[for*='q1c']").html(movie.answers[index][2]);
		$("label[for*='q1d']").html(movie.answers[index][3]);
		$("#show-number").html("<span>" + timeConverter(time) + "</span>");
	}
	else {
		results();
	}

}



function getCorrect() {

 	var answer = getAnswer();

 	if(answer == movie.key[index]) {

 		$(".answers").css("background-color", "lightgreen");

			setTimeout(function() {
				$(".answers").css("background-color", "black")}, 200
			);

		correct++;

 	}

 	else {
 		$(".answers").css("background-color", "red");
			setTimeout(function() {
				$(".answers").css("background-color", "black")}, 200
			);
 	}


	
}

function getAnswer() {


  var answer = document.getElementsByName("answer");
  var userAnswer;
  
  if(answer[0].checked) {
  	userAnswer = "a";
  }
  else if(answer[1].checked) {
  	userAnswer = "b";
  }
  else if(answer[2].checked) {
  	userAnswer = "c";
  }
  else if(answer[3].checked) {
  	userAnswer = "d";
  }
  else {
  	userAnswer = "none";
  }
 
  return userAnswer;

}

function submit() {

	getCorrect();
	userAnswers[index] = getAnswer();
	console.log(userAnswers[index]);
	index++;

	if(index < maxIndex) {
		if(index == (maxIndex - 1) ) {
      		$("#submit").text("Submit");
      	}

		loadNext();
		reset();		
	}
	else {
		stop();
		results();
	}
}
 
function results() {
		audio.pause();
		var confetti = "assets/images/Confetti1.jpg";
		$("#picture").css('background-image', 'url(' + confetti + ')'); 

		$("#show-number").css("display", "none");
		$(".answers").css("display", "none");
		$("#submit").css("display", "none");

		setTimeout(function() {
            window.location='index.html'
        }, 10000);

		$("#question").empty();
		for(i = 0; i < maxIndex; i++) {
			$("#question").append("<h1>" + "Question " + (i + 1) + "</h1><p></p><h2>Your Answer: " + userAnswers[i].toUpperCase() + "&nbsp;&nbsp;&nbsp;&nbsp;" + "Correct answer: " + movie.key[i].toUpperCase() + "</h2><br>");
			
			if(i == (maxIndex - 1)) {
				$("#question").append("<h1>" + "You got " + correct + " out of " + maxIndex + " answers correct!</h1>");
			}
		}

}


function timeConverter(t) {

    if (t < 10) {
      t = "0" + t;
    }  

    return t;

}

if((window.location == "file:///Users/JakeGreer/portfolio/trivia-game/movies.html") || 
   (window.location.href == "https://jakegreer.github.io/trivia-game/movies.html") || 
   (window.location == "https://jakegreer.github.io/trivia-game/movies.html")) {

	run();
}

else {
	console.log(window.location.href);
}







