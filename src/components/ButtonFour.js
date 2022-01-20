import { DamageCalculatorElectric, DamageCalculatorGrass, DamageCalculatorFire, DamageCalculatorWater,
    DamageCalculatorNormal, DamageCalculatorFighting, DamageCalculatorPsychic, DamageCalculatorBug, DamageCalculatorPoison,
    DamageCalculatorRock, DamageCalculatorGround, DamageCalculatorFlying, DamageCalculatorGhost, DamageCalculatorIce,
    DamageCalculatorDragon, DamageCalculatorDark, DamageCalculatorSteel
} from './DamageCalculator'
import { findCalc } from './PokemonList'

export const calcFinderMoveTwoPokemonTwoTypeOne = (props) => {
    const move = props.pokemon.selectionTwoMoveTwoType
    const type = props.pokemon.selectionOneTypeOne

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

export const calcFinderMoveTwoPokemonTwoTypeTwo = (props) => {
    const move = props.pokemon.selectionTwoMoveTwoType
    let type = props.pokemon.selectionOneTypeTwo

    if (type === undefined) {
        
    } else {
        const damage = findCalc(move, type)
        return damage
    }
}