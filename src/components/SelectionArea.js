import React from 'react'
import { PokemonList } from './PokemonList'
import { PokemonData } from './PokemonData'
import { IsGameOver } from './IsGameOver'

export class SelectionArea extends React.Component {
    constructor(props) {
        super(props)
        this.createBioOne = this.createBioOne.bind(this)
        this.createBioTwo = this.createBioTwo.bind(this)
        this.usersSet = this.usersSet.bind(this)
        this.setChangedButtonOne = this.setChangedButtonOne.bind(this)
        this.setChangedButtonTwo = this.setChangedButtonTwo.bind(this)
        this.setChangedButtonThree = this.setChangedButtonThree.bind(this)
        this.setChangedButtonFour = this.setChangedButtonFour.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            selectionOne: undefined,
            selectionOneTypeOne: undefined,
            selectionOneTypeTwo: undefined,
            selectionOneMoveOneName: undefined,
            selectionOneMoveOneType: undefined,
            selectionOneMoveTwoName: undefined,
            selectionOneMoveTwoName: undefined,
            selectionOneMoveTwoType: undefined,
            selectionOneHealth: undefined,
            gameOverTwo: 'false',
            selectionTwo: undefined,
            selectionTwoTypeOne: undefined,
            selectionTwoTypeTwo: undefined,
            selectionTwoMoveOneName: undefined,
            selectionTwoMoveOneType: undefined,
            selectionTwoMoveTwoName: undefined,
            selectionTwoMoveTwoType: undefined,
            userOneSelected: false,
            userTwoSelected: false,
            selectionTwoHealth: undefined,
            gameOverOne: 'false',
        }
    }
    createBioOne(input, data) {
        data.find((pokemon) => {
            if (pokemon.name === input) {
                this.setState(() => {
                    return {
                        selectionOne: pokemon.name,
                        selectionOneTypeOne: pokemon.typeOne,
                        selectionOneTypeTwo: pokemon.typeTwo,
                        selectionOneMoveOneName: pokemon.moves.moveOne.name,
                        selectionOneMoveOneType: pokemon.moves.moveOne.type,
                        selectionOneMoveTwoName: pokemon.moves.moveTwo.name,
                        selectionOneMoveTwoType: pokemon.moves.moveTwo.type,
                        selectionOneHealth: pokemon.healthPoints,
                        userOneSelected: true
                    }
                })
            }
        })
    }
    createBioTwo(input, data) {
        data.find((pokemon) => {
            if (pokemon.name === input) {
                this.setState(() => {
                    return {
                        selectionTwo: input,
                        selectionTwoTypeOne: pokemon.typeOne,
                        selectionTwoTypeTwo: pokemon.typeTwo,
                        selectionTwoMoveOneName: pokemon.moves.moveOne.name,
                        selectionTwoMoveOneType: pokemon.moves.moveOne.type,
                        selectionTwoMoveTwoName: pokemon.moves.moveTwo.name,
                        selectionTwoMoveTwoType: pokemon.moves.moveTwo.type,
                        selectionTwoHealth: pokemon.healthPoints,
                        userTwoSelected: true
                    }
                })
            }
        })
    }
    // instead of setting playing to true or false, i probably need to break up usersset into multiple things
    // this way the playing status is not dependent on so many things being true at once
    // after, i can change the logic that determines what shows pokemonlist or isgameover
    // basically, i need to make it so that the conditions that need to be met to render a component are more fluid
    // i want the pokemonlist to appear once users are set
    // i want the gameover to show when a user has hit 0 health
    // i want the main screen to select pokemon shown when the game is reset
    usersSet() {
        if (this.state.userOneSelected && this.state.userTwoSelected && this.state.gameOverTwo === 'false' && this.state.gameOverOne === 'false') {
            console.log(this.state)
            return <PokemonList pokemon={this.state} setChangedButtonOne={this.setChangedButtonOne} setChangedButtonTwo={this.setChangedButtonTwo}
            setChangedButtonThree={this.setChangedButtonThree} setChangedButtonFour={this.setChangedButtonFour} />
        } else if (this.state.gameOverTwo === 'true' || this.state.gameOverOne === 'true') {
            console.log(this.state)
            return <IsGameOver pokemon={this.state} reset={this.reset} />
            
        }
    }
    setChangedButtonOne(damage) {
        this.setState((prevState) => {
            return {
                selectionTwoHealth: prevState.selectionTwoHealth - damage
            }
        })
        this.setState((prevState) => {
            return {
                gameOverTwo: prevState.selectionTwoHealth <= 0 ? 'true' : 'false'
            }
        })
    }
    setChangedButtonTwo(damage) {
        this.setState((prevState) => {
            return {
                selectionTwoHealth: prevState.selectionTwoHealth - damage
            }
        })
        this.setState((prevState) => {
            return {
                gameOverTwo: prevState.selectionTwoHealth <= 0 ? 'true' : 'false'
            }
        })
    }
    setChangedButtonThree(damage) {
        this.setState((prevState) => {
            return {
                selectionOneHealth: prevState.selectionOneHealth - damage
            }
        })
        this.setState((prevState) => {
            return {
                gameOverOne: prevState.selectionOneHealth <= 0 ? 'true' : 'false'
            }
        })
    }
    setChangedButtonFour(damage) {
        this.setState((prevState) => {
            return {
                selectionOneHealth: prevState.selectionOneHealth - damage
            }
        })
        this.setState((prevState) => {
            return {
                gameOverOne: prevState.selectionOneHealth <= 0 ? 'true' : 'false'
            }
        })
    }
    onSubmitOne = (e) => {
        const one = e.target.value
        this.createBioOne(one, PokemonData)
    }
    onSubmitTwo = (e) => {
        const two = e.target.value
        this.createBioTwo(two, PokemonData)
    }
    reset() {
        document.getElementById('list-one').disabled = 'false'
        document.getElementById('list-two').disabled = 'false'
        this.setState(() => {
            return {
                selectionOne: undefined,
                selectionOneTypeOne: undefined,
                selectionOneTypeTwo: undefined,
                selectionOneMoveOneName: undefined,
                selectionOneMoveOneType: undefined,
                selectionOneMoveTwoName: undefined,
                selectionOneMoveTwoName: undefined,
                selectionOneHealth: undefined,
                selectionOneMoveTwoType: undefined,
                gameOverTwo: 'false',
                selectionTwo: undefined,
                selectionTwoTypeOne: undefined,
                selectionTwoTypeTwo: undefined,
                selectionTwoMoveOneName: undefined,
                selectionTwoMoveOneType: undefined,
                selectionTwoMoveTwoName: undefined,
                selectionTwoMoveTwoName: undefined,
                selectionTwoMoveTwoType: undefined,
                userOneSelected: false,
                userTwoSelected: false,
                selectionTwoHealth: undefined,
                gameOverOne: 'false',
            }
        }, () => {
            console.log(this.state)

        })
    }
    render() {
        return (
            <div>
            <div>
                <select id="list-one" onChange={(e) => {
                    this.onSubmitOne(e)
                }}>
                <option value="reset">--Select--</option>
                <option value="pikachu">Pikachu</option>
                <option value="bulbasaur">Bulbasaur</option>
                <option value="charmander">Charmander</option>
                <option value="squirtle">Squirtle</option>
                <option value="pidgey">Pidgey</option>
                <option value="meowth">Meowth</option>
                <option value="psyduck">Psyduck</option>
                <option value="geodude">Geodude</option>
                <option value="zubat">Zubat</option>
                <option value="mankey">Mankey</option>
                <option value="butterfree">Butterfree</option>
                </select>
                <select id="list-two" onChange={(e) => {
                    this.onSubmitTwo(e)
                }}>
                <option>--Select--</option>
                <option value="pikachu">Pikachu</option>
                <option value="bulbasaur">Bulbasaur</option>
                <option value="charmander">Charmander</option>
                <option value="squirtle">Squirtle</option>
                <option value="pidgey">Pidgey</option>
                <option value="meowth">Meowth</option>
                <option value="psyduck">Psyduck</option>
                <option value="geodude">Geodude</option>
                <option value="zubat">Zubat</option>
                <option value="mankey">Mankey</option>
                <option value="butterfree">Butterfree</option>
                </select>
                <div id="list-container">
                </div>
            </div>
                {this.usersSet()}
                <button onClick={() => {
                    this.reset()
                }}>Play Again</button>
            </div>
        )
    }
}

