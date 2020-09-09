import {combineReducers} from "redux"
import {dataReducer} from "./reducers/dataReducer"
import {planetReducer} from "./reducers/planetReducer";

export const rootReducer = combineReducers({
    dataReducer,
    planetReducer
})