export const SET_CURRENT_PLAYER = "SET_CURRENT_PLAYER";
export const SET_FIELD = "SET_FIELD";
export const SET_GAME_ENDED = "SET_GAME_ENDED";
export const SET_DRAW = "SET_DRAW";
export const RESET = "RESET";

const makeAction = (type) => (payload) => ({
    type,
    payload,
});

export const setCurrentPlaye = makeAction(SET_CURRENT_PLAYER);
export const setFields = makeAction(SET_FIELD);
export const setIGameEnded = makeAction(SET_GAME_ENDED);
export const setDraw = makeAction(SET_DRAW);
export const reset = makeAction(RESET);
