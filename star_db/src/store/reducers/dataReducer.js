import {STOP_LOADING, START_LOADING, GET_ALL_DATA, GET_ITEM_DATA} from "../actionTypes";

const initialState = {
    data: [],
    loading: false,
    item: null
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return {...state, loading: true}
        case STOP_LOADING:
            return {...state, loading: false}
        case GET_ALL_DATA:
            return {...state, data: action.payload}
        case GET_ITEM_DATA:
            return {...state, item: action.payload}
        default: return state
    }
}