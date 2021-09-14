var read = require("readline-sync");
var chalk = require("chalk");

var score = 0;



  var name = read.question(chalk.red("Enter your name? "));
  
function greet(){
  var greeting = `\nWelcome! ${name}
  This sports quiz MCQS will test your knowledge!\n `
  console.log(chalk.yellowBright(greeting));

  
}


function check(command){
  if (command === "no"||command==="No"){
    console.log(chalk.red(`Exiting..... DONE!\n`))
    process.exit()
    }
    else if(command==="Yes"||command==="yes"){
    console.log(chalk.green("Starting......"))
    console.log("\n")
    
    
    }else{
      console.log(chalk.red("Enter the right command"))
    }

    
}





/////// main funciton (5)
function quiz(question,rightAnswer){

console.log(question);
  var userAnswer = read.question(chalk.redBright("Enter your choice:"));
  
  if (rightAnswer === userAnswer) {
      console.log(chalk.green("Correct answer! "));
      score +=1
      console.log(chalk.green("Your current Score is: ")+ score)
  
  }else{
      console.log(chalk.red.bold("Oops,Wrong answer"));
      console.log(chalk.green("Your current Score: ")+ score)
  }
}


var main = [
  {question:`Since which of the following year Winter Olympics are held ?:
  a. 1896
  b. 1900
  c. 1888
  d. 1924
  ` ,
  answer:"d"},

  {question:`Which among the following tournament is also known as World Team Championships for Women?
a. Thomas Cup
b. Uber cup
c. Helvetia Cup
d. Spanish Open Badminton
  ` ,
  answer:"b"},
  
  {question:`In which of the following sports games the term Interference is used?
a. Golf
b. Chess
c. Squash
d. Table Tennis
 `,
  answer:"b"},


  {question:`Who holds the current Asian record in 1500m track event?
a. Kamaljeet Sandhu
b. Priyanka Pawar
c. Sunita Rani
d. Tintu Luka


 `,
  answer:"c"},


    {question:`Who won the World Championships in Athletics held at London 2017 in Men’s Discus Throw?
a. Andrius Gudzius
b. Daniel Stahl
c. Mason Finley
d. Philip Milanov
 `,
  answer:"a"},
  {question:`Who is the Patron of the Commonwealth Games Federation?
a. Gideon Sam
b. Queen Elizabeth II
c. Prince Edward
d. Bruce Robertson
 `,
  answer:"b"}


]


//adding highscore feature

var highscore ={
    name: "Raman",
    score: 4
  }



function end(){

  
  console.log(chalk.green("Your final score is ") + score )

  if (score > highscore.score){
    console.log(chalk.green(`You just BROKE the record holded by ${highscore.name}`))
    console.log(`Highest score was ${highscore.score} by ${highscore.name}`)


  }else{
    
    console.log(chalk.red(`Highest score is ${highscore.score} by ${highscore.name}`));
  }

}


// //// function to loop
function looping(){
  var i = 0;

  for (i; i<main.length; i++){
    quiz(chalk.yellow(main[i].question),main[i].answer)
    console.log("\n")
  }
}

/*
"Below is the logic section"
*/
greet()
check(read.question(chalk.redBright("Shall we start (Yes/No):")));
looping();
console.log("\n")
end()
