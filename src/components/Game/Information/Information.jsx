import React from "react";
import InformationLayout from "./InformationLayout.jsx";
import {store} from "../../../store";

export default function Information() {
    const {currentPlayer, isDraw, isGameEnded} = store.getState();

    let status

    if (isDraw) {
        status = "Ничья"
    } else if (isGameEnded) {
        status = `Игра завершена. Победа: ${currentPlayer}`
    } else {
        status = `Ходит: ${currentPlayer}`
    }

    return (
        <InformationLayout status={status}/>
    )
}