// i have added the reset function to reset the game after the player clicks play again
// however when i click play again the dropdowns stay disabled
// why are they disabled still? how do i get them reset? is something still registering a certain way that makes the game keep them disabled?

// i have disabled the dropdowns upon the end of the game, now i need to set up an onclick handler for the game reset button
// this button will need to be able to access the state, so i can reset the values
// the onclick handler needs to be called with a function
// now may be a good time to introduce redux, so i can connect the store with the reset() function that resets the state

// now i need a way to freeze the controls when the game ends
// there will be a button i can click to play again, and when clicked the controls unfreeze and the state resets
// to do this, i can access the dropdowns by their ids inside IsGameOver
// then i can set their disabled property to true
// i can add a play again button, and when clicked it resets the state and sets the disabled properties of both dropdowns to false

// next up is doing something when the game ends
// the game needs to give a message and then freeze up, then gives the option to reset

// how am i going to account for secondary typing?
// given my current structure, i would have to rework all the damagecalcs for every possibility
// i did not have to change much- i added a new calc that checked secondary typing
// then i ran both calcs that checked typing through a function that used conditional logic to check the situation and return a damage number
// the big issue i ran into was receiving NaN for a lot of my attacks- this was because i forgot something in the conditional
// i forgot to check what would happen if an attack did regular damage to both typings

