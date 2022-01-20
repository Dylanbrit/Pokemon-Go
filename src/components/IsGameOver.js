import React from 'react'
import { connect } from 'react-redux'

export const IsGameOver = (props) => (
    <div>
        {endGame(props)}
    </div>
)

const endGame = (props) => {
    const userOneLoses = props.pokemon.gameOverOne
    const userTwoLoses = props.pokemon.gameOverTwo

    if (userOneLoses === 'true') {
        document.getElementById('list-one').disabled = 'true'
        document.getElementById('list-two').disabled = 'true'
        return (
            <div>
                <p>{props.pokemon.selectionOne} is unable to battle! {props.pokemon.selectionTwo} is the winner! {props.pokemon.playing}</p>
                
            </div>
        )
    } else if (userTwoLoses === 'true') {
        document.getElementById('list-two').disabled = 'true'
        document.getElementById('list-one').disabled = 'true'
        return (
            <div>
                <p>{props.pokemon.selectionTwo} is unable to battle! {props.pokemon.selectionOne} is the winner! {props.pokemon.playing}</p>
                
            </div>
        )
    } 
    // else {
        // i think this is where the problem is, as well as in usersSet
        // when i reset the game, usersSet checks to see if the conditions are met to show PokemonList
        // the conditions are not met when Play Again is clicked, since everything is reset
        // usersSet states that if PokemonList is not to be shown, the endGame is shown
        // i need to make changes to my logic in usersSet
        // either find a way to check if game is over differently or change what endgame shows
    // }
}

const mapStateToProps = (state) => {
    return {
        pokemon: state
    }
}

export default connect(mapStateToProps)(IsGameOver)