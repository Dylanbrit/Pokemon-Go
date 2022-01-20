// Selecting each of the important values for easy use later
const homeButtonEl = document.querySelector('#home-button')
const awayButtonEl = document.querySelector('#away-button')
const inningEl = document.querySelector('#inning')
const outsEl = document.querySelector('#outs')
const ballsEl = document.querySelector('#balls')
const strikesEl = document.querySelector('#strikes')
const scoreboard = document.querySelector('#scoreboard')
const home = document.querySelector('#home-score')
const visitor = document.querySelector('#visitor-score')
const firstBaseEl = document.querySelector('#first-base')
const secondBaseEl = document.querySelector('#second-base')
const thirdBaseEl = document.querySelector('#third-base')
const playAgainButtonEl = document.querySelector('#play-again')
const winnerMessage = document.querySelector('#winner-message')
const errorMessage = document.querySelector('#error-message')
const selectHomeTeam = document.querySelector('#select-list-home')
const selectAwayTeam = document.querySelector('#select-list-away')
const homeTeamNameScoreboard = document.querySelector('#home-team-name')
const awayTeamNameScoreboard = document.querySelector('#away-team-name')

// Initial counter for each value
let outCounter = 0
let ballCounter = 0
let strikeCounter = 0
let homeScore = 0
let visitorScore = 0
let inningCounter = 1

inningEl.value = inningCounter

selectHomeTeam.addEventListener('change', (e) => {
    if (selectHomeTeam.value === 'null') {
        homeTeamNameScoreboard.innerHTML = ''
    } else {
        homeTeamNameScoreboard.innerHTML = selectHomeTeam.value
    }
})

selectAwayTeam.addEventListener('change', (e) => {
    if (selectAwayTeam.value === 'null') {
        awayTeamNameScoreboard.innerHTML = ''
    } else {
        awayTeamNameScoreboard.innerHTML = selectAwayTeam.value
    }
})

// Generate random number
const generateRandomNumber = () => {
    return Math.ceil(Math.random() * 100)
}

//Start the action
homeButtonEl.addEventListener('click', (e) => {
    if (selectHomeTeam.value === 'null' || selectAwayTeam.value === 'null') {
        showErrorMessage()
    } else {
        generateRandomNumber()
        const num = generateRandomNumber()
    
        determineOutcome(num)
        strikeTracker()
        ballTracker()
        outTracker()
        selectHomeTeam.disabled = true
        selectAwayTeam.disabled = true
        e.preventDefault()
        clearError()
    }
})

const determineOutcome = (num) => {
    if (num >= 1 && num <= 10) {
        console.log('single ' + num)
        resetBallAndStrikeCount()
        advanceRunnerOnSingle()
        console.log(`${firstBaseEl.value } + ${secondBaseEl.value } + ${thirdBaseEl.value}`)
    } else if (num >= 11 && num <= 13) {
        console.log('double ' + num)
        resetBallAndStrikeCount()
        advanceRunnerOnDouble()
        console.log(`${firstBaseEl.value } + ${secondBaseEl.value } + ${thirdBaseEl.value}`)
    } else if (num >= 14 && num <= 16) {
        console.log('home run! ' + homeScore + ' ' + num)
        resetBallAndStrikeCount()
        advanceRunnerOnHomeRun()
        console.log(`${firstBaseEl.value } + ${secondBaseEl.value } + ${thirdBaseEl.value}`)
    } else if (num === 17) {
        console.log('triple ' + num)
        resetBallAndStrikeCount()
        advanceRunnerOnTriple()
        console.log(`${firstBaseEl.value } + ${secondBaseEl.value } + ${thirdBaseEl.value}`)
    } else if (num >= 18 && num <= 40) {
        ballCounter++
        console.log('ball ' + ballCounter + ' ' + num)
        ballsEl.value = ballCounter
    } else if (num >= 41 && num <= 75) {
        strikeCounter++
        console.log('strike ' + strikeCounter + ' ' + num)
        strikesEl.value = strikeCounter
    } else if (num >= 76 && num <= 100) {
        outCounter++
        console.log('out ' + outCounter + ' ' + num)
        outsEl.value = outCounter
        resetBallAndStrikeCount()
    }
}

awayButtonEl.addEventListener('click', (e) => {
    generateRandomNumber()
    const num = generateRandomNumber()

    determineOutcomeAway(num)
    strikeTracker()
    ballTracker()
    outTrackerAway()
    e.preventDefault()
})

