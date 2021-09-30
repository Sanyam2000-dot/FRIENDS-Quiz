const readlineSync = require('readline-sync');
const chalk = require('chalk');
const welcomeQuestion = readlineSync.question("Enter your name here!");
console.log("Welcome to the quiz"+chalk.blue(" F.R.I.E.N.D.S ")+ chalk.green(welcomeQuestion));
var score = 0

const highScore = [{
  name: "Akshat",
  score:2
},{
   name: "Sarthak",
  score:3
}]

function play(question,answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.green("you are right!"))
    score = score + 1
  }
  else{
    console.log(chalk.red("you are wrong!"))
  }
}
var questions = [
  {question: chalk.blue("Who is Chandler's best friend?"),
  answer: "Joey"
  },
  {
    question: chalk.blue("What is the name of Rachel's favourite sister"),
    answer: "Jill",
  },
  {
    question: chalk.blue("Joey doesn't like to share?"),
    answer: "food"
  },
  {
    question: chalk.blue("What is Joey's best friend's name?"),
    answer: "Chandler"
  },
  {
    question: chalk.blue("Chandler is married to ?"),
    answer: "Monica"
  }
]
for(var i =0;i<questions.length;i++){
var currentQuestion = questions[i]
play(currentQuestion.question,currentQuestion.answer)
}
console.log("YAYYY YOUR SCORE IS " + score)
console.log("Some people with high scores are: ") ;
for(var i =0;i<highScore.length;i++){
console.log(highScore[i].name+" "+highScore[i].score);
}

