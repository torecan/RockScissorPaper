let userScore=0;
let compScore=0;
const userScoreSpan= document.getElementById('user-score');
const compScoreSpan= document.getElementById('comp-score');
const scoreBoard_div= document.querySelector('.score-board');
const result_div=document.querySelector('.result > p');
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissors_div=document.getElementById('s');

  function converter(conv){

      if(conv=='r'){
        return 'Rock';
      }

      if(conv=='s'){
        return 'Scissor';
      }

     if(conv=='p'){
       return 'Paper';
     }

  }


  function win(find){
  userScore++;
  userScoreSpan.innerHTML=userScore;
  compScoreSpan.innerHTML=compScore;
  userSpan=converter(find.substring(0,1));
  compSpan=converter(find.substring(1,2));

  result_div.innerHTML=userSpan+'user'.fontsize(3).sub()+' beats '+compSpan+'. YOU WIN';

  }


  function lost(find){
  compScore++;
  userScoreSpan.innerHTML=userScore;
  compScoreSpan.innerHTML=compScore;
  userSpan=converter(find.substring(0,1));
  compSpan=converter(find.substring(1,2));

  result_div.innerHTML=compSpan+' beats '+userSpan+'. YOU LOST';

  }

  function draw(find){
    userSpan=converter(find.substring(0,1));
    compSpan=converter(find.substring(1,2));

    result_div.innerHTML=compSpan+' draws '+userSpan+'. DRAWS';

  }

function getComputerMove(){

    const choices=['r','p','s'];
    computerMover=Math.floor(Math.random()*3);
    return choices[computerMover];
}

  function game(userChoice){
    computerMove=getComputerMove();

    switch (userChoice+computerMove) {
      case 'rp':
      case 'ps':
      case 'sr':
        lost(userChoice+computerMove);
        break;
      case 'pr':
      case 'sp':
      case 'rs':
        win(userChoice+computerMove);
        break;
      default:
        draw(userChoice+computerMove);
    }

  }


  rock_div.addEventListener('click',function(){

    game('r');
  }
  )

  paper_div.addEventListener('click',function(){
    game('p');

  }
  )

  scissors_div.addEventListener('click',function(){
    game('s');

  }
  )
