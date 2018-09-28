function questions(question, answer1, answer2, answer3, answer4,qNum) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.qNum = qNum;
};


//creating a prototype to hold the properties of each question variable

var question1 = new questions(
    "If the Green Bay Packers football team dissolves, what happens to the money?",
    // question1
    "The money goes to the Green Bay Charity Foundation",
    // correct answer
    "The owner gets it all",
    "The stock owners get it",
    "The NFL gets it",
    1,
);

var question2 = new questions(
    "How did the Green Bay Packers get their team name?",
    // question2
    "A packer is another name for a person from Wisconsin",
    "It is the last name of the owner",
    "A local meat packing company donated money for the team",
    //correct answer
    "The NFL chose the team name",
    2,
);

var question3 = new questions(
    "Who won Super Bowl I?",
    // question3
    "The Minnesota Vikings",
    "The Buffalo Bills",
    "The New England Patriots",
    "The Green Bay Packers",
    // correct answer
    3,
);

var question4 = new questions(
    "Who was Brett Favre's first completion to?",
    // question4
    "Sterling Sharpe",
    "Himself",
    // correct answer
    "Donald Driver",
    "Vince Lombardi",
    4,
);

var question5 = new questions(
    "Who was the coach of the Green Bay Packers when they won their first Super Bowl?",
    // question5
    "Ray McLean",
    "Mike McCarthy",
    "Vince Lombardi",
    // correct answer
    "Mike Holmgren",
    5,
);

var count = 0;
//used to keep track of which question is displayed

$(".question").text(question1.question);
$("#answers1").text(question1.answer1);
$("#answers2").text(question1.answer2);
$("#answers3").text(question1.answer3);
$("#answers4").text(question1.answer4);
// changing the text of the buttons and question section to match up with the question

function displayQuestion() {
    $(".question").text();
  }