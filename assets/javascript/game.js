//variable used to keep track of wuestion and answer;
var index = 0;
// //variable for tick sound;
// var audio = new Audio ("link");
//variable used to set time for each question;
var time = 5;
//variable used to set interval pace;
var intervalId;
//Bool used to keep track if the clock is on or off
var clockRunning = false;
//stores the users answers
var userAnswers = [];

//Movie image array
var movie = {
	
	images: ["assets/images/gotOne.jpeg", "assets/images/step-brothers.jpg", "#", "#", "#"],
	
	questions: ["Goerge RR. Martin, the writer of Game of Thrones, also wrote which classic 1990's movie...", "Will Ferrell and John C. Reilly, the main characters in Step Brothers, also appear in which movie together?", "what movie: 3", "what movie: 4", "what movie: 5"],
	
	answers: [[" Jurassic Park", " The Lion King", " Goodfellas", " Beauty and the Beast"],
			  ["Anchorman 2", "Talladega Nights: The Ballads of Ricky Bobby", "Holmes and Watson", "All of the above"],
			  ["answer: 1", "answer: 2", "answer 3", "answer: 4"],
			  ["answer: 1", "answer: 2", "answer 3", "answer: 4"]]
};

window.onload = function(){ 

	$("#picture").css('background-image', 'url(' + movie.images[index] + ')'); 
	$("#question").html("<h1>" + movie.questions[index] + "</h1>");
	$("label[for*='q1a']").html(movie.answers[index][0]);
	$("label[for*='q1b']").html(movie.answers[index][1]);
	$("label[for*='q1c']").html(movie.answers[index][2]);
	$("label[for*='q1d']").html(movie.answers[index][3]);
	$("#show-number").html("<span>" + timeConverter(time) + "</span>");
	
};

function animateClock(span) {

		$(span).addClass("turn");

		setTimeout(function() {

			$(span).removeClass("turn");
		}, 700);
}

 function reset() {

     time = timeConverter(5);

    $("#show-number").html('<span>' + time + '</span>');

    // run();
}


function run() {

	if(!clockRunning) {
		intervalId = setInterval(decrement, 1000);
		clockRunning = true;
	}
}

function decrement() {

	time--;
	var current = timeConverter(time);

	var clock = document.getElementById("show-number");

	clock.innerHTML = '<span>' + current + '</span>';

	var spans = clock.getElementsByTagName("span");

	animateClock(spans);


	if (time === 0) {
		if(index < 5) {
		//Timer control
        stop();
        alert("Time Up!");
        reset();
        userAnswers[index] = 0;
        //update index;
        index++;
        //Load next questions,answers and image;

        loadNext();
        //run clock again;
        // run();
    	}
    	else {
    		stop();
    		/*showResults();*/
    	}

    }
}

//stops the clock 
function stop() {

      clearInterval(intervalId);
      clockRunning = false;
}

function loadNext() {

	$("#picture").css('background-image', 'url(' + movie.images[index] + ')'); 
	$("#question").html("<h1>" + movie.questions[index] + "</h1>");
	$("label[for*='q1a']").html(movie.answers[index][0]);
	$("label[for*='q1b']").html(movie.answers[index][1]);
	$("label[for*='q1c']").html(movie.answers[index][2]);
	$("label[for*='q1d']").html(movie.answers[index][3]);
	$("#show-number").html("<span>" + timeConverter(time) + "</span>");

}



function findAnswer() {

 	var answer;

	if(index == 0) {
		answer = 3;
	}
	if(index == 1) {
		answer = 3;
	}
	if(index == 2) {
		answer = 2;
	}
	if(index == 3) {
		answer = 1;
	}
	if(index == 4) {
		answer = 0;
	}

	return answer;
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
 
  return userAnswer;

}

function submit() {
	userAnswers[index] = getAnswer();
	console.log(userAnswers[index]);

	index++;

	loadNext();
}
 

  // if answer is correct
  // if(userAnswer=== movie.answers[index][3]){
  //   // add to the number of correct answers
  //   numCorrect++;

  //   // color the answers green
  //   $(".answers").css('color', 'lightgreen');
  // }
  // // if answer is wrong or blank
  // else{
  //   // color the answers red
  //   $(".answers").css('color', 'red');
  // }



function timeConverter(t) {

    if (t < 10) {
      t = "0" + t;
    }  

    return t;

}

//Activate Program/timer
// run();








