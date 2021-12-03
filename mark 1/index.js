var readlinesync = require('readline-sync');

var username = readlinesync.question('What is your name? ');
console.log(`Hi ${username}, Do you know Kiran?\n---------------------------------------------`);

let userScore = 0;
let questionNum = 1;

function play(question, answer){
  let userAns = readlinesync.question(`${questionNum}) ${question}\n`);
  if(userAns.toLowerCase()=== answer){
    userScore++;
    console.log(`--------Correct Answer. Your Score: ${userScore}--------\n`);
  }else{
    console.log(`--------Wrong Answer. Your Score: ${userScore}--------\n`)
  } if(userScore===7){
    console.log(`Yay, you got all Answers Right`);
    }
  questionNum++;
}

const questions=[{
  question:'Where Do I live?',
  answer:'vizag'
},
{
   question:'What\'s my Birth Year?',
  answer:'2001'
},
{
   question:'Color of my Hair?',
   answer:'black'
}
];

questions.forEach((qna)=>{
  play(qna.question,qna.answer);
})

console.log(`Your Final Score: ${userScore}`)
console.log(`High Score: 3`)