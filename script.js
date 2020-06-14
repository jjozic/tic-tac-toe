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
    //so the fields can't be overwritten
    if (col.innerHTML === '') {
        if (currentPlayer === 1) {
            player1.classList.remove('selected')
            player2.classList.add('selected')
            col.innerHTML = 'X'
            checkWinner()
            currentPlayer = 2
        }
        else if (currentPlayer === 2) {
            player2.classList.remove('selected')
            player1.classList.add('selected')
            col.innerHTML = 'O'
            checkWinner()
            currentPlayer = 1
        }
    }
}

function checkWinner() {
    var winner = false

    let fields = gameField.getElementsByTagName('tr')
    let count = 0
    let targetedPlayer = 'X'

    if (currentPlayer === 1) {
        targetedPlayer = 'X'
    }
    else if (currentPlayer === 2) {
        targetedPlayer = 'O'
    }

    //vertical rows check
    for (i = 0; i < 3; i++) {
        count = 0
        for (j = 0; j < 3; j++) {
            if (fields[i].childNodes[j].innerHTML === targetedPlayer) {
                count++
            }
            if (count === 3) {
                console.log('Player ' + currentPlayer + ' wins!')
            }
        }
    }

    //horizontal rows check
    for (i = 0; i < 3; i++) {
        count = 0
        for (j = 0; j < 3; j++) {
            if (fields[j].childNodes[i].innerHTML === targetedPlayer) {
                count++
            }
            if (count === 3) {
                console.log('Player ' + currentPlayer + ' wins!')
            }
        }
    }

    //diagonal rows check
    count=0
    for (i = 0; i < 3; i++) {
        if (fields[i].childNodes[i].innerHTML === targetedPlayer) {
            count++
        }
        if (count === 3) {
            console.log('Player ' + currentPlayer + ' wins!')
        }
    }
    count=0
    for (i = 0; i < 3; i++) {
        if (fields[i].childNodes[2-i].innerHTML === targetedPlayer) {
            count++
        }
        if (count === 3) {
            console.log('Player ' + currentPlayer + ' wins!')
        }
    }
}

window.addEventListener('load', drawBoard())  