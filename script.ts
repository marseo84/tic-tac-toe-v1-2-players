// DOM - start ............................................

const idPlayer1: HTMLElement | null = document.getElementById("id-player-1");
const idPlayer2: HTMLElement | null = document.getElementById("id-player-2");

// DOM - end ............................................

// interfaces - start ............................................

// count results of players
interface IScores {
  wins: number;
  draws: number;
  losses: number;
}

// calc balance
interface IBalance {
  balanceAsP1: number;
  balanceAsP2: number;
  balanceTotal: number;
}

// save game stats
//                                              ??? can I omit this and use an array instead?
interface IGameHistory {
  result: string; // win/draw/loss
  role: string; // player1 / player2
  movesUser: IMoves;
  movesOpponent: IMoves;
}

// ? optional values
interface IUser {
  userId: number;
  username: string;
  email: string;
  password: string;
  gamesPlayed: number;
  scoreAsP1: IScores;
  scoreAsP2: IScores;
  scoreTotal: IScores;
  balance: IBalance;
  games: IGameHistory;
  streak: number;
}

interface IPlayer {
  userId: number;
  username: string;
  active: Boolean;
}

interface IMoves {
  round: number;
  square: string; // a1
  classification: string; // mb
}

// win, loss, draw
interface IResult {
  player1: string;
  player2: string;
}

// interface IClassification {
//   round: number;
//   classification: string;
// }

// ? players in an array?
interface IGame {
  user1Id: string;
  user2Id: string;
  // player1: IPlayer; // starts
  // player2: IPlayer;
  player1: string; // starts
  player2: string;
  movesP1: IMoves[];
  movesP2: IMoves[];
  roundCount: number;
  result: IResult;
}

interface ISquare {
  name: string;
  player: string;
  available: boolean;
}

// interface ISession {

// }

// interfaces - end ............................................

// classes - start ............................................

class Scores implements IScores {
  wins: number;
  draws: number;
  losses: number;

  constructor(wins: number = 0, draws: number = 0, losses: number = 0) {
    this.wins = wins;
    this.draws = draws;
    this.losses = losses;
  }

  printScores(): void {
    console.log(`wins: ${this.wins}`);
    console.log(`draws: ${this.draws}`);
    console.log(`losses: ${this.losses}`);
  }
}

class Balance implements IBalance {
  balanceAsP1: number;
  balanceAsP2: number;
  balanceTotal: number;

  constructor(
    balanceAsP1: number = 0,
    balanceAsP2: number = 0,
    balanceTotal: number = 0
  ) {
    this.balanceAsP1 = balanceAsP1;
    this.balanceAsP2 = balanceAsP2;
    this.balanceTotal = balanceTotal;
  }

  printBalance(): void {
    console.log(`balanceAsP1: ${this.balanceAsP1}`);
    console.log(`balanceAsP2: ${this.balanceAsP2}`);
    console.log(`balanceTotal: ${this.balanceTotal}`);
  }
}

class GameHistory implements IGameHistory {
  result: string;
  role: string;
  movesUser: IMoves;
  movesOpponent: IMoves;

  constructor(
    result: string,
    role: string,
    movesUser: IMoves,
    movesOpponent: IMoves
  ) {
    this.result = result;
    this.role = role;
    this.movesUser = movesUser;
    this.movesOpponent = movesOpponent;
  }

  printGameHistory(): void {
    console.log(`result: ${this.result}`);
    console.log(`role: ${this.role}`);
    console.log(`movesUser: ${this.movesUser}`);
    console.log(`movesOpponent: ${this.movesOpponent}`);
  }
}

class User implements IUser {
  userId: number;
  username: string;
  email: string;
  password: string;
  gamesPlayed: number;
  scoreAsP1: IScores;
  scoreAsP2: IScores;
  scoreTotal: IScores;
  balance: IBalance;
  games: IGameHistory;
  streak: number;

