var readlinesync = require('readline-sync');

var username = readlinesync.question('What is your name? ');
console.log(`Hi ${username}, Welcome to Anime Quiz\n---------------------------------------------`);
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
  question:'In “One Piece”, what does “the Pirate King” mean to the captain of the Straw Hat Pirates?',
  answer:'freedom'
},
{
   question:'What kind of person is Naruto?',
  answer:'ninja'
},
{
   question:'Anime HAS to be made in Japan, or you can\'t call it anime? (true or false)',
   answer:'true'
},
{
   question:'Fill in the blank...Dragon ____ Z',
  answer:'ball'
},
{
  question:'Throughout the entirety of “Dragon Ball Z”, Goku only kills two characters: a miniboss named Yakon and Kid Buu.(true or false)',
  answer:'true'
},
{
  question:'What is the name of the main character of the anime “One-Punch Man”?',
  answer:'saitama'
},
{
  question:'In the anime Death Note, who was the first successor of L in the Kira investigation?',
  answer:'light'
}
];

questions.forEach((qna)=>{
  play(qna.question,qna.answer);
})

console.log(`Your Final Score: ${userScore}`)
console.log(`High Score: 7`)