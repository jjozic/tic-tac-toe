const gameField = document.getElementById('gamefield')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const restartBtn = document.getElementById('restartBtn')
const fields = gameField.getElementsByTagName('tr')
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
    //so the fields can't be overwritten
    if (col.innerHTML === '') {
        if (currentPlayer === 1) {
            player1.classList.remove('selected')
            player2.classList.add('selected')
            col.innerHTML = 'X'
            checkWinner(currentPlayer)
            currentPlayer = 2
        }
        else if (currentPlayer === 2) {
            player2.classList.remove('selected')
            player1.classList.add('selected')
            col.innerHTML = 'O'
            checkWinner(currentPlayer)
            currentPlayer = 1
        }
    }
}

function checkWinner(player) {
    let winner = false
    let targetedPlayer = 'X'
    let verticalCount = 0
    let horizontalCount = 0
    let leftToRightCount = 0
    let rightToLeftCount = 0

    if (player === 1) {
        targetedPlayer = 'X'
    }
    else if (player === 2) {
        targetedPlayer = 'O'
    }

    for (i = 0; i < 3; i++) {
        verticalCount = 0
        horizontalCount = 0
        for (j = 0; j < 3; j++) {
            //vertical rows check
            if (fields[i].childNodes[j].innerHTML === targetedPlayer) {
                verticalCount++
            }
            //horizontal rows check
            if (fields[j].childNodes[i].innerHTML === targetedPlayer) {
                horizontalCount++
            }
            if (verticalCount === 3 || horizontalCount == 3) {
                winner = true
            }
        }
        //diagonal left to right
        if (fields[i].childNodes[i].innerHTML === targetedPlayer) {
            leftToRightCount++
        }
        //diagonal right to left
        if (fields[i].childNodes[2 - i].innerHTML === targetedPlayer) {
            rightToLeftCount++
        }
        if (leftToRightCount === 3 || rightToLeftCount === 3) {
            winner = true
        }
    }

    if (winner) {
        setTimeout(function () {
            alert('Player ' + player + ' wins!')
            restart()
        }, 100);
    }
}

function restart() {
    currentPlayer = 1
    player2.classList.remove('selected')
    player1.classList.add('selected')
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            fields[i].childNodes[j].innerHTML = ''
        }
    }
}

window.addEventListener('load', drawBoard())
restartBtn.addEventListener('click', restart)