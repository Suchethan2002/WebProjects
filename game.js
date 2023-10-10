"use strict"



let number=Math.trunc(Math.random()*20)+1;
console.log(number);
let score=20;
let highScore=0;
document.querySelector('.check').addEventListener(
    'click',function(){
        const guess=Number(document.querySelector('.guess').value);
        console.log(guess);

        if(!guess)
        {
            document.querySelector('.message').textContent='No number selected';
        }
        else if(guess==number)
        {
            document.querySelector('.message').textContent='correct guess';
            document.querySelector('.number').textContent=number;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if(score>highScore)
            {
                highScore=score;
                document.querySelector('.highscore').textContent=highScore;

            }
        }
        else if(guess>number)
        {
            if(score>0)
            {
                 document.querySelector('.message').textContent='Too High';
                 score--;
                 document.querySelector('.score').textContent=score;
            }
            else
            {
                document.querySelector('.message').textContent='You Lost';
            }
           
        }
        else if(guess<number)
        {
            if(score>0)
            {
                document.querySelector('.message').textContent='Too low';
                score--;
                document.querySelector('.score').textContent=score;
            }
            else{
                document .querySelector('.message').textContent='You Lost';
            }
            
        }
        console.log(`not ${!guess}`);
    });


// document.querySelector('.number').value

document.querySelector('.again').addEventListener(
    'click',function(){
        score=20;
        number=Math.trunc(Math.random()*20)+1;
        console.log(number);
        document.querySelector('.score').textContent=score;
        document.querySelector('.number').textContent='?';
        document.querySelector('.guess').value='';

        document.querySelector('body').style.backgroundColor='#222';

        
    })

