const selectBtn = document.querySelectorAll('[data-selection]')
const playerResults = document.getElementById('player-results')
const gameResults = document.querySelector('.game-results')

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
			isDraw()
			break
		case 'rockscissors':
		case 'paperrock':
		case 'scissorspaper':
			userWins()
			break
		case 'rockpaper':
		case 'paperscissors':
		case 'scissorsrock':
			compWins()
			break
	}
    displayGameChoices(userPick, compPick)
}

const isDraw = () => {
	playerResults.innerText = "it's a draw"
}

const userWins = () => {
	playerResults.innerText = 'you win'
}

const compWins = () => {
	playerResults.innerText = 'you lose'
}

// Show Player selections
const displayGameChoices = (userPick, compPick) => {
	const game = document.querySelector('.game')
	const choices = document.querySelectorAll('.picked-choice')

	for (i = 0; i < choices.length; i++) {
        game.style.display = 'none'
        gameResults.style.display = 'grid'
		choices[0].innerHTML = `
                <div class="choice">
                    <button class="choice-btn" data-selection="${userPick}">
                        <div class="choice">
                            <img src="./images/icon-${userPick}.svg" alt="${userPick}">
                        </div>
                    </button> 
                    <p>you picked</p>
                </div>`
		choices[1].innerHTML = `
                <div class="choice">
                    <button class="choice-btn" data-selection="${compPick}">
                        <div class="choice">
                            <img src="./images/icon-${compPick}.svg" alt="${compPick}">
                        </div>
                    </button> 
                    <p>the house picked</p>
                </div>`
	}
	gameWinner()
	resetBtn()
}

//Resets Game
const resetBtn = () => {
	const playAgainBtn = document.querySelector('.play-btn')
	playAgainBtn.addEventListener('click', () => window.location.reload())
}

// Display shadow on the winner picker
const gameWinner = () => {
	const choiceBtn = document.querySelectorAll('.game-results .choice-btn')

	choiceBtn.forEach((e) => {
		if (playerResults.innerHTML == 'you win') {
			choiceBtn[0].classList.add('winner')
		} else if (playerResults.innerHTML == 'you lose') {
			choiceBtn[1].classList.add('winner')
		}
	})
}