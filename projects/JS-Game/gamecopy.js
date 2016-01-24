var startButton = document.getElementById('start');
startButton.addEventListener('click', newGame);

function showGameBox() {
  var gameBox = document.getElementById('game');
  gameBox.style.display = 'block';
}

function newGame(){
  showGameBox();
  var inputBox = document.getElementById('name-input');
  inputBox.style.display = 'none';
  var playerName = document.getElementById('name_newplayer');
  var playerNameDisplay = document.getElementById('name-display');
  playerNameDisplay.textContent = playerName.value;

  var player1 = new Player(playerName.value);
  var enemy = new Player('Computer');
  var currentGame = new Game(player1, enemy);

  var p1HealthDisplay = document.getElementById('player-current-health');
  var enemyHealthDisplay = document.getElementById('computer-display-health');
  p1HealthDisplay.textContent = currentGame.player1.health;
  enemyHealthDisplay.textContent = currentGame.computer.health;

  var punchButton = document.getElementById('punch');
  var specialButton = document.getElementById('special');

  punchButton.addEventListener('click',function(){
    currentGame.punch();
    p1HealthDisplay.textContent = currentGame.player1.health;
    enemyHealthDisplay.textContent = currentGame.computer.health;

  });
  specialButton.addEventListener('click',function(){
    currentGame.special()
    p1HealthDisplay.textContent = currentGame.player1.health;
    enemyHealthDisplay.textContent = currentGame.computer.health;
  });

};

function Player(name){
  this.name = name;
  this.health = 100;
  this.takeDamage = function(){
    this.health = this.health - Math.floor(Math.random()*10);
  };
  this.takeLargeDamage = function(){
  this.health = this.health - Math.floor(Math.random()*30);
  };
};

function Game (firstPlayer, secondPlayer){
  this.player1 = firstPlayer;
  this.computer = secondPlayer;
  this.punch = function () {
    console.log(this);
    this.computer.takeDamage();
    this.player1.takeDamage();
      if (this.computer.health <= 0) {
        alert('You won!!!');
      } else if (this.player1.health <= 0) {
        alert('You\'re dead.  Game Over!!!');
      }
      // else {
      //   console.log(this.player1.name + '\'s new health is ' + this.player1.health);
      //   console.log(this.computer.name + '\'s new health is ' + this.computer.health);
      // }
  };
  this.special = function () {
    this.computer.takeLargeDamage();
    this.player1.takeLargeDamage();
      if (this.computer.health <= 0) {
        alert('You won!!!');
      } else if (this.player1.health <= 0) {
        alert('You\'re dead.  Game Over!!!');
      }
      // else {
      //   console.log(this.player1.name + '\'s new health is ' + this.player1.health);
      //   console.log(this.computer.name + '\'s new health is ' + this.computer.health);
      // }
  };
};