const board = []

function play(clickedId) {
    const clickedElement = document.getElementById(clickedId)
    const playerSpan = document.getElementById('player')
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }
    console.log(board)
    const topRight = board[0]
    const topCenter = board[1]
    const topLeft = board[2]
    const middleRight = board[3]
    const middleCenter = board[4]
    const middleLeft = board[5]
    const bottomRight = board[6]
    const bottomCenter = board[7]
    const bottomLeft = board[8]

    if (topRight !== undefined && topRight === topCenter && topRight === topLeft) {
       alert(`${topRight} is the winner!`)
       return
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner!`)
        return
    }
    if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
        alert(`${topRight} is the winner!`)
        return
    }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner!`)
        return
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner!`)
        return
    }
    if (topLeft !== undefined && topLeft=== middleCenter && topLeft === bottomRight) {
        alert (`${topLeft} is the winner!`)
        return
    }
    if (middleRight !== undefined && middleRight === middleCenter && middleRight === middleLeft) {
        alert(`${middleRight} is the winner!`)
        return
    }
    if (bottomRight !== undefined && bottomRight === bottomCenter && bottomRight === bottomLeft) {
        alert(`${bottomRight} is the winner!`)
    }
    let boardFull = true
    for (i = 0; i<=8; i++) {
        if (board[i] === undefined)
        boardFull = false
    }
    if (boardFull === true) {
        alert(`Cat's game!`)
    }
}