  constructor(
    userId: number,
    username: string,
    email: string,
    password: string,
    gamesPlayed: number = 0,
    scoreAsP1: IScores = { wins: 0, draws: 0, losses: 0 },
    scoreAsP2: IScores = { wins: 0, draws: 0, losses: 0 },
    scoreTotal: IScores = { wins: 0, draws: 0, losses: 0 },
    balance: IBalance = { balanceAsP1: 0, balanceAsP2: 0, balanceTotal: 0 },
    games: IGameHistory = {
      result: "",
      role: "",
      movesUser: { round: 0, square: "", classification: "" },
      movesOpponent: { round: 0, square: "", classification: "" },
    },
    streak: number = 0
  ) {
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

  printUserInfo(): void {
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

class Player implements IPlayer {
  userId: number;
  username: string;
  active: Boolean;

  constructor(userId: number, username: string, active: Boolean = false) {
    this.userId = userId;
    this.username = username;
    this.active = active;
  }

  printPlayerInfo(): void {
    console.log(`userId: ${this.userId}`);
    console.log(`username: ${this.username}`);
    console.log(`active: ${this.active}`);
  }
}

class Moves implements IMoves {
  round: number;
  square: string;
  classification: string;

  constructor(round: number = 0, square: string, classification: string) {
    this.round = round;
    this.square = square;
    this.classification = classification;
  }

  printMoves(): void {
    console.log(`round: ${this.round}`);
    console.log(`square: ${this.square}`);
    console.log(`classification: ${this.classification}`);
  }
}

class Result implements IResult {
  player1: string;
  player2: string;

  constructor(player1: string, player2: string) {
    this.player1 = player1;
    this.player2 = player2;
  }

  printResult(): void {
    console.log(`player1: ${this.player1}`);
    console.log(`player2: ${this.player2}`);
  }
}

class Game implements IGame {
  user1Id: string;
  user2Id: string;
  // player1: IPlayer;
  // player2: IPlayer;
  player1: string;
  player2: string;
  movesP1: IMoves[];
  movesP2: IMoves[];
  roundCount: number;
  result: IResult;

  constructor(
    user1Id: string,
    user2Id: string,
    // player1: IPlayer,
    // player2: IPlayer,
    player1: string,
    player2: string,
    movesP1: IMoves[] = [],
    movesP2: IMoves[] = [],
    roundCount: number = 0,
    result: IResult = { player1: "", player2: "" }
  ) {
    this.user1Id = user1Id;
    this.user2Id = user2Id;
    this.player1 = player1;
    this.player2 = player2;
    this.movesP1 = movesP1;
    this.movesP2 = movesP2;
    this.roundCount = roundCount;
    this.result = result;
  }

  printGame(): void {
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

class Square implements ISquare {
  name: string;
  player: string;
  available: boolean;

  constructor(name: string, player: string = "", available: boolean = true) {
    this.name = name;
    this.player = player;
    this.available = available;
  }

  printSquare(): void {
    console.log(`name: ${this.name}`);
    console.log(`player: ${this.player}`);
    console.log(`available: ${this.available}`);
  }
}

// classes - end ............................................

// variables - start ............................................

// users & players
// ? sessions,
let users: IUser[] = [];
let gamesLog: IGame[] = []; // games or session?
let session: IGame[] = [];
// let sessions: ISession = ....    ! define, create interface
let currentGame: IGame; //? needed?

// create square instances          ??? needed?

// array of square names
const squareNames = ["a3", "b3", "c3", "a2", "b2", "c2", "a1", "b1", "c1"];

// array to store the square instances        // ? needed
let squaresStatus: ISquare[] = [];

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
  const squareNodes: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".square");

  // convert NodeList to an array
  const squares: HTMLDivElement[] = Array.from(squareNodes);

  // create new session

  // create new game
  function newGame(): void {
    // session.push(new Game("userTest1", " userTest2", "player1", "player2"));
    //                                                                              ??? name / id -> string / nunber
    session.push(
      new Game(
        userTest1.username,
        userTest2.username,
        player1.username,
        player2.username
      )
    );
    // console.log(session[1]);
  }

  // function getSquareId(item: string, index: number, arr: string[]): string {
  //   console.log("squareId printed from getSquareId: " + arr[index]);
  //   return arr[index];
  // }

  // count games in a session, games total...
  function countInstances(arr: any[] | null | undefined): void {
    const count: number = arr?.length ?? 0;
    console.log("n. of instances: " + count);
  }

  // record moves
  function recordMoves(event: Event) {
    const target = event.target as HTMLDivElement; // ? as HTMLDivElement - is correct?
    // console.log("id coming from recordMoves" + target.id);
  }

  // toggle between players - js vals
  function togglePlayers(event: Event): void {
    // count rounds (length in moves arr), if zero, set player 1 to active

    if (player1.active === true) {
      player1.active = false;
      player2.active = true;
      // console.log("toggled to: p1.active = false, p2.active = true");
    } else {
      player1.active = true;
      player2.active = false;
      // console.log("toggled to: p1.active = true, p2.active = false");
    }
  }
  // toggle active player - styles (add/remove css classes)
  function toggleActivePlayer(event: Event): void {
    // check player1 and player2 exist
    if (!idPlayer1 || !idPlayer2) {
      console.log("one or both player elements not found.");
      return;
    }

    if (player1.active) {
      idPlayer2.classList.remove("player-active");
      idPlayer1.classList.add("player-active");
      // console.log("toggled player1 active");
    } else {
      idPlayer1.classList.remove("player-active");
      idPlayer2.classList.add("player-active");
      // console.log("toggled player2 active");
    }
  }

  // event handler function
  function handleSquareClick(event: Event): void {
    //get the clicked element
    const target = event.target as HTMLDivElement;

    // toggle between players
    if (target.innerHTML === "") {
      if (player1.active === true) {
        target.innerHTML = "X";
        target.classList.add("square-not-available");
      } else {
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
    } else {
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
