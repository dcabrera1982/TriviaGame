//Upon screen refresh a random multiple choice questions appears.
//player has 30 seconds to guess answer.
//player will choose a,b,c or d.
//If player does not choose answer within 15 seconds they automatically get answer "wrong".
//correct answer will be shown to the player along with a picture related to the correct answer.
//page will automatically reload after 5 seconds to the next question without user input.


function timedQuiz(){}


function finalResults(){}


timedQuiz();


submitButton.addEventListener('click', finalResults);





var gameQuestion = [
    {
     question:  "Which player once scored 100 points in a single NBA game?",
     answers: {
         a: Michael Jordan, 
         b: Kobe Bryant, 
         c: Wilt Chamberlain,
         d: Kareem Abdul Jabbar
    },
         correctAnswer: "c"
},
    {
        question:  "Everyone knows about Dr. J, but do you know his real name?",
        answers: {
            a: James Harden, 
            b: Julius Erving, 
            c: Julius Randle, 
            d: John Stockton
    },
        correctAnswer: "b"
},
    {
        question:  "I hold the record for most career points with 38,387, who am I?",
        answers: {
            a: Karl Malone, 
            b: Michael Jordan, 
            c: Lebron James, 
            d: Kareem Abdul Jabbar
        },
        correctAnswer: "d"
}
    // {prompt:  }
];

for (var i=0; i < question.length; i++){
    var answer = window.prompt(question[i].prompt);
    if(response == question[i].answer){
        score++;
        alert("That's right!");
    }   else {
            alert("WRONG!");
        }
    }
alert("you got " + score + "/" + question.length);