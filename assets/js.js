const selectBtn = document.querySelectorAll('[data-selection]')

let userPick

// selects user choice
selectBtn.forEach((e) => {
    e.addEventListener('click', () => {
        userPick = e.dataset.selection //dataset.selection selects user option
        playGame(userPick)
    })
})

// selects computer choice
const computerPick = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randonSelection = Math.floor(Math.random() * options.length) //returns random computer selection based in the options given
    return options[randonSelection]
}

// Play game
const playGame = (userPick) => {
    let compPick = computerPick()
    switch (userPick + compPick) {
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            console.log('draw')
            break
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            console.log('userWin')
            break
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            console.log('computer wins')
            break
    }
}
playGame()