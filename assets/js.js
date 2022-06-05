const selectBtn = document.querySelectorAll('[data-selection]')

// selects user choice
let userPick = selectBtn.forEach((e) => {
	e.addEventListener('click', () => {
		userPick = e.dataset.selection //dataset.selection selects user option
		playGame()
	})
})

// selects computer choice;
let compPick = (computerPick = () => {
	const options = ['rock', 'paper', 'scissors']
	const randonSelection = Math.floor(Math.random() * options.length) //returns random computer selection based in the options given
	return options[randonSelection]
})

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
	displayGameChoices(userPick, compPick)
}

const displayGameChoices = (userPick, compPick) => {
	const game = document.querySelector('.game')
	const choices = document.querySelectorAll('.picked-choice')

	for (i = 0; i < choices.length; i++) {
		game.style.display = 'none'
		choices[0].innerHTML = `
                <div class="choice chosen">
                    <button class="choice-btn" data-selection="${userPick}">
                        <div class="choice chosen">
                            <img src="./images/icon-${userPick}.svg" alt="${userPick}">
                        </div>
                    </button> 
                    <p>user picked</p>
                </div>`
		choices[1].innerHTML = `
                <div class="choice chosen">
                    <button class="choice-btn" data-selection="${compPick}">
                        <div class="choice chosen">
                            <img src="./images/icon-${compPick}.svg" alt="${compPick}">
                        </div>
                    </button> 
                    <p>the house picked</p>
                </div>`
    }
    resetBtn()
}

const resetBtn = () => {
    const playAgainBtn = document.querySelector('.play-btn')
    playAgainBtn.addEventListener('click', () => window.location.reload())
}
