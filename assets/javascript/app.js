// Initial values

var counter = 30;
var currentQuestion = 0;
var score = 0;
var loss = 0;
var timer;


// Display the question and the choices together in the browser

function loadQuestion() {

    var question = gameQuestions[currentQuestion].question;
    var answers = gameQuestions[currentQuestion].answers;

    $('#time').html('Timer: ' + counter);
    $('#game').html('<h4>' + question + '</h4>');

}

function loadAnswers(answers) {
    let result = '';

    for (var i = 0; i < answers.length; i++) {
        result += `<p class="answers" data-answer="${answers[i]}">${answers[i]}</p>`;
    }

    return result;
}

loadQuestion();