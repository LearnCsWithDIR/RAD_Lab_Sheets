// Abstract superclass
class InternetCafe {
    constructor(theme, avatar) {
      this.theme = theme;
      this.avatar = avatar;
      this.paused = false;
    }
  
    selectTheme(theme) {
      this.theme = theme;
    }
  
    selectAvatar(avatar) {
      this.avatar = avatar;
    }
  
    pauseGame() {
      this.paused = true;
    }
  
    resumeGame() {
      this.paused = false;
    }
  
    cancelGame() {
      console.log("Game canceled.");
    }
  
    //abstract methods
    displayWinningMessage() {
      throw new Error("Method not implemented.");
    }
  
    displayLosingMessage() {
      throw new Error("Method not implemented.");
    }
  }
  
  // Car Games subclass
  class CarGame extends InternetCafe {
    constructor(theme, avatar) {
      super(theme, avatar);
      this.winningScore = 100;
    }
  
    displayWinningMessage() {
      console.log("Car Game - You reached the winning score!");
    }
  
    displayLosingMessage() {
      console.log("Car Game - You lost the game!");
    }
  }
  
  // Puzzle Games subclass
  class PuzzleGame extends InternetCafe {
    constructor(theme, avatar, time) {
      super(theme, avatar);
      this.time = time;
    }
  
    displayWinningMessage() {
      console.log("Puzzle Game - You rearranged the puzzle within the time. You are the winner!");
    }
  
    displayLosingMessage() {
      console.log("Puzzle Game - You failed to rearrange the puzzle within the time. You lost the game!");
    }
  }
  
  // Shooting Games subclass
  class ShootingGame extends InternetCafe {
    constructor(theme, avatar, selectedMission) {
      super(theme, avatar);
      this.selectedMission = selectedMission;
    }
  
    displayWinningMessage() {
      console.log("Shooting Game - You completed the selected mission. You are the winner!");
    }
  
    displayLosingMessage() {
      console.log("Shooting Game - You failed to complete the selected mission. You lost the game!");
    }
  }
  
  const carGame = new CarGame("Raceroad", "Racing bike");
  carGame.selectTheme("Desert");
  carGame.selectAvatar("Sports bike");
  carGame.pauseGame();
  carGame.displayWinningMessage();
  carGame.displayLosingMessage();
  
  const puzzleGame = new PuzzleGame("Nature", "Water", 50);
  puzzleGame.selectTheme("Forest");
  puzzleGame.selectAvatar("Mammals");
  puzzleGame.cancelGame();
  puzzleGame.displayWinningMessage();
  puzzleGame.displayLosingMessage();
  
  const shootingGame = new ShootingGame("Warzone", "Soldier", "Rescue Mission");
  shootingGame.selectTheme("Zombies");
  shootingGame.selectAvatar("Sniper");
  shootingGame.pauseGame(); 
  shootingGame.resumeGame();
  shootingGame.displayWinningMessage();
  shootingGame.displayLosingMessage();
  