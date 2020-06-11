function drawBoard(){
    var gameField = document.getElementById('gamefield')
    
    for(i = 0; i < 3; i++){
        let row = document.createElement('tr')
        for(j = 0; j < 3; j++){
            let col = document.createElement('td')
            col.innerHTML = 'X'
            row.appendChild(col)
        }
        gameField.appendChild(row)
    }
}

window.addEventListener('load', drawBoard())  