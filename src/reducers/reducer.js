import React from 'react'

const defaultState = {
    selectionOne: undefined,
    selectionOneTypeOne: undefined,
    selectionOneTypeTwo: undefined,
    selectionOneMoveOneName: undefined,
    selectionOneMoveOneType: undefined,
    selectionOneMoveTwoName: undefined,
    selectionOneMoveTwoType: undefined,
    selectionOneHealth: undefined,
    selectionTwo: undefined,
    selectionTwoTypeOne: undefined,
    selectionTwoTypeTwo: undefined,
    selectionTwoMoveOneName: undefined,
    selectionTwoMoveOneType: undefined,
    selectionTwoMoveTwoName: undefined,
    selectionTwoMoveTwoType: undefined,
    userOneSelected: false,
    userTwoSelected: false,
    selectionTwoHealth: undefined
}

// once reducer is done, i can start connecting it everywhere and dispatching actions
// how to dispatch actions through props
// when selection input is changed, store is updated with new pokemon data
// render to screen

const pokemonState = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_SELECTION_ONE':
            return {
                selectionOne: action.text
        }
        case 'SET_SELECTION_ONE_TYPE_ONE':
            return {
                selectionOneTypeOne: action.text
            }
        case 'SET_SELECTION_ONE_TYPE_TWO':
            return {
                selectionOneTypeTwo: action.text
            }
        case 'SET_SELECTION_ONE_MOVE_ONE_NAME':
            return {
                selectionOneMoveOneName: action.text
            }
        case 'SET_SELECTION_ONE_MOVE_ONE_TYPE':
            return {
                selectionOneMoveOneType: action.text
            }
        case 'SET_SELECTION_ONE_MOVE_TWO_NAME':
            return {
                selectionOneMoveTwoName: action.text
            }
        case 'SET_SELECTION_ONE_MOVE_TWO_TYPE':
            return {
                selectionOneMoveTwoType: action.text
            }
        case 'SET_SELECTION_ONE_HEALTH':
            return {
                selectionOneHealth: action.text
            }
        case 'SET_SELECTION_TWO':
            return {
                selectionTwo: action.text
            }
        case 'SET_SELECTION_TWO_TYPE_ONE':
            return {
                selectionTwoTypeOne: action.text
            }
        case 'SET_SELECTION_TWO_TYPE_TWO':
            return {
                selectionTwoTypeTwo: action.text
            }
        case 'SET_SELECTION_TWO_MOVE_ONE_NAME':
            return {
                selectionTwoMoveOneName: action.text
            }
        case 'SET_SELECTION_TWO_MOVE_ONE_TYPE':
            return {
                selectionTwoMoveOneType: action.text
            }
        case 'SET_SELECTION_TWO_MOVE_TWO_NAME':
            return {
                selectionTwoMoveTwoName: action.text
            }
        case 'SET_SELECTION_TWO_MOVE_TWO_TYPE':
            return {
                selectionTwoMoveTwoType: action.text
            }
        case 'SET_USER_ONE_SELECTED':
            return {
                userOneSelected: action.text
            }
        case 'SET_USER_TWO_SELECTED':
            return {
                userTwoSelected: action.text
            }
        case 'SET_SELECTION_TWO_HEALTH':
            return {
                selectionTwoHealth: action.text
            }
        default:
            return state
    }
}

export default pokemonState