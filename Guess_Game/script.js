let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click',()=>
{

    const guess=Number(document.querySelector('.guess').value); //input value
    
    if(guess===secretNumber)
    {   //Correct guess
        document.querySelector('.message').textContent='Correct';
        document.querySelector('.number').textContent=secretNumber;
        document.body.style.backgroundColor = "#60b347";
        console.log(highscore);
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
        if(score>highscore)
        {
            highscore=score;
        }
    }
    else 
    {   //wrong guess
        if(score>1)
        {
            //checking score
        
        if(guess>secretNumber)
        document.querySelector('.message').textContent='Too High';
        else
        document.querySelector('.message').textContent='Too Low';

        score=score-1;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You Losse';
        }       
    }  
})

document.querySelector('.again').addEventListener('click',()=>{
    //reset the interface
    document.querySelector('.message').textContent='Start guessing...';
    score=20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value=' ';
    document.body.style.backgroundColor = "#222";
})
