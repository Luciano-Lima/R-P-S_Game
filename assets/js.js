const selection = document.querySelectorAll('[data-selection]')

// selects user choice
selection.forEach((selection) => {
    selection.addEventListener('click', () => {
        const userPick = selection.dataset.selection
    })
})

// selects computer choice
function compSelection() {
    const options = ['rock', 'paper', 'scissors']
    const randonSelection = Math.floor(Math.random() * options.length)
    return options[randonSelection]
}
compSelection()