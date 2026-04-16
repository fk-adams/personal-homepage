        function handleCostKeyDown(event){
            if(event.key === 'Enter'){
                calculateShipping();
            }
        }

        function calculateShipping(){
            const inputElement = document.querySelector('.js-input');
            let cost = Number(inputElement.value);

            if(cost < 40){
                cost = cost + 10;
            }

            document.querySelector('.shipping').innerHTML = `$${cost}`;
        }

        function Subscribe(){
            const buttonElement = document.querySelector('.js-subscribe-button')
            
            if(buttonElement.innerHTML === 'Subscribe'){
                buttonElement.innerHTML = 'Subscribed';
            }else{
                buttonElement.innerHTML = 'Subscribe';
            }
        }

        
        let score = JSON.parse(localStorage.getItem('score'));
        // console.log(JSON.parse(localStorage.getItem('score')));


        if(score === null) {
            score = {
                Wins: 0,
                Losses: 0,
                Ties: 0
            };
        }

        updateScore();
       
         function playGame(playerMove) {
            const computerMove = pickComputerMove();
            let result = '';

       if (playerMove === 'Scissors'){
             if(computerMove === 'Rock'){
                result = 'You lose';
            }else if(computerMove === 'Paper'){
                result = 'You win';
            }else if(computerMove === 'Scissors'){
                result = 'Tie';
            }
       }
       
       else if(playerMove === 'Paper'){
            if(computerMove === 'Rock'){
                result = 'You win';
            }else if(computerMove === 'Paper'){
                result = 'Tie';
            }else if(computerMove === 'Scissors'){
                result = 'You lose';
            }

       } else if(playerMove === 'Rock'){
             if(computerMove === 'Rock'){
            result = 'Tie';
            }else if(computerMove === 'Paper'){
                result = 'You lose';
            }else if(computerMove === 'Scissors'){
                result = 'You win';
            }
       }

       if(result === 'You win'){
            score.Wins += 1;
       }else if(result === 'Tie'){
            score.Ties += 1;
       }else if(result === 'You lose'){
            score.Losses += 1;
       }

       localStorage.setItem('score', JSON.stringify(score));

       updateScore();
       document.querySelector('.game-result').innerHTML = result;
       document.querySelector('.game-move').innerHTML = `You picked ${playerMove}, computer picked ${computerMove}`;
//         alert(`You picked ${playerMove}, computer picked ${computerMove}, ${result}
//  Wins: ${score.Wins}, Ties: ${score.Ties}, Losses: ${score.Losses}.
//         `);
 }

         function updateScore(){
             document.querySelector('.game-score').innerHTML = `Wins: ${score.Wins}, Ties: ${score.Ties}, Losses: ${score.Losses}.`;

         }

        function pickComputerMove(){
            const randomNumber = Math.random();
           let computerMove = '';

            if(randomNumber >= 0 && randomNumber < 1/3){
                computerMove = 'Rock';
            }else if(randomNumber >= 1/3 && randomNumber < 2/3) {
                computerMove = 'Paper';    
            }else if(randomNumber >= 2/3 && randomNumber < 1) {
                computerMove = 'Scissors';
            }

            return computerMove;
        }