const selectBtn = document.querySelectorAll('[data-selection]')

// selects user choice
let userPick = selectBtn.forEach((e) => {
    e.addEventListener('click', () => {
        userPick = e.dataset.selection //dataset.selection selects user option
        playGame()
    })
})

// selects computer choice;
let compPick = computerPick = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randonSelection = Math.floor(Math.random() * options.length) //returns random computer selection based in the options given
    return options[randonSelection]
}

// Play game
const playGame = () => {
    compPick = computerPick()
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
    default:
        console.log('nothing selected')
        }
}
