import {GET_RANDOM_PLANET} from "../actionTypes";

const initialState = {
    randomPlanet: null
}

export function planetReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RANDOM_PLANET:
            return {...state, randomPlanet: action.payload}
        default: return state
    }
}