// function questions(q, answers) {
//     this.q = q;
//     this.answers = answers;  
// };
// commented out for now
//var answers 
//creating a prototype to hold the properties of each question variable

var question1 = {
    question: "If the Green Bay Packers football team dissolves, what happens to the money?",
    // question1
    answer1 = { a: "The money goes to the Green Bay Charity Foundation", isCorrect: true },
    // correct answer
    answer2 = { a: "The owner gets it all", isCorrect: false },
    answer3 = { a: "The stock owners get it", isCorrect: false },
    answer4 = { a: "The NFL gets it", isCorrect: false },
};

var question2 = {
    question: "How did the Green Bay Packers get their team name?",
    // question2
    answer1 = { a: "A packer is another name for a person from Wisconsin", isCorrect: false },
    answer2 = { a: "It is the last name of the owner", isCorrect: false },
    answer3 = { a: "A local meat packing company donated money for the team", isCorrect: true },
    //correct answer
    answer4 = { a: "The NFL chose the team name", isCorrect: false },
};

var question3 = {
    question: "Who won Super Bowl I?",
    // question3
    answer1 = { a: "The Minnesota Vikings", isCorrect: false },
    answer2 = { a: "The Buffalo Bills", isCorrect: false },
    answer3 = { a: "The New England Patriots", isCorrect: false },
    answer4 = { a: "The Green Bay Packers", isCorrect: true },
    // correct answer
};

var question4 = {
    question: "Who was Brett Favre's first completion to?",
    // question4
    answer1 = { a: "Sterling Sharpe", isCorrect: false },
    answer2 = { a: "Himself", isCorrect: true },
    // correct answer
    answer3 = { a: "Donald Driver", isCorrect: false },
    answer4 = { a: "Vince Lombardi", isCorrect: false },
};

var question5 = {
    question: "Who was the coach of the Green Bay Packers when they won their first Super Bowl?",
    // question5
    answer1 = { a: "Ray McLean", isCorrect: false },
    answer2 = { a: "Mike McCarthy", isCorrect: false },
    answer3 = { a: "Vince Lombardi", isCorrect: true },
    // correct answer
    answer4 = { a: "Mike Holmgren", isCorrect: false },
};

var questions = [question1, question2, question3, question4, question5]
//my array of my question objects

var count = 0;
var time = 30000;
//used to keep track of which question is displayed

// $(".question").text(question1.question);
$("#answers1").text(questions.question1.answer1.a);
//not sure what I did but it appears I broke everything
$("#answers2").text(question1.answer2.a);
$("#answers3").text(question1.answer3.a);
$("#answers4").text(question1.answer4.a);
// changing the text of the buttons and question section to match up with the question
//isnt working like I thought it would must have misunderstood something

function displayQuestion() {
    $(".question").text(questions.question1.text);
}
// function to display a question based on the count

displayQuestion()
function timer() {
    setInterval(countdown, 1000)
}
// need an on click function

if (time == 0) {
    count++;


}
//next I need a question timer
//then I need to make something that switches the question once you guess an answer or time runs out
//something to tally up a score as well
//something that checks the answer for isCorrect true or false