// i took this out of my dom rendering- 
// {this.isUserTwo()}
// the reason is because it was creating two of my pokemon selected
// now i have it right- the labels and descriptions arent perfect, but the functionality is right
// go through and label everything correctly i.e. isUserOne now covers both user one and two
// then i can start setting state

// i tried to create a separate component that took care of dispatching actions through a functional component (a la ExpenseForm/Add)
// instead, i should just go back to how everything was originally
// get rid of the call to SetLineup inside render
// bring everything back into this component and add the onSubmit function a la ExpenseForm
// then, i will call SelectionArea inside another functional component (a la Add)
// HERE
// there i should be able to dispatch the actions to add a pokemon
// DONE
// i ran into an issue where i needed to set the state through something that wasnt part of the main component
// to do this i used the submit props similar to the expense app
// i needed a functional component to dispatch the action because i couldnt pass props into/connect the main component
// maaaaybe i could have, but that would have involved more research and switching, so this was a fine solution
// then i needed to make one for both users selected
// AWESOME JOB! this involved a lot of looking back at old code but i figured that out on my own and filled in the gaps myself
// but if i dispatch the setSelection action, how do i get it to dispatch the other actions to set the moves and types?
// i solved super easily! i just used setState inside onSubmit, and then used createBio to set the rest of the states!
// createBio already finds the correct pokemon and sets the rest of the state to be correct
// HERE
// i believe the next step is going to be to set up both user's health and start deducting damage from it based on the attack

// make the input field part of its own component and import it, call it inside the render

// the damage amount that is returned is deducted from the opponent's total health
// then i can return the damage from the calcs instead of logging it, and update state to deduct that number from total health
// pass damageDealt() in here so it can use setState
// bind damageDealt in here, make it part of this component
// need to account for secondary types
// right now pikachu does regular damage to geodude because he is rock primarily- need it to do no damage
// clean up damage calcs

// I fucking kicked ass on Friday!!
// ran into a lot of issues but always stayed calm and thought my way out of it
// i remembered little things ive learned over time like self-invoking functions, binding, returning state, ternary operator
// i am becoming much better at problem solving and i have enough tools in my bag of tricks that i can think my way around some issues
// my googling is getting better too!

// i ran into a couple problems i didnt know i had regarding determining how a move will know the element of the opponent
// to solve this, i pass down props all the way to the damage calcs, so they know what type the opponent is

// make it so that there is no button visible before a pokemon is picked
// I DID THIS BY MAKING THE LIST SHOW UP CONDITIONALLY, DEPENDING ON WHETHER THE STATE REFLECTED A CHOSEN USER- AWESOME JOB!

// figure out why clicking the attack button does not log damage to console
// THIS WAS BECAUSE I WAS RETURNING THE DAMAGE INSTEAD OF LOGGING IT

// could not figure out why the damage calc couldnt read the type of the second selection
// it was because in the damage calc i was trying to read the props that werent even passed into it as opposed to just capturing that data since it was already passed in when the function was called

// the correct damage calc will be passed in thru onClick handler
// i did this by passing props down the line, and accessing the type of the move im using to determine the calculator that will be used

// figure out why reducer isn't being logged properly through getState subscription
// I HAD A DIFFERENT NAME FOR THE ACTION TYPE THAN I DID FOR THE REDUCER CASE

// i couldnt figure out how to set the state of a main component from inside a stateless functional component child
// i realized that i have set state from different components before by creating a state-setting method and passing it into props
// i looked up a solution on stackoverflow but i probably could have done it myself, good job finding the answer though!

// i almost made things really difficult by going the long route, but i found a clever quick solution that saved me time and hassle
// i was showing duplicates for the users selected, because i was calling pokemonlist twice
// i was about to make pokemonlistone and pokemonlisttwo, but i noticed that it was triggering when i checked if the user was set
// so as long as i waited until both were selected in the conditional, they were still getting set in the state but wouldnt make a ui change more than once
// very clever!