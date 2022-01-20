import React from "react";
import { connect } from 'react-redux'
import Individual from "./Individual";

const Poop = (props) => {
    // console.log(props.pokemon)
    logger(props)
    return <p>poop</p>
}

const logger = (props) => {
    if (props.pokemon.selectionOne === undefined) {
        console.log('undefined')
    } else {
        console.log(props.pokemon.selectionOne)
    }
}

// i think the issue im having is that the state is not updating for the components that are reading off the state through connect
// even once i make a selection, the results show as if they are undefined and nothing has been selected

const mapStateToProps = (state) => {
    return {
        pokemon: state
    }
}

export default connect(mapStateToProps)(Poop)