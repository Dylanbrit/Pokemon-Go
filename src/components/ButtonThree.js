import { DamageCalculatorElectric, DamageCalculatorGrass, DamageCalculatorFire, DamageCalculatorWater,
    DamageCalculatorNormal, DamageCalculatorFighting, DamageCalculatorPsychic, DamageCalculatorBug, DamageCalculatorPoison,
    DamageCalculatorRock, DamageCalculatorGround, DamageCalculatorFlying, DamageCalculatorGhost, DamageCalculatorIce,
    DamageCalculatorDragon, DamageCalculatorDark, DamageCalculatorSteel
} from './DamageCalculator'
import { findCalc } from './PokemonList'

export const calcFinderMoveOnePokemonTwoTypeOne = (props) => {
    const move = props.pokemon.selectionTwoMoveOneType

    if (move === 'electric') {
        return DamageCalculatorElectric(props.pokemon.selectionOneTypeOne)
    } else if (move === 'grass') {
        return DamageCalculatorGrass(props.pokemon.selectionOneTypeOne)
    } else if (move === 'fire') {
        return DamageCalculatorFire(props.pokemon.selectionOneTypeOne)
    } else if (move === 'water') {
        return DamageCalculatorWater(props.pokemon.selectionOneTypeOne)
    } else if (move === 'normal') {
        return DamageCalculatorNormal(props.pokemon.selectionOneTypeOne)
    } else if (move === 'fighting') {
        return DamageCalculatorFighting(props.pokemon.selectionOneTypeOne)
    } else if (move === 'psychic') {
        return DamageCalculatorPsychic(props.pokemon.selectionOneTypeOne)
    } else if (move === 'bug') {
        return DamageCalculatorBug(props.pokemon.selectionOneTypeOne)
    } else if (move === 'poison') {
        return DamageCalculatorPoison(props.pokemon.selectionOneTypeOne)
    } else if (move === 'rock') {
        return DamageCalculatorRock(props.pokemon.selectionOneTypeOne)
    } else if (move === 'ground') {
        return DamageCalculatorGround(props.pokemon.selectionOneTypeOne)
    } else if (move === 'flying') {
        return DamageCalculatorFlying(props.pokemon.selectionOneTypeOne)
    } else if (move === 'ice') {
        return DamageCalculatorIce(props.pokemon.selectionOneTypeOne)
    } else if (move === 'ghost') {
        return DamageCalculatorGhost(props.pokemon.selectionOneTypeOne)
    } else if (move === 'dragon') {
        return DamageCalculatorDragon(props.pokemon.selectionOneTypeOne)
    } else if (move === 'dark') {
        return DamageCalculatorDark(props.pokemon.selectionOneTypeOne)
    } else if (move === 'steel') {
        return DamageCalculatorSteel(props.pokemon.selectionOneTypeOne)
    }
}

export const calcFinderMoveOnePokemonTwoTypeTwo = (props) => {
    const move = props.pokemon.selectionTwoMoveOneType
    let type = props.pokemon.selectionOneTypeTwo

    if (type === undefined) {
        
    } else {
        const damage = findCalc(move, type)
        return damage
    }
}