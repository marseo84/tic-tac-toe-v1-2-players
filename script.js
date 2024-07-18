"use strict";
// DOM - start ............................................
const idPlayer1 = document.getElementById("id-player-1");
const idPlayer2 = document.getElementById("id-player-2");
// interface ISession {
// }
// interfaces - end ............................................
// classes - start ............................................
class Scores {
    constructor(wins = 0, draws = 0, losses = 0) {
        this.wins = wins;
        this.draws = draws;
        this.losses = losses;
    }
    printScores() {
        console.log(`wins: ${this.wins}`);
        console.log(`draws: ${this.draws}`);
        console.log(`losses: ${this.losses}`);
    }
}
class Balance {
    constructor(balanceAsP1 = 0, balanceAsP2 = 0, balanceTotal = 0) {
        this.balanceAsP1 = balanceAsP1;
        this.balanceAsP2 = balanceAsP2;
        this.balanceTotal = balanceTotal;
    }
    printBalance() {
        console.log(`balanceAsP1: ${this.balanceAsP1}`);
        console.log(`balanceAsP2: ${this.balanceAsP2}`);
        console.log(`balanceTotal: ${this.balanceTotal}`);
    }
}
class GameHistory {
    constructor(result, role, movesUser, movesOpponent) {
        this.result = result;
        this.role = role;
        this.movesUser = movesUser;
        this.movesOpponent = movesOpponent;
    }
    printGameHistory() {
        console.log(`result: ${this.result}`);
        console.log(`role: ${this.role}`);
        console.log(`movesUser: ${this.movesUser}`);
        console.log(`movesOpponent: ${this.movesOpponent}`);
    }
}
class User {
    constructor(userId, username, email, password, gamesPlayed = 0, scoreAsP1 = { wins: 0, draws: 0, losses: 0 }, scoreAsP2 = { wins: 0, draws: 0, losses: 0 }, scoreTotal = { wins: 0, draws: 0, losses: 0 }, balance = { balanceAsP1: 0, balanceAsP2: 0, balanceTotal: 0 }, games = {
        result: "",
        role: "",
        movesUser: { round: 0, square: "", classification: "" },
        movesOpponent: { round: 0, square: "", classification: "" },
    }, streak = 0) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.gamesPlayed = gamesPlayed;
        this.scoreAsP1 = scoreAsP1;
        this.scoreAsP2 = scoreAsP2;
        this.scoreTotal = scoreTotal;
        this.balance = balance;
        this.games = games;
        this.streak = streak;
    }
    printUserInfo() {
        console.log(`userId: ${this.userId}`);
        console.log(`username: ${this.username}`);
        console.log(`email: ${this.email}`);
        console.log(`password: ${this.password}`);
        console.log(`gamesPlayed: ${this.gamesPlayed}`);
        console.log(`scoreAsP1: ${JSON.stringify(this.scoreAsP1)}`);
        console.log(`scoreAsP2: ${JSON.stringify(this.scoreAsP2)}`);
        console.log(`scoreTotal: ${JSON.stringify(this.scoreTotal)}`);
        console.log(`balance: ${JSON.stringify(this.balance)}`);
        console.log(`games: ${JSON.stringify(this.games)}`);
        console.log(`streak: ${this.streak}`);
    }
}
class Player {
    constructor(userId, username, active = false) {
        this.userId = userId;
        this.username = username;
        this.active = active;
    }
    printPlayerInfo() {
        console.log(`userId: ${this.userId}`);
        console.log(`username: ${this.username}`);
        console.log(`active: ${this.active}`);
    }
}
class Moves {
    constructor(round = 0, square, classification) {
        this.round = round;
        this.square = square;
        this.classification = classification;
    }
    printMoves() {
        console.log(`round: ${this.round}`);
        console.log(`square: ${this.square}`);
        console.log(`classification: ${this.classification}`);
    }
}
class Result {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
    printResult() {
        console.log(`player1: ${this.player1}`);
        console.log(`player2: ${this.player2}`);
    }
}
class Game {
    constructor(user1Id, user2Id, 
    // player1: IPlayer,
    // player2: IPlayer,
    player1, player2, movesP1 = [], movesP2 = [], roundCount = 0, result = { player1: "", player2: "" }) {
        this.user1Id = user1Id;
        this.user2Id = user2Id;
        this.player1 = player1;
        this.player2 = player2;
        this.movesP1 = movesP1;
        this.movesP2 = movesP2;
        this.roundCount = roundCount;
        this.result = result;
    }
    printGame() {
        console.log(`user1Id: ${this.user1Id}`);
        console.log(`user2Id: ${this.user2Id}`);
        console.log(`player1: ${this.player1}`);
        console.log(`player2: ${this.player2}`);
        console.log(`movesP1: ${JSON.stringify(this.movesP1)}`);
        console.log(`movesP2: ${JSON.stringify(this.movesP2)}`);
        console.log(`roundCount: ${this.roundCount}`);
        console.log(`result: ${JSON.stringify(this.result)}`);
    }
}
class Square {
    constructor(name, player = "", available = true) {
        this.name = name;
        this.player = player;
        this.available = available;
    }
    printSquare() {
        console.log(`name: ${this.name}`);
        console.log(`player: ${this.player}`);
        console.log(`available: ${this.available}`);
    }
}
// classes - end ............................................
// variables - start ............................................
// users & players
// ? sessions,
let users = [];
let gamesLog = []; // games or session?
let session = [];
// let sessions: ISession = ....    ! define, create interface
let currentGame; //? needed?
// create square instances          ??? needed?
// array of square names
const squareNames = ["a3", "b3", "c3", "a2", "b2", "c2", "a1", "b1", "c1"];
// array to store the square instances        // ? needed
let squaresStatus = [];
// create and store instances of the square class
squareNames.forEach((name) => {
    squaresStatus.push(new Square(name));
});
console.log(squaresStatus);
// log the status of each square to verify
// squaresStatus.forEach((square) => (square as Square).printSquare());
// create new users
const userTest1 = new User(1, "paco", "paco@email.com", "123");
const userTest2 = new User(2, "maria", "maria@email.com", "123");
// create new players
let player1 = new Player(1, "paco");
let player2 = new Player(2, "maria");
// DEV - find a better solution later
// set player1 active
player1.active = true;
// variables - end ............................................
// APP - start ............................................
document.addEventListener("DOMContentLoaded", () => {
    // console.log("DOM fully loaded and parsed");
    // control
    // game
    // select all elements with the class "square"
    const squareNodes = document.querySelectorAll(".square");
    // convert NodeList to an array
    const squares = Array.from(squareNodes);
    // create new session
    // create new game
    function newGame() {
        // session.push(new Game("userTest1", " userTest2", "player1", "player2"));
        //                                                                              ??? name / id -> string / nunber
        session.push(new Game(userTest1.username, userTest2.username, player1.username, player2.username));
        // console.log(session[1]);
    }
    // function getSquareId(item: string, index: number, arr: string[]): string {
    //   console.log("squareId printed from getSquareId: " + arr[index]);
    //   return arr[index];
    // }
    // count games in a session, games total...
    function countInstances(arr) {
        var _a;
        const count = (_a = arr === null || arr === void 0 ? void 0 : arr.length) !== null && _a !== void 0 ? _a : 0;
        console.log("n. of instances: " + count);
    }
    // record moves
    function recordMoves(event) {
        const target = event.target; // ? as HTMLDivElement - is correct?
        // console.log("id coming from recordMoves" + target.id);
    }
    // toggle between players - js vals
    function togglePlayers(event) {
        // count rounds (length in moves arr), if zero, set player 1 to active
        if (player1.active === true) {
            player1.active = false;
            player2.active = true;
            // console.log("toggled to: p1.active = false, p2.active = true");
        }
        else {
            player1.active = true;
            player2.active = false;
            // console.log("toggled to: p1.active = true, p2.active = false");
        }
    }
    // toggle active player - styles (add/remove css classes)
    function toggleActivePlayer(event) {
        // check player1 and player2 exist
        if (!idPlayer1 || !idPlayer2) {
            console.log("one or both player elements not found.");
            return;
        }
        if (player1.active) {
            idPlayer2.classList.remove("player-active");
            idPlayer1.classList.add("player-active");
            // console.log("toggled player1 active");
        }
        else {
            idPlayer1.classList.remove("player-active");
            idPlayer2.classList.add("player-active");
            // console.log("toggled player2 active");
        }
    }
    // event handler function
    function handleSquareClick(event) {
        //get the clicked element
        const target = event.target;
        // toggle between players
        if (target.innerHTML === "") {
            if (player1.active === true) {
                target.innerHTML = "X";
                target.classList.add("square-not-available");
            }
            else {
                target.innerHTML = "O";
                target.classList.add("square-not-available");
            }
            // console.log(`Square ${target.textContent} clicked!`);
            // console.log(`Square with the id ${target.id} clicked!`);
            // remove the event listener after the square is clicked
            target.removeEventListener("click", handleSquareClick);
            //get square
            // const squareId = getSquareId(
            //   target.id,
            //   squares.indexOf(target),
            //   squares.map((sq) => sq.id)
            // );
            const squareId = target.id;
            // console.log(`squareId: ---> ${squareId}`);
            recordMoves(event);
            togglePlayers(event);
            toggleActivePlayer(event);
        }
        else {
            console.log("Square already taken!");
        }
    }
    // add event listener to each square
    squares.forEach((square) => {
        square.addEventListener("click", handleSquareClick);
        // console.log(`Event listener added to square ${square.id}`);
    });
    // create a session and game
    newGame();
    newGame();
    newGame();
    // newGame();
    // newGame();
    // test accessing session
    // count games in a session
    // console.log(session);
    // console.log(session.length );
    // console.log("num. games in a session: " + session.length + 1);
    // user1Id of session 0
    // console.log("user1Id of game 1 (session[0]): " + session[0].user1Id);
    countInstances(session);
});
// APP - end ............................................
// userTest1.printUserInfo();
// userTest2.printUserInfo();
// player1.printPlayerInfo();
// player2.printPlayerInfo();
// show results
