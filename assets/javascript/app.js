// Initial values

var counter = 5;
var currentQuestion = 0;
var score = 0;
var loss = 0;
var timer;

// Start 30 second timer for the user to respond or choose an answer to each question

function countDown() {
    counter--;

    $("#time").html('Timer: ' + counter);
}


// Display the question and the choices together in the browser

function loadQuestion() {
    counter = 5;
    timer = setInterval(countDown, 1000);

    var question = gameQuestions[currentQuestion].question;
    var answers = gameQuestions[currentQuestion].answers;

    $('#time').html('Timer: ' + counter);
    $('#game').html(`
    <h4>${question}</h4>
    ${loadAnswers(answers)}
    `);
}

function loadAnswers(answers) {
    let result = '';

    for (var i = 0; i < answers.length; i++) {
        result += `<p class="answers" data-answer="${answers[i]}">${answers[i]}</p>`;
    }

    return result;
}

loadQuestion();