const boxes = document.querySelectorAll(".box")
const restartButton = document.querySelector(".restart")
const startButton = document.querySelector(".start")
const statusText = document.querySelector(".status")

const winningCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let occupied = ["","","","","","","","",""]
let currentPlayer = "X"
let running = false

startGame()

function startGame()
{
    boxes.forEach(box => box.addEventListener("click",cellClicked));
    restartButton.addEventListener('click',restartGame)
    statusText.textContent=`${currentPlayer}'s turn`
    running = true
}

function cellClicked(){
    let cellIndex = this.getAttribute("cell-index")
    console.log(cellIndex)
    if(occupied[cellIndex]!="" || !running){
        return
    }
    this.textContent = currentPlayer;
    occupied[cellIndex]=currentPlayer
    checkWinner()
}

function checkWinner(){
    let roundWon = false

    for (let i = 0; i < winningCondition.length; i++) {
        const condition = winningCondition[i];
        const cellA = occupied[condition[0]];
        const cellB = occupied[condition[1]];
        const cellC = occupied[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        statusText.textContent = `${currentPlayer} wins!`
        running = false
    }
    else if( !occupied.includes("")){
        statusText.textContent = `Draw`;
        running=false;
    }
    else {
        currentPlayer = (currentPlayer == "X" ? "0" : "X")
        statusText.textContent = `${currentPlayer}'s turn`
    }
}

function restartGame(){
    occupied = ["","","","","","","","",""]
    running = true
    currentPlayer = "X"
    statusText.textContent = `${currentPlayer}'s Turn`
    boxes.forEach(box=>box.textContent="");
}


