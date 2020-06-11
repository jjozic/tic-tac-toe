const gameField = document.getElementById('gamefield')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
var currentPlayer = 1

function drawBoard() {
    for (i = 0; i < 3; i++) {
        let row = document.createElement('tr')
        for (j = 0; j < 3; j++) {
            let col = document.createElement('td')
            col.addEventListener('click', () => gameLogic(col))
            row.appendChild(col)
        }
        gameField.appendChild(row)
    }
}

function gameLogic(col) {
    if(col.innerHTML === ''){
        if (currentPlayer === 1) {
            player1.classList.remove('selected')
            player2.classList.add('selected')
            col.innerHTML = 'X'
            currentPlayer = 2
        }
        else if (currentPlayer === 2){
            player2.classList.remove('selected')
            player1.classList.add('selected')
            col.innerHTML = 'O'
            currentPlayer = 1
        }
    }
}

window.addEventListener('load', drawBoard())  