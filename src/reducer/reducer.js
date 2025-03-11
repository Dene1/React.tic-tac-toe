import {initialState} from "./initialState.js";
import {
    RESET,
    SET_CURRENT_PLAYER,
    SET_DRAW,
    SET_FIELD,
    SET_GAME_ENDED
} from "../components/constants/Constans.jsx"


export const appReducer = (state = initialState, action) => {
    console.log("Reducer получил action:", action);
    const {type, payload} = action;

    switch (type) {
        case SET_CURRENT_PLAYER:
            return {...state, currentPlayer: payload}
        case SET_FIELD:
            return {...state, field: payload}
        case RESET:
            return initialState
        case SET_GAME_ENDED:
            return {...state, isGameEnded: payload}
        case SET_DRAW:
            return {...state, isDraw: payload}
        default:
            return state
    }
}