const determineOutcomeAway = (num) => {
    if (num >= 1 && num <= 16) {
        console.log('single ' + num)
        resetBallAndStrikeCount()
        advanceRunnerOnSingleAway()
        console.log(`${firstBaseEl.value } + ${secondBaseEl.value } + ${thirdBaseEl.value}`)
    } else if (num >= 17 && num <= 20) {
        console.log('double ' + num)
        resetBallAndStrikeCount()
        advanceRunnerOnDoubleAway()
        console.log(`${firstBaseEl.value } + ${secondBaseEl.value } + ${thirdBaseEl.value}`)
    } else if (num >= 21 && num <= 24) {
        console.log('home run! ' + homeScore + ' ' + num)
        resetBallAndStrikeCount()
        advanceRunnerOnHomeRunAway()
        console.log(`${firstBaseEl.value } + ${secondBaseEl.value } + ${thirdBaseEl.value}`)
    } else if (num === 25) {
        console.log('triple ' + num)
        resetBallAndStrikeCount()
        advanceRunnerOnTripleAway()
        console.log(`${firstBaseEl.value } + ${secondBaseEl.value } + ${thirdBaseEl.value}`)
    } else if (num >= 26 && num <= 50) {
        ballCounter++
        console.log('ball ' + ballCounter + ' ' + num)
        ballsEl.value = ballCounter
    } else if (num >= 51 && num <= 75) {
        strikeCounter++
        console.log('strike ' + strikeCounter + ' ' + num)
        strikesEl.value = strikeCounter
    } else if (num >= 76 && num <= 100) {
        outCounter++
        console.log('out ' + outCounter + ' ' + num)
        outsEl.value = outCounter
        resetBallAndStrikeCount()
    }
}

playAgainButtonEl.addEventListener('click', (e) => {
    resetBallAndStrikeCount()
    resetOuts()
    clearBases(firstBaseEl, secondBaseEl, thirdBaseEl)
    resetScores()
    homeTeamNameScoreboard.innerHTML = ''
    awayTeamNameScoreboard.innerHTML = ''
    selectHomeTeam.disabled = false
    selectAwayTeam.disabled = false
    selectHomeTeam.value = 'null'
    selectAwayTeam.value = 'null'
    inningCounter = 1
    inningEl.value = inningCounter
    homeButtonEl.disabled = false
    awayButtonEl.disabled = true
    playAgainButtonEl.disabled = true
    winnerMessage.style.display = 'none'
})

const endGame = () => {
    homeButtonEl.disabled = true
    awayButtonEl.disabled = true
    playAgainButtonEl.disabled = false
    showWinnerMessage()
}

const showWinnerMessage = () => {
    winnerMessage.style.display = 'block'
    if (homeScore > visitorScore) {
        winnerMessage.innerHTML = `${selectHomeTeam.value} win!`
    } else if (visitorScore > homeScore) {
        winnerMessage.innerHTML = `${selectAwayTeam.value} win!`
    } else if (homeScore = visitorScore) {
        winnerMessage.innerHTML = `It's a tie!`
    }
}

const showErrorMessage = () => {
    errorMessage.innerHTML = 'Please select a home and away team'
    errorMessage.style.display = 'block'
}

const clearError = () => {
    errorMessage.remove()
}

// Functions for tracking what happens when a certain number of outs, balls, and strikes are met
const outTracker = () => {
    if (outsEl.value == 3) {
        homeButtonEl.disabled = true
        awayButtonEl.disabled = false
        resetOuts()
        resetBallAndStrikeCount()
        clearBases(firstBaseEl, secondBaseEl, thirdBaseEl)
    }
    if (inningEl.value == 10) {
        endGame()
    }
}

const outTrackerAway = () => {
    if (outsEl.value == 3) {
        awayButtonEl.disabled = true
        homeButtonEl.disabled = false
        resetOuts()
        resetBallAndStrikeCount()
        clearBases(firstBaseEl, secondBaseEl, thirdBaseEl)
        nextInning()
    }
    if (inningEl.value == 10) {
        endGame()
    }
}

const strikeTracker = () => {
    if (strikesEl.value == 3) {
        outCounter++
        outsEl.value = outCounter
        resetBallAndStrikeCount()
    }
}

const ballTracker = () => {
    if (ballsEl.value == 4) {
        advanceRunnerOnBalls()
        resetBallAndStrikeCount()
    }
}

// Resetting the values of balls, strikes, outs, bases, and innings
const resetBallAndStrikeCount = () => {
    ballCounter = 0
    strikeCounter = 0
    ballsEl.value = ballCounter
    strikesEl.value = strikeCounter
}

const resetOuts = () => {
    outCounter = 0
    outsEl.value = outCounter
}

const clearBases = (baseOne, baseTwo, baseThree) => {
    baseOne.value = ''
    baseTwo.value = ''
    baseThree.value = ''
}

const resetScores = () => {
    homeScore = 0
    visitorScore = 0
    home.innerHTML = homeScore
    visitor.innerHTML = visitorScore
}

const nextInning = () => {
    inningCounter++
    inningEl.value = inningCounter
}