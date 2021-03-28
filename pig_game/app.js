/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
(function(){
  var score, roundScore, activePlayer, gamePlaying;

  init();
  // document.querySelector('#current-0').innerHTML = "<em>"+dice+"</em>"

  // var x = document.querySelector('#score-0').textContent;


  document.querySelector('.dice').style.display = 'none';




  document.querySelector('.btn-roll').addEventListener('click', () => {
    if (gamePlaying) {
      //1. random number
     var dice = Math.floor((Math.random() * 6) + 1);

      //2. display the result 
      var diceDom = document.querySelector('.dice');
      diceDom.style.display = 'block';
      diceDom.src = 'dice-'+ dice+'.png';

      //3. Update the round score IF the rolled number was NOT a 1
        
      if (dice !==1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;


      }else {
        //Next player
        nextPlayer();

      }

    }
      

  });

  document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying) {
     //hold the current score on to the globle srore
      score[activePlayer] += roundScore;


      //update on UI
      document.querySelector('#score-'+ activePlayer).textContent = score[activePlayer];

        if (score[activePlayer] >= 40) {
          document.querySelector('#name-'+ activePlayer).textContent = "Winner!";
          document.querySelector('.player-'+ activePlayer + "-panel").classList.add('winner');
          document.querySelector('.player-'+ activePlayer + "-panel").classList.remove('active');
          document.querySelector('.dice').style.display = 'none'
          gamePlaying = false;
          
          }else {
            //Next playre

            nextPlayer();
          }
    
        roundScore = 0;
    }
   
      
  })

  function nextPlayer(){

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      roundScore = 0;
      document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('.dice').style.display = 'none';
  }

  document.querySelector('.btn-new').addEventListener('click', init);


  function init(){
      score = [0, 0];
      roundScore = 0;
      activePlayer = 0;
      gamePlaying = true;


      document.querySelector('#current-0').textContent = '0';
      document.querySelector('#current-1').textContent = '0';
      document.querySelector('#score-0').textContent = '0';
      document.querySelector('#score-1').textContent = '0';
      document.getElementById('name-0').textContent = 'PLAYER1';
      document.getElementById('name-1').textContent = 'PLAYER2';
      document.querySelector('.player-0-panel').classList.remove('winner')
      document.querySelector('.player-1-panel').classList.remove('winner')
      document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active')
  }

}())

