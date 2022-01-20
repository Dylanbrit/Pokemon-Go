import { createStore } from "redux"
import pokemonState from "../reducers/reducer"

export default () => {
    const store = createStore(pokemonState)

    return store
}