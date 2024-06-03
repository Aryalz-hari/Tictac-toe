const gameData =[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let editedPlayer=0;
let activePlayer=0;
let currentRound=1;
let gameIsOver=false;
const players=[
    {name:'',
  symbol:'X'},
    {
        name:'',
        symbol:'0'
    }
]

const editPlayerBtn1Element=document.getElementById('edit-player-1-btn');
const editPlayerBtn2Element = document.getElementById("edit-player-2-btn");
const activePlayerNameElement= document.getElementById('active-player-name');

const playerConfigOverlayElement=document.getElementById('config-overlay');
const backDropElement = document.getElementById('backdrop');
const cancelConfigBtn=document.getElementById('cancel-config-btn');

const formElement=document.querySelector('form');
const errorOutputElement=document.getElementById('config-errors');

const startNewGameBtnElement = document.getElementById("start-game-btn");
const gameAreaElement = document.getElementById("active-game");
const gameBoardElement =document.getElementById('game-board');

const gameOverElement=document.getElementById('game-over');

editPlayerBtn1Element.addEventListener('click',openPlayerConfig);
editPlayerBtn2Element.addEventListener('click',openPlayerConfig);

cancelConfigBtn.addEventListener('click',closePlayerConfig);
backDropElement.addEventListener('click',closePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

formElement.addEventListener('submit',savePlayerconfig);

gameBoardElement.addEventListener('click', selectGameField);