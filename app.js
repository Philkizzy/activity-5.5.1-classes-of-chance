class Casino {
    constructor(name, isFakeCoin){
        this.name = name
        this.isFakeCoin = isFakeCoin
    }
    timesPlayed = 0
    //This function tells who wins if it is the player or the Casino.
    playGame(betAmount){
            if(Math.random() < 0.5 || this.isFakeCoin === true){
                console.log(this.name +" "+ "wins !")

            }else{
                console.log("The player wins " + betAmount + " dollars from " + this.name)
                this.timesPlayed += 1
                betAmount = betAmount * (this.timesPlayed + 1)
            }
        }

    //This function displayed what side was rolled during the game
    rollDie(d){
        console.log("You rolled a " +  (Math.floor(Math.random() * d) + 1) + "!");

    }
};

// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
//myCasino.playGame(15);
//myCasino.playGame(25);
//myCasino.playGame(35);

// BONUS TESTS
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);

// Extra BONUS TESTS

const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
