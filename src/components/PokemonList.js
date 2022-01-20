import React from 'react'
import { connect } from 'react-redux'
import { DamageCalculatorElectric, DamageCalculatorGrass, DamageCalculatorFire, DamageCalculatorWater,
    DamageCalculatorNormal, DamageCalculatorFighting, DamageCalculatorPsychic, DamageCalculatorBug, DamageCalculatorPoison,
    DamageCalculatorRock, DamageCalculatorGround, DamageCalculatorFlying, DamageCalculatorGhost, DamageCalculatorIce,
    DamageCalculatorDragon, DamageCalculatorDark, DamageCalculatorSteel
} from './DamageCalculator'
import { calcFinderMoveOnePokemonOneTypeOne, calcFinderMoveOnePokemonOneTypeTwo } from './ButtonOne'
import { calcFinderMoveTwoPokemonOneTypeOne, calcFinderMoveTwoPokemonOneTypeTwo } from './ButtonTwo'
import { calcFinderMoveOnePokemonTwoTypeOne, calcFinderMoveOnePokemonTwoTypeTwo } from './ButtonThree'
import { calcFinderMoveTwoPokemonTwoTypeOne, calcFinderMoveTwoPokemonTwoTypeTwo } from './ButtonFour'

export const PokemonList = (props) => (
    <div>
        <div id="userOne">
            <p>{props.pokemon.selectionOne}</p>
            <p>{props.pokemon.selectionOneTypeOne}</p>
            <p>{props.pokemon.selectionOneTypeTwo}</p>
            <p>{props.pokemon.selectionOneHealth}</p>
            <button onClick={() => {
                const calcOne = calcFinderMoveOnePokemonOneTypeOne(props)
                const calcTwo = calcFinderMoveOnePokemonOneTypeTwo(props)
                const damageDealt = calcCombiner(calcOne, calcTwo)
                props.setChangedButtonOne(damageDealt)
            }}>{props.pokemon.selectionOneMoveOneName}</button>
            <p>{props.pokemon.selectionOneMoveOneType}</p>
            <button onClick={() => {
                const calcOne = calcFinderMoveTwoPokemonOneTypeOne(props)
                const calcTwo = calcFinderMoveTwoPokemonOneTypeTwo(props)
                const damageDealt = calcCombiner(calcOne, calcTwo)
                props.setChangedButtonTwo(damageDealt)
            }}>{props.pokemon.selectionOneMoveTwoName}</button>
            <p>{props.pokemon.selectionOneMoveTwoType}</p>
        </div>
        <div id="userTwo">
            <p>{props.pokemon.selectionTwo}</p>
            <p>{props.pokemon.selectionTwoTypeOne}</p>
            <p>{props.pokemon.selectionTwoTypeTwo}</p>
            <p>{props.pokemon.selectionTwoHealth}</p>
            <button onClick={() => {
                const calcOne = calcFinderMoveOnePokemonTwoTypeOne(props)
                const calcTwo = calcFinderMoveOnePokemonTwoTypeTwo(props)
                const damageDealt = calcCombiner(calcOne, calcTwo)
                props.setChangedButtonThree(damageDealt)
            }}><p>{props.pokemon.selectionTwoMoveOneName}</p></button>
            <p>{props.pokemon.selectionTwoMoveOneType}</p>
            <button onClick={() => {
                const calcOne = calcFinderMoveTwoPokemonTwoTypeOne(props)
                const calcTwo = calcFinderMoveTwoPokemonTwoTypeTwo(props)
                const damageDealt = calcCombiner(calcOne, calcTwo)
                props.setChangedButtonFour(damageDealt)
            }}><p>{props.pokemon.selectionTwoMoveTwoName}</p></button>
            <p>{props.pokemon.selectionTwoMoveTwoType}</p>
        </div>
    </div>
)

