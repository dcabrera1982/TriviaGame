//Upon screen refresh a random multiple choice questions appears.
//player has 30 seconds to guess answer.
//player will choose a,b,c or d.
//If player does not choose answer within 15 seconds they automatically get answer "wrong".
//correct answer will be shown to the player along with a picture related to the correct answer.
//page will automatically reload after 5 seconds to the next question without user input.

var score = 0;
var question = [
    {prompt:  "Which player once scored 100 points in a single NBA game?\n(a) Michael Jordan\n\ (b) Kobe Bryant\n\ (c) Wilt Chamberlain\n\ (d) Kareem Abdul Jabbar",
    answer: "c"
},
    {prompt:  "Everyone knows about Dr. J, but do you know his real name?\n(a) James Harden\n\ (b) Julius Erving\n\ (c) Julius Randle\n\ (d) John Stockton",
    answer: "b"
},
    {prompt:  "I hold the record for most career points with 38,387, who am I?\n(a) Karl Malone\n\ (b) Michael Jordan\n\ (c) Lebron James\n\ (d) Kareem Abdul Jabbar",
    answer: "d"
},
    // {prompt:  }
]

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