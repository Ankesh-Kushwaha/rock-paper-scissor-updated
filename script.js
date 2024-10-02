let score=JSON.parse(localStorage.getItem('score')) || 
{ Wins :0,
  Losses:0,
  Tie:0
}
updateScoreElement();
function pickComputerMove(){
  const randomNumber=Math.random();
  let computerMove='';
  if(randomNumber>=0 && randomNumber<=1/3){
    computerMove='rock';
  }
  else if(randomNumber>1/3 && randomNumber<2/3){
  computerMove='paper';
  }  
  else{
    computerMove='scissors';
  }
return computerMove;
}

let isAutoplaying=false;
let intervalId;
function autoPlay(){
  if(!isAutoplaying){
      intervalId= setInterval(function(){
        //it return an interval id
      const playerMove2=pickComputerMove();
      playGame(playerMove2);
    },1000);
    isAutoplaying=true;
  }
  else{
     clearInterval(intervalId);
     isAutoplaying=false;
  }
  
}

function playGame(playerMove){
  const computerMove=pickComputerMove();
  let result='';

  if(playerMove==='scissors'){
      if(computerMove==='rock'){
          result='YOU LOSE';
      }
      else if(computerMove==='paper'){
      result='YOU WIN';
      }    
      else{
      result='Match TIE';
      }
  }

  else if(playerMove=='rock'){
      if(computerMove==='rock'){
          result='Match Tie';
      }
      else if(computerMove==='paper'){
      result='YOU LOSE';
      }    
      else{
      result='YOU WIN';
      } 
      }

  else{
     if(computerMove==='rock'){
          result='YOU WIN';
      }
      else if(computerMove==='paper'){
      result='MATCH TIE';
      }    
      else{
      result='YOU LOSE';
      }
      }

if(result==='YOU WIN'){
   score.Wins+=1;
}
else if(result==='YOU LOSE'){
   score.Losses+=1;
}
else{
  score.Tie+=1;
}

localStorage.setItem('score',JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result').innerHTML=result;
document.querySelector('.js-move').innerHTML=`   
    You
  <img src="${playerMove}-emoji.png" alt="" class="move-icon">
  <img src="${computerMove}-emoji.png" alt="" class="move-icon">
  computer`;
}

function resetScore(){
score.Wins=0;
score.Tie=0;
score.Losses=0;
} 
function updateScoreElement(){
document.querySelector('.js-score').innerHTML= `Wins=${score.Wins}  Losses=${score.Losses}  Tie=${score.Tie}`; 
}

function showResult(){
document.querySelector('js-result').innerHtml='result';
}
