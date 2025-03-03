import {
    RESET,
    SET_CURRENT_PLAYER,
    SET_DRAW,
    SET_FIELD,
    SET_GAME_ENDED,
} from "../../components/constants/Constans.jsx";

export const reset = () => {
    console.log("Экшен RESET отправляется!");
    return {
        type: RESET
    }
}

export const setPlayer = (player) => {
    return {
        type: SET_CURRENT_PLAYER,
        payload: player
    }
}

export const setDraw = (value) => {
    return {
        type: SET_DRAW,
        payload: value
    }
}

export const setFields = (fields) => {
    return {
        type: SET_FIELD,
        payload: fields
    }
}

export const setIGameEnded = (value) => {
    return {
        type: SET_GAME_ENDED,
        payload: value
    }
}
