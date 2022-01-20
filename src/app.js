import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Header from './components/Header'
import { SelectionArea } from './components/SelectionArea'
import { createStore } from 'redux'
import configureStore from './store/configureStore'
import pokemonState from './reducers/reducer'
import { setSelectionOne, setSelectionOneTypeOne, setSelectionOneTypeTwo, setSelectionOneMoveOneName, setSelectionOneMoveOneType,
    setSelectionOneMoveTwoName, setSelectionOneMoveTwoType, setSelectionOneHealth, setUserOneSelected, setUserTwoSelected, setSelectionTwoHealth,
    setSelectionTwoTypeOne, setSelectionTwoTypeTwo, setSelectionTwoMoveOneName, setSelectionTwoMoveOneType, setSelectionTwoMoveTwoName,
    setSelectionTwoMoveTwoType, setSelectionTwo, selectionTwoHealth, selectionOneHealth
} from './actions/actions'
import SetLineup from './components/SetLineup'

const App = () => (
    <div>
        <Header />
        <SetLineup />
    </div>
)

const store = configureStore()

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

const app = document.querySelector('#app')
ReactDOM.render(jsx, app)

// install redux, set createStore to a store variable, use the getState method on store
// createStore gets a function passed in and the function takes an argument- state, which can be set to our default state value
// it takes action as its second argument- this is how it reads our state-altering actions
// an action is an object that gets sent to the store- it describes the action we want to take
// to change the store, do not change state directly- instead we use the values to compute the new state and return it
// Provider allows us to provide the store to all the components that make up the application
// store prop is passed into provider, and the store we want to connect to everything is passed in here
// With Provider we can take advantage of the connect function provided by react-redux