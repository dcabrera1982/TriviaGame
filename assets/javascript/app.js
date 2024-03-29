// Initial values

var counter = 15;
var currentQuestion = 0;
var score = 0;
var loss = 0;
var timer;


// Once timer is over, go to the next question
function nextQuestion() {

    var isQuestionOver = (gameQuestions.length - 1) === currentQuestion;
    if (isQuestionOver) {

        console.log("Game Over");
        displayResult();
    } else {
        currentQuestion++;
        loadQuestion();
    }

}



// Start 30 second timer for the user to respond or choose an answer to each question
function timeUp() {
    clearInterval(timer);

    loss++;

    preloadImage('lost');
    setTimeout(nextQuestion, 3000);
}


function countDown() {
    counter--;

    $("#time").html('Timer: ' + counter);

    if (counter === 0) {
        timeUp();
    }
}


// Display the question and the choices together in the browser

function loadQuestion() {
    counter = 15;
    timer = setInterval(countDown, 1000);

    var question = gameQuestions[currentQuestion].question; //
    var answers = gameQuestions[currentQuestion].answers; //

    $('#time').html('Timer: ' + counter);
    $('#game').html(`
    <h4>${question}</h4>
    ${loadAnswers(answers)}
    ${loadRemainingQuestions()}
    `);
}

function loadAnswers(answers) {
    let result = '';

    for (var i = 0; i < answers.length; i++) {
        result += `<p class="answers" data-answer="${answers[i]}">${answers[i]}</p>`;
    }

    return result;
}


// Go to the next question when either the correct/wrong answer have been selected

$(document).on('click', '.answers', function () {
    clearInterval(timer);
    var selectedAnswer = $(this).attr('data-answer');
    var correctAnswer = gameQuestions[currentQuestion].correctAnswer;

    if (correctAnswer === selectedAnswer) {
        score++;
        preloadImage('win');
        setTimeout(nextQuestion, 3000);
        console.log("Winner");
    } else {
        loss++;
        preloadImage('lost');
        setTimeout(nextQuestion, 3000);
        console.log("Missed Shot!");
    }

    console.log("what", selectedAnswer);

});

function displayResult() {
    var result = `
        <p>You got ${score} questions(s) right</p>
        <p>You missed ${loss} question(s)</p>
        <p>Total questions: ${gameQuestions.length}</p>
        <button class="btn btn-primary" id="reset">Reset Game</button>
    `;

    $('#game').html(result);
}

$(document).on('click', '#reset', function () {
    counter = 15;
    currentQuestion = 0;
    score = 0;
    loss = 0;
    timer = null;

    loadQuestion();
});


function loadRemainingQuestions() {
    var remainingQuestion = gameQuestions.length - (currentQuestion + 1);
    var totalQuestion = gameQuestions.length;

    return `Remaining Questions: ${remainingQuestion}/${totalQuestion}`;

}

function randomImage(images) {
    var random = Math.floor(Math.random() * images.length);
    var randomImage = images[random];
    return randomImage;

}

// randomImage()



// Display a funny giphy for correct/wrong answers

function preloadImage(status) {
    var correctAnswer = gameQuestions[currentQuestion].correctAnswer;

    if (status === 'win') {
        $('#game').html(`
            <p class="preload-image">Good Job, you scored on that try</p>
            <p class="preload-image">The correct answer is <b>${correctAnswer}</b></p>
            <img src="${randomImage(winImages)}"/>
        `)
    } else {
        $('#game').html(`
            <p class="preload-image">The correct answer was ${correctAnswer}</p>
            <p class="preload-image">You are "NOT" a clutch player</p>
            <img src="${randomImage(lossImages)}"/>
        `);

    }

}





$('#start').click(function () {
    $('#start').remove();
    $('#time').html(counter);
    loadQuestion();
});;