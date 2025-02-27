import {initialState} from "./initialState.js";
import {
    RESET,
    SET_CURRENT_PLAYER,
    SET_DRAW,
    SET_FIELD,
    SET_GAME_ENDED
} from "../utils/actions/actions.js";

const appReducer = (state, {type, payload}) => {

    switch (type) {
        case SET_CURRENT_PLAYER:
            return {...state, currentPlayer: payload}
        case SET_FIELD:
            return {...state, field: payload}
        case RESET:
            return {...initialState}
        case SET_GAME_ENDED:
            return {...state, isGameEnded: payload}
        case SET_DRAW:
            return {...state, isDraw: payload}
        default:
            return state
    }
}

export const reducer = (state = initialState, action) => {
    return appReducer(state, action);
}