// export const UserOneList = (props) => (
//     <div>
//         <div id="userOne">
//             <p>{props.pokemon.selectionOne}</p>
//             <p>{props.pokemon.selectionOneTypeOne}</p>
//             <p>{props.pokemon.selectionOneTypeTwo}</p>
//             <p>{props.pokemon.selectionOneHealth}</p>
//             <button onClick={() => {
//                 const calcOne = calcFinderMoveOnePokemonOneTypeOne(props)
//                 const calcTwo = calcFinderMoveOnePokemonOneTypeTwo(props)
//                 const damageDealt = calcCombiner(calcOne, calcTwo)
//                 props.setChangedButtonOne(damageDealt)
//             }}>{props.pokemon.selectionOneMoveOneName}</button>
//             <p>{props.pokemon.selectionOneMoveOneType}</p>
//             <button onClick={() => {
//                 const calcOne = calcFinderMoveTwoPokemonOneTypeOne(props)
//                 const calcTwo = calcFinderMoveTwoPokemonOneTypeTwo(props)
//                 const damageDealt = calcCombiner(calcOne, calcTwo)
//                 props.setChangedButtonTwo(damageDealt)
//             }}>{props.pokemon.selectionOneMoveTwoName}</button>
//             <p>{props.pokemon.selectionOneMoveTwoType}</p>
//         </div>
//     </div>
// )

// export const UserTwoList = (props) => (
//     <div>
//         <div id="userTwo">
//             <p>{props.pokemon.selectionTwo}</p>
//             <p>{props.pokemon.selectionTwoTypeOne}</p>
//             <p>{props.pokemon.selectionTwoTypeTwo}</p>
//             <p>{props.pokemon.selectionTwoHealth}</p>
//             <button onClick={() => {
//                 const calcOne = calcFinderMoveOnePokemonTwoTypeOne(props)
//                 const calcTwo = calcFinderMoveOnePokemonTwoTypeTwo(props)
//                 const damageDealt = calcCombiner(calcOne, calcTwo)
//                 props.setChangedButtonThree(damageDealt)
//             }}><p>{props.pokemon.selectionTwoMoveOneName}</p></button>
//             <p>{props.pokemon.selectionTwoMoveOneType}</p>
//             <button onClick={() => {
//                 const calcOne = calcFinderMoveTwoPokemonTwoTypeOne(props)
//                 const calcTwo = calcFinderMoveTwoPokemonTwoTypeTwo(props)
//                 const damageDealt = calcCombiner(calcOne, calcTwo)
//                 props.setChangedButtonFour(damageDealt)
//             }}><p>{props.pokemon.selectionTwoMoveTwoName}</p></button>
//             <p>{props.pokemon.selectionTwoMoveTwoType}</p>
//         </div>
//     </div>
// )

const calcCombiner = (calcOne, calcTwo) => {
    if (calcTwo === undefined) {
        return calcOne
    } else if (calcOne == 0 || calcTwo == 0) {
        return 0
    } else if (calcOne == 2 && calcTwo == 1) {
        return 1
    } else if (calcOne == 1 && calcTwo == 2) {
        return 1
    } else if (calcOne == 4 && calcTwo == 1) {
        return 2
    } else if (calcOne == 1 && calcTwo == 4) {
        return 2
    } else if (calcOne == 2 && calcTwo == 2) {
        return 2
    } else if (calcOne == 1 && calcTwo == 1) {
        return 1
    } else if (calcOne == 2 && calcTwo == 4) {
        return 4
    } else if (calcOne == 4 && calcTwo == 2) {
        return 4
    } else if (calcOne == 4 && calcTwo == 4) {
        return 8
    }
}

export const findCalc = (move, type) => {
    if (move === 'electric') {
        return DamageCalculatorElectric(type)
    } else if (move === 'grass') {
        return DamageCalculatorGrass(type)
    } else if (move === 'fire') {
        return DamageCalculatorFire(type)
    } else if (move === 'water') {
        return DamageCalculatorWater(type)
    } else if (move === 'normal') {
        return DamageCalculatorNormal(type)
    } else if (move === 'fighting') {
        return DamageCalculatorFighting(type)
    } else if (move === 'psychic') {
        return DamageCalculatorPsychic(type)
    } else if (move === 'bug') {
        return DamageCalculatorBug(type)
    } else if (move === 'poison') {
        return DamageCalculatorPoison(type)
    } else if (move === 'rock') {
        return DamageCalculatorRock(type)
    } else if (move === 'ground') {
        return DamageCalculatorGround(type)
    } else if (move === 'flying') {
        return DamageCalculatorFlying(type)
    } else if (move === 'ice') {
        return DamageCalculatorIce(type)
    } else if (move === 'ghost') {
        return DamageCalculatorGhost(type)
    } else if (move === 'dragon') {
        return DamageCalculatorDragon(type)
    } else if (move === 'dark') {
        return DamageCalculatorDark(type)
    } else if (move === 'steel') {
        return DamageCalculatorSteel(type)
    }
}

export default PokemonList