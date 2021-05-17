'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1 ;

let score = 20;
let highScore = 0;

const setMessage = function(message)
{
    document.querySelector('.message').textContent = message;
}
        

document.querySelector('.check').addEventListener('click',function()
{
    const userInput = Number(document.querySelector('.guess').value);
    if(!userInput)
    {
        setMessage('😡 No Number');
    }
    else if(userInput === secretNumber)
    {
        document.querySelector('.number').textContent = secretNumber;
        setMessage('😁 Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(highScore < score)
        {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }
    }
    else if(userInput !== secretNumber)
    {
        if(score > 1)
        {
            score--;
            setMessage(userInput > secretNumber ? ('📈 Too High') : ('📉 Too Low'))
            document.querySelector('.score').textContent = score;
        }
        else
        {
            setMessage('😿 You Lost The Game')
            document.querySelector('.score').textContent = 0;
        }
            
    }

    document.querySelector('.again').addEventListener('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
      
        // document.querySelector('.message').textContent = 'Start guessing...';
        setMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
      });
})

