


//variable used to keep track of wuestion and answer;
var index = 0;
// //variable for tick sound;
// var audio = new Audio ("link");
//variable used to set time for each question;
var time = 3;
//variable used to set interval pace;
var intervalId;
//Bool used to keep track if the clock is on or off
var clockRunning = false;

//Movie image array
var movie = {
	
	images: ["assets/images/gotOne.jpeg", "assets/images/step-brothers.jpg", "#", "#", "#"],
	
	questions: ["Goerge RR. Martin, the writer of Game of Thrones, also wrote which classic 1990's movie...", "what movie: 2", "what movie: 3", "what movie: 4", "what movie: 5"],
	
	answers: [[" Jurassic Park", " The Lion King", " Goodfellas", " Beauty and the Beast"],
			  ["answer: 1", "answer: 2", "answer 3", "answer: 4"],
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
	$("#show-number").html("<h1>" + timeConverter(time) + "</h1>");
	
};


 function reset() {

     time = 3;

    $("#show-number").html("<h1>" + time + "</h1>");
    /*run();*/
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
	$("#show-number").html("<h1>" + current + "</h1>");

	if (time === 0) {

        stop();
        alert("Time Up!");
        index++;
        reset();
    }
}

//stops the clock 
function stop() {

      clearInterval(intervalId);
      clockRunning = false;

    }

console.log($("input[name='q']:checked").val());



//  function findAnswer(i) {

//  	var answer;

// 	if(i == 0) {
// 		answer = 3;
// 	}
// 	if(i == 1) {
// 		answer = 3;
// 	}
// 	if(i == 2) {
// 		answer = 2;
// 	}
// 	if(i == 3) {
// 		answer = 1;
// 	}
// 	if(i == 4) {
// 		answer = 0;
// 	}

// 	return answer;
// }

// function showAnswer(i) {

// 	var j =findAnswer(index);

// 	$("#answer").html(movie.answers[i][j]);
// 	$("#answer").css({
// 		'background-color' : 'red'
// 	});

// }

// function loadNext() {

// }

function timeConverter(t) {

    if (t < 10) {
      t = "0" + t;
    }  

    return t;

}
	
run